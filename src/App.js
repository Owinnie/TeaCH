import dbRef, {userName, connRef} from './server/firebase';
import "./App.css";
import React, {useEffect} from "react";
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
      // console.log("Child Added:", snap.key);
      const { userName, preference } = snap.val();
      props.addParticipants ({
        [snap.key]: {
          userName,
          ...preference,
        },
      });
    });
    participantsRef.on("child_removed", snap => {
      // console.log("Child Removed:", snap.key);
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

// import React, { useRef } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useRef } from 'react';

// function App() {
//   const videoRef = useRef()
//   return (
//     <div className="App">
//       <>
//       <span>800 * 600</span>
//       <video ref={videoRef} className='video'>Video not available</video>
//       </>
//     </div>
//   );
// }

// export default App;
