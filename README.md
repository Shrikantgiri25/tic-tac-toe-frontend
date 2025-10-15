# Tic-Tac-Toe Frontend

A modern, real-time multiplayer Tic-Tac-Toe game built with React, Vite, and WebSockets. This frontend application connects to a Django backend for authentication, matchmaking, and game management.

## Features

- **Real-time Multiplayer**: Play against other players with live WebSocket connections
- **User Authentication**: Register and login with JWT-based authentication
- **Matchmaking System**: Automatically find opponents for games
- **Rating System**: Earn and track rating points based on wins/losses
- **Leaderboard**: View top players and rankings
- **Responsive Design**: Works on desktop and mobile devices
- **Toast Notifications**: Real-time feedback for game events

## Tech Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: CSS with Sass support
- **Routing**: React Router DOM
- **State Management**: React Context for authentication
- **HTTP Client**: Axios with interceptors for JWT handling
- **WebSockets**: Native WebSocket API for real-time communication
- **UI Components**: Ant Design for enhanced UX
- **Form Handling**: Formik with Yup validation
- **Notifications**: React Toastify

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Django backend server running (see backend repository)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tic_tac_toe_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`:
   ```
   VITE_API_BASE_URL=https://your-backend-url/api/v1
   VITE_API_WS_URL=wss://your-backend-url
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── api/           # API calls and WebSocket connections
├── components/    # Reusable UI components
├── contexts/      # React contexts (Auth)
├── pages/         # Page components
├── services/      # Business logic services
└── assets/        # Static assets
```

## Key Components

- **App.jsx**: Main application with routing
- **Game.jsx**: Real-time game interface with WebSocket integration
- **Home.jsx**: Dashboard with stats and matchmaking
- **Board.jsx**: Tic-tac-toe game board component
- **AuthContext**: Authentication state management

## API Integration

The frontend communicates with a Django REST API backend that provides:

- User registration and authentication
- Game creation and matchmaking
- Real-time game state via WebSockets
- Leaderboard and statistics

## WebSocket Events

- `game_state`: Updates game board and status
- `error`: Handles connection or game errors
- `make_move`: Sends player moves to server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is licensed under the MIT License.
