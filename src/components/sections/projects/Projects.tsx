import { Project } from "../../../data/types";
import ProjectCard from "./ProjectCard";
import "./projects.css";

type ProjectsProps = {
    projects: Project[];
}

export default function Projects(props: ProjectsProps){
    return(
        <div className="projects">
            {
                props.projects.map(proj => (
                    <ProjectCard 
                        project={proj}
                        key={proj.projectName}
                    />
                ))
            }
        </div>
    )
}