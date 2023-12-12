import { motion } from "framer-motion";

interface IProps {
  images: string[];
}

export function MansdoryLayout({ images }: IProps) {
  return (
    <div className="md:columns-2 gap-3 pb-5">
      {images.map((image) => (
        <motion.div
          whileHover={{ scale: 1.001, y: -1 }}
          className="cursor-pointer"
        >
          <img
            src={image}
            alt="a single checked balloon"
            className="rounded mb-5 object-cover shadow-2xl  "
          />
        </motion.div>
      ))}
    </div>
  );
}
