import Link from "next/link";
import DarkModeToggle from "./toggleDarkmode";

const Intro = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center my-16 gap-y-2 font-sans md:flex-row md:justify-between md:mb-12 md:gap-y-0">
      <h1 className="text-6xl font-bold tracking-tighter leading-tight md:pr-8 md:text-6xl">
        Blog.
      </h1>
      <div className="grid grid-cols-2 gap-x-4 justify-center items-center md:gap-x-1">
        <Link href="/about">
          <a className="text-lg font-bold md:text-lg">About</a>
        </Link>
        <div className="flex justify-center items-center">
          <DarkModeToggle />
        </div>
      </div>
    </section>
  );
};

export default Intro;
