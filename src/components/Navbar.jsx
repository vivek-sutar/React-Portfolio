import { useState } from "react"
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = ({ activeTab }) => {

  const [listNav] = useState(['home', 'skills', 'projects', 'contacts'])
  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav()
  }
  const [statusNav,setStatusNav] = useState('')
  const toggleNav = () =>{
    setStatusNav(statusNav==='active' ? null : 'active')
  }
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <nav className={statusNav}>
        {
          listNav.map((value, key) => (
            <span key={key} className={activeTab === value ? 'active' : ''}
              onClick={() => changeTab(value)}>{value}</span>
          ))
        }
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
}
const mapStateToProp = (state) => ({
  activeTab: state.activeTab
})

export default connect(mapStateToProp, { changeTabActive })(Navbar)
