import { NavbarItem } from '../types/NavbarItem';


export function getNavigationMenu(): NavbarItem[] {

  return [
    {
      title: 'Einstellungen',
      path: '/admin/settings',
    },
    {
      title: 'Theme',
      path: '/theme',
    },
    {
      title: 'Einstellungen',
      path: '/admin/settings',
      children: [
        {
          title: 'Produkt erstellen',
          path: '/products/create',
        },
        {
          title: 'Produktübersicht & Bearbeitung',
          path: '/products/overview',
        },
        {
          title: 'Klassierung',
          path: '/products/classification',
        },
      ],
    },
  ];
}