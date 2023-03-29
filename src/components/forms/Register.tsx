import { Link } from "react-router-dom";
import NavBar from "../nav/NavBar";
import UserIcon from "../svg/UserIcon";

const Register = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto flex items-center justify-center flex-col mt-16 p-8 bg-[#f9f8f9] w-1/3 rounded-2xl">
        <div className="flex">
          <div className="pr-3">
            <UserIcon />
          </div>
          <p className="text-[#1f261e] text-[32px] font-bold">
            Individual/Family
          </p>
        </div>
        <p className="text-[#626762] text-[14px] mt-3">
          Not an Individual?{" "}
          <span className="text-[#4fb518]"> Choose another account type</span>
        </p>

        <form action="#" className="pt-4 w-3/4">
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                First Name
              </label>
              <input
                type="firstName"
                name="firstName"
                id="firstName"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter First Name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                Last Name
              </label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter Last Name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                Phone Number
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter Phone Number"
              />
            </div>

            <div>
              <label
                htmlFor="NIN"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                NIN (National Identification Number)
              </label>
              <input
                type="NIN"
                name="NIN"
                id="NIN"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter NIN"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
              />
            </div>

            <p className="text-[#626762] text-[14px] mt-2">
              By creating an account you agree to our{" "}
              <span className="text-[#47b518]">Terms of Use</span> and{" "}
              <span className="text-[#47b518]">Privacy Policy</span>
            </p>
            <button
              type="submit"
              className="w-full text-white bg-[#47b518]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create my account
            </button>
          </form>
        </form>
      </div>
    </div>
  );
};

export default Register;
