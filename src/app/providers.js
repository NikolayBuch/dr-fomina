'use client';

import { ModalProvider } from "context/ModalProvider/ModalProvider";

export function Providers({ children }) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
}