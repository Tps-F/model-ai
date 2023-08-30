import Modelinfo from "@/components/model-info";
import { FC } from "react";

interface ModelProps {
  params: { id: string };
}

const model: FC<ModelProps> = ({ params }) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Modelinfo id={params.id} />
    </div>
  );
};

export default model;
