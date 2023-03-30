import React, { useEffect, useState } from "react";
import style from "../../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Home from "../svg/Home";
import Route from "./Route";
import StatCard from "./statsCards/SingleStatCard";
import SingleCreditCard from "./creditCards/SingleWalletCard";

const DesktopView = () => {
  return (
    <>
      <div>
        <div className="fixed h-16 w-screen m-0 z-10 px-8">
          <div className="flex m-0 bg-white py-3 border-b border-[#E5EFFF]">
            <div className="w-64 lg:w-72 grid">
              <Link to="#">
                <a className="block m-auto">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="flex justify-between w-full pr-10">
              <div>
                {" "}
                <p className="font-semibold text-[20px] mt-1">Dashboard</p>
              </div>
              <div className="flex">
                <div className="pr-10">
                  <Home />
                </div>
                <div>
                  <Home />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-16 w-full flex">
          <div
            className={`w-[113px] border-r h-screen p-4 overflow-y-scroll pb-28 ${style.sidebar}`}
          >
            <Route />
          </div>
          {/* removed pb-28 */}
          <div className="w-full main-content h-scren overflow-y-scroll">
            {/* adjusted py-6 lg:py-10 */}
            <div className={`container mx-auto px-4 py-6 h-full`}>
              <div className="pt-4 grid grid-cols-4 grid-gap-12">
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
              </div>

              <div className="mt-8">
                {/* Credit Cards */}
                <SingleCreditCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopView;
