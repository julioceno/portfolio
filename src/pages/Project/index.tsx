import { useParams } from "react-router-dom";
import { Wrap } from "../../components";
import { useFindProject } from "./hooks";

export function Project() {
  const { id } = useParams();
  const project = useFindProject(id);

  return (
    <Wrap>
      <div className="flex flex-col flex-1 gap-10 mt-10 pb-10">
        {JSON.stringify(project, null, 2)}
      </div>
    </Wrap>
  );
}
