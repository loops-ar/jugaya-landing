# Jugaya Landing

Landing page for Jugaya - La mejor app para gestionar tus canchas.

## Prerequisites

- Node.js 22.x or higher
- npm (comes with Node.js)

## Development

### Setup

```bash
# Use Node 22 (if using nvm)
nvm use 22

# Install dependencies
npm ci

# Start development server
npm run dev
```

The development server will be available at http://localhost:5173

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run linter
npm run lint
```

## Deployment

This project is deployed using Firebase Hosting with the following setup:

### Automatic Deployments

- **Pull Requests**: Each PR automatically gets a preview deployment on Firebase Hosting
- **Production**: Merging to `main` branch automatically deploys to the live site

### Manual Deployment

To deploy manually (requires Firebase CLI and proper permissions):

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to live
firebase deploy --only hosting
```

### Rollback

To rollback to a previous version:

1. Go to the Firebase Hosting console
2. Select the previous version and promote it to live
3. Or revert the merge commit and redeploy

## Required GitHub Secrets

For automatic deployments to work, the following secrets must be configured in GitHub:

- `FIREBASE_SERVICE_ACCOUNT`: JSON for a Service Account with Firebase Hosting Admin permissions
- `FIREBASE_PROJECT_ID`: Firebase project ID

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Stitches CSS-in-JS
- **Routing**: React Router DOM
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions