import type { ChildrenProps } from '@type/index';

export const Main = ({ children }: ChildrenProps) => {
  return (
    <main className="mx-auto w-full max-w-[100vw] px-0 lg:w-[90%] lg:min-w-[60rem]  xl:w-[90%] xl:min-w-[80rem] 2xl:w-[50%] 2xl:min-w-[87rem]">
      {children}
    </main>
  );
};
