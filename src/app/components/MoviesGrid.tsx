import { headers } from "next/headers";
import { MovieCard, type Movie } from "./MovieCard";

export const dynamic = "force-dynamic";

export default async function MoviesGrid() {
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/movies`, {
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
