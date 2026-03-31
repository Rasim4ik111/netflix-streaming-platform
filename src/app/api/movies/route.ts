export async function GET() {
  const apiKey = process.env.TMDB_API_KEY;

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return Response.json({
    movies: data.results,
    totalPages: data.total_pages,
    totalResults: data.total_results,
  });
}
