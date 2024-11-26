import { iconVariants, sidebarVarianst } from "@/utils/variantes";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";

const MenuPhone = () => {
  const [isOpen, setIsOpen] = useState(false);
  function logout(){
      localStorage.clear()
      setTimeout(()=>{
          location.reload()
      },1000)
  }

  return (
    <div className="flex w-full lg:overflow-hidden lg:hidden py-2 border">
        <button onClick={() => setIsOpen((prev) => !prev)} className="rounded text-black p-4 z-[10000] mx-4 top-2 border shadow left-4">
        <AnimatePresence mode="wait" >
          {isOpen ? 
            <motion.svg key="close" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16" initial="hidden" animate="visible" exit="hidden" variants={iconVariants} transition={{ duration: 0.3 }}>
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </motion.svg>
           : 
            <motion.svg key="open" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16" initial="hidden" animate="visible" exit="hidden" variants={iconVariants} transition={{ duration: 0.3 }}>
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </motion.svg>
          }
        </AnimatePresence>
        </button>
        <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVarianst}
            className="fixed top-0 left-0 h-screen bg-white z-[9999] flex flex-col w-full  items-center justify-evenly"
          >
            <p className='text-3xl  text-[#5F56E2]'>Administrazione</p>
              <Navigation/>

            <div className='flex items-center justify-center w-full max-w-[300px] '>
              <AnimatePresence>
                <button  onClick={logout} className='text-white w-full  flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
                    <LogOut /> 
                    <span>
                        Uscire
                    </span>
                </button>
                </AnimatePresence>
            </div>
          </motion.nav>
        )}
        </AnimatePresence>
    </div>
  );
};

export default MenuPhone;
