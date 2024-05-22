import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-amber-400 hover:tracking-widest transition-all ease-in-out duration-1000"
    >
      {title}
    </Link>
  );
};

export default NavLink;
