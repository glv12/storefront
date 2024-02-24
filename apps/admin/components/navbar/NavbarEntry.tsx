import Link from "next/link";
import { Icons } from "@repo/ui";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@repo/ui";
import { useDisclosure } from "../../hooks/useDisclosure";
import { NavbarItem } from "../../types/NavbarItem";

interface NavbarEntryProps {
  entry: NavbarItem;
  navIsOpen: boolean;
}

export const NavbarEntry = ({ entry, navIsOpen }: NavbarEntryProps) => {
  const { isOpen, toggle } = useDisclosure(true);
  return (
      <Collapsible>
        <Link href={entry.path}>
          <div className="group">
            <div
              className={`flex gap-3 items-center  p-3 ${
                navIsOpen ? "hover:bg-accent hover:text-primary" : ""
              }`}
            >
              <div
                className={`flex justify-between  ${
                  navIsOpen ? "w-52 ml-3" : "w-0"
                } transition-all overflow-hidden`}
              >
                <p className="text-l font-semibold">{entry.title}</p>
                {entry.children && (
                  <CollapsibleTrigger>
                    <PopoverIcon isOpen={isOpen} toggle={toggle} />
                  </CollapsibleTrigger>
                )}
              </div>
            </div>
            {!navIsOpen && (
              <div
                className={`absolute left-full rounded-md ml-6 mt-[-38px] px-2 py-1 bg-primary text-primary-foreground  text-sm font-semibold opacity-20 invisible  -translate-x-3 transition-all 
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
              >
                {entry.title}
              </div>
            )}
          </div>
        </Link>
        {entry.children && navIsOpen && (
          <CollapsibleContent>
            {entry.children.map((entry, index) => {
              return (
                <Link href={entry.path} key={index}>
                  <div className="py-2 ml-12 pl-2 hover:bg-accent hover:text-primary">
                    {entry.title}
                  </div>
                </Link>
              );
            })}
          </CollapsibleContent>
        )}
      </Collapsible>
  );
};

export const PopoverIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const PopoverIcon = Icons["chrevronDown"];
  const iconStyles = isOpen
    ? "transform rotate-180 transition-transform duration-200 transform-origin-center"
    : "transform rotate-0 transition-transform duration-200 transform-origin-center";

  return (
    <PopoverIcon
      aria-hidden="true"
      className={`h-5 w-5 ${iconStyles}`}
      onClick={toggle}
    />
  );
};
