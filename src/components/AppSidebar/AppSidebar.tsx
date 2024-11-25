import { useTheme } from "@/utils/useTheme";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "@convex/_generated/api";
import { THEMES, type Theme } from "@convex/constants";
import { Authenticated, useQuery } from "convex/react";
import { CircleUser, Cog, GlobeLock, LogOut, Plus } from "lucide-react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Link } from "../Link";
import { Logo } from "../Logo";
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "../Menu";
import { Popover } from "../Popover";
import { Tooltip } from "../Tooltip";
import { TooltipTrigger } from "../Tooltip";

type AppSidebarProps = {
  children: React.ReactNode;
};

export const AppSidebar = ({ children }: AppSidebarProps) => {
  const { signOut } = useAuthActions();
  const { theme, themeSelection, setTheme } = useTheme();

  const user = useQuery(api.users.getCurrentUser);
  const isAdmin = user?.role === "admin";

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="w-72 lg:w-80 xl:w-[22rem] flex flex-col shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-gray-dim">
      <div className="app-padding h-header flex gap-2 items-center shrink-0 sticky top-0 bg-gray-app z-20">
        <Link href={{ to: "/" }} className="p-1 -m-1">
          <Logo className="h-5 lg:h-[1.35rem]" />
        </Link>
        <Badge className="-mb-1" variant="waiting">
          Beta
        </Badge>
        <div className="ml-auto">
          <TooltipTrigger>
            <Link
              href={{ to: "/browse" }}
              button={{
                variant: "icon",
                className: "-mr-1",
              }}
            >
              <Plus size={20} />
            </Link>
            <Tooltip placement="right">Browse and add quests</Tooltip>
          </TooltipTrigger>
        </div>
      </div>
      <div className="app-padding flex-1">{children}</div>
      <div className="app-padding h-header -ml-3 shrink-0 flex items-center sticky bottom-0 bg-gray-app">
        <Authenticated>
          <MenuTrigger>
            <Button
              aria-label="User settings"
              variant="ghost"
              icon={CircleUser}
            >
              {user?.name}
            </Button>
            <Menu placement="top start">
              {isAdmin && (
                <MenuItem icon={GlobeLock} href={{ to: "/admin" }}>
                  Admin
                </MenuItem>
              )}
              <MenuItem href={{ to: "/settings/account" }} icon={Cog}>
                Settings and Help
              </MenuItem>
              <SubmenuTrigger>
                <MenuItem icon={THEMES[theme as Theme].icon} textValue="Theme">
                  <span>Theme</span>
                  <span slot="shortcut" className="ml-auto text-gray-dim">
                    {THEMES[theme as Theme].label}
                  </span>
                </MenuItem>
                <Popover>
                  <Menu
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={themeSelection}
                    onSelectionChange={setTheme}
                  >
                    {Object.entries(THEMES).map(([theme, details]) => (
                      <MenuItem key={theme} id={theme} icon={details.icon}>
                        {details.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Popover>
              </SubmenuTrigger>
              <MenuSeparator />
              <MenuItem icon={LogOut} onAction={handleSignOut}>
                Sign out
              </MenuItem>
            </Menu>
          </MenuTrigger>
        </Authenticated>
      </div>
    </div>
  );
};
