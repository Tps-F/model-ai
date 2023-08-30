"use client";
import {
  Avatar,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";

export default function NavbarAvatar({
  id,
  userFullName,
  avatar_url,
  userRole,
}: {
  id: string;
  avatar_url: string;
  userFullName: string;
  userRole: string;
}) {
  const handleProfileClick = () => {
    window.location.href = `/users/${userFullName}`;
  };

  const handleProfileClick1 = () => {
    window.location.href = `/discord`;
  };

  const handleAdminDashboardClick = () => {
    window.location.href = `/admin-dashboard`;
  };

  const dropdownItems = [
    <DropdownItem key="profile" onClick={handleProfileClick}>
      Profile
    </DropdownItem>,
    <DropdownItem key="discord" onClick={handleProfileClick1}>
      Discord
    </DropdownItem>,
  ];

  if (userRole === "admin") {
    dropdownItems.push(
      <DropdownItem key="Admin" onClick={handleAdminDashboardClick}>
        Admin Dashboard
      </DropdownItem>
    );
  }

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar src={avatar_url} isBordered className="mr-4" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}