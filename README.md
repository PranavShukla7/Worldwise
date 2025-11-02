# WorldWise

WorldWise is a modern React-based travel tracking application that helps users keep track of their adventures around the world. Log visited cities, view them on an interactive map, and manage your travel memories with ease.

## Features

- **Interactive Map**: Visualize your visited cities using Leaflet-powered maps.
- **City and Country Lists**: Browse through your traveled cities and countries.
- **Add New Adventures**: Use the form to log new cities with details like date, notes, and location.
- **User Authentication**: Secure login system to protect your travel data.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Lazy Loading**: Efficient loading of pages for better performance.
- **Mock API**: Uses JSON Server for simulating backend data during development.

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Maps**: Leaflet, React Leaflet
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Mock Backend**: JSON Server
- **Development Tools**: ESLint, Vite Plugin ESLint

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd worldwise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the JSON Server for mock data:

   ```bash
   npm run server
   ```

4. In a new terminal, start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Homepage**: Introduction to the app.
- **Product**: Learn more about WorldWise features.
- **Pricing**: View pricing plans.
- **Login**: Authenticate to access the app.
- **App Layout** (Protected Route):
  - **Cities**: View and manage your visited cities.
  - **Countries**: See a list of countries you've visited.
  - **Form**: Add a new city to your travel log.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run server`: Start the JSON Server for mock data on port 9000.

## Project Structure

```
worldwise/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── contexts/    # React contexts for state management
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   └── ...
├── data/            # Mock data (cities.json)
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
