export const runtime = "edge";

export async function GET() {
  let interval: ReturnType<typeof setInterval>;

  const stream = new ReadableStream({
    start(controller) {
      interval = setInterval(() => {
        const data = `data: ${JSON.stringify({ viewers: Math.floor(Math.random() * 10000) })}\n\n`;
        controller.enqueue(new TextEncoder().encode(data));
      }, 1000);
    },
    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
