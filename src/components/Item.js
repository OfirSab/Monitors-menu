import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({name,monitors,legendNumber}) => {
    const [isOpen, setOpen] = React.useState(false)
    const openNav = () =>{
        setOpen(!isOpen)
    }
    return (
        <li className="nav-item dropdown" onClick={() => openNav()}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">{name}</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            { monitors.map((monitor,index)=>{
                return(
                    <Link to={`/legend/${legendNumber}`} className="dropdown-item" key={index}>
                        {monitor.Name}
                    </Link>
                )
            })}
        </div>
    </li>
    )
}

export default Item
