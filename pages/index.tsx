import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Stack, SocialNetworks} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>wecraftcode.org</title>
        <meta
          name="description"
          content="We are a small group of people who leverage learning and programming through motivation, mentoring, and craftsmanship.
"
        />
        <link rel="icon" href="/favicon/favicon-16x16.png" />
      </Head>
      <main className="flex flex-col h-screen text-gray-50 bg-gray-900 p-4">
        <section className="flex-1 flex flex-col justify-center items-center">
          <Image
            src="/images/logo_transparent_background.png"
            height={500}
            width={680}
            alt="logo"
          />
          <div className="text-gray-200 text-xl sm:text-2xl text-center p-2 sm:w-[680px]">
            We are a small group of people who leverage learning and programming
            through motivation, mentoring, and craftsmanship.
          </div>
          <SocialNetworks />
          <div className="text-gray-200 text-xl sm:text-2xl text-center p-2 sm:w-[680px] pt-12">
            Though we&apos;re not strict about which bootcamp you should do, we
            recommend{" "}
            <a
              href="https://freecodecamp.org"
              className="text-red-600 hover:text-red-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              freeCodeCamp
            </a>
            . Why? Because it works, and it&apos;s totally free!
          </div>
          <div className="pt-24">
            <a
              className="inline-block align-middle text-2xl"
              href="https://discord.com/invite/kp3NQNKW9J"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-red-600 hover:bg-red-500 text-gray-200 hover:text-gray-100 px-4 py-2 rounded-md">
                Join our Discord Channel
              </div>
            </a>
          </div>
          <div className="text-gray-200 text-xl sm:text-2xl text-center py-6 px-2 sm:w-[680px]">
            Waiting to see you there!
          </div>
        </section>
        <section className="flex flex-col justify-center items-center p-6">
          <div>&copy; 2022</div>
          <div>Crafter with ❤️, by wecraftcode Team</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
