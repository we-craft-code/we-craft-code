import SocialNetworks from "~/components/SocialNetworks";

export default function Body() {
  return (
    <main className="flex-1 ">
      <div className="flex flex-col gap-2 h-full justify-center items-center">
        <img
          className="h-32 sm:h-96"
          src="images/logo_transparent_background.png"
        />
        <div className="text-center text-gray-700 sm:w-[600px] sm:text-2xl">
          We are a small group of people who leverage learning and programming
          through motivation, mentoring, and craftsmanship.
        </div>
        <div>
          <SocialNetworks />
        </div>
      </div>
    </main>
  );
}
