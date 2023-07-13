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

export default Message