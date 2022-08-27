import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./firebase/firebase";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { getDbChannels } from "./store/actions/channelActions";
import AppRouter from './routers/appRouter';
import { BrowserRouter } from "react-router-dom";


const store = configureStore();




  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );


