import React from 'react'

const Item = ({name,links}) => {
    const [isOpen, setOpen] = React.useState(false)

    const openNav = () =>{
        setOpen(!isOpen)
    }
    return (
        <li className="nav-item dropdown" onClick={() => openNav()}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">{name}</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {/* {isOpen && links.map((link,index)=>{
                return(
                    <a className="dropdown-item" key={index} href="#">{link.title}</a>
                )
            })} */}
        </div>
    </li>
    //   <div onClick={() => openNav()}>
    //     <h1>item</h1>
    //     {isOpen && links.map((link,index)=>{
    //         return(
    //             <div key={index}>
    //                 <p>{link.title}</p>
    //             </div>
    //         )
    //     })}
    //   </div>
    )
}

export default Item
