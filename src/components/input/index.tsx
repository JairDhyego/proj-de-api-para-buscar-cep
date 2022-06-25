import * as C from "./styles";

interface Props {
  placeholder: string;
  value: string;
  onChange: any;
  onBlur?: any;
}

function Input({ placeholder, value, onChange, onBlur }: Props) {
  return (
    <C.Container>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </C.Container>
  );
}

export default Input;
