import React from "react";

export default function Home(){
  return (
    <article id="home">
        <h1>Welcome to Your Space Adventure!</h1>
        <h2>
            What Mission Will you Accept?
        </h2>
        <div class="card p-2 m-2">
          <p>A Quick Jump to the Moon</p><button class="btn btn-primary">Click to View Launch Dates</button>
        </div>
        <div class="card p-2 m-2">
          <p>The Mars Explorer</p><button class="btn btn-primary">Click to View Launch Dates</button>
        </div>
        <div class="card p-2 m-2">
          <p>The Full Adventure: Mars and Moon Combo</p><button class="btn btn-primary">Click to View Launch Dates</button>
        </div>
    </article>
  );
}