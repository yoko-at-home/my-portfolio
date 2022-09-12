import { useRouter } from "next/router";
import { metaData } from "src/metadata";

export const FooterPart = () => {
  const router = useRouter();
  const root =
    router.asPath === "/" ||
    router.asPath === "/about" ||
    router.asPath === "/blog" ||
    router.asPath === "/portfolio" ||
    router.asPath === "/contact";

  return (
    <div
      className={`my-14 flex justify-center text-sm ${
        root ? "text-[#868E96]" : "text-slate-200"
      }`}
    >
      {`© ${new Date().getFullYear()}`} {metaData.title}
    </div>
  );
};
