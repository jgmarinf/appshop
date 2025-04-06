"use client";

export const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-10">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="max-w-sm rounded-lg shadow-lg bg-white p-4">
          <div className="h-80 w-full bg-gray-200 animate-pulse rounded-lg mb-4" />

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/4" />
          </div>

          <div className="h-8 w-8 bg-gray-200 animate-pulse rounded-full absolute bottom-3 right-3" />
        </div>
      ))}
    </div>
  );
};
