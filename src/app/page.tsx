import { Suspense } from "react";
import { MovieCard } from "./components/MovieCard";
import { MovieSkeleton } from "./components/MovieSkeleton";
import { LiveFeed } from "./components/LiveFeed";
export default function Home() {
  return (
    <div className="flex flex-wrap mt-10 justify-center">
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
      <MovieSkeleton />
    </div>
  );
}
