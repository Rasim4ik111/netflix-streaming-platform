"use client";

import { useEffect, useState } from "react";

export const LiveFeed = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource("/api/stream");

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setViewers(data.viewers);
      } catch (e) {
        console.error("Invalid SSE data", e);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return <p>{viewers}</p>;
};
