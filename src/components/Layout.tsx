import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full flex justify-center p-6 md:p-12 relative">
      <div className="w-full space-y-12">{children}</div>
    </div>
  );
}
