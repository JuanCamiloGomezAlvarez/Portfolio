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
        },
        {
            title: "Barra de progreso circular",
            description: "This exercise uses CSS and Javascript to make an animated reload circle.",
            link: " https://juancamilogomezalvarez.github.io/barra-progreso-circular/",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVC9W3Fw_EZeIX9IlWHxkwfcCs_CsuBTkEAg&usqp=CAU"
        },
        {
            title: "Price cards",
            description: "This exercise uses CSS to make a responsive price cards.",
            link: "https://juancamilogomezalvarez.github.io/price-cards/",
            img: "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"
        },
        {
            title: "Blog CSS y HTML",
            description: "This exercise uses CSS and HTML to create a personal blog .",
            link: "https://juancamilogomezalvarez.github.io/blog-maquetacion-css/",
            img: "https://images.pexels.com/photos/7672255/pexels-photo-7672255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Matematicas con JS",
            description: "This exercise uses JavaScript to solve some math problems.",
            link: "https://juancamilogomezalvarez.github.io/math-javascript/",
            img: "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_960_720.jpg"
        },
        {
            title: "Piedra papel y tijers",
            description: "El clasico juego de piedra papel o tijera hecho con HTML, JS y CSS.",
            link: "https://juancamilogomezalvarez.github.io/piedra-papel-tijera/",
            img: "https://media.istockphoto.com/id/1324377846/es/foto/collage-digital-arte-moderno-signo-de-mano-de-roca-tijera-y-papel-con-geometr%C3%ADa-de-conflicto.jpg?s=612x612&w=0&k=20&c=F6aI6jI4yxqkM1qBZFOAKDhKkDpXr5Q49wrggz7LZYQ="
        },
        {
            title: "Mokepon",
            description: "Proyecto realizado en el curso de programaci??n de Platzi, con un toque personal. HTML, JS y CSS.",
            link: "https://juancamilogomezalvarez.github.io/mokipon/",
            img: "https://juancamilogomezalvarez.github.io/mokipon/img/mokepons_mokepon_ratigueya_attack.png"
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