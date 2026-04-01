"use client";

import { useEffect, useState } from "react";

export const LiveFeed = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource("/api/stream");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setViewers(data.viewers);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return <p>{viewers}</p>;
};
