import Image from "next/image";

export interface Movie {
  id: number;
  title: string;
  poster_path: string; // например "/abc123.jpg"
  vote_average: number;
  release_date: string; // "2023-05-12"
}

export const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 m-3">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Poster Image"
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <p>{title}</p>
      <p>{vote_average}</p>
      <p>{release_date}</p>
    </div>
  );
};
