import { Inter, Source_Code_Pro } from "next/font/google";
import ".././globals.css";
import Header from "@/components/Header";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jobs",
  description: "Created by Karthik Raja",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${sourceCodePro.variable} antialiased`}
        >
          <ClerkLoading>
            
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
