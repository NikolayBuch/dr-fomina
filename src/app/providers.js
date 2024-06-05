'use client';

import { Context } from "context/Context";
import { ModalProvider } from "context/ModalProvider/ModalProvider";
import { useLocalStorage } from "hooks/useLocalStorage";

export function Providers({ children }) {

  const [city, setCity] = useLocalStorage('city', {city: 'Тверь', answer: false,})

  return (
    <Context.Provider value={{ city, setCity }}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </Context.Provider>

  )
}