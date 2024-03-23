import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact,faHtml5,faCss3,faJs,faVuejs,faLaravel} from '@fortawesome/free-brands-svg-icons'
import CustomeHook from './CustomeHook'
import { useRef } from 'react'
const Skills = () => {
    const [listSkills] = useState([
        {
            name:'HTML',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faHtml5
        },
        {
            name:'CSS',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faCss3
        },
        {
            name:'Javascript',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faJs
        },
        {
            name:'ReactJs',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faReact
        },
        {
            name:'VueJs',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faVuejs
        },
        {
            name:'Laravel',
            description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            icon:faLaravel
        }
    ]);
    const refTab = useRef();
    const refDivs = useRef([]);
    CustomeHook(refTab,refDivs)
    return (
        <section className="skills" ref={refTab}>
            <div className="title" ref={(el)=>el && refDivs.current.push(el)}>
                This is my skills
            </div>
            <div className="des" ref={(el)=>el && refDivs.current.push(el)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur nulla dicta libero quidem quos rerum quibusdam? Perspiciatis, quibusdam repudiandae.
            </div>
            <div className="list" ref={(el)=>el && refDivs.current.push(el)}>
                {
                    listSkills.map((value,key)=>(
                        <div key={key} className="item" ref={(el)=>el && refDivs.current.push(el)}>
                            <FontAwesomeIcon icon={value.icon} ref={(el)=>el && refDivs.current.push(el)}/>
                            <h3 ref={(el)=>el && refDivs.current.push(el)}>{value.name}</h3>
                            <div className="des" ref={(el)=>el && refDivs.current.push(el)}>{value.description}</div> 
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Skills