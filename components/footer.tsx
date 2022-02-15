import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

;
import DarkModeToggle from './toggleDarkmode';

// レンダー後かを判定
const Footer = (): JSX.Element => {
  return (
    <footer className="bg-accent-1 dark:bg-gray-900 border-t border-accent-2">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <h3 className="text-s lg:text-s tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          &copy; 2021 tofu4956 Statically Generated with Next.js.
          </h3>
          </div>
      </Container>
    </footer>
  )
}
export default Footer
