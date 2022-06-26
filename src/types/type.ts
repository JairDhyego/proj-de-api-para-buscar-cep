export interface propsEndereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface Props {
  placeholder: string;
  value: string;
  onChange: any;
  onBlur?: any;
}
