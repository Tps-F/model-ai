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
}: {
  id: string;
  avatar_url: string;
  userFullName: string;
}) {
  const handleProfileClick = () => {
    window.location.href = `/users/${userFullName}`;
  };
  const handleProfileClick1 = () => {
    window.location.href = `/discord`;
  };

  return (
  <div>
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          src={avatar_url}
          isBordered
          className="mr-4"
          
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={handleProfileClick}>
          Profile
        </DropdownItem>
        <DropdownItem key="copy" onClick={handleProfileClick1}>
          Discord
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}
