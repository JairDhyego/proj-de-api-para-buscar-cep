import { GlobalStyle } from "./styles/GlobalStyle";
import DadosOnline from "./Designer/dadosOnline/index";
import Endereco from "./Designer/Endereco/index";
import Header from "./components/Header/index";
import * as C from "./styles/styled";
import Button from "./components/Button/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <C.Main>
        <Header />
        <DadosOnline />
        <Endereco />
        <Button />
        <Footer />
        <GlobalStyle />
      </C.Main>
    </>
  );
}

export default App;
