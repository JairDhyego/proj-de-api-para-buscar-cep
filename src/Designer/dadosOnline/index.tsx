import * as C from "./styles";
import Input from "../../components/input";
import { useState, ChangeEvent } from "react";

function DadosOnline() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <C.Container>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setNome(e.target.value);
        }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
    </C.Container>
  );
}

export default DadosOnline;
