import { GithubButton, VisitButton } from ".";

interface IProps {
  githubLink?: string;
  applicationLink?: string;
}

export function RedirectButtons({ applicationLink, githubLink }: IProps) {
  if (!applicationLink && !githubLink) return;

  return (
    <div className="flex gap-3 mt-5">
      {githubLink && <GithubButton link={githubLink} />}
      {applicationLink && <VisitButton link={applicationLink} />}
    </div>
  );
}
