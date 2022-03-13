import Link from "next/link";
import DarkModeToggle from "./toggleDarkmode";

const Intro = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center my-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold tracking-tighter leading-tight md:pr-8 md:text-6xl">
        Blog.
      </h1>
      <div className="grid grid-cols-2 justify-center items-center">
        <Link href="/about">
          <a className="text-lg font-bold md:text-lg">About</a>
        </Link>
        <DarkModeToggle />
      </div>
    </section>
  );
};

export default Intro;
