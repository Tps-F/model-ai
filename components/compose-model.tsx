"use client"

import { addPost } from "@/app/actions/add-post-action";
import { Textarea, Button, User, Input } from "@nextui-org/react";
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
        <Input
          name="content" 
          key="outside"
          type="name"
          label="Name"
          placeholder="Saiko (RVC V2 500 Epochs)"
          description="Format: Name (Technology Version Number Epochs)"
          className="w-72 mb-8"
          isRequired
            />
        <Input
          key="outside"
          type="imageurl"
          label="Image URL"
          placeholder="https://i.imgur.com/PUFDIUU.png"
          description="We recommend a square image in good quality."
          className="w-72"
          isRequired
          name="image_url" 
            />
          <ComposePostButton />
        </div>
      </form>
    </div>
  );
}
