import { Project } from "../../../data/types";
import { IconMapper } from "../../../data/IconMapper";

type ProjectsListProps = {
    projects: Project[];
}

export default function Projects({projects}: ProjectsListProps){
    const count = projects.length;


    return(
        <>
            <p>we have {count} projects.</p>
            <div>
                {
                    projects.map(project => (
                        <div>
                            <p>{project.project_name}</p>
                            <p>{project.project_description}</p>
                            <div>
                                {
                                    project.tech_used.map((tech, i) => <span key={i}>{IconMapper[tech]}</span>)
                                }
                            </div>
                            <div>
                                {
                                    project.links[0] ?
                                    <a>Github</a>
                                    :
                                    <p>(private GitHub, sorry)</p>
                                }
                                {
                                    project.links[1] ?
                                    <a>Demo</a>
                                    :
                                    <p>(no demo, sorry)</p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}