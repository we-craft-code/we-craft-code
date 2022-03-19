import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white border-solid border border-red-100 ">
    <div className="container mx-auto mt-3 mb-3">
      <div className="flex flex-row justify-between">
        <h2><img className="h-14" src="/images/head_logo.png" alt="" /></h2>
        <ul className='flex'>
          <li className='p-3'>
            <a className="inline-block align-middle text-2xl" href="https://github.com/we-craft-code" target="_blank">
              <FaGithub className="text-red-700 hover:text-black"/>
            </a>
          </li>
          <li className='p-3'>
            <a className="inline-block align-middle text-2xl" href="https://discord.com/invite/kp3NQNKW9J" target="_blank">
              <FaDiscord className="text-red-700 hover:text-[#5865F2]" />
            </a>
          </li>
          <li className='p-3'>
            <a className="inline-block align-middle text-2xl" href="https://www.reddit.com/r/wecraftcode/" target="_blank">
              <FaReddit className="text-red-700 hover:text-[#ff4500]" />
            </a>
          </li>
          <li className='p-3'>
            <a className="inline-block align-middle text-2xl" href="https://twitter.com/we_craft_code" target="_blank">
              <FaTwitter className="text-red-700 hover:text-[#00acee]" />
            </a>
          </li>
        </ul>
    </div>
    </div>
  </header>
  )
}
