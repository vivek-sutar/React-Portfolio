import CustomeHook from "./CustomeHook"
import { useRef } from "react"
const Home = () =>{
    const refTab = useRef()
    CustomeHook(refTab)
    return (
        <section className="home" ref={refTab}>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>VIVEK</span>
                </div>
                <div className="des">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Unde, tenetur molestias non illum commodi impedit laborum porro. Consequatur corrupti facere quasi? Odio a aperiam repudiandae excepturi delectus quibusdam tenetur nesciunt?
                </div>
                <a href="/democv.pdf" target="_blank" rel="noopener" >Download My CV</a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/avatar.jpg" alt="" />
                    <div className="info">
                        <div>Developer</div>
                        <div>Vietnamese</div>
                        <div>03/12</div>
                        <div>Male</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home