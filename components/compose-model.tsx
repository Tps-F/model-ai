"use client";

import React, { useState } from "react";
import { addPost } from "@/app/actions/add-post-action";
import {
  Textarea,
  Button,
  User,
  Input,
  Avatar,
  SelectItem,
  Select,
} from "@nextui-org/react";
import { useRef } from "react";
import { ComposePostButton } from "./compose-post-button";
import ModelLanguage from "./compose-language-model";
import VersionModel from "./compose-version-model";

export function ComposeModel({}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = React.useState(new Set([]));
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleAddPost = async () => {
    const formData = new FormData();
    formData.append("language", selectedLanguage);

    await addPost(formData);
  };

  return (
    <div>
      <form
        ref={formRef}
        action={async (formData) => {
          await addPost(formData);
          formRef.current?.reset();
        }}
      >
        <div className="flex flex-col m-8">
          <Input
            name="content"
            key="content"
            type="name"
            label="Name"
            placeholder="Saiko"
            description="A simple name for your model"
            className="w-72 mb-8"
            isRequired
          />
          <Input
            key="imageurl"
            type="imageurl"
            label="Image URL"
            placeholder="https://i.imgur.com/PUFDIUU.png"
            description="We recommend a square image in good quality"
            className="w-72 mb-8"
            isRequired
            name="image_url"
          />
          <Input
            key="description"
            type="description"
            label="Description"
            placeholder="The best model that exists on the face of the earth."
            description="We recommend a short and precise description that hooks the user into using your model"
            className="w-72 mb-8"
            name="description"
          />
          <Input
            key="audio_url"
            type="audio_url"
            label="Audio URL"
            placeholder="Audio URL"
            description="We recommend a good quality audio file"
            className="w-72 mb-8"
            name="audio_url"
          />
          <Input
            key="link"
            type="link"
            label="Link"
            placeholder="Model URL."
            description="We recommend Google Drive or Hugginface"
            className="w-72 mb-8"
            isRequired
            name="model_url"
          />
          <Input
            key="epochs"
            name="epochs"
            type="number"
            label="Epochs"
            placeholder="500"
            className="w-72 mb-8"
            description="The number of epochs that the model will be trained for"
            isRequired
          />
          <Input
            key="tag"
            name="tag"
            type="tag"
            label="Tag"
            placeholder="Artist"
            className="w-72 mb-8"
            description="Summarize with one word your model, that will be the tag"
          />
          <div className="w-72 mb-8">
            <VersionModel />
          </div>
          <div className="w-72 mb-8">
            <ModelLanguage
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
          </div>
          <ComposePostButton />
        </div>
      </form>
    </div>
  );
}
