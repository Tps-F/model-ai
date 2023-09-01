import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { DiscordIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";
import { AuthButtonServer } from "./auth-button-server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/app/types/database";
import { Key, useEffect } from "react";
import NavbarAvatar from "./navbar-avatar";
import { IconCloudSearch } from '@tabler/icons-react';

export async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user?.id;
  let avatarUrl = "";
  let userFullName = "";
  let userRole = "";

  if (userId) {
    const { data: userData, error } = await supabase
      .from("users")
      .select("avatar_url, full_name, role")
      .eq("id", userId)
      .single();

    if (!error) {
      avatarUrl = userData?.avatar_url || "";
      userFullName = userData?.full_name || "";
      userRole = userData?.role || "";
      console.log(error);
    }
  }

  const searchInput = (
    <Input
      style={{ width: "100%", maxWidth: "500px" }}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
);

  return (
    <NextUINavbar maxWidth="full" position="sticky" shouldHideOnScroll style={{ width: '100%' }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-medium text-inherit">ModelAI</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarItem className="hidden lg:flex">
          <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }} className="w-[40rem]">
            {searchInput}
          </div>
        </NavbarItem>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          {userId && (
            <NavbarAvatar
              avatar_url={avatarUrl}
              id={userId}
              userFullName={userFullName}
              userRole={userRole}
            />
          )}
          <AuthButtonServer />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput }
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "foreground"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
              
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
function filterVideos(videos: any, searchText: any) {
  throw new Error("Function not implemented.");
}

function getUsers(): { data: any } | PromiseLike<{ data: any }> {
  throw new Error("Function not implemented.");
}

function setUser(arg0: {
  avatar_url: string;
  full_name: string | null;
  id: string;
}) {
  throw new Error("Function not implemented.");
}
