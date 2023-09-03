"use client";
import { Loader } from "@mantine/core";
import React, { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://discord.gg/iahispano";
    });

    return () => clearTimeout(redirectTimeout);
  }, []);

  return <div></div>;
};

export default RedirectPage;
