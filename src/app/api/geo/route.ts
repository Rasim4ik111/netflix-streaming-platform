export const runtime = "edge";

export async function GET(request: Request) {
  const country = request.headers.get("x-vercel-ip-country") ?? "AZ";
  const city = request.headers.get("x-vercel-ip-city") ?? "Baku";
  const region = request.headers.get("x-vercel-ip-region") ?? "BA";
  let nearestServer;

  if (country === "US" || country === "CA") {
    nearestServer = "Americas";
  } else if (country === "AZ" || country === "TR") {
    nearestServer = "Europe";
  } else {
    nearestServer = "Asia";
  }

  return Response.json(
    {
      country,
      city,
      region,
      nearestServer,
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
