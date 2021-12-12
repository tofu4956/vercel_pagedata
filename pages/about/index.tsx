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
          <body>
            人間
            <br/>
            <br/>
            <h2 className="text-xl">適当な経歴/ゲーム成績等</h2>
            <ul>
              <li><a href="https://github.com/tofu4956/emoote">技育キャンプ2021 vol.7 - emoote (非入賞)</a></li>
              <li><a href="https://github.com/tofu4956/a_2110">JPHACKS2021 - re-move (非入賞)</a></li>
            </ul>
            <br/>
            <ul>
              <li><p>Dark Forest v0.6 Round 1 42th</p></li>
              <li><a href="https://opensea.io/assets/0x9724fdf5ae41570decc2d3094c65eafa7e1ab7d4/61107169621941629356686628367938563970564199388425286562243829952771239557971">Dark Forest v0.6 Round 2 17th</a></li>
              <li><p>Dark Forest v0.6 Round 3 51th</p></li>
              <li><a href="https://astralcolossus.xyz/">Dark Forest v0.6 Round 4 Astral Colossus Contributor (4th)</a></li>
            </ul>
            <br/>
            <h2 className="text-xl">いろいろ</h2>
            <ul>
              <li><a href="https://xn--w4ha61066aymap3p.y.at">いろいろリンク</a></li>
              <li><a href="https://twitter.com/tofu4956">Twitter</a></li>
              <li><a href="https://github.com/tofu4956">Github</a></li>
            </ul>
            <br/>
            <h2 className="text-xl">その他</h2>
            <ul>
              <li>ENS: dfect.eth</li>
            </ul>
          </body>
        </Container>
      </Layout>
    </>
  )
}

export default About