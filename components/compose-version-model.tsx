import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function VersionModel() {
  return (
    <Select
      isRequired
      label="Technology"
      placeholder="Select the technology here "
      className="max-w-xs"
      name="version"
    >
        <SelectItem key="RVC V2" value="RVC V2">
          RVC V2
        </SelectItem>
        <SelectItem key="RVC V1" value="RVC V1">
          RVC V1
        </SelectItem>
        <SelectItem key="SVC" value="SVC">
          SVC
        </SelectItem>
    </Select>
  );
}
