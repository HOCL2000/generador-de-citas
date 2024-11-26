import { variantsLi, variantsUl } from "@/utils/variantes"
import { motion } from "framer-motion"
import { Archive, LayoutDashboard } from "lucide-react";

const links = [
    {
      href: "/administrazione/inizio",
      icon: <LayoutDashboard className="text-[#5F56E2]" />,
      label: "Inizio",
    },
    {
      href: "/administrazione/citazioni",
      icon: <Archive className="text-[#5F56E2]" />,
      label: "Citazioni",
    },
  ];

const Navigation = () => {
  return (
    <motion.ul variants={variantsUl} className="flex flex-col gap-4 text-lg w-full  text-gray-800">
    {links.map((item, index) => (
      <motion.li key={index }  variants={variantsLi}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full flex items-center justify-center transition duration-300 hover:bg-[#d7d4ff]"
      >
        <a href={item.href} className="flex w-full items-center justify-center p-2 text-2xl gap-2 ">
          {item.icon}
          {item.label}
        </a>
      </motion.li>
    ))}
  </motion.ul>
  )
}

export default Navigation