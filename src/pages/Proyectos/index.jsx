import styled from "styled-components"
import ProjectCard from "../../components/ProjectCard"
import { proyectos } from "../../components/proyectos"

const StyledProyectos = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    min-height: 100vh;

    padding: 80px 32px;

    gap: 20px;

    .flex{
        display: flex;
        flex-direction: column-reverse;

        gap: 64px;
    }

    h1{
        font-size: 2rem;

    }

    @media screen and (min-width: 1024px){
        gap: 128px;
    }
`

const Proyectos = () => {
    return (
    <StyledProyectos>
        <h1>Proyectos</h1>
        <div className="flex">
            {
                proyectos.map((proyecto, i)=>{
                    const {id, img, title, descripcion,tags, demo} = proyecto
                    if(i % 2 == 1){
                        return <ProjectCard key={i} id={id} imagen={img} titulo={title} tags={tags} descripcion={descripcion} demo={demo}reverse='reverse'/>
                    }else{
                        return <ProjectCard key={i} id={id} imagen={img} titulo={title} tags={tags} descripcion={descripcion} demo={demo}/>
                    }
                    
                })
                
            }
        </div>
    </StyledProyectos>
    )
}

export default Proyectos