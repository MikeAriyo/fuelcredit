import NavBar from "../nav/NavBar";
import FormInput from "../reusable/FormInput";
import LoginIcon from "../svg/LoginIcon";

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto flex items-center justify-center flex-col mt-16 p-8 bg-[#f9f8f9] w-1/3 rounded-2xl">
        <LoginIcon />
        <p className="text-bold text-[#1f261e] pt-4">Log In</p>

        <form action="#" className="pt-4">
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#626762] block mb-2"
              >
                Phone Number (User ID)
              </label>
              <input
                type="phone"
                name="email"
                id="email"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter 11-digit phone number"
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
            <button
              type="submit"
              className="w-full text-white bg-[#47b518]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-900">
              New User?{" "}
              <a href="#" className="text-[#47b518] hover:underline">
                Create account
              </a>
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};
export default Login;
