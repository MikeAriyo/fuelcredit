import React, { useState } from "react";
import Route from "./Route";
import style from "../../styles/Sidebar.module.css";
import { motion } from "framer-motion";
import Menu from "../svg/Menu";
import Profile from "../svg/Profile";
import Notification from "../svg/Notification";
import Logo from "../svg/Logo";
import Contents from "./Contents";

const MobileView = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
      <div className="">
        <div className="fixed h-16 w-screen m-0 px-4 sm:px-6 z-10 border-b">
          <div className="flex justify-between items-center m-0 bg-white py-3">
            <div onClick={() => setOpenNav(true)}>
              <Menu />
            </div>

            <span className="text-lg font-bold;">Dashboard</span>

            <div className="flex space-x-4 items-center">
              <div>
                <Profile />
              </div>
              <div>
                <Notification />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          key={""}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
          className="fixed top-16 w-full h-full px-4 sm:px-6 pt-6 overflow-y-scroll pb-28 wheight"
        >
          <Contents />
        </motion.div>

        <div
          className={`fixed h-screen bg-[#bfbfbf] bg-opacity-70 w-full z-20 duration-500 ${
            openNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex">
            <div className="w-5/6 max-w-sm bg-white h-screen">
              <div className="flex justify-between items-center p-4 sm:p-6 shadow">
                <div className="flex justify-center items-center mx-auto">
                  <Logo />
                </div>

                <div
                  className="bg-white w-10 h-10 rounded-full shadow-md grid"
                  onClick={() => setOpenNav(false)}
                >
                  <div className="m-auto">
                    <i className="fa fa-times text-black text-lg"></i>
                  </div>
                </div>
              </div>
              <div
                className={`px-4 pt-4 sm:px-6 sm:pt-6 overflow-y-scroll grid gap-y-4 pb-20 ${style.sidebar} height`}
              >
                <Route />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
                    .height {
                        height: calc(100vh - 72px);
                    }

                    @media screen and (min-width: 560px) {
                        .height {
                            height: calc(100vh - 88px);
                        }
                    }

                    .wheight {
                        height: calc(100vh - 64px);
                    }
                `}
      </style>
    </div>
  );
};

export default MobileView;
