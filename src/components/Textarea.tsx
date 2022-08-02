import { FC, ChangeEventHandler } from "react";

type Props = {
  id: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea: FC<Props> = ({ id, value, onChange }) => {
  return (
    <textarea
      id={id}
      className="border-solid border border-black rounded w-full p-2"
      rows={5}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
