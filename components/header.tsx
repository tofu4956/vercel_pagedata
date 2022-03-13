import Link from "next/link";
import DarkModeToggle from "./toggleDarkmode";
const Header = (): JSX.Element => {
  return (
    <>
      <section className="flex justify-between items-center my-16 md:mb-12">
        <h4 className=" mt-8 mb-20 text-2xl font-bold tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="hover:underline">Blog.</a>
          </Link>
        </h4>
        <div className="grid grid-cols-2 justify-center items-center mt-4 mb-14  md:mb-12">
          <Link href="/about">
            <a className="text-lg font-bold md:text-lg">About</a>
          </Link>
          <DarkModeToggle />
        </div>
      </section>
    </>
  );
};

export default Header;
