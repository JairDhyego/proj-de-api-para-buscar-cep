import * as C from "./styles";
import Input from "./../../components/input/index";
import { ChangeEvent, useState, useEffect, SetStateAction } from "react";

function Endereco() {
  const [cep, setCep] = useState("");
  const [local, setLocal] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const pesquisarCep = async () => {
    const entradaCep = cep;
    const url = `http://viacep.com.br/ws/${entradaCep}/json/`;
    const dados = await fetch(url);
    const response = await dados.json();
    preencherFormulario(response);
  };

  interface propsEndereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }

  const preencherFormulario = (endereco: propsEndereco) => {
    setLocal(endereco.logradouro);
    setBairro(endereco.bairro);
    setCidade(endereco.localidade);
    setEstado(endereco.uf);
  };

  return (
    <C.Container>
      <C.DadosUm>
        <Input
          placeholder="Cep"
          value={cep}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCep(e.target.value)
          }
          onBlur={pesquisarCep}
        />
        <Input
          placeholder="Endereço"
          value={local}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocal(e.target.value)
          }
        />
        <Input
          placeholder="Número"
          value={numero}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNumero(e.target.value)
          }
        />
      </C.DadosUm>

      <C.DadosDois>
        <Input
          placeholder="Bairro"
          value={bairro}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBairro(e.target.value)
          }
        />
        <Input
          placeholder="Cidade"
          value={cidade}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCidade(e.target.value)
          }
        />
        <Input
          placeholder="Estado"
          value={estado}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEstado(e.target.value)
          }
        />
      </C.DadosDois>
    </C.Container>
  );
}

export default Endereco;
