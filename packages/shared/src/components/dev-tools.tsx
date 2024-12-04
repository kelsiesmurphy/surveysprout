import { ModeToggle } from "./mode-toggle";

export default function DevTools() {
  console.log("Rendering DevTools");
  return (
    <div className="fixed top-1 right-1 z-50 flex items-center gap-2 rounded-full bg-background px-4 py-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
      <ModeToggle />
    </div>
  );
}
