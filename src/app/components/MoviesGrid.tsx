import { MovieCard, type Movie } from "./MovieCard";

export const dynamic = "force-dynamic";

export default async function MoviesGrid() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!data.results) {
    return <p>Failed to load movies</p>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data.results.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
