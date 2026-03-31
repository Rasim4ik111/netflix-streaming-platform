export const MovieSkeleton = () => {
  return (
    <div className="animate-pulse w-45 h-60 m-10">
      <div className="bg-gray-600 rounded w-full h-64" /> {/* постер */}
      <div className="bg-gray-600 rounded w-3/4 h-4 mt-2" /> {/* название */}
      <div className="bg-gray-600 rounded w-1/2 h-3 mt-1" /> {/* рейтинг */}
    </div>
  );
};
