import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { rootReducer } from "./redux/reducers/rootReducer";
import { createStore  } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
);
