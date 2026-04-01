# Netflix Streaming Platform - Learning Insights

## Edge Computing Architecture

### What I Learned

Edge computing moves code execution closer to the user geographically.
Instead of all requests going to one server in the US, edge functions
run in 100+ locations worldwide — reducing latency dramatically.

### How Netflix Uses It

Netflix uses edge computing to serve content from the nearest possible
location to each user. This is why streaming feels instant regardless
of where you are in the world.

### What I Built

- Edge function that detects user location via request headers
- Geolocation-based server selection (Americas, Europe, Asia)
- Response caching to minimize repeated edge function calls

---

## React Streaming & Suspense

### What I Learned

React Suspense allows components to "wait" for data while showing
a fallback UI. This means users see skeleton loaders instead of
blank screens — dramatically improving perceived performance.

### What I Built

- MovieSkeleton component with animate-pulse loading states
- MoviesGrid as async Server Component that fetches TMDB data
- Suspense boundary in page.tsx wrapping MoviesGrid

---

## Server-Sent Events (SSE)

### What I Learned

SSE is a one-way communication channel from server to client.
Unlike WebSockets (two-way), SSE is simpler and perfect for
live updates like viewer counts, notifications, or live scores.

### What I Built

- Edge function streaming live viewer counts every second
- Client-side EventSource connection with cleanup on unmount
- Real-time state updates using useState and useEffect

---

## Key Takeaways

1. Edge Runtime has limitations — no direct database access
2. Server Components can be async — simplifies data fetching
3. SSE is simpler than WebSockets for one-way real-time data
4. Suspense + Skeleton = much better user experience
5. Vercel makes edge deployment incredibly simple
