import Modelinfo from '@/components/model-info';
import { FC } from 'react'

interface ModelProps {
    params: { id: string }
}

const model: FC<ModelProps> = ({ params}) => { // Destructure the props
    return (
        <div>
            <Modelinfo id={params.id}/>
        </div>
    );
}

export default model;
