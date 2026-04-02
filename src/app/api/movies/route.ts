export async function GET() {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    // ✅ проверка ключа
    if (!apiKey) {
      return Response.json(
        { error: "TMDB_API_KEY is missing" },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store", // чтобы не было странного кеша
      },
    );

    // ✅ обработка ошибки без throw
    if (!response.ok) {
      const text = await response.text();

      return Response.json(
        {
          error: "TMDB request failed",
          status: response.status,
          details: text,
        },
        { status: 500 },
      );
    }

    const data = await response.json();

    return Response.json({
      movies: data.results || [],
      totalPages: data.total_pages || 0,
      totalResults: data.total_results || 0,
    });
  } catch (error) {
    console.error("API /movies error:", error);

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
