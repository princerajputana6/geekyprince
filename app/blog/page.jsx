import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogHero from "../../components/Blog/Hero";
import Blogs from "../../components/Blog/Blogs";
const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Our blogs page is a platform where we share informative and engaging content on various topics related to our business or industry. This includes articles, guides, and thought pieces written by our team or guest contributors. The goal is to provide valuable insights and perspectives that educate, entertain, and inform our readers."
      />

      <BlogHero />
      <Blogs />
    </>
  );
};

export default Blog;
