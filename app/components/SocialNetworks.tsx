import { FaGithub, FaDiscord, FaReddit, FaTwitter } from "react-icons/fa";

export default function SocialNetworks() {
  return (
    <section>
      <div className="mx-auto mt-3 mb-3">
        <div className="flex flex-row justify-center items-center ">
          <ul className="flex">
            <li className="p-3">
              <a
                className="inline-block align-middle text-2xl"
                href="https://github.com/we-craft-code"
                target="_blank"
              >
                <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 hover:text-black text-gray-600 transition duration-300 ease-in-out" />
              </a>
            </li>
            <li className="p-3">
              <a
                className="inline-block align-middle text-2xl"
                href="https://discord.com/invite/kp3NQNKW9J"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 hover:text-discord-200 text-discord-100 transition duration-300 ease-in-out" />
              </a>
            </li>
            <li className="p-3">
              <a
                className="inline-block align-middle text-2xl"
                href="https://www.reddit.com/r/wecraftcode/"
                target="_blank"
              >
                <FaReddit className="w-6 h-6 sm:w-8 sm:h-8 hover:text-reddit-200 text-reddit-100 transition duration-300 ease-in-out" />
              </a>
            </li>
            <li className="p-3">
              <a
                className="inline-block align-middle text-2xl"
                href="https://twitter.com/we_craft_code"
                target="_blank"
              >
                <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
