import React from 'react';
import './SidebarOption.css';

function SidebarOption (props) {
    const { title, Icon } = props;
    return(
        <div className="sidebarOption">
            { Icon && <Icon className="sidebarOption_icon" />}
            { Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default SidebarOption;