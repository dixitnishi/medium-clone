import { iBlog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: iBlog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Posted on 2nd December 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-lg text-slate-500">Author</div>
            <div className="flex w-full">
              <div className="pr-2 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || "A"} />
              </div>
              <div className="flex flex-col pl-3 pt-2">
                <div className="font-semibold text-xl pt-2">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500 pt-2">Random about author</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
