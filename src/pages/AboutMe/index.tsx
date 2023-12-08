import { Header } from "../../components";
import { motion } from "framer-motion";
import GymImage from "../../../public/about/gym.png";
import BookImage from "../../../public/about/book.png";
import ProfileImage from "../../../public/about/profile.png";
import { useRef } from "react";
import { useFollowPointer } from "./hooks";

export function AboutMe() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="bg-main-white dark:bg-dark-main-black min-h-screen pb-4 px-10 xl:px-48 flex flex-col">
      <Header />
      <main>
        <div className="overflow-hidden flex flex-row justify-center pt-16 items-center gap-3 sm:w-full">
          <motion.img
            src={GymImage}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className="z-40 p-1 w-20 sm:w-48  translate-x-10 rounded-lg"
          />
          <motion.img
            src={ProfileImage}
            ref={ref}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 20,
              restDelta: 0.001,
            }}
            className="z-50 w-20 sm:w-48 mb-10 rounded-lg"
          />
          <motion.img
            src={BookImage}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            className="z-40 p-1 w-20 sm:w-48  translate-x-10 rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}
