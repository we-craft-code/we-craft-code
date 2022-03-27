import Body from "~/components/Body";
import Footer from "~/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col h-screen max-w-[1024px] mx-auto">
      <Body />
      <Footer />
    </div>
  );
}
