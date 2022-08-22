import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const TechTag: FC<Props> = ({ children }) => {
  return (
    <div className="inline-block rounded m-1 p-2 bg-white text-jade max-w-4">
      {children}
    </div>
  );
};
