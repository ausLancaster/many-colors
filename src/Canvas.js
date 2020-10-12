import React, { useRef, useEffect } from 'react'
import './App.css';

const Canvas = props => {

    const canvasRef = useRef(null)
    const width = 256;
    const height = 128;

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvas.width = width;
        canvas.height = height;
        console.log(canvas.width);

        let id = context.createImageData(width, height);
        let d  = id.data;
        let i, j;
        for (i = 0; i < width; i++) {
            for (j = 0; j < height; j++) {
                d[0]   = i;
                d[1]   = j*2;
                d[2]   = 245;
                d[3]   = 255;
                context.putImageData(id, i, j);
            }
        }

        //context.fillStyle = '#000000'
        //context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return <canvas ref={canvasRef} className="Canvas" {...props}/>
}

export default Canvas