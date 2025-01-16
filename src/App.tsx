import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Doc from "./doc/index.mdx";
import ArtDots from "./components/ArtDots";

function App() {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "border-x border-solid border-neutral-200",
      )}
    >
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-8">
        <MDXProvider>
          <Doc />
        </MDXProvider>
      </div>
      <Footer />
      <ArtDots />
    </div>
  );
}

export default App;
