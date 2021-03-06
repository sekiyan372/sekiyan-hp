import { FC, ChangeEventHandler } from "react";

type Props = {
  id: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<Props> = ({ id, value, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      className="border-solid border border-black rounded w-full p-2"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
