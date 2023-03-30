import Home from "../../svg/Home";

const StatCard = () => {
  return (
    <div className="block max-w-[250px] rounded-lg bg-white p-6 shadow-md">
      <div>
        <Home />
      </div>
      <div className="pt-6">
        <p className="text-[16px] text-[#8f928e]">Fuel Price</p>
        <p className="text-[#1f261e] text-[20px] font-bold">24</p>
      </div>
    </div>
  );
};
export default StatCard;
