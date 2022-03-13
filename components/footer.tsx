import Container from "./container";

// レンダー後かを判定
const Footer = (): JSX.Element => {
  return (
    <footer className="bg-accent-1 dark:bg-gray-900 border-t border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-4 lg:flex-row">
          <h3 className="mb-10 text-sm tracking-tighter leading-tight text-center lg:pr-4 lg:mb-0 lg:w-1/2 lg:text-sm lg:text-left">
            &copy; 2021 tofu4956 Statically Generated with Next.js.
          </h3>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
