import Logo from "../svg/Logo";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="flex">
        <div>
          <Logo />
        </div>

        <div className="pt-3 ml-8 flex">
          <div>
            <p className="text-[#626762] text-[16px]">
              For Individuals/Corporates
            </p>
          </div>

          <div className="ml-8">
            <p className="text-[#626762] text-[16px]">For Merchants</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="mt-2 flex mr-6">
          <div className="">
            <p className="text-[#626762] text-[16px]">About Us</p>
          </div>

          <div className="ml-8">
            <p className="text-[#626762] text-[16px]">FAQs</p>
          </div>
        </div>

        <button className="mr-8">Log In</button>
        <button>Create free account</button>
      </div>
    </div>
  );
};

export default NavBar;
