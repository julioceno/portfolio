import { observer } from "mobx-react-lite";
import { themeStore } from "../Header/store";
import { techsArray } from "./techs";
import { Props } from "./types";
export * from "./techs";
export * from "./types";

import "../Card/styles.css";

function chooseClassShadow({
  hasShadow,
  isDark,
}: {
  hasShadow: boolean;
  isDark: boolean;
}) {
  if (!hasShadow) return;

  const classShadow = isDark ? "card-with-shadow-dark" : "card-with-shadow";

  return classShadow;
}

const TechBadge = observer(({ name, hasShadow = false }: Props) => {
  const tech = techsArray.find((tech) => tech.name === name)!;

  const isDark = themeStore.theme === "dark";

  const classShadow = chooseClassShadow({ hasShadow, isDark });

  return (
    <div
      className={`min-w-30 flex items-center justify-center gap-x-2 border-[.1rem] rounded px-2 py-1 border-main-black dark:border-main-white ${classShadow}`}
    >
      <p className="text-xs font-poppins">{tech.label}</p>
      <img src={tech.icon} alt={tech.label} className="w-5" />
    </div>
  );
});

export { TechBadge };
