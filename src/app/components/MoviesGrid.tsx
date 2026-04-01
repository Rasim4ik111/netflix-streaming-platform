import { MovieCard, type Movie } from "./MovieCard";

export default async function MoviesGrid() {
  const response = await fetch("http://localhost:3000/api/movies");
  const data = await response.json();

  return (
    <div className="flex flex-wrap justify-center">
      {data.movies.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
