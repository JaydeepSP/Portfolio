export function SidePatterns() {
  return (
    <>
      {/* Left border with pattern */}
      <div className="fixed inset-y-0 left-0 w-[calc(50%-24rem)] hidden xl:block pointer-events-none border-r border-black/5 dark:border-white/10 bg-[image:repeating-linear-gradient(315deg,rgba(0,0,0,0.02)_0,rgba(0,0,0,0.02)_1px,transparent_0,transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed" />

      {/* Right border with pattern */}
      <div className="fixed inset-y-0 right-0 w-[calc(50%-24rem)] hidden xl:block pointer-events-none border-l border-black/5 dark:border-white/10 bg-[image:repeating-linear-gradient(315deg,rgba(0,0,0,0.02)_0,rgba(0,0,0,0.02)_1px,transparent_0,transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed" />
    </>
  );
}
