import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-3 p-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />
          </div>
          <div className="flex justify-center flex-col font-semibold pl-2 text-sm">
            {authorName}
          </div>
          <div className="flex justify-center flex-col px-2">
            <Circle />
          </div>
          <div className="flex justify-center flex-col font-thick text-slate-400 text-sm">
            {publishedDate}
          </div>
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-thin">
          {content.length < 100 ? content : content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm font-thin text-slate-500 pt-4">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({ name, size }: { name: string; size?: string }) {
  return (
    <div
      className={`${
        size === "big" ? "w-10 h-10" : "w-6 h-6"
      } relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "big" ? "text-md" : "text-sm"
        }font-small  text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
