import "./header.css"
import { MenuItems } from "./MenuItems"
import { useState } from "react"
import { Button } from "../buttons/Button"

export default function Header() {
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div className='header'>
            <nav className="HeaderItems">
                <h1 className="header-logo">Rafael</h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button buttonStyle='btn--outline'>Curriculum Vitae</Button>
            </nav>
        </div>
    )
}
