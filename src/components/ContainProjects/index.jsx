import ProjectCard from "../ProjectCard";
import "./styles.css"

export default function ContainProjects(){
    return(
        <>
            <div className="contain-projects">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </>
    )
}