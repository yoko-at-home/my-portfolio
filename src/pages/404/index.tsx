import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="nm-con2 mt-10 flex min-h-[50vh] w-full items-center p-20">
        <div className="nm-container p-5">
          <Title>404 - Page Not Found</Title>
        </div>
      </div>
    </Layout>
  );
}
