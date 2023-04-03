import { useGetUserDashboardQuery } from "../../api/services";
import AddIcon from "../svg/AddIcon";
import CreditSvg from "../svg/CreditSvg";
import Fuel from "../svg/FuelIcon";
import Location from "../svg/Location";
import SingleCreditCard from "./creditCards/CreditCard";
import SingleWalletCard from "./creditCards/SingleWalletCard";
import StatCard from "./statsCards/SingleStatCard";

const Contents = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails") as any);
  const userId = userDetails?.userId;
  const { data, error, isLoading } = useGetUserDashboardQuery(userId);

  console.log("data >>>>", data);
  return (
    <div className="w-full main-content h-scren">
      {/* adjusted py-6 lg:py-10 */}
      <div className={`container mx-auto px-4 py-6 h-full`}>
        <div className="pt-4 grid grid-cols-2 grid-gap-24 md:grid-cols-4 md:grid-gap-12">
          <StatCard
            title="Fuel Purchase"
            icon={<Fuel />}
            count={data?.count_fuel}
          />
          <StatCard
            title="Total Purchases"
            icon={<CreditSvg />}
            count={data?.total_fuel}
          />
          <StatCard
            title="Beneficiaries"
            icon={<AddIcon />}
            count={data?.beneficiary}
          />
          <StatCard
            title="Filling Stations"
            icon={<Location />}
            count={data?.filling_station_count}
          />
        </div>

        <div className="mt-8 md:grid md:grid-cols-2 mb-4">
          {/* Credit Cards */}
          <SingleWalletCard balance={data?.balance} station={data?.station} />
          <SingleCreditCard
            credit={data?.credit}
            limit={data?.creditDetails?.limit}
            expiry={data?.creditDetails?.expire}
          />
        </div>
      </div>
    </div>
  );
};

export default Contents;
