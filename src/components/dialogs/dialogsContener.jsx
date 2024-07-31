// import React from 'react';
import Dialogs from './dialogs.js';
import withAuthRedirect from './../../redux/withAuthRedirect.jsx';
import { actionCreatorAddMessegeDialogs } from './../../redux/reducerDialogs.js';
import { connect } from 'react-redux';
// import StoreContext from './../../redux/StoreContext.js';

// const DialogsContener = () => {

//   return (
//     <StoreContext.Consumer> 
//       { (store) => {
//         let state = store.getState();
//         function sendDialogsMessege(messege) {
//           store.dispatch( actionCreatorAddMessegeDialogs(messege) );
//         };

//         return ( <Dialogs 
//           sendDialogsMessege={sendDialogsMessege}
//           dialogUsers={state.dialog.dialogUsers}
//           messagesData={state.dialog.messagesData} />
//       ) }
//       }
//     </StoreContext.Consumer>
//   );
// }

let withDialogsRedirect = withAuthRedirect(Dialogs);

let mapStateToProps = ( state ) => {
  return (
    {
      dialogUsers: state.dialog.dialogUsers,
      messagesData: state.dialog.messagesData,
      isAuth: state.auth.isAuthToggle
    });
};
let mapDispatchToProps = ( dispatch ) => {
  return (
    {
      sendDialogsMessege: (messege) => {dispatch( actionCreatorAddMessegeDialogs(messege) )}
    });
};
const DialogsContener = connect(mapStateToProps, mapDispatchToProps)(withDialogsRedirect);

export default DialogsContener;
