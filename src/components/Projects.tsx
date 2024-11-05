import { Project } from "../data/types";

type ProjectsListProps = {
    projects: Project[];
}

export default function Projects({projects}: ProjectsListProps){
    const count = projects.length;

    return(
        <>
            <p>we have {count} projects.</p>
        </>
    )
}