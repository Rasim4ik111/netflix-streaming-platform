import { Suspense } from "react";
import MoviesGrid from "./components/MoviesGrid";
import { Header } from "./layout/Header";
import { MovieSkeleton } from "./components/MovieSkeleton";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex justify-center mt-10">
        <Suspense fallback={<MovieSkeleton />}>
          <MoviesGrid />
        </Suspense>
      </main>
    </div>
  );
}
