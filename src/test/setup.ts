import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
            store[key] = value;
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key];
        }),
        clear: vi.fn(() => {
            store = {};
        }),
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

// Mock window.gtag
Object.defineProperty(window, 'gtag', {
    value: vi.fn(),
    writable: true,
});

Object.defineProperty(window, 'dataLayer', {
    value: [],
    writable: true,
});

// Reset mocks before each test
beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
});

