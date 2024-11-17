"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed buttom-0 right-0">
                <button
                    onClick={handleCloseButton}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1">X</button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (<button onClick={handleCloseButton}
            className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl 
            hover:bg-color-accent transition-all shadow-xl">
            Tonton Trailer</button>)

    }

    return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer