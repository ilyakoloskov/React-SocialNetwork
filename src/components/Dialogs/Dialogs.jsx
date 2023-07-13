import { NavLink } from "react-router-dom"
import "./Dialogs.sass"


function Message(props) {
    return(
        <div className="messages__item">
            <img className="messages__avatar" src="/images/profile.jpg" alt="" />
            <span className="messages__message">
                {props.message}
            </span>
        </div>
    )
}


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


function Dialogs(){

    let dialogsData = [
        {id: 0, name: 'Ilya'},
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Anton'}
    ]

    let dialogsElement = dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/>
)

    let messagesData = [
        {id: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?'},
        {id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam.'},
    ]

    let messagesElement = messagesData.map( message => <Message message={message.message}/>)

    return(
        <div className="dialogs box">
            <div className="dialogs__wrapper">
                <input className="dialogs__search input-text" type="text" placeholder="Search..." name="" id="" />
                <div className="dialogs__items">

                    {dialogsElement}

                </div>
            </div>
            <div className="messages">
                <div className="messages__wrapper">
                    {/* <div className="messages__item messages_my">
                        <img className="messages__avatar" src="/images/profile.jpg" alt="" />
                        <span className="messages__message">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?
                        </span>
                    </div> */}
                    {messagesElement}

                </div>
                <div className="messages__controls">
                    <textarea className="messages__textarea input-text" type="text" placeholder="Write a message..." contenteditable/>
                    <div className="messages__btn">
                        <img className="messages__btn-icon icon" src="/icons/send-mess.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs