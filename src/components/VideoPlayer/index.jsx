import { useRef, useState } from "react";
import styles from "./styles.module.css";

const SRC =
  "https://v16-webapp.tiktok.com/e56b666e41f82f7ea244d7b76c89a7e3/62807c69/video/tos/alisg/tos-alisg-pve-0037c001/7af20f18440a49459b2aada340b6920e/?a=1988&br=3430&bt=1715&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZFMolwe2NSd3yl7Gb&l=202205142206290102231230341AD574FD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y6aWk6ZmtqOzMzODczNEApZWRmOWg6NmRkN2k7NzNnOGc2ZGJecjRnamlgLS1kMS1zczRgYmI0MzJgYTVjLWMzXi06Yw%3D%3D&vl=&vr=";

export default function VideoPLayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();

  const handlePlay = () => {
    if(playing) {
      video.current.pause();
    } else {
      video.current.play();
    }
    setPlaying(!playing)
  } 

  return (
    <div className="">
    <video className={styles.video} src={SRC} controls={false} ref={video}/>)
    <button className={styles.player} onClick={handlePlay}></button>
  </div>
  )
}
