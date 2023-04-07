import NavBar from "../nav/NavBar";
import LoginIcon from "../svg/LoginIcon";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../api/services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formActive, setFormActive] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    try {
      setFormActive(true);
      // highlight-next-line

      let k = login(formData).unwrap();
      k.then((res: any) => {
        console.log("response >>>>", res);
        const userDetails = {
          token: res?.access_token,
          userId: res?.id,
          bvnverify: res?.bvnverify,
          monoverify: res?.monoverify,
          role: res?.role,
          token_type: res?.token_type,
        };
        window.localStorage.setItem("userDetails", JSON.stringify(userDetails));
        // successful login
        navigate("/dashboard");
      });
      k.catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Please verify your details and retry",
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result: any) => {
          if (result.isConfirmed || result.isDenied || result.isDismissed) {
            //navigate("/login");
          }
        });
      });
    } catch (err) {
    } finally {
      setFormActive(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="mx-auto flex items-center justify-center flex-col mt-44 md:mt-16 p-8 bg-white md:bg-[#f9f8f9] sm:1/2 md:w-1/3 rounded-2xl"> 
        <LoginIcon />
        <p className="text-bold text-[#1f261e] pt-4">Log In</p>

        <form action="#" className="pt-4 w-3/4">
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
                name="mobileNumber"
                id="email"
                className="bg-white border border-gray-300 text-[#c7c9c7] sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                placeholder="Enter 11-digit phone number"
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
            <button
              className="w-full text-white bg-[#47b518]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleLogin}
            >
              {formActive ? "()" : "Login"}
            </button>
            <div className="text-sm font-medium text-gray-900 text-center">
              New User?{" "}
              <Link to="/register" className="text-[#47b518] hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};
export default Login;
