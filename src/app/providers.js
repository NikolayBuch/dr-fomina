'use client';

import { ModalProvider } from "context/modalContext";

export function Providers({ children }) {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  )
}