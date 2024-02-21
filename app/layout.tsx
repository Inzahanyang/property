import "@/assets/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Care | Find The Perfect Care",
  description: "Find your good Health Care",
  keywords: "health, find carehome",
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
export default MainLayout;
