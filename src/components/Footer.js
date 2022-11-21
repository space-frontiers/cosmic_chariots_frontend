import React from "react";

export default function Footer(){
  return (
    // <footer class="text-center">
      
    //   <div>
    //     <p class="italic text-xs">Space Frontiers 2022, All Rights Reserved</p>

    //   </div>

    // </footer>
    <footer class="px-4 py-4 h-auto mb-4 w3-full flex flex-wrap justify-center items-center bg-gray-50">
      <div class="flex flex-wrap flex-col items-center">
        <div class="flex flex-wrap">
          <img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="Use any sample image here..." src="images/sample-image-256px.png"></img>
          <img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="Use any sample image here..." src="images/sample-image-256px.png"></img>
          <img class="h-6 w-6 mx-1 rounded-full bg-blue-200" alt="Use any sample image here..." src="images/sample-image-256px.png"></img>
        </div>
        <span class="font-semibold text-sm m-1">Space Frontiers</span>
        <span class="text-xs text-gray-500">© 2022. All rights reserved</span>
        <p class="italic text-xs">Moon base concept by Bill Wright, courtesy of <a href="https://launiusr.wordpress.com/2016/05/20/early-ideas-of-space-tourism/" target="_blank"><u>Roger Launius's Blog</u></a>.</p>
        <p class="italic text-xs">Mars base concept courtesy of <a href="https://www.humanmars.net/2019/06/human-colony-on-mars-for-buzz-aldrins.html" target="_blank"><u>National Geographic Childern's Books</u></a>.</p>
        
      </div>
    </footer>
  );
}