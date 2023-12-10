interface Props {
  text: string;
  image: string;
  alt: string;
  link?: string;
  wordLink?: string;
}

export function Title({ image, text, alt, wordLink, link }: Props) {
  const textSplited = text.split(" ");

  function renderText() {
    return textSplited.map((item) => {
      if (wordLink === item) {
        return (
          <a
            className="underline text-main-blue cursor-pointer"
            href={link}
            target="_blank"
          >
            {wordLink}
          </a>
        );
      }

      return ` ${item} `;
    });
  }

  return (
    <a className="flex items-center gap-2 w-10/12">
      <h2 className="font-poppins text-center xsm:text-right text-sm md:text-lg text-main-black dark:text-main-white">
        {renderText()}
      </h2>
      <img src={image} alt={alt} className="w-12" />
    </a>
  );
}
