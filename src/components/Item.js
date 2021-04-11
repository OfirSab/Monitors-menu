import React from 'react'

const Item = ({name,monitors}) => {
    const [isOpen, setOpen] = React.useState(false)

    const openNav = () =>{
        setOpen(!isOpen)
    }
    return (
        <li className="nav-item dropdown" onClick={() => openNav()}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">{name}</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {isOpen && monitors.map((monitor,index)=>{
                return(
                    <a className="dropdown-item" key={index} href="#">{monitor.Name}</a>
                )
            })}
        </div>
    </li>
    )
}

export default Item
