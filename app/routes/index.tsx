import Body from '~/components/Body'
import Header from '~/components/Header'
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa'

export default function Index() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Body />
    </div>
  )
}
