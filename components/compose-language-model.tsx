import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

interface ModelLanguageProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const ModelLanguage: React.FC<ModelLanguageProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <RadioGroup
        label="What language is it?"
        value={selectedLanguage}
        onValueChange={onLanguageChange}
        description="Here you must put the language of the dataset"
        isRequired
        name="language"
      >
        <Radio value="Spanish">Spanish</Radio>
        <Radio value="English">English</Radio>
        <Radio value="Other">Other</Radio>
      </RadioGroup>
    </div>
  );
};

export default ModelLanguage;
