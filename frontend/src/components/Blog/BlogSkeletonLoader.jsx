import React from 'react';

// A skeleton loader for the Featured Post component
const FeaturedPostSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 rounded-2xl bg-white p-4 md:p-6 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] animate-pulse">
    <div className="aspect-[16/9] w-full rounded-lg bg-gray-200"></div>
    <div className="flex flex-col">
      <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      <div className="mt-3 h-8 w-full rounded bg-gray-200"></div>
      <div className="mt-3 h-20 w-full rounded bg-gray-200"></div>
      <div className="mt-auto pt-4 h-4 w-1/3 rounded bg-gray-200"></div>
    </div>
  </div>
);

// A skeleton loader for a single item in the PostGrid
const PostGridItemSkeleton = () => (
  <div className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden animate-pulse">
    <div className="aspect-[16/9] w-full bg-gray-200"></div>
    <div className="p-4 md:p-5">
      <div className="h-3 w-1/3 rounded bg-gray-200"></div>
      <div className="mt-2 h-6 w-full rounded bg-gray-200"></div>
      <div className="mt-2 h-16 w-full rounded bg-gray-200"></div>
    </div>
  </div>
);

// The main skeleton component for the entire Blog page
const BlogSkeletonLoader = () => (
  <div className="mx-auto max-w-7xl w-[92%] md:w-[86%] py-10 md:py-12">
    <div className="mb-4 h-5 w-24 rounded bg-gray-200 animate-pulse"></div>
    <FeaturedPostSkeleton />
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {/* Show 3 placeholder grid items to represent the loading state */}
      <PostGridItemSkeleton />
      <PostGridItemSkeleton />
      <PostGridItemSkeleton />
    </div>
  </div>
);

export default BlogSkeletonLoader;
