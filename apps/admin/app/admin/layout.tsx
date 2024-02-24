import { getNavigationMenu } from "../../lib/navigations";
import { Navbar } from "../../components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const navigation = getNavigationMenu();
  return (
        <div className="flex">
          <Navbar entries={navigation} />
          <div>{children}</div>
        </div>
  );
}
