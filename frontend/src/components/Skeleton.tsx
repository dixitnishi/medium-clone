export const Skeleton = () => {
  return (
    <div className="flex justify-center">
      <div role="status" className="w-full max-w-screen-lg animate-pulse">
        <div className="border-b border-slate-200 pb-3 p-4 w-screen max-w-screen-lg cursor-pointer">
          <div className="flex">
            <div className="flex justify-center flex-col">
              <div className="flex justify-center flex-col bg-gray-200 rounded-full"></div>
            </div>
            <div className="flex justify-center flex-col font-semibold pl-2 text-sm">
              <div className="h-2 p-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col px-2">
              <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col font-thick text-slate-400 text-sm">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className="text-2xl font-bold">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="font-thin">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="text-sm font-thin text-slate-500 pt-4">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
