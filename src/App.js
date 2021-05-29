import React from "react";

import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Header from "./components/header/header";
import DataList from "./components/dataList/dataList";
import Mapa from "./components/Map/map";

function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <DataList />
        <Mapa />
      </div>
    </Provider>
  );
}

export default App;
