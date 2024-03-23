import { useState } from "react"
import CustomeHook from "./CustomeHook"
import { useRef } from "react"
const Contacts = () => {
    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+918888888888'
        },
        {
            title: 'Email',
            value: 'viveksutar003@gmail.com'
        },
        {
            title: 'Youtube',
            value: '@viveksutar'
        }
    ])
    const refTab = useRef();
    const divs = useRef([]);
    CustomeHook(refTab,divs)
    return (
        <section className="contacts" ref={refTab}>
            <div className="title" ref={(el)=>el && divs.current.push(el)}>
                This is My Contacts
            </div>
            <div className="des" ref={(el)=>el && divs.current.push(el)}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio vero nostrum dolorum, perferendis perspiciatis dignissimos pariatur dolore hic aliquam et ullam maxime aliquid suscipit quam libero quas amet in reiciendis?
            </div>
            <div className="list" ref={(el)=>el && divs.current.push(el)}>
                {
                    listContacts.map((value, key) => (
                        <div key={key} className="item" >
                            <h3>{value.title}</h3>
                            <div>{value.value}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Contacts