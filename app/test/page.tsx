"use client";
import { Loader } from "@mantine/core";
import React, { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://gdlmlxdyhtkvgrttobwk.supabase.co/auth/v1/callback";
    });

    return () => clearTimeout(redirectTimeout);
  }, []);

  return <div></div>;
};

export default RedirectPage;
