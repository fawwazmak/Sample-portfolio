const Avatar = () => {
  return (
    <div className="flex justify-center mb-8">
      <svg
        width="120"
        height="120"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[3] stroke-transparent"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00bcff" />
            <stop offset="1" stopColor="#ff007f" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="60" r="30" stroke="url(#gradient)" fill="none" />
        <path
          d="M 60 130 Q 100 160 140 130"
          stroke="url(#gradient)"
          fill="none"
        />
        <path
          d="M 70 130 Q 100 110 130 130"
          stroke="url(#gradient)"
          fill="none"
        />
      </svg>
    </div>
  );
};


export default Avatar;