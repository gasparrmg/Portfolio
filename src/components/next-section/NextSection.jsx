import "./NextSection.css"
import { Icon } from '@iconify/react';
import chevronDoubleDown from '@iconify/icons-mdi/chevron-double-down';

export const NextSection = ({
    text,
    link
}) => {
    return (
        <div className="next-section">
            <a href={link} className="next-section-link">
                <p>{text}</p>
                <Icon icon={chevronDoubleDown} style={{color: '#333', width: '100%'}} width="40px" height="40px"/>
            </a>
        </div>
    )
}
