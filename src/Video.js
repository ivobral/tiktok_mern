import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                loop
                ref={videoRef}
                src="https://v77.tiktokcdn.com/b1d2b0358f4a5840410e9fdb5ee5718d/6171d6e8/video/tos/useast2a/tos-useast2a-ve-0068c004/5f01602fd86d424d81f12cbf38b328eb/?a=1233&br=4876&bt=2438&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=9JC~Oe9L4kag3&l=202110211508450101890720133F1D69B1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am1sdzY6Znk6ODMzNzczM0ApO2Y8M2g0Njw8N2k7aTg6aWdyNXFlcjRvNjBgLS1kMTZzcy9eNV4uYS8yMTNjLzYtLTI6Yw%3D%3D&vl=&vr=">
            </video>

            <VideoFooter />

            {/* Video footer */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video
