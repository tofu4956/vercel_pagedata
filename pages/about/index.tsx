import Layout from "../../components/layout"
import Container from "../../components/container"
import { DOMAIN_NAME } from "../../lib/constants"
import Header from "../../components/header"
import PostTitle from "../../components/post-title"
const About = (): JSX.Element => {
  return (
    <>
      <Layout>
        <head>
          <title>About | {DOMAIN_NAME}</title>
        </head>
        <Container>
          <Header />
          <PostTitle>
            About
          </PostTitle>
        </Container>
      </Layout>
    </>
  )
}

export default About