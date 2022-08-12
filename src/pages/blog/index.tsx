import { NextPage } from "next";
import { BlogSec } from "src/components/blog";
import { Layout } from "src/layout";

const BlogPage: NextPage = () => {
  return <Layout>
    <BlogSec/>
  </Layout>;
};

export default BlogPage;
