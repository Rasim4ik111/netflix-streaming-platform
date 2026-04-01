"use client";

import { useEffect, useState } from "react";

type GeoData = {
  city: string;
  country: string;
  region: string;
  nearestServer: string;
};
ы;

const GeoInfo = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);

  useEffect(() => {
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  if (!geoData) return <p>Loading...</p>;

  return (
    <div className="flex justify-around bg-gray-700 border border-gray-500 rounded-2xl p-2 mt-5 m-2">
      <p>City: {geoData.city}</p>
      <p>Country: {geoData.country}</p>
      <p>Region: {geoData.region}</p>
      <p>Server: {geoData.nearestServer}</p>
    </div>
  );
};

export default GeoInfo;
