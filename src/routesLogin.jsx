import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Product } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import AuthService from "./services/auth.service";

const icon = {
  className: "w-5 h-5 text-inherit",
};
export const routesLogin = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "tables",
      //   path: "/tables",
      //   element: <Tables />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "product",
        path: "/product",
        element: <Product />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "pembelian",
        path: "/buy",
        element: <Product />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "transaksi",
        path: "/transactions",
        element: <Product />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "keluar",
        path: "/log-out",
        element: <AuthService.logout />,
      },
    ],
  },
];

export default routesLogin;
