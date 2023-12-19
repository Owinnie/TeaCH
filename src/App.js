import dbRef, {userName, connRef} from './server/firebase';
import "./App.css";
import {useEffect} from "react";
import { connect } from 'react-redux';
import { setUser, addParticipants, removeParticipants } from './store/actioncreator';
import { MainScreen } from './components/MainScreen/MainScreenComponent';

function App(props) {
    const participantsRef = dbRef.child("participants");
    useEffect(() => {
      connRef.on('value', (snap) => {
        if(snap.val()) {
          const defaultPref = {
            audio:true,
            video: false,
            screenShare:false
          };
          const userRef = participantsRef.push({
            userName,
            preference: defaultPref,
          });
          props.setUser({
            [userRef.key]: {
              userName,
              ...defaultPref,
            },
          });
          userRef.onDisconnect().remove();
        }
      });
    }, []);
useEffect(() => {
  if (props.user) {
    participantsRef.on("child_added", snap => {
      const { userName, preference } = snap.val();
      props.addParticipants ({
        [snap.key]: {
          userName,
          ...preference,
        },
      });
    });
    participantsRef.on("child_removed", snap => {
      props.removeParticipants (
        snap.key
      );
    });
  }
}, [props.user]);
return <div className="App">
  <MainScreen />
</div>
}

const mapStateProps = (state) => {
  return {
    user: state.currentUser,
    participants: state.participants,
  }
};

const mapDispatchProps = (dispatch) => {
  return {
    setUser: user => dispatch(setUser(user)),
    addParticipants: participants => dispatch(addParticipants(participants)),
    removeParticipants: partKey => dispatch(removeParticipants(partKey)),
  };
};

export default connect(mapStateProps, mapDispatchProps)(App);
