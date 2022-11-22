import React from "react";

export default function Legal(){
  return (
    <section class="text-center">
        <br />
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            {/* <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li> */}
            <li>
                <a href="/Terms" class="mr-4 hover:underline md:mr-6" target="_blank">Terms of Use</a>
            </li>
            <li>
                <a href="/Privacy" class="mr-4 hover:underline md:mr-6" target="_blank">Privacy Policy</a>
            </li>
            {/* <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
            </li> */}
        </ul>
    </section>
  );
}