"use client";

import React, { useState } from "react";
import { addBug } from "@/app/actions/add-bug-action";
import {
  Input, Tooltip
} from "@nextui-org/react";
import { useRef } from "react";
import { ComposeBugButton } from "./compose-bug-button";

export function ComposeBug({}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = React.useState(new Set([]));

  const handleAddPost = async () => {
    const formData = new FormData();
    await addBug(formData);
  };

  return (
    <div>
      <form
        ref={formRef}
        action={async (formData) => {
          await addBug(formData);
          formRef.current?.reset();
        }}
      >
        <div className="flex flex-col m-8">
          <Input
            name="content"  
            key="content"
            type="bug"
            label="Describe the bug"
            placeholder="The navbar does not work"
            description="Remember to report site errors here, not model errors."
            className="w-72 mb-8"
            isRequired

          />
          <ComposeBugButton />
        </div>
      </form>
    </div>
  );
}
