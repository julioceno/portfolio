import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { themeStore } from "../Header/store";
import { motion } from "framer-motion";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const Card = observer(({ children }: Props) => {
  const isDark = themeStore.theme === "dark";

  const classShadow = isDark ? "card-with-shadow-dark" : "card-with-shadow";

  return (
    <motion.div
      className={`w-full h-full bg-gray-300 dark:bg-dark-second-black ${classShadow}`}
      whileHover={{ scale: 1.01, y: -1 }}
    >
      {children}
    </motion.div>
  );
});

export { Card };
