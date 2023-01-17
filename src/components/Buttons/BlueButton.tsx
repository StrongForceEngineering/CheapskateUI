import React from "react"

export interface BlueButtonProps {
    text: string
    width: number
    height: number
}

export default function BlueButton({ text, width, height }: BlueButtonProps) {
    return(
        <button style={{
            width: width,
            height: height,
            backgroundColor: "blue",
        }}>
            {text}
        </button>
    )
}