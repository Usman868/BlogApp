const BlogCardSkeleton = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow animate-pulse">
      <div className="aspect-video bg-gray-200"></div>

      <div className="px-5 pt-4">
        <div className="h-6 w-20 rounded-full bg-gray-200"></div>
      </div>

      <div className="p-5">
        <div className="h-5 w-3/4 rounded bg-gray-200 mb-4"></div>

        <div className="space-y-2">
          <div className="h-3 rounded bg-gray-200"></div>
          <div className="h-3 rounded bg-gray-200"></div>
          <div className="h-3 w-2/3 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
