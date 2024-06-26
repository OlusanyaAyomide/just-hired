// development component to keep track of screen sizes
export default function TailwindIndicator() {
    return (
      <div className="fixed bottom-1  left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
        <div className="block sm:hidden">xs</div>
        <span className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          sm
        </span>
        <span className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</span>
        <span className="hidden lg:block xl:hidden 2xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block 3xl:hidden">2xl</span>
        <span className="hidden 3xl:block">3xl</span>
      </div>
    );
  }
  