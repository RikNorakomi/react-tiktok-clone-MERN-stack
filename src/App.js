import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/7e6c0e953aa243de7b386adf40e6cd83/5f52bdf0/video/tos/useast2a/tos-useast2a-ve-0068c001/259b1391c9b94d65b5ae37beb7468191/?a=1233&br=3492&bt=1746&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041621220101890740125A004A87&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2c8dXdtM2lndzMzZTczM0ApZWQ5PDRlaWQ1NzM1Nmc0N2dicF5rZS1vNjVfLS1eMTZzcy8wLzIzNWEtMV8uMzIzLS86Yw%3D%3D&vl=&vr="
          channel="Norakomi!"
          description="This is an epic MERN stack TikTok clone!!"
          song="99 problems but react aint one!"
          likes={3244}
          messages={222}
          shares={352}
        />
        <Video
          url="https://v16m.tiktokcdn.com/7e6c0e953aa243de7b386adf40e6cd83/5f52bdf0/video/tos/useast2a/tos-useast2a-ve-0068c001/259b1391c9b94d65b5ae37beb7468191/?a=1233&br=3492&bt=1746&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041621220101890740125A004A87&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2c8dXdtM2lndzMzZTczM0ApZWQ5PDRlaWQ1NzM1Nmc0N2dicF5rZS1vNjVfLS1eMTZzcy8wLzIzNWEtMV8uMzIzLS86Yw%3D%3D&vl=&vr="
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
