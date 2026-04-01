# Welcome to 03 Edge Computing Streaming

---

## Task

Building a Netflix-style streaming platform that demonstrates edge computing,
real-time communication, and progressive loading patterns used in large-scale
video streaming applications.

## Description

This project implements:

- **Edge Functions** with geolocation-aware content delivery
- **React Suspense** for progressive loading with skeleton components
- **Server-Sent Events (SSE)** for real-time viewer count updates
- **TMDB API** integration for real movie data
- **Next.js App Router** with Server and Client Components

## Installation

```bash
git clone https://git.us.qwasar.io/03-edge-computing-streaming_208896_g5w7s-/03-edge-computing-streaming.git

cd netflix-streaming-platform

npm install
```

Create `.env.local` file:

```
TMDB_API_KEY=your_tmdb_api_key
```

Then run:

```bash
npm run dev
```

## Usage

Open [http://localhost:3000](http://localhost:3000)

- Browse popular movies fetched from TMDB
- See your geolocation and nearest server
- Watch real-time viewer count update every second

### The Core Team

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
