import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { TailwindIndicator } from "./tailwind-indicator";

const RootLayout = () => {
  return (
    <div className="min-h-screen scroll-smooth antialiased">
      <Outlet />
      <Toaster />
      <TailwindIndicator />
    </div>
  );
};

export default RootLayout;
