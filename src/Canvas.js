import React, { useRef, useEffect } from 'react'
import ColorPicker from './ColorPicker'
import './App.css';
import SwirlPattern from "./SwirlPattern";

const width = 256;
const height = 128;

const Canvas = props => {



    const canvasRef = useRef(null)

    useEffect(() => {
        SwirlPattern.create(props.seed, width, height);

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = width;
        canvas.height = height;

        let layer, i, j;
        for (layer = 0; layer < 3; layer++) {
            for (i = 0; i < width; i++) {
                for (j = 0; j < height; j++) {
                    if (SwirlPattern.get(i, j) === layer) {
                        context.fillStyle = ColorPicker.next();
                        context.fillRect(i, j, 1, 1);
                    }
                }
            }
        }
    }, [props.seed])

    return <canvas ref={canvasRef} className="Canvas" {...props}/>
}

export default Canvas