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
import { UploadModel } from "./upload-model";
import { Session } from "inspector";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/app/types/database";
import { Key, useEffect } from "react";
import NavbarAvatar from "./navbar-avatar";

export async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const userId = session?.user?.id;
  let avatarUrl = "";
  let userFullName = "";

  if (userId) {
    const { data: userData, error } = await supabase
      .from("users")
      .select("avatar_url, full_name")
      .eq("id", userId)
      .single();

    if (!error) {
      avatarUrl = userData?.avatar_url || "";
      userFullName = userData?.full_name || "";
      console.log(error);
    }
  }

  const searchInput = (
    <Input
      style={{ width: "500px", margin: "0 auto", display: "block" }}
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
    <NextUINavbar maxWidth="xl" position="sticky" shouldHideOnScroll>
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

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex	">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <UploadModel session={session} />
          {userId && (
            <NavbarAvatar
              avatar_url={avatarUrl}
              id={userId}
              userFullName={userFullName}
            />
          )}
          <AuthButtonServer />
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Donate
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
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
