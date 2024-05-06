
export const metadata = {
  title: "Клиника Докторо Фомина",
  description: "Клиника Докторо Фомина",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
