import { useState } from "react";
import Swal from "sweetalert2";
import { useRegisterMutation } from "../../api/services";
import { useNavigate } from "react-router-dom";
import NavBar from "../nav/NavBar";
import UserIcon from "../svg/UserIcon";

const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    NIN: "",
    password: "",
    email: "",
    category: "Bike Kwik",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    try {
      // highlight-next-line

      let k = register(formData).unwrap();
      k.then((res : any) => {
        // successful login
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed || result.isDenied || result.isDismissed) {
            navigate("/");
          }
        });
      });
      k.catch((err : any) => {
        // error
      });
    } catch (err) {}
  };

  console.log(formData);
  return (
    <div>
      <NavBar />
      <div className="mx-auto flex items-center justify-center flex-col mt-16 p-8 bg-white md:bg-[#f9f8f9] sm:1/2 md:w-1/3 rounded-2xl">
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                name="mobileNumber"
                id="phone"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter Phone Number"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>

            <p className="text-[#626762] text-[14px] mt-2">
              By creating an account you agree to our{" "}
              <span className="text-[#47b518]">Terms of Use</span> and{" "}
              <span className="text-[#47b518]">Privacy Policy</span>
            </p>
            <button
              className="w-full text-white bg-[#47b518]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleRegister}
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
