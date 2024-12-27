import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // Add your video source path here
          src="/video/Show.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      {/* Content on top of video */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          India Property Show
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {/* Join us on <strong>March 15, 2025</strong> at <strong>Convention Center, Mumbai</strong>. */}
          Discover the best properties in India!
        </p>
        <div className="flex gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition"
          >
            Register Now
          </a>
          {/* <a
            href="#learn-more"
            className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-lg font-semibold rounded-lg transition"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
