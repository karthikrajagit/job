import Loader from '@/components/Loader';
import '.././globals.css';
import {ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Jobs',
  description: 'Created by Karthik Raja',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className=" bg-slate-100">
          <ClerkLoading>
            <Loader/>
          </ClerkLoading>
          <ClerkLoaded>
            {children}
         </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}