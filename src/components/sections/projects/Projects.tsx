import { DummyProjectData } from "../../../data/DummyProjectData";
import ProjectCard from "./ProjectCard";

export default function Projects(){
    return(
        <div className="projects">
            {
                DummyProjectData.map(proj => (
                    <ProjectCard 
                        project={proj}
                        key={proj.projectName}
                    />
                ))
            }
        </div>
    )
}