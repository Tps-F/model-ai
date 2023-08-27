"use client"

import { addPost } from "@/app/actions/add-post-action";
import { Textarea, Button, User } from "@nextui-org/react";
import { useRef } from "react";
import { ComposePostButton } from "./compose-post-button";

export function ComposeModel({
  

}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div
    >
      <form
        ref={formRef}
        action={async formData => {
          await addPost(formData);
          formRef.current?.reset();
        }}  
      >

        <div className="flex flex-col m-8">
        <Textarea
      isRequired
      maxRows={1}
      label="Name"
      labelPlacement="outside"
      name="content" 
      placeholder="Mariano Rajoy (RVC V2 - 500 Epochs)"
    />
    <Textarea
      className="mt-6"
      isRequired
      maxRows={1}
      label="Image URL"
      labelPlacement="outside"
      name="image_url" 
      placeholder="Enter image URL here"
    />
          <ComposePostButton />
        </div>
      </form>
    </div>
  );
}
