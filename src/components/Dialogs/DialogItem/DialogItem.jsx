import { NavLink } from "react-router-dom"

function DialogItem(props){
    let path = `/dialogs/${props.id}`

    return(
        <NavLink className="dialog" to={path}>
            <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
            <div className="dialog__info">
                <div className="dialog__name display-2">{props.name}</div>
                <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
            </div>
        </NavLink>
    )
}

export default DialogItem