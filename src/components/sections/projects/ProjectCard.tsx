import { Project } from "../../../data/types";
import { IconMapper } from "../../../data/IconMapper";

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({project}: ProjectCardProps){
    
    return(
        <div className="prj-card">
            <div className="prj-card-content">
                <img src={project.projectImg} className="prj-img"/>
                <p className="prj-name">{project.projectName}</p>
                <p className="prj-desc">{project.projectDescription}</p>
                <div className="prj-tech-container">
                    {project.techUsed.map(tech => (
                        <span key={tech} className="prj-tech">{IconMapper[tech as keyof typeof IconMapper]}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}