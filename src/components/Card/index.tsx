import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card({ children }: Props) {
  return (
    <motion.div
      className={`w-full h-full bg-gray-300 dark:bg-dark-second-black black-shadow dark:shadow-white-shadow`}
      whileHover={{ scale: 1.01, y: -1 }}
    >
      {children}
    </motion.div>
  );
}

export { Card };
