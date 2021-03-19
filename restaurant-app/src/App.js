import "./App.css";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import myStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  // console.log("app.js: ", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
