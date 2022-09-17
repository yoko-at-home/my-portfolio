import { Link } from "react-scroll";

export const ToTopButton = () => {
  return (
    <div className="fixed bottom-5 right-5 rounded-full bg-slate-200/80 p-3">
      <Link
        activeClass="active"
        to="page-top"
        spy={true}
        smooth="easeInOutQuart"
        offset={-70}
        duration={2000}
      >
        <span className="text-gradient-sub p-3 hover:cursor-pointer">
          page top
        </span>
      </Link>
    </div>
  );
};
