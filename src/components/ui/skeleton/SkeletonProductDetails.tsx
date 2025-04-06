"use client";

import { Skeleton } from "./Skeleton";

export const SkeletonProductDetails = () => {
  return (
    <div className="flex items-center justify-center bg-white rounded">
      <div className="mt-5 mb-20 grid grid-cols-1 sm:w-[100vw] md:w-[78vw] xl:w-[60vw] sm:overflow-hidden sm:max-h-120 sm:grid-cols-3 gap-3">
        <div className="col-span-1 sm:col-span-2">
          <Skeleton className="w-full aspect-square rounded-lg" />
        </div>

        <div className="col-span-1 p-5 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />

          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>

          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-1/2" />

          <Skeleton className="h-12 w-full rounded-md" />

          <Skeleton className="h-6 w-1/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};