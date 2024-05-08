import { Providers } from "./providers";

export const metadata = {
  title: "Клиника Докторо Фомина",
  description: "Клиника Докторо Фомина",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
