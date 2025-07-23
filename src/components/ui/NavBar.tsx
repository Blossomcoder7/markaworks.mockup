import logo from "/logo/brand.png";
import { IconButton } from "@mui/material";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useRef } from "react";
import type { DrawerRefType } from "../wrapper/Drawer";
import Drawer from "../wrapper/Drawer";
import MagicScrollWrapper from "../animated/MagicScrollWrapper";
import XSpacing from "../wrapper/XSpacing";

const NavBar = () => {
  const drawerEl = useRef<DrawerRefType>(null);

  return (
    <MagicScrollWrapper>
      <nav className=" navbar w-full lg:py-4 items-center bg-black justify-center flex   text-mw-sm">
        <XSpacing>
          <div className="flex items-center justify-between w-full  rounded-md  h-full">
            {/* Mobile logo */}
            <div className="lg:hidden">
              <img
                src={logo}
                alt="logo"
                height={32}
                width={170}
                className="object-contain object-center"
              />
            </div>
            {/* Right section with Drawer/Menu */}
            <div className="w-fit lg:w-full h-full">
              <Drawer
                ref={drawerEl}
                muiDrawerProps={{
                  anchor: "right",
                  disableScrollLock: true,
                }}
                menu={
                  <IconButton
                    className=" text-[clamp(20px,4vw,28px)] "
                    sx={{ p: 2 }}
                    onClick={() => drawerEl?.current?.open?.()}
                  >
                    <HiOutlineBars3 className=" text-mw-beige hover:text-mw-green-light" />
                  </IconButton>
                }
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full h-full  lg:mt-0 space-y-6 lg:space-y-0 ">
                  {/* Desktop Logo */}
                  <div className="hidden lg:flex items-center justify-center w-fit">
                    <img
                      src={logo}
                      alt="logo"
                      height={32}
                      width={170}
                      className="object-contain object-center"
                    />
                  </div>

                  {/* Nav Links */}
                  <div className="flex flex-col lg:flex-row items-center justify-center flex-1 space-y-6 lg:space-y-0 lg:space-x-8">
                    {["About Us", "Projects", "Services", "Contact"].map(
                      (label, i) => {
                        return (
                          <button
                            type="button"
                            key={i}
                            className=" hover:text-mw-green-light text-center text-white font-normal text-mw-text-md"
                          >
                            {label}
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Icons */}
                  <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="flex font-bold text-sm lg:text-base bg-[#B8D432] text-[#053333] px-6 py-2 rounded-full cursor-pointer border-2 border-transparent transition duration-200 hover:bg-transparent hover:text-[#B8D432] hover:border-[#B8D432]">
                      Let’s talk
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </XSpacing>
      </nav>
    </MagicScrollWrapper>
  );
};

export default NavBar;
