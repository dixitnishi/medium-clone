export const FullBlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
          <div className="col-span-8">
            <div className="h-2 my-1 bg-gray-200 rounded-full"></div>{" "}
            <div className="h-2 p-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>{" "}
          </div>
          <div className="col-span-4">
            <div className="h-2 p-2 bg-gray-200 rounded-full mb-2.5"></div>{" "}
            <div className="flex w-full">
              <div className="pr-2 flex flex-col justify-center">
                <div className="h-2 p-2 bg-gray-200 rounded-full mb-2.5"></div>
              </div>
              <div className="flex flex-col pl-3 pt-2">
                <div className="font-semibold text-xl pt-2">
                  <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
