import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Video
          url="https://v77.tiktokcdn.com/6ef6cee48506fe35167fbd0236477c3c/617730a9/video/tos/useast2a/tos-useast2a-ve-0068c002/d6dfa622770640c9a22e7a79094a9c8a/?a=1233&br=1764&bt=882&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=9JC~Oe9L4kag3&l=202110251633060101890720345C1D68DB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlzNTQ6Zmk8ODMzNzczM0ApOWRlNzdkOWQ3NzVnZDRpZGdfXmpvcjRnc2JgLS1kMTZzczFhXy8wL19eYzAzLzMwYjY6Yw%3D%3D&vl=&vr="
          channel='ssssangha'
          description='WOW EPIC MERN STACK TIK TOK'
          song="99 problems but REACT ain't one"
          likes={1546}
          messages={250}
          shares={132}
        />

        <Video
          url="https://v77.tiktokcdn.com/6ef6cee48506fe35167fbd0236477c3c/617730a9/video/tos/useast2a/tos-useast2a-ve-0068c002/d6dfa622770640c9a22e7a79094a9c8a/?a=1233&br=1764&bt=882&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=9JC~Oe9L4kag3&l=202110251633060101890720345C1D68DB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlzNTQ6Zmk8ODMzNzczM0ApOWRlNzdkOWQ3NzVnZDRpZGdfXmpvcjRnc2JgLS1kMTZzczFhXy8wL19eYzAzLzMwYjY6Yw%3D%3D&vl=&vr="
          channel='ssssangha'
          description='WOW EPIC MERN STACK TIK TOK'
          song="99 problems but REACT ain't one"
          likes={111}
          messages={2560}
          shares={1672}
        />
      </div>


      {/*  app container */}
      {/*  videos */}
      {/*  <Video /> */}
      {/*  <Video /> */}
      {/*  <Video /> */}
      {/*  <Video /> */}
      {/*  <Video /> */}

    </div>
  );
}

export default App;
