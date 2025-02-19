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
export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "product",
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "masuk",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "daftar",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "keluar",
        path: "/log-out",
        element: <AuthService.logout />,
      },
    ],
  },
];

export default routes;
