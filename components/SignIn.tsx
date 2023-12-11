import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { GiMoneyStack } from "react-icons/gi";
import { auth, googleProvider } from "../firebase/firebase";

const SignIn = () => {
  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  return (
    // <section className="flex flex-col items-center min-h-screen w-full bg-split-gray-white">
    //   <div className="flex flex-col items-center justify-center border-2 border-orange1 opacity-90 bg-white m-auto min-h-[70vh] min-w-[70%] shadow-[20px_20px_60px_#d9d9d9]">
    //     <GiMoneyStack className="h-32 w-32 text-orange1 mb-10 mt-[-5rem]" />
    //     <button
    //       onClick={signInWithGoogle}
    //       className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
    //     >
    //       <span className="w-full h-full bg-gradient-to-br from-orange1 opacity-90 via-orange1 to-blue2 group-hover:from-orange1 group-hover:via-blue2 group-hover:to-blue2 absolute"></span>
    //       <span className="flex gap-2 relative px-12 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    //         <Image
    //           src={"/google.png"}
    //           className="w-6 h-6"
    //           width={100}
    //           height={100}
    //           alt="SignInWithGoogle"
    //         />
    //         <span className="relative text-white">Sign In</span>
    //       </span>
    //     </button>
    //   </div>
    // </section>

    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>

            <button
              onClick={signInWithGoogle}
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-orange1 opacity-90 via-orange1 to-blue2 group-hover:from-orange1 group-hover:via-blue2 group-hover:to-blue2 absolute"></span>
              <span className="flex gap-2 relative px-12 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <Image
                  src={"/google.png"}
                  className="w-6 h-6"
                  width={100}
                  height={100}
                  alt="SignInWithGoogle"
                />
                <span className="relative text-white">Sign In</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
