"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function ComposeBugButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type="submit"
      color="primary"
      className="my-8 px-5 py-2 self-end"
      isDisabled
    >
      {pending ? "Please wait..." : "Disabled"}
    </Button>
  );
}
