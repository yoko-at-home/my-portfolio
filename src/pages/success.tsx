import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../layout";

const Success: NextPage = () => {
  const router = useRouter();
  console.log(router);

  return (
    <Layout>
      <div className="mx-auto flex flex-col items-center justify-center">
        <iframe src="https://embed.lottiefiles.com/animation/83039"></iframe>
        <div className="container mt-20 p-3 text-lg">
          <div className="mx-auto whitespace-pre-line break-words">
            {router.query.text}Thank you!
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
