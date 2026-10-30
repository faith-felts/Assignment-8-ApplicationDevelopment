# EventFinder - Starter Code

This is the starter application for **Assignment 9: Making Your App Work on Every Screen**.

## Responsive Features

EventFinder adapts its home, events, and event detail pages to mobile, tablet,
and desktop screens. The Events page uses a single-column card layout on mobile,
two columns on tablet and desktop, and places the filter sidebar beside the grid
on desktop. Event cards include responsive images and touch-friendly detail
links. The Ticketmaster API is configured to show music events in New York.

## Setup Instructions


1. Fork and clone down the repository to your own machine. Don't forgot to install dependencies
```bash
git clone REPO_NAME
cd REPO_NAME
npm install
```
2. Start the development server and explore the starter code.
```bash
npm run dev
```
3. Open the app in your browser and resize the window to see the problems! You'll notice that you need an API key before you can start.
4. Get your Ticketmaster API key by doing the following
    - Go to https://developer.ticketmaster.com/
    - Click "Get Your API Key" or "Register"
    - Create an account
    - Click "Add a new app"
    - Remove "OAuth product" from the Product field
    - Click "Create application"
    - Copy your **Consumer Key** - this is your API key!

5. Create a `.env` file in the root of your project:
```bash
VITE_TICKETMASTER_API_KEY=your_actual_api_key_here
```

**Important:** Never commit your `.env` file to Git! It's already in `.gitignore`.

5. Run the app to see events!
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Your Assignment

The responsive layouts use mobile-first styles, flexible units, flexbox, and
media queries. Check the Events page at 375px, 768px, and 1024px in your
browser's responsive design mode.

The app should look great on:
- Mobile phones (320px - 480px)
- Tablets (481px - 768px)
- Desktops (769px and up)