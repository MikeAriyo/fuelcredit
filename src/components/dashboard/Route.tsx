import { Link } from "react-router-dom";
import Home from "../svg/Home";

const Route = () => {
  return (
    <div className="grid gap-y-3 pt-4 md:pt-0">
      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Home
          </h2>
        </a>
      </Link>

      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Wallet
          </h2>
        </a>
      </Link>

      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Credit
          </h2>
        </a>
      </Link>

      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Beneficiaries
          </h2>
        </a>
      </Link>

      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Stations
          </h2>
        </a>
      </Link>

      <Link to="#">
        <a
          className={`flex justify-start lg:justify-center pl-4 lg:pl-0 space-x-12 lg:space-x-2 lg:flex-col space-y-2 items-center rounded-xl cursor-pointer duration-500 py-3 lg:py-3`}
        >
          <div className={"bg-opacity-80 font-semibold text-grey05 px-4 py-4"}>
            <Home />
          </div>

          <h2 className={`text-base lg:text-xs "text-pry-modal font-semibold`}>
            Stats
          </h2>
        </a>
      </Link>
    </div>
  );
};

export default Route;
