export const dynamic = "force-dynamic";

import { MovieCard, type Movie } from "./MovieCard";

export default async function MoviesGrid() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/movies`, {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <div className="flex flex-wrap justify-center">
      {data.movies.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
