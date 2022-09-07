import ProjectCard from "../ProjectCard";
import "./styles.css"

export default function ContainProjects(){


    const projects = [
        {
            title: "BatataBit",
            description: "This is a project made in Platzi to improve my skills in css, html and js.",
            link: "https://juancamilogomezalvarez.github.io/Batata-Bit/",
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/726f1a115332395.Y3JvcCwxOTIwLDE1MDEsMCww.jpg"
        },
        {
            title: "Movie App",
            description: "This is an App made in Platzi, using API REST.",
            link: "https://juancamilogomezalvarez.github.io/Movie-App/",
            img: "https://www.androidauthority.com/wp-content/uploads/2019/06/Tubi-best-movie-apps-for-Android.jpg"
        },
        {
            title: "Responsive Form",
            description: "This is a responsive form made with css.",
            link: "https://juancamilogomezalvarez.github.io/responsive-form/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"
        }

    
    ]

    return(
        <>
            <div className="contain-projects">
                {projects.map(element => {
                    return <ProjectCard 
                                key={element.title} 
                                title = {element.title} 
                                description = {element.description} 
                                link = {element.link}
                                img = {element.img}/>
                       
                })}
            </div>
        </>
    )
}