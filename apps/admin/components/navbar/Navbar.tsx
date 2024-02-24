"use client"
import { Icons, Input } from '@repo/ui';
import { Separator } from'@repo/ui';
import { useDisclosure } from '../../hooks/useDisclosure';
import { NavbarItem } from '../../types/NavbarItem';
import { NavbarEntry } from './NavbarEntry';

interface NavbarProps {
  entries: NavbarItem[];
}

export const Navbar = ({ entries }: NavbarProps) => {
  const { isOpen, toggle } = useDisclosure(true);

  const MenuToggleIcon = isOpen
    ? Icons['arrowLeftCircle']
    : Icons['arrowRightCircle'];

  const LogoIcon = Icons['shop'];

  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-xl h-screen p-5 pt-8 relative`}
    >
      <MenuToggleIcon
        className="h-6 w-6 absolute -right-3 z-10 bg-background text-foureground cursor-pointer "
        onClick={toggle}
      ></MenuToggleIcon>
      <div className="inline-flex">
        <LogoIcon className="w-12 h-12" />
        <h1
          className={`scroll-m-20 text-3xl font-bold tracking-tight origin-left ml-6 ${
            isOpen ? "w-64" : "w-0"
          } overflow-hidden transition-all text-clip`}
        >
          MyShop 
        </h1>
        </div>
        <h2 className={` text-xl font-semibold tracking-tight origin-left ${
            isOpen ? "w-64 ml-[72px]" : "w-0"
          } overflow-hidden transition-all text-clip`}>
        Admin
        </h2>

      <Separator className="mt-8 mb-4" />
      <Input type="search" placeholder="Suchen..." className={`${isOpen ? "w-64" : "w-0 border-none p-0"} overflow-hidden transition-all`} />
      <nav className="mt-12 flex-col">
        {entries.map((entry, index) => {
          return <NavbarEntry entry={entry} navIsOpen={isOpen} key={index} />;
        })}
      </nav>
    </div>
  );
};