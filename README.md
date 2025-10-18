# ChurchTools WordPress Calendar Plugin

A modern WordPress plugin for displaying ChurchTools calendar events with a beautiful, responsive interface built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS with mobile-first approach
- **Date Handling**: date-fns
- **Backend**: WordPress PHP

## Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- WordPress 5.0+
- ChurchTools account with API access

### Setup

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Activate the plugin** in WordPress admin panel:
   - Go to Plugins → Installed Plugins
   - Find "ChurchTools Calendar"
   - Click "Activate"

5. **Configure the plugin**:
   - Go to Settings → ChurchTools Calendar
   - Enter your ChurchTools API base URL (e.g., `https://your-church.church.tools/api`)
   - Click "Save Settings"

## Usage

### Shortcode

Display the calendar on any page or post using the shortcode:

```
[churchtools_calendar id="1"]
```

Replace `"1"` with your ChurchTools calendar ID.

### Multiple Calendars

You can display multiple calendars on the same site by using different calendar IDs:

```
[churchtools_calendar id="1"]
[churchtools_calendar id="2"]
```

## Development

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Project Structure

```
churchtools-wp-calendar/
├── src/
│   ├── components/          # React components
│   │   ├── CalendarGrid.tsx
│   │   ├── EventList.tsx
│   │   ├── EventItem.tsx
│   │   └── MonthNavigation.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useCalendarState.ts
│   │   ├── useEvents.ts
│   │   └── useResponsive.ts
│   ├── services/            # API services
│   │   └── api.service.ts
│   ├── types/               # TypeScript definitions
│   │   ├── api.types.ts
│   │   └── calendar.types.ts
│   ├── utils/               # Utility functions
│   │   └── date.utils.ts
│   ├── styles/              # SCSS styles
│   │   └── calendar.scss
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── admin/
│   └── settings.php         # WordPress admin settings
├── dist/                    # Compiled assets (generated)
├── churchtools-calendar.php # Main plugin file
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Configuration

### API Requirements

The plugin requires:
- ChurchTools instance with API access
- Valid calendar ID
- Accessible `/api/calendars/{calendarId}/appointments` endpoint

### Calendar Grid Features

- **Month Navigation**: Previous/Next month buttons
- **Weekday Headers**: MA, TI, KE, TO, PE, LA, SU (Finnish)
- **Date Selection**: Click any date to view events
- **Event Indicators**: Small dots on dates with events
- **Responsive Layout**: 2-column on desktop, stacked on mobile

### Event Display

Events show:
- Time or "All Day" indicator
- Event title (bold, lime green)
- Expandable details on click
- Description
- Location (if available)
- Event image (if available)

## Customization

### Styling

Edit `src/styles/calendar.scss` to customize:
- Colors (primary accent is `#b4d336`)
- Font families
- Spacing and sizing
- Responsive breakpoints

### Date Format

The plugin uses Finnish locale by default. To change:
1. Edit `src/utils/date.utils.ts`
2. Import different locale from `date-fns/locale`
3. Update format functions

## Troubleshooting

### Calendar not displaying

1. Check that the plugin is activated
2. Verify the API base URL in settings
3. Check browser console for errors
4. Ensure the calendar ID exists in ChurchTools

### API errors

1. Verify ChurchTools URL is correct
2. Check calendar ID is valid
3. Ensure API endpoint is accessible
4. Check for CORS issues