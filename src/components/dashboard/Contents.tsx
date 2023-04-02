import { useGetUserDashboardQuery } from "../../api/services";
import AddIcon from "../svg/AddIcon";
import CreditSvg from "../svg/CreditSvg";
import Fuel from "../svg/FuelIcon";
import Location from "../svg/Location";
import SingleCreditCard from "./creditCards/CreditCard";
import SingleWalletCard from "./creditCards/SingleWalletCard";
import StatCard from "./statsCards/SingleStatCard";

const Contents = () => {
  const { data, error, isLoading } = useGetUserDashboardQuery(27);

  console.log("data >>>>", data);
  return (
    <div className="w-full main-content h-scren">
      {/* adjusted py-6 lg:py-10 */}
      <div className={`container mx-auto px-4 py-6 h-full`}>
        <div className="pt-4 grid grid-cols-2 grid-gap-24 md:grid-cols-4 md:grid-gap-12">
          <StatCard title="Fuel Purchase" icon={<Fuel />} count={"24"} />
          <StatCard
            title="Total Purchases"
            icon={<CreditSvg />}
            count={"N155k"}
          />
          <StatCard title="Beneficiaries" icon={<AddIcon />} count={"5"} />
          <StatCard title="Filling Stations" icon={<Location />} count={"5"} />
        </div>

        <div className="mt-8 md:grid md:grid-cols-2 mb-4">
          {/* Credit Cards */}
          <SingleWalletCard />
          <SingleCreditCard />
        </div>
      </div>
    </div>
  );
};

export default Contents;
