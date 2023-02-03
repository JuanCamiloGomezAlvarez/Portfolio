import ProjectCard from "../ProjectCard";
import "./styles.css"

export default function ContainProjects(){


    const projects = [
        {
            title: "Mokepon",
            description: "HTML, JS and CSS.",
            link: "https://juancamilogomezalvarez.github.io/mokepon/public/index.html",
            img: "https://juancamilogomezalvarez.github.io/mokepon/public/img/mokepons_mokepon_ratigueya_attack.png"
        },
        {
            title: "BatataBit",
            description: "CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/Batata-Bit/",
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/726f1a115332395.Y3JvcCwxOTIwLDE1MDEsMCww.jpg"
        },
        {
            title: "Movie App",
            description: "API REST, JAVASCRIPT, CSS, HTML.",
            link: "https://juancamilogomezalvarez.github.io/Movie-App/",
            img: "https://www.androidauthority.com/wp-content/uploads/2019/06/Tubi-best-movie-apps-for-Android.jpg"
        },
        {
            title: "Responsive Form",
            description: "CSS AND HTML.",
            link: "https://juancamilogomezalvarez.github.io/responsive-form/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"
        },
        {
            title: "Componente copia de Twitter follow card",
            description: " CSS, REACT.",
            link: "https://juancamilogomezalvarez.github.io/twitter-follow-card/",
            img: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        },
        {
            title: "Barra de progreso circular",
            description: " CSS and JAVASCRIPT.",
            link: " https://juancamilogomezalvarez.github.io/barra-progreso-circular/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVC9W3Fw_EZeIX9IlWHxkwfcCs_CsuBTkEAg&usqp=CAU"
        },
        {
            title: "Price cards",
            description: "CSS AND HTML.",
            link: "https://juancamilogomezalvarez.github.io/price-cards/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"
        },
        {
            title: "Blog CSS y HTML",
            description: "CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/blog-maquetacion-css/",
            img: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Matematicas con JS",
            description: "JAVASCRIPT.",
            link: "https://juancamilogomezalvarez.github.io/math-javascript/",
            img: "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_960_720.jpg"
        },
        {
            title: "Piedra papel y tijers",
            description: "HTML, JS and CSS.",
            link: "https://juancamilogomezalvarez.github.io/piedra-papel-tijera/",
            img: "https://media.istockphoto.com/id/1324377846/es/foto/collage-digital-arte-moderno-signo-de-mano-de-roca-tijera-y-papel-con-geometr%C3%ADa-de-conflicto.jpg?s=612x612&w=0&k=20&c=F6aI6jI4yxqkM1qBZFOAKDhKkDpXr5Q49wrggz7LZYQ="
        },
        
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