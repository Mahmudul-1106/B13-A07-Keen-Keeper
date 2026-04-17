export default function Loading() {
  return (
    <div className="container mx-auto p-10 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 w-1/3 bg-slate-200 animate-pulse rounded-md"></div>
        <div className="h-4 w-1/2 bg-slate-100 animate-pulse rounded-md"></div>
      </div>

      {/* Chart/Main Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Circle/Pie Chart Skeleton */}
        <div className="flex flex-col items-center justify-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm h-80">
          <div className="h-48 w-48 rounded-full border-[12px] border-slate-100 animate-pulse"></div>
          <div className="mt-6 h-6 w-32 bg-slate-100 animate-pulse rounded-full"></div>
        </div>

        {/* List/Data Skeleton */}
        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-slate-100 rounded-xl animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-slate-50 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
