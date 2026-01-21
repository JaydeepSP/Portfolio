import type { ReactNode } from "react";
import { SidePatterns } from "@/components/ui/SidePatterns";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full flex justify-center p-6 md:p-12 relative">
      <SidePatterns />

      <div className="w-full max-w-2xl space-y-12 relative z-10">
        {children}
      </div>
    </div>
  );
}
