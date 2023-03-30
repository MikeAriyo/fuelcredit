const SingleWalletCard = () => {
  return (
    <div className="max-w-[500px]">
      <div className="flex justify-between py-3">
        <p className="font-semibold text-[14px]">Wallet</p>
        <p className="text-[14px] text-[#31581C]">See details</p>
      </div>

      <div className="block max-w-[500px] rounded-lg bg-[#fafafa] p-6 shadow-md">
        <div className="flex justify-between">
          <div>
            <p className="text-[#85928e] text-[16px]">FuelCredit balance</p>
            <p className="pt-3 font-semibold text-[20px]">N95,520.00</p>
          </div>

          <button className="w-20px text-white bg-[#47b518] font-medium rounded-lg text-sm px-5 text-center">
            Fund Wallet
          </button>
        </div>
        <hr className="bg-[#e0e644] mt-8" />

        <div className="pt-5">
          <div className="flex justify-between">
            <p className="font-semibold text-[16px]">Recent Transactions</p>
            <p className="text-sm text-[#31581c]">See all</p>
          </div>

          <div className="flex justify-between mt-4">
            <p className="text-[14px]">Total Filling Stations</p>
            <p className="text-sm text-[#31581c]">-N5,000</p>
          </div>

          <div className="mt-4">
            <p className="text-[12px] text-[#8f928e]">Today 10:00AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWalletCard;
