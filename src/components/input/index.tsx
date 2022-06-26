import { Props } from "../../types/type";
import * as C from "./styles";

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
