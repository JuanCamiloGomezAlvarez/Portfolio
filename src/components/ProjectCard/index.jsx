import "./styles.css"

export default function ProjectCard(){
    return(
        <>
            <div className="card-container">
                <div className="card-container-context">
                    <div className="card-container_img">
                        <img src="https://crm.academiaintegral.com.es//uploads/courses/5591/5bfebd041091cb7f7ada7d8_ll.jpg" alt="this is the picture of the porject" />
                    </div>
                    <div className="card-container_info">
                        <h4>Project</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi labore, at officiis ipsa error asperiores eaque nesciunt voluptates culpa.</p> 
                    </div>
                </div>
                <div className="card-container_link">
                    <a href="/">See project</a>
                </div>
            </div>

        </>
    )
}