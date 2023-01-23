import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";

export default function Custom404() {
  const router = useRouter();
  return (
    <Layout>
      <div className="nm-container mt-10 flex min-h-[50vh] w-full flex-col items-center p-20">
        <div className="nm-list p-5">
          <Title>404 - Page Not Found</Title>
        </div>
        <div className="mt-10 text-center">
          <Button color="gray" onClick={() => router.back()}>
            Return
          </Button>
        </div>
      </div>
    </Layout>
  );
}
