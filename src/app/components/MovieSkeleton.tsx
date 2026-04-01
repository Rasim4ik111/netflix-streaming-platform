export const MovieSkeleton = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="animate-pulse w-60 h-105 m-5">
          <div className="bg-gray-600 rounded w-full h-95" />
          <div className="bg-gray-600 rounded w-3/4 h-4 mt-2" />
          <div className="bg-gray-600 rounded w-1/2 h-3 mt-1" />
        </div>
      ))}
    </div>
  );
};
