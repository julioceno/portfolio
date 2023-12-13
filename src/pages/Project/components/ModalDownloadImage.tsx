import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useClickOutside } from "../../../common";

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  image: string;
}

export function ModalDownloadImage({ image, handleClose, isOpen }: IProps) {
  const popupRef = useRef(null);

  useClickOutside({ ref: popupRef, action: () => handleClose() });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed bg-zinc-950/50 z-50 h-full w-full top-0 left-0 flex justify-center items-center">
          <motion.div
            className="bg-main-white dark:bg-dark-second-black px-3 py-6 rounded overflow-scroll overflow-x-hidden overscroll-contain  max-h-[83.333333%] w-[80%] flex flex-col gap-4"
            ref={popupRef}
          >
            <img src={image} className="rounded" />
            <div className="flex gap-1 justify-end font-poppins w-full lg:w-1/4 self-end">
              <a
                className="text-main-white bg-main-blue hover:bg-main-blue-hover duration-300 px-4 py-1 rounded flex-1 flex justify-center items-center"
                href={image}
                download
              >
                Salvar
              </a>
              <button
                className="text-main-black border-main-black dark:hover:bg-gray-200 dark:text-main-white dark:border-main-white dark:hover:bg-zinc-950/10  duration-300 px-4 py-1 border rounded flex-1"
                onClick={handleClose}
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
