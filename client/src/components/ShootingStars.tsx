import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 5; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 50,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `shoot ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          <div className="relative">
            <div className="absolute w-full h-full bg-white rounded-full blur-sm opacity-80" />
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: "100px",
                left: "-100px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(300px, 300px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
