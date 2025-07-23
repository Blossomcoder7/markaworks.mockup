import ball1 from "../../../assets/models/LockedRings.png";
import ball2 from "../../../assets/models/BlueHolo.png";
import XSpacing from "../../../components/wrapper/XSpacing";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { DragggableRotation } from "../../../components/animated/DragggableRotation";

const Section4 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({});
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 900]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "w-full  py-14 h-fit flex flex-col justify-center relative overflow-hidden items-center bg-mw-beige"
      )}
    >
      <div className="relative   py-14 w-full ">
        <XSpacing>
          <div className=" relative z-3 pointer-events-none selection:bg-transparent w-full flex items-center justify-start ">
            <p className="text-h1-m relative z-3 md:text-[65px]  md:leading-none text-mw-green-dark font-semibold">
              Everyone designs. We shape how <br /> people{" "}
              <span className="text-mw-green-light">feel your brand.</span>{" "}
            </p>
          </div>
        </XSpacing>
        <div className="absolute  z-1 -right-10 md:-right-14 top-2 ">
          <motion.div
            style={{
              rotate,
            }}
            className="w-full h-full flex items-center justify-center relative z-1"
          >
            <DragggableRotation sensitivity={1.2}>
              <img
                src={ball1}
                alt="ball1"
                className="md:h-56 h-36 w-fit object-cover"
              />
            </DragggableRotation>
          </motion.div>
        </div>
      </div>

      <div className=" w-full flex px-8 py-8">
        <div className="relative  hidden md:flex w-[20%]">
          <div className="absolute  -left-22 top-10 md:top-6 z-1 ">
            <motion.div
              style={{
                rotate: rotate,
              }}
              className="w-full h-full flex items-center justify-center relative z-2"
            >
              <DragggableRotation sensitivity={1}>
                <img
                  src={ball2}
                  alt="ball2"
                  className="md:h-56 h-40 w-fit object-cover"
                />
              </DragggableRotation>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-[80%]  py-6 text-md md:text-[28px]  flex flex-col justify-end gap-3">
          <XSpacing>
            <p className="w-full text-mw-green-dark font-normal text-h2-m indent-32">
              We’re a 22-person team specialized in branding, packaging and
              identity systems. We’ve worked on projects from boutique founders
              to global product brands.{" "}
            </p>
            <p className="w-full text-mw-green-dark font-normal text-h2-m indent-32">
              What we’ve built over the years is not just a portfolio it’s a
              culture. One that has shaped standards and inspired new directions
              in our industry.
            </p>
          </XSpacing>
        </div>
      </div>
    </div>
  );
};

export default Section4;
