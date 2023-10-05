import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";


const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6
      py-8">
        {/* logo */}
        <Link href={'/'}>
          <span className="flex">
            <p className="font-bold text-3xl text-white mr-2">ibrahim</p>
            <p className="text-3xl text-white mr-1">Aziz</p>
            <span className="text-accent text-3xl">.</span>
          </span>
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>
  );
};

export default Header;
