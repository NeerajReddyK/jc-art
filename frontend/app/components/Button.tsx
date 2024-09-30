"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

interface ButtonProps {
  name: string
}

const Button: React.FC<ButtonProps> = ({name}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/what-people-are-saying"); // Redirect to the new route
  };

  return (
    <motion.button 
      onClick={handleButtonClick} 
      className="bg-customPurple rounded-lg text-white font-normal md:font-semibold py-3 px-6"
      whileHover={{scale: 1.1}}  
      transition={{ type: "spring", stiffness: 300, damping: 55 }}
    >
      {name}
    </motion.button>
  );
};

export default Button;
