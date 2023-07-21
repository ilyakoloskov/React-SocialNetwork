import './Dialogs.sass'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { updateNewMessageBodyCreator, onSendMessageActionCreator } from '../../store/store'

function Dialogs(props) {
  let state = props.store.getState().dialogsPage

  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ))

  let messagesElement = state.messagesData.map((message) => <Message message={message.message} />)

  let onMessageChange = (e) => {
    let action = e.target.value
    props.store.dispatch(updateNewMessageBodyCreator(action))
  }

  let onSendMessageClick = () => {
    props.store.dispatch(onSendMessageActionCreator())
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
            // ref={newMessageElement}
            className="messages__textarea input-text"
            type="text"
            placeholder="Write a message..."
            value={state.newMessageBody}
            contenteditable
          />
          <div className="messages__btn" onClick={onSendMessageClick}>
            <img className="messages__btn-icon icon" src="/icons/send-mess.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
