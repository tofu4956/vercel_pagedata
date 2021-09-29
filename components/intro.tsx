import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Intro = (): JSX.Element => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <div className="md:justify-left">
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </div>
    </section>
  )
}

export default Intro