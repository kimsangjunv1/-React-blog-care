import HeaderConts from '../layout/HeaderConts'
import ContentConts from '../layout/ContentConts'
import FooterConts from '../layout/FooterConts'

const Main = () => {
  return (
    <main>
      <HeaderConts props={"나옴"} />
      <ContentConts />
      <FooterConts />
    </main>
  )
}

export default Main