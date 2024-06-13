import AuthBox from "@/components/authComponents/AuthBox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  return (
    <main className="bg-white pt-52 md:pt-44 pb-[1.41rem] flex justify-center">
      <AuthBox />

      <ToastContainer />
    </main>
  );
};

export default LoginPage;
