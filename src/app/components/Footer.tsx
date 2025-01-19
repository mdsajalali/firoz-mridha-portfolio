import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 flex flex-col items-center justify-center">
      <p className="text-lg font-bold mb-2">Kayla Padilla</p>
      <p className="mb-4">Current song on repeat:</p>
      <iframe
        className="mb-4"
        width="300"
        height="150"
        src="https://www.youtube.com/embed/khnokW3Mw24?si=fYoqoGIkKh4Rlfx4"
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Made with Squarespace</p>
    </footer>
  );
};

export default Footer;
