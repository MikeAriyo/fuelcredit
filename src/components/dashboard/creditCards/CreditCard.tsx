const SingleCreditCard = () => {
  return (
    <div className="max-w-[450px]">
      <div className="flex justify-between py-3">
        <p className="font-semibold text-[14px]">Credit</p>
        <p className="text-[14px] text-[#31581C]">See details</p>
      </div>

      <div className="block max-w-[450px] rounded-lg bg-[#fafafa] p-6 shadow-md">
        <div>
          <p className="text-[#85928e] text-[16px]">
            FuelCredit "Quick" balance
          </p>
          <p className="pt-3 font-semibold text-[20px]">-N4,500.00</p>
          <p className="mt-4 text-[#85928e] text-[12px]">
            You can still request up to{" "}
            <span className="text-black font-semibold">N5,500</span>
          </p>
        </div>
        <hr className="bg-[#e0e644] mt-8" />

        <div className="flex justify-between pt-4">
          <button className="w-20px text-white bg-[#47b518] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Request Credit
          </button>
          <p className="text-[#85928e] mt-2">
            Repayment due in <span className="text-black">2 days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCreditCard;
