import React from "react";

import ghIMG from "../images/gh32px.png";
import ghAB from "../images/gh-ab.jpg";

import ghMJ from "../images/gh-mj.jpg";
import ghHP from "../images/gh-hp.png";

export default function Footer(){
  return (
    // <footer class="text-center">
      
    //   <div>
    //     <p class="italic text-xs">Space Frontiers 2022, All Rights Reserved</p>

    //   </div>

    // </footer>
    <footer class="px-4 py-4 h-auto mb-4 w3-full flex flex-wrap justify-center items-center ">
      <div class="flex flex-wrap flex-col items-center">
        <div class="flex flex-wrap">
          <a href="https://github.com/devilarms83" target="_blank"><img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="github logo" src={ghAB} /></a>
          <a href="https://github.com/mjshelton12" target="_blank"><img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="github logo" src={ghMJ} /></a>
          <a href="https://github.com/hollygparker" target="_blank"><img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="github logo" src={ghHP} /></a>          
        </div>
        <span class="font-semibold text-sm m-1">Space Frontiers</span>
        <span class="text-xs text-gray-500">© 2022. All rights reserved</span>
        <p class="italic text-xs">Moon base concept by Bill Wright, courtesy of <a href="https://launiusr.wordpress.com/2016/05/20/early-ideas-of-space-tourism/" target="_blank"><u>Roger Launius's Blog</u></a>.</p>
        <p class="italic text-xs">Mars base concept courtesy of <a href="https://www.humanmars.net/2019/06/human-colony-on-mars-for-buzz-aldrins.html" target="_blank"><u>National Geographic Childern's Books</u></a>.</p>
        
      </div>
    </footer>
  );
}