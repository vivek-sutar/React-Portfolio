import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPersonCircleQuestion,faEarthAmericas} from '@fortawesome/free-solid-svg-icons'
import CustomeHook from "./CustomeHook"
import { useRef } from "react"
const Projects = () =>{
    const [listProjects] = useState([
        {
            name:'Project real time',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            mission:'Back-end Developer,System analysis and design',
            language:'HTML5,CSS3,React Js,SocketIO....',
            image:'/project1.PNG'
        },
        {
            name:'Project real time',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            mission:'Back-end Developer,System analysis and design',
            language:'HTML5,CSS3,React Js,SocketIO....',
            image:'/project2.PNG'
        },
        {
            name:'Project real time',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            mission:'Back-end Developer,System analysis and design',
            language:'HTML5,CSS3,React Js,SocketIO....',
            image:'/project1.PNG'
        }

    ]);
    const refTab  = useRef();
    const refDivs = useRef([]);
    CustomeHook(refTab,refDivs)
    return (
        <section className="projects" ref={refTab}>
            <div className="title" ref={(el)=>el && refDivs.current.push(el)}>
                This is my Projects
            </div>
            <div className="des" ref={(el)=>el && refDivs.current.push(el)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi vero ipsum, nemo ut iure nihil quia facilis minus quam. Laborum commodi neque eaque minus rerum sunt et iusto ab.
            </div>
            <div className="list" ref={(el)=>el && refDivs.current.push(el)}>
                {
                    listProjects.map((value,key)=>(
                        <div key={key} className="item" ref={(el)=>el && refDivs.current.push(el)}>
                            <div className="images" ref={(el)=>el && refDivs.current.push(el)}>
                                <img src={value.image} alt="" ref={(el)=>el && refDivs.current.push(el)}/>
                            </div>
                            <div className="content" ref={(el)=>el && refDivs.current.push(el)}>
                                <h3>{value.name}</h3>
                                <div className="des" ref={(el)=>el && refDivs.current.push(el)}>{value.description}</div>
                                <div className="mission" ref={(el)=>el && refDivs.current.push(el)}>
                                    <div>
                                        <FontAwesomeIcon icon={faPersonCircleQuestion}/>
                                    </div>
                                    <div>
                                        <h4>Mission</h4>
                                        <div className="de">{value.mission}</div>
                                    </div>
                                </div>
                                <div className="mission">
                                    <div>
                                        <FontAwesomeIcon icon={faEarthAmericas}/>
                                    </div>
                                    <div>
                                        <h4>Languages</h4>
                                        <div className="de">{value.language}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects