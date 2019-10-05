import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Todobody from "./components/Todobody.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";
// function Apple()
// {
//     return <b>www.apple.com</b>;
// }
// export default Apple;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Todobody />
        <Footer />
      </Provider>
    );
  }
}

export default App;
