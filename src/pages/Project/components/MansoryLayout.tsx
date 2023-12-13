import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { ModalDownloadImage } from "./ModalDownloadImage";

interface IProps {
  images: string[];
}

export function MansdoryLayout({ images }: IProps) {
  const [imageClicked, setImageClicked] = useState<Nullable<string>>(null);

  return (
    <Fragment>
      <div className="md:columns-2 gap-3 pb-5">
        {images.map((image) => (
          <motion.button
            whileHover={{ scale: 1.025, y: -1 }}
            className="cursor-pointer"
            onClick={() => setImageClicked(image)}
          >
            <img
              src={image}
              alt="a single checked balloon"
              className="rounded mb-5 object-cover shadow-2xl  "
            />
          </motion.button>
        ))}
      </div>
      <ModalDownloadImage
        isOpen={!!imageClicked}
        handleClose={() => setImageClicked(null)}
        image={imageClicked!}
      />
    </Fragment>
  );
}
