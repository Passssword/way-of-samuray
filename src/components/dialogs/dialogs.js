import React from 'react';
import styleDialogs from './dialogs.module.css';
import styleSendingMessege from './../../generalStyles/formSendingMessege.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id; /* записываем путь */
  
  return (
      <NavLink to={path}>{props.name}</NavLink>
    );
}

const DialogMessage = (props) => {
  return (
      <div className={styleDialogs.dialogsMessage}>
        {props.message}
      </div>
    );
}
  
function Dialogs(props) {

  //Redirect to login page
  // if( props.isAuth == false ) return ( <Redirect to={'/login'} /> );

  /*---Обработчик отправки сообщения---*/
  let textArea = React.createRef();
  function sendMessege() {
    let text = textArea.current.value;
    props.sendDialogsMessege(text);
    textArea.current.value = '';
  };

  /*------------------------------------*/
  
  let dialogElements = props.dialogUsers.map( (elem) => {
    return (<DialogItem name={elem.dialogUser} id={elem.id} />)
  } );
  let messagesElements = props.messagesData.map( (elem) => {
    return (<DialogMessage message={elem.message} />)
  } );

  return (
    <div className={styleDialogs.dialogsWrapper}>

      <div className={styleDialogs.dialogsListItems}>
        Dialogs headers
        <div className={styleDialogs.dialogsMenu}>
          { dialogElements }
        </div>
      </div>

      <div className={styleDialogs.dialogsContent}>
        { messagesElements }

        <div className={styleDialogs.sendingMessegePlace}>
          <fieldset>
            <legend>Оставить сообщение</legend>
            <textarea ref={textArea}/>
            <div className={styleSendingMessege.profileInputareaButtonsPlace}>
              <button onClick={sendMessege}>Send message</button>
            </div>
          </fieldset>
        </div>
        
      </div>
    </div>
  );
}

export default Dialogs;
