import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Home() {
  useEffect(() => {
    // Define the animation using gsap.from()
    gsap.from('#mytext', {
      opacity: 0, // Start with opacity 0
      y: 50, // Start 50 pixels below its normal position
      duration: 1, // Duration of the animation in seconds
      ease: 'power1.out', // Easing function
      onComplete: () => {
        gsap.to('#mytext', { opacity: 1, y: 0, duration: 0.5 }); // Fade in with opacity 1
      },
      // Add any other properties you want to animate
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    // Define the animation using gsap.from()
    gsap.from('#mytext2', {
      opacity: 0, // Start with opacity 0
      y: 50, // Start 50 pixels below its normal position
      duration: 2, // Duration of the animation in seconds
      ease: 'power3.out', // Easing function
      onComplete: () => {
        gsap.to('#mytext2', { opacity: 1, y: 0, duration: 0.5 }); // Fade in with opacity 1
      },
      // Add any other properties you want to animate
    });
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className='h-screen w-screen'>
      <Image
        src='/img2.jpg'
        alt='Image Alt Text'
        layout='fill'
        objectFit='cover'
      />
      <div className='text-white cursor-pointer shadow-lg absolute inset-0 flex flex-col items-center justify-center text-white'>
        <h1 id='mytext' className='uppercase sm:text-2xl md:text-5xl lg:text-6xl hover:animate-pulse'>
          Welcome to the Peshawari pot
        </h1>
        <div className='my-5 md:text-4xl'>
          <h1 id='mytext2'>BIRMINGHAM BEST RESTAURANT</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
