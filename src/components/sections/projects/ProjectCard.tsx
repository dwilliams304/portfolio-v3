import { Project } from "../../../data/types";
import { IconMapper } from "../../../data/IconMapper";

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({project}: ProjectCardProps){
    return(
        <div>
            <p>{project.projectName}</p>
            <img src={project.projectImg} />
            <p>{project.projectDescription}</p>
            <div>
                {project.techUsed.map(tech => (
                    <span key={tech}>{IconMapper[tech]}</span>
                ))}
            </div>
        </div>
    )
}