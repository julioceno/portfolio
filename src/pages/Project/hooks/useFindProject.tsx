import { useNavigate } from "react-router-dom";
import { projects } from "../../Projects/projects";
import { useEffect } from "react";

function useFindProject(id?: string) {
  const navigate = useNavigate();

  const projectFound = projects.find((project) => project.id === id);

  useEffect(() => {
    if (!projectFound) {
      return navigate("/not-found");
    }
  }, [projectFound]);

  return projectFound;
}

export { useFindProject };
