# Greyhound Winners

A modern React landing page for Greyhound Winners - a virtual greyhound racing game for betting operators.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Hosting**: Netlify
- **Forms**: Netlify Forms + Serverless Functions
- **Analytics**: Google Analytics 4 with Consent Mode

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd greyhound_winners

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Available Scripts

| Command                 | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Start development server with hot reload             |
| `npm run build`         | Build for production (TypeScript check + Vite build) |
| `npm run preview`       | Preview production build locally                     |
| `npm run test`          | Run tests in watch mode                              |
| `npm run test:run`      | Run tests once                                       |
| `npm run test:coverage` | Run tests with coverage report                       |

---

## Netlify Forms Integration

The contact form uses Netlify Forms for submission handling, with a serverless function for email notifications.

### How It Works

#### 1. HTML Form Detection

Netlify automatically detects forms during build. A hidden form in `index.html` registers the form name:

```html
<!-- index.html -->
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="first-name" />
  <input type="text" name="last-name" />
  <input type="email" name="email" />
  <!-- ... other fields ... -->
</form>
```

#### 2. React Form Component

The `FormNetlify.tsx` component handles the actual form submission:

```tsx
// Key attributes for Netlify Forms
<form
  name="contact"
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

#### 3. Form Submission Flow

1. User fills out the form
2. JavaScript intercepts submission and sends as URL-encoded data
3. Netlify captures the submission
4. Serverless function (`netlify/functions/form-submission.ts`) sends email notifications
5. User is redirected to `/form-success`

#### 4. Serverless Email Function

Located at `netlify/functions/form-submission.ts`, this function:

- Receives form data from Netlify
- Sends notification email to the team
- Sends confirmation email to the user

**Required Environment Variables** (set in Netlify dashboard):

| Variable          | Description                             |
| ----------------- | --------------------------------------- |
| `SMTP_HOST`       | SMTP server (default: `smtp.gmail.com`) |
| `SMTP_PORT`       | SMTP port (default: `587`)              |
| `SMTP_USER`       | SMTP username/email                     |
| `SMTP_PASSWORD`   | SMTP password or app password           |
| `RECIPIENT_EMAIL` | Email to receive form notifications     |

### Testing Forms Locally

Forms won't work fully locally since Netlify's form handling requires their infrastructure. To test:

1. Deploy to Netlify (even a preview deploy)
2. Or use `netlify dev` CLI for local Netlify emulation:

```bash
npm install -g netlify-cli
netlify dev
```

---

## Google Analytics Consent Management

The site implements GDPR-compliant cookie consent using Google Consent Mode v2.

### How It Works

#### 1. Default Consent (Denied)

In `index.html`, consent defaults to denied before any tracking loads:

```javascript
// Set default consent to denied
gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  wait_for_update: 500,
});

// Check if user has already consented (returning visitors)
if (localStorage.getItem("cookie-consent") === "accepted") {
  gtag("consent", "update", {
    analytics_storage: "granted",
  });
}
```

#### 2. Cookie Consent Banner

The `CookieConsent.tsx` component displays a banner at the bottom of the page:

- **Accept**: Grants consent, enables GA tracking, saves preference
- **Decline**: Denies consent, GA remains blocked, saves preference

#### 3. Consent Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    User Visits Site                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Check localStorage for 'cookie-consent'                     │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
         No Value         'accepted'      'declined'
              │               │               │
              ▼               ▼               ▼
        Show Banner     GA Enabled      GA Blocked
              │          (no banner)     (no banner)
              │
    ┌─────────┴─────────┐
    ▼                   ▼
  Accept             Decline
    │                   │
    ▼                   ▼
localStorage =      localStorage =
'accepted'          'declined'
    │                   │
    ▼                   ▼
gtag('consent',     GA remains
'update', {         blocked
  analytics_storage:
  'granted'
})
```

#### 4. What Gets Tracked

| User Choice   | Page Views | Sessions   | Behavior   | Form Submissions |
| ------------- | ---------- | ---------- | ---------- | ---------------- |
| **Accept**    | ✅ Tracked | ✅ Tracked | ✅ Tracked | ✅ Works         |
| **Decline**   | ❌ Blocked | ❌ Blocked | ❌ Blocked | ✅ Works         |
| **No Choice** | ❌ Blocked | ❌ Blocked | ❌ Blocked | ✅ Works         |

**Note**: Form submissions always work regardless of cookie consent. Only analytics tracking is affected.

#### 5. Resetting Consent (for testing)

To see the banner again, clear the localStorage value:

```javascript
// In browser console
localStorage.removeItem("cookie-consent");
location.reload();
```

### Google Analytics Configuration

- **Property ID**: `G-GYNFM2MD66`
- **Consent Mode**: v2 enabled
- **Default State**: Denied until user accepts

---

## Testing

The project uses **Vitest** with **React Testing Library** for unit testing.

### Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with interactive UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test UI

For a beautiful interactive dashboard, run:

```bash
npm run test:ui
```

This launches an interactive browser-based dashboard that allows you to:

- Browse tests organized by category
- Expand and collapse test groups
- Monitor test duration and pass/fail status
- Re-run specific tests on demand
- Inspect detailed error messages with visual diffs

### Cookie Consent Tests

The `CookieConsent` component has comprehensive tests covering:

| Test Category       | What's Tested                                                |
| ------------------- | ------------------------------------------------------------ |
| **Initial Display** | Banner shows when no consent, hides when consent exists      |
| **Accept Button**   | Hides banner, saves to localStorage, calls gtag with granted |
| **Decline Button**  | Hides banner, saves to localStorage, does NOT call gtag      |
| **Persistence**     | Consent remembered across page reloads                       |
| **Accessibility**   | Proper button labels and heading structure                   |
| **Edge Cases**      | Missing gtag, invalid localStorage values                    |
| **GA Integration**  | Correct consent parameters sent to Google                    |

### Test Files

```
src/
├── test/
│   └── setup.ts              # Test setup with mocks
└── components/
    └── CookieConsent.test.tsx # Cookie consent tests
```

---

## Project Structure

```
greyhound_winners/
├── index.html              # Main HTML with GA consent setup
├── src/
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # React entry point
│   ├── style.css           # Global styles + Tailwind
│   ├── components/
│   │   ├── CookieConsent.tsx   # Cookie consent banner
│   │   ├── FormNetlify.tsx     # Contact form
│   │   ├── FormSuccess.tsx     # Form success page
│   │   ├── Home.tsx            # Home page
│   │   ├── NavBar.tsx          # Navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── ...                 # Other components
│   └── Assets/
│       ├── Images/
│       ├── Fonts/
│       └── Videos/
├── netlify/
│   └── functions/
│       └── form-submission.ts  # Email notification function
├── public/
│   └── _redirects              # Netlify SPA routing
└── dist/                       # Production build output
```

---

## Deployment

### Netlify Deployment

1. Connect repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Set environment variables for email function
4. Deploy!

### Environment Variables

Set these in Netlify dashboard under **Site settings > Environment variables**:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=notifications@yourcompany.com
```

---

## License

© 2025 Betting Ltd. All rights reserved.
