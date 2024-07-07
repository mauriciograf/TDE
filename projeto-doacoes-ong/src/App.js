import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle, {SpecialModalBackground} from "./styles/global";
import { ModalProvider } from 'styled-react-modal'

const App = () => (
  <ModalProvider>
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
  </ModalProvider>
);

export default App;
