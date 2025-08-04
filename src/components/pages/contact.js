'use client';

import { useEffect } from 'react';

export default function InitScrollScript() {
  useEffect(() => {
   const imagePaths = [
  "/resources/image1.png",
  "/resources/image2.png",
  "/resources/image3.png",
  "/resources/image4.png"
];


    const scrollTrack = document.getElementById("scroll-track");

    function populateImages() {
      for (let i = 0; i < 2; i++) {
        imagePaths.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
           console.log("Appending image:", img.src);
          scrollTrack.appendChild(img);
        });
     

      }
    }

    let scrollX = 0;
    function animate() {
      scrollX -= 3.0;
      const resetAt = scrollTrack.scrollWidth / 2;
      if (Math.abs(scrollX) >= resetAt) {
        scrollX = 0;
      }
      scrollTrack.style.transform = `translateX(${scrollX}px)`;
      requestAnimationFrame(animate);
    }

    populateImages();
    requestAnimationFrame(animate);
  }, []);

  return null;
}
