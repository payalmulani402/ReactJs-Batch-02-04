import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakecontainer from "./Components/HooksCakecontainer";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import NewCakeContainer from "./Components/NewCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <CakeContainer />
          {/* <IceCreamContainer />
          <HooksCakecontainer />
          <NewCakeContainer /> */}
        </Provider>
      </div>
    </>
  );
}

export default App;

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
