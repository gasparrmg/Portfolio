import "./NextSection.css"
import { Icon } from '@iconify/react';
import chevronDoubleDown from '@iconify/icons-mdi/chevron-double-down';

export const NextSection = ({
    text,
    anchor
}) => {
    return (
        <a href={anchor}>
            <div className="next-section">
                <p>{text}</p>
                <Icon icon={chevronDoubleDown} style={{color: '#333'}} width="40px" height="40px"/>
            </div>
        </a>
    )
}
