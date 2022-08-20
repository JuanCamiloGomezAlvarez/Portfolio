import "./styles.css"

export default function ProjectCard({title, description, link, img}){
    return(
        <>
            <div className="card-container">
                <div className="card-container-context">
                    <div className="card-container_img">
                        <img src={img} alt="this is the picture of the porject" />
                    </div>
                    <div className="card-container_info">
                        <h4>{title}</h4>
                        <p>{description}</p> 
                    </div>
                </div>
                <div className="card-container_link">
                    <a href={link}>See project</a>
                </div>
            </div>

        </>
    )
}