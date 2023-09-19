import localfont from "next/font/local";
  
  const sfbold = localfont({
    src: "../../public/fonts/SF-Pro-Display-Bold.otf",
    variable: '--font-sfbold'
  });

export default function RootLayout({children}: {children: React.ReactNode}) {
    return <div className={sfbold.className}>{children}</div>;
}
