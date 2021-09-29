import Link from 'next/link'
import DarkModeToggle from './toggleDarkmode';
const Header = (): JSX.Element => {
  return (
    <section className="flex justify-between items-center mt-16 mb-16 md:mb-12">
      <h4 className=" tracking-tight md:tracking-tighter mb-20 mt-8 text-2xl md:text-4xl font-bold">
      <Link href="/">
        <a className="hover:underline">Blog.</a>
      </Link>
      </h4>
      <div className="justify-center grid grid-cols-2 items-center">
        <Link href="/about">
          <a className="text-l md:text-l font-bold">About</a>
        </Link>
        <DarkModeToggle />
      </div>
    </section>
  )
};

export default Header
