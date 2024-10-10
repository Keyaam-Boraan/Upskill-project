import Chat from "./Components/Chat/Chat";
import Detail from "./Components/Detail/Detail";
import List from "./Components/List/List";
import Login from "./Components/Login/Login";
import Notification from "./Components/Notification/Notification";

const App = () => {
  const user = true; //to move from the login and chat
  
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;
