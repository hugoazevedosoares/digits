import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { GlobalStyle, AppContainer } from "./styles";
import CPF from "./views/CPF";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/digits">
        <AppContainer id="main">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/cpf" component={CPF} />
          <Redirect to="/" />
          <Footer />
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
