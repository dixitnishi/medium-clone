import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center font-extrabold text-2xl cursor-pointer"
      >
        Medium
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Write
          </button>
        </Link>

        <Avatar size={"big"} name="H" />
      </div>
    </div>
  );
};
