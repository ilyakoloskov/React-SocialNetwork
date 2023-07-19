import './Dialogs.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { updateNewMessageTextActionCreator } from '../../store/store'

function Dialogs(props) {
  let dialogsElement = props.state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ))

  let messagesElement = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ))

  let newMessageElement = React.createRef()

  let onMessageChange = () => {
    let action = newMessageElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(action))
  }

  return (
    <div className="dialogs box">
      <div className="dialogs__wrapper">
        <input
          className="dialogs__search input-text"
          type="text"
          placeholder="Search..."
          name=""
          id=""
        />
        <div className="dialogs__items">{dialogsElement}</div>
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
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            className="messages__textarea input-text"
            type="text"
            placeholder="Write a message..."
            value={props.state.newMessageText}
            contenteditable
          />
          <div className="messages__btn">
            <img className="messages__btn-icon icon" src="/icons/send-mess.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
