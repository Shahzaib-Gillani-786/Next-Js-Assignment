import CustomButton from "../../common/button/CustomButton";
import {navData} from '@/util/constants/index'
import Logo from "./Logo";
import Link from "next/link";

function NavBar() {
  // console.log("navData-----------------", navData)
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="flex gap-x-6 text-white">
           { navData.navList.map((item) => (
              <li className="hover:underline">
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </li>
            ))}
            </ul>
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles=" hidden md:flex inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
