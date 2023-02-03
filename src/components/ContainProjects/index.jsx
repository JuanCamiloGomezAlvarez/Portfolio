import ProjectCard from "../ProjectCard";
import "./styles.css"

export default function ContainProjects(){


    const projects = [
        {
            title: "Mokepon",
            description: "HTML, JavaScript and CSS.",
            link: "https://juancamilogomezalvarez.github.io/mokepon/public/index.html",
            img: "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "pikachu con sombrero marron Foto de Carolina Castilla Arias"
        },
        {
            title: "BatataBit",
            description: "CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/Batata-Bit/",
            img: "https://mir-s3-cdn-cf.behance.net/projects/404/726f1a115332395.Y3JvcCwxOTIwLDE1MDEsMCww.jpg",
            alt: "imagen de un screenshot del proyecto BatataBit"
        },
        {
            title: "Movie App",
            description: "API REST, JavaScript, CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/Movie-App/",
            img: "https://www.androidauthority.com/wp-content/uploads/2019/06/Tubi-best-movie-apps-for-Android.jpg",
            alt: "screenshot de una app de peliculas"
        },
        {
            title: "Responsive Form",
            description: "CSS AND HTML.",
            link: "https://juancamilogomezalvarez.github.io/responsive-form/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png",
            alt: "logo de css"
        },
        {
            title: "Component copy of Twitter follow card",
            description: " CSS, React.",
            link: "https://juancamilogomezalvarez.github.io/twitter-follow-card/",
            img: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
            alt: "logo de React "
        },
        {
            title: "Circular progress bar",
            description: " CSS and JavaScript.",
            link: " https://juancamilogomezalvarez.github.io/barra-progreso-circular/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVC9W3Fw_EZeIX9IlWHxkwfcCs_CsuBTkEAg&usqp=CAU",
            alt: "logos de css, html y javascript"
        },
        {
            title: "Price cards",
            description: "CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/price-cards/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png",
            alt:"logo de css"
        },
        {
            title: "Blog CSS and HTML",
            description: "CSS and HTML.",
            link: "https://juancamilogomezalvarez.github.io/blog-maquetacion-css/",
            img: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "casco de astronauta con fondo morado"
        },
        {
            title: "Math with JS",
            description: "JavaScript.",
            link: "https://juancamilogomezalvarez.github.io/math-javascript/",
            img: "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_960_720.jpg",
            alt: "simbolo pi junto a sus primeros numeros decimales"
        },
        {
            title: "Rock paper scissors",
            description: "HTML and JS .",
            link: "https://juancamilogomezalvarez.github.io/piedra-papel-tijera/",
            img: "https://media.istockphoto.com/id/1324377846/es/foto/collage-digital-arte-moderno-signo-de-mano-de-roca-tijera-y-papel-con-geometr%C3%ADa-de-conflicto.jpg?s=612x612&w=0&k=20&c=F6aI6jI4yxqkM1qBZFOAKDhKkDpXr5Q49wrggz7LZYQ=",
            alt: "piedra, papel o tijera"
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
                                img = {element.img}
                                alt = {element.alt}
                            />
                       
                })}
            </div>
        </>
    )
}