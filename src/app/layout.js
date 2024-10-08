import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Setting from "@/components/Settings";
import Sidebar from "@/components/Sidebar";
import Categories from "@/components/Categories";
import TabMenuB from "@/components/TabMenuB";
import Context from "@/components/context/context";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua & Ruqayah",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://duaruqyah.com/assets/dua-logo.svg" sizes="any" />
      </head>
      <body className={cn("bg-icon-bg", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Context>
            <main className="relative pt-5 px-5 lg:px-10 h-screen dark:bg-dark-1">
              <div className="h-full flex gap-8 items-start flex-col xl:flex-row">
                <div className="h-full w-24 hidden xl:block">
                  <Sidebar />
                </div>
                <div className="flex-1 w-full xl:w-[calc(100%-96px)] h-full">
                  <Navbar />

                  <div className="h-[calc(100%-60px)] flex gap-8">
                    <div className="w-full 2xl:w-4/5 flex gap-8 h-full">
                      <Categories />
                      <div className="w-full h-full lg:w-2/3">{children}</div>
                    </div>
                    <div className="hidden 2xl:block w-1/5 h-full">
                      {" "}
                      <Setting />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 w-full block xl:hidden bg-primary bg-white dark:bg-dark-2 rounded-t-3xl h-16">
                <TabMenuB />
              </div>
              <Toaster />
            </main>
          </Context>
        </ThemeProvider>
      </body>
    </html>
  );
}
