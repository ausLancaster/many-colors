import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let id = context.createImageData(64,64);
        let d  = id.data;
        let i, j;
        for (i = 0; i < 256; i++) {
            for (j = 0; j < 128; j++) {
                d[0]   = i;
                d[1]   = 136;
                d[2]   = 245;
                d[3]   = 255;
                context.putImageData(id, i, j);
            }
        }

        //context.fillStyle = '#000000'
        //context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas