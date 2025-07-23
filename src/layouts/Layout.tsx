import { Outlet } from "react-router";
import ScrollIndicator from "../components/animated/ScrollIndicator";
import NavBar from "../components/ui/NavBar";
import useSmoothScroll from "../hooks/animated/useSmoothScroll";
import { useEffect, useState } from "react";

const Layout = () => {
  useSmoothScroll({ autoInit: true });
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const handleHeight = () => {
      const nav = document.querySelector(".navbar");
      const height = nav?.clientHeight;
      console.log({ height });
      setMinHeight(height || 60);
    };
    handleHeight();
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 z-[1600] w-full h-fit">
        <ScrollIndicator />
      </div>
      <header
        style={{ minHeight: minHeight }}
        className="w-full bg-mw-black flex items-center justify-center"
      >
        <NavBar />
      </header>
      <main className="w-full h-auto   min-h-[600vh]">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
