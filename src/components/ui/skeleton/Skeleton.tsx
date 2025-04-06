"use client";

import { FC } from "react";

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Skeleton: FC<SkeletonProps> = ({ 
  className = '', 
  width = '100%', 
  height = '100%' 
}) => {
  return (
    <div 
      className={`bg-gray-200 animate-pulse rounded-md ${className}`}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    />
  );
};