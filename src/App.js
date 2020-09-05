import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/4f62584c86c016645da824402e84751c/5f53c0cc/video/tos/useast2a/tos-useast2a-pve-0068/ad030ff6abdf41549b065f9ff7368bea/?a=1233&br=5484&bt=2742&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090510451701019020922006143CF4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajZ3dng2OW54djMzZjczM0ApPGc1aTc8aDxkNzw1OWZkZWdtbGFjYnM0cGtfLS0vMTZzcy1gMGMuYC9fLi0wX2IvXzY6Yw%3D%3D&vl=&vr="
          channel="Norakomi!"
          description="This is an epic MERN stack TikTok clone!!"
          song="99 problems but react aint one!"
          likes={3244}
          messages={222}
          shares={352}
        />
        <Video
          url="https://v16m.tiktokcdn.com/4f62584c86c016645da824402e84751c/5f53c0cc/video/tos/useast2a/tos-useast2a-pve-0068/ad030ff6abdf41549b065f9ff7368bea/?a=1233&br=5484&bt=2742&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090510451701019020922006143CF4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajZ3dng2OW54djMzZjczM0ApPGc1aTc8aDxkNzw1OWZkZWdtbGFjYnM0cGtfLS0vMTZzcy1gMGMuYC9fLi0wX2IvXzY6Yw%3D%3D&vl=&vr="
          channel="Norakomi!"
          description="This is an epic MERN stack TikTok clone!!"
          song="99 problems but react aint one!"
          likes={3244}
          messages={222}
          shares={352}
        />
      </div>
      {/* app container */}
      {/* videos */}

      {/* videos */}
      {/* videos */}
      {/* videos */}
      {/* videos */}
    </div>
  );
}

export default App;
