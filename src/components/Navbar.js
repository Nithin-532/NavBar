import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = event => {
    setOpen(!isOpen);
  }
  return(
    <>
      <nav className="NavbarItems">
        <h1 className="logo">
          {/* <i className="fab fa-react"></i> */}
          Car Rentals
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <Hamburger color={isOpen ? '#000' : '#fff'} toggled={isOpen} toggle={setOpen} />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}
                className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}