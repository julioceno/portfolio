import { Card } from "../../../components";

function ProjectCard() {
  return (
    <Card>
      <div className="min-h-[10rem] h-full cursor-pointer font-poppins text-main-black dark:text-main-white flex flex-col p-2 md:p-4">
        <h3 className="uppercase font-semibold text-lg text-center md:text-start">
          Cherry Task
        </h3>
        <h3 className="uppercase text-sm italic text-center md:text-start">
          Uma aplicação que te ajuda a organizar suas tarefas do dia a dia,
          permitindo que voce torne sua vida muito mais organizada, facilitando
          também na escrita dos passos para cada tarefa, pois toda alteração
          feita no conjunto de atividades é salvo automaticamente, aumentando a
          produtividade e diminuindo a possibilidade de falhas.
        </h3>
      </div>
    </Card>
  );
}

export { ProjectCard };
