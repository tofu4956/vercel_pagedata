import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

;
import DarkModeToggle from './toggleDarkmode';

// レンダー後かを判定
const Footer = (): JSX.Element => {
  return (
    <footer className="bg-accent-1 dark:bg-gray-800 border-t border-accent-2">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3 className="text-xl lg:text-xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          </div>
            <DarkModeToggle />
          </div>
      </Container>
    </footer>
  )
}

export default Footer
