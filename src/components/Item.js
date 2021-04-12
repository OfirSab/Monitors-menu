import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({name,monitors,legendNumber}) => {
    const [isOpen, setOpen] = React.useState(false)
    const openNav = () =>{
        setOpen(!isOpen)
    }
    console.log("legend from item: "+legendNumber);
    return (
        <li className="nav-item dropdown" onClick={() => openNav()}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">{name}</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            { monitors.map((monitor,index)=>{
                return(
                    // <a className="dropdown-item" onClick={()=>console.log(monitor.Name)} key={index} href="#">{monitor.Name}</a>
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
