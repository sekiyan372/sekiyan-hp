import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TechLabel: FC<Props> = ({ children }) => {
  return (
    <div className="inline-block rounded m-1 p-2 bg-white text-jade max-w-4">
      {children}
    </div>
  );
};

export default TechLabel;
