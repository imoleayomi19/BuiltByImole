export const metadata = {
  title: "BuiltByImole",
  description: "Portfolio of Immanuel Imole - Frontend Developer",
  icons: {
    icon: "/dp.png",
  },

};

import "@/app/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/dp.png" type="image/svg+xml" />
      </head> */}
      <body>{children}</body>
    </html>
  );
}