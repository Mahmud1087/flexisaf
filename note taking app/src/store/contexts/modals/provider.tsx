// Everything Modal contexts goes here

import { ModalContext } from './context';

export type ModalContextType = {
  // Edit this to your needs
  userModal: boolean;
};

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const userModal = false;

  return (
    <ModalContext.Provider
      value={{
        userModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
