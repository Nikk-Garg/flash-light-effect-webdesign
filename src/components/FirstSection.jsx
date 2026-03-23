import React, { useEffect, useRef } from 'react'

const FirstSection = () => {
  const overlayRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (e) => {
      if (overlayRef.current) {
        overlayRef.current.style.background = `
          radial-gradient(
            circle 500px at ${e.clientX}px ${e.clientY}px,
            transparent 60%,
            rgba(3, 3, 3, 0.99) 80%
          )
        `;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <>
    <div className='first'>
    
      <div ref={overlayRef} className="overlay"></div>

    <div className='image'>
        <img src='\assets\first.png'></img>
    </div>
    <div className='content'>
        <h1>THE ATHENIAN <br/> WISDOM</h1>
        <p>Behold the embodiment of timeless beauty and classical perfection. This Greek statue stands as a testament to the artistry and <br/> craftsmanship of ancient Greece. Its parallel lines and expressive details capture the essence of an era of gods and mortals <br/>on the Earth, a tribute to the enduring legacy of Hellenic culture.</p>
    </div>
    </div>
    </>
  )
}


export default FirstSection