import Body from '~/components/Body'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default function Index() {
  return (
    <div style={{ background: `url("/images/wall_logo.png") no-repeat fixed center` }} className="flex flex-col h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
