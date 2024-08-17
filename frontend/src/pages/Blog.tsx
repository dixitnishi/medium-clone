import { useParams } from "react-router-dom";
import { iBlog, useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return (
      <div>
        <Appbar />
        <FullBlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog as iBlog} />
    </div>
  );
}

export default Blog;
