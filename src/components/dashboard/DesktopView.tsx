import style from "../../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo";
import Route from "./Route";
import { useGetUserDashboardQuery } from "../../api/services";
import { motion } from "framer-motion";
import Notification from "../svg/Notification";
import Profile from "../svg/Profile";
import Contents from "./Contents";

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
                  <Notification />
                </div>
                <div>
                  <Profile />
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
            className="w-full max-w-7xl mx-auto h-full"
          >
            <Contents />
          </motion.div>
          {/* removed pb-28 */}
        </div>
      </div>
    </>
  );
};

export default DesktopView;
