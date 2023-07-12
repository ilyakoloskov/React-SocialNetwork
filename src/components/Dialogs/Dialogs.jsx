import "./Dialogs.sass"

function Dialog(){
    return(
        <div className="dialogs box">
            <div className="dialogs__wrapper">
                <input className="input-text" type="text" placeholder="Search..." name="" id="" />
                <div className="dialogs__items">
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                    <div className="dialog">
                        <img className="dialog__avatar" src="/images/profile.jpg" alt="" />
                        <div className="dialog__info">
                            <div className="dialog__name display-2">Ilya Koloskov</div>
                            <div className="dialog__preview display-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="messages">
                <div className="messages__item">
                    <img className="messages__avatar" src="/images/profile.jpg" alt="" />
                    <span className="messages__message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?
                    </span>
                </div>
                <div className="messages__item">
                    <img className="messages__avatar" src="/images/profile.jpg" alt="" />
                    <span className="messages__message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?
                    </span>
                </div>
                <div className="messages__item">
                    <img className="messages__avatar" src="/images/profile.jpg" alt="" />
                    <span className="messages__message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quod. Sequi nesciunt accusamus alias accusantium ullam. Porro aut molestias repellendus! Nemo praesentium sit aliquid aliquam, soluta cum voluptas enim minus?
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Dialog