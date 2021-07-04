import "./socials.css"
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import twitterIcon from '@iconify/icons-mdi/twitter';

export default function Socials() {
    return (
        <div className='socials'>
            <ul className='socials-menu'>
                <li>
                    <a href="https://github.com/gasparrmg" target="_blank">
                        <Icon className="socials-menu-item" icon={githubIcon} style={{color: '#333'}} width="40px" height="40px"/>
                    </a>
                </li>
                <li className="socials-menu-item">
                    <a href="https://www.linkedin.com/in/rafaelgaspar97/" target="_blank">
                        <Icon className="socials-menu-item" icon={linkedinIcon} style={{color: '#333'}} width="40px" height="40px"/>
                    </a>
                </li>  
                <li className="socials-menu-item">
                    <a href="https://twitter.com/gasparrmg" target="_blank">
                        <Icon icon={twitterIcon} style={{color: '#333'}} width="40px" height="40px"/>
                    </a>
                </li>  
            </ul>
        </div>
    )
}
