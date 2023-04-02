import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const DashboardLayout = () => {
  const [mounted, setMounted] = useState(false);
  const { width } = useScreenSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {mounted &&
        (width >= 1024 ? (
          <div className="">
            <DesktopView />
          </div>
        ) : (
          <div className="">
            <MobileView />
          </div>
        ))}
    </div>
  );
};

export default DashboardLayout;
