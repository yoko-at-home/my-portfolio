import { metaData } from "src/metadata";

export const FooterPart = () => {
  return (
    <div className="my-14 flex justify-center text-sm text-[#868E96]">
      {`© ${new Date().getFullYear()}`} {metaData.title}
    </div>
  );
};
