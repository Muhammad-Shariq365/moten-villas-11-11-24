import React from 'react';

const VideoCards = () => {
  // Sample video URLs (replace with your own)
  const videos = [
    "https://www.youtube.com/embed/D6pW5Li8bjU" , 
    "https://www.youtube.com/embed/lXsX_s_O3e4", 
    "https://www.youtube.com/embed/cbi7sT3mq1o" ,
    "https://www.youtube.com/embed/0MTuxWrbO00?si=o8fBBAy3FUB7SvdS" ,
    "https://www.youtube.com/embed/PjhRwt2gXhM",
    "https://www.youtube.com/embed/gN3PFj3wQIg",
    "https://www.youtube.com/embed/3k5VVa1EXyk",
    "https://www.youtube.com/embed/ERpvs6oH6E4",
    "https://www.youtube.com/embed/2NyGqh6E4vI",
    "https://www.youtube.com/embed/60DmIlpL0n0",
    "https://www.youtube.com/embed/0DyrRx-qSwA",
    "https://www.youtube.com/embed/TMu2tmCVCLc",
    "https://www.youtube.com/embed/40KY6aJaaI0"
    
 
  ];

  return (
    <div className="mx-8 mt-16 mb-24"> {/* Add padding to the container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"> {/* Use gap-4 for equal spacing */}
        {videos.map((url, index) => (
          <div key={index} className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
            <iframe
              src={url}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
