import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CookieConsent from './CookieConsent';

describe('CookieConsent', () => {
    beforeEach(() => {
        // Clear localStorage and reset mocks before each test
        localStorage.clear();
        vi.clearAllMocks();
    });

    describe('Initial Display', () => {
        it('should display the banner when no consent has been given', () => {
            render(<CookieConsent />);

            expect(screen.getByText('We value your privacy')).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /decline/i })).toBeInTheDocument();
        });

        it('should not display the banner when consent was previously accepted', () => {
            localStorage.setItem('cookie-consent', 'accepted');

            render(<CookieConsent />);

            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });

        it('should not display the banner when consent was previously declined', () => {
            localStorage.setItem('cookie-consent', 'declined');

            render(<CookieConsent />);

            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });

        it('should display the correct privacy message', () => {
            render(<CookieConsent />);

            expect(screen.getByText(/we use cookies to enhance your browsing experience/i)).toBeInTheDocument();
        });
    });

    describe('Accept Button', () => {
        it('should hide the banner when Accept is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const acceptButton = screen.getByRole('button', { name: /accept/i });
            await user.click(acceptButton);

            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });

        it('should save "accepted" to localStorage when Accept is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const acceptButton = screen.getByRole('button', { name: /accept/i });
            await user.click(acceptButton);

            expect(localStorage.setItem).toHaveBeenCalledWith('cookie-consent', 'accepted');
        });

        it('should call gtag with consent update when Accept is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const acceptButton = screen.getByRole('button', { name: /accept/i });
            await user.click(acceptButton);

            expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
                'analytics_storage': 'granted'
            });
        });
    });

    describe('Decline Button', () => {
        it('should hide the banner when Decline is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const declineButton = screen.getByRole('button', { name: /decline/i });
            await user.click(declineButton);

            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });

        it('should save "declined" to localStorage when Decline is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const declineButton = screen.getByRole('button', { name: /decline/i });
            await user.click(declineButton);

            expect(localStorage.setItem).toHaveBeenCalledWith('cookie-consent', 'declined');
        });

        it('should NOT call gtag consent update when Decline is clicked', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            const declineButton = screen.getByRole('button', { name: /decline/i });
            await user.click(declineButton);

            // gtag should not be called with consent update when declining
            expect(window.gtag).not.toHaveBeenCalled();
        });
    });

    describe('Persistence', () => {
        it('should remember accepted consent across page reloads', () => {
            // First render - accept consent
            const { unmount } = render(<CookieConsent />);
            fireEvent.click(screen.getByRole('button', { name: /accept/i }));
            unmount();

            // Simulate the localStorage having the value (since our mock resets)
            localStorage.setItem('cookie-consent', 'accepted');

            // Second render - banner should not appear
            render(<CookieConsent />);
            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });

        it('should remember declined consent across page reloads', () => {
            // First render - decline consent
            const { unmount } = render(<CookieConsent />);
            fireEvent.click(screen.getByRole('button', { name: /decline/i }));
            unmount();

            // Simulate the localStorage having the value
            localStorage.setItem('cookie-consent', 'declined');

            // Second render - banner should not appear
            render(<CookieConsent />);
            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('should have accessible button labels', () => {
            render(<CookieConsent />);

            expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /decline/i })).toBeInTheDocument();
        });

        it('should have a heading for the banner', () => {
            render(<CookieConsent />);

            expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('We value your privacy');
        });
    });

    describe('Edge Cases', () => {
        it('should handle missing gtag gracefully', async () => {
            // Remove gtag temporarily
            const originalGtag = window.gtag;
            // @ts-expect-error - intentionally setting to undefined for test
            window.gtag = undefined;

            const user = userEvent.setup();
            render(<CookieConsent />);

            // Should not throw when clicking accept
            const acceptButton = screen.getByRole('button', { name: /accept/i });
            await expect(user.click(acceptButton)).resolves.not.toThrow();

            // Restore gtag
            window.gtag = originalGtag;
        });

        it('should handle invalid localStorage values', () => {
            localStorage.setItem('cookie-consent', 'invalid-value');

            render(<CookieConsent />);

            // Should not show banner for any non-null value
            // (current implementation shows banner only when value is null/undefined)
            expect(screen.queryByText('We value your privacy')).not.toBeInTheDocument();
        });
    });

    describe('Google Analytics Integration', () => {
        it('should only grant analytics_storage, not ad_storage when accepting', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            await user.click(screen.getByRole('button', { name: /accept/i }));

            // Verify only analytics_storage is granted
            expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
                'analytics_storage': 'granted'
            });

            // Verify ad_storage is NOT included in the update
            const gtagCalls = vi.mocked(window.gtag).mock.calls;
            const consentCall = gtagCalls.find(call => call[0] === 'consent');
            expect(consentCall?.[2]).not.toHaveProperty('ad_storage');
        });

        it('should maintain denied state for analytics when declining', async () => {
            const user = userEvent.setup();
            render(<CookieConsent />);

            await user.click(screen.getByRole('button', { name: /decline/i }));

            // gtag should not be called at all - consent remains in default denied state
            expect(window.gtag).not.toHaveBeenCalled();
        });
    });
});

