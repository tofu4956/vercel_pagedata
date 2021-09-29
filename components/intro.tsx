import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'
import DarkModeToggle from './toggleDarkmode'
import PostTitle from './post-title'

const Intro = (): JSX.Element => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <div className="justify-center grid grid-cols-2 items-center">
            <Link href="/about">
              <a className="text-l md:text-l font-bold">About</a>
            </Link>
            <DarkModeToggle />
      </div>
    </section>
  )
}

export default Intro