
import { useEffect, useState } from "react";
import { About } from "./about";
import Services from "./Service/services";

function Home() {
  
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTexts = [
    {
      heading: "Freshly Baked Cakes ",
      sub: "Made with love and the finest ingredient.",
      btn: "Order Now",
    },
    {
      heading: "Hot & Crispy Breads ",
      btn: "Shop Now",
    },
    {
      heading: "Delicious Cookies ",
      btn: "Try Today",
    },
    {
      heading: "Tasty Cupcakes ",
      btn: "View Menu",
    },
    {
      heading: "Sweet Pastries ",
      btn: "Grab One",
    },
  ];
  const colors = [
    "text-yellow-300",
    "text-green-400",
    "text-blue-400",
    "text-pink-400",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?client_id=zS76bTzwbisAX4SBMvRz6AYMp4e_8gVsc8gjv9R7aOE&query=beautiful%20bakery&per_page=30`
        );
        const data = await response.json();

     
        if (data.results && data.results.length > 0) {
          const formattedSlides = data.results.map((img, index) => ({
            url: img.urls?.regular,
            ...slideTexts[index % slideTexts.length],
            color: colors[index % colors.length],
          }));
          setSlides(formattedSlides);
        } else {
     
          setSlides([
            {
              url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
              heading: "Bakery Gallery",
              btn: "Order Now",
              color: "text-pink-400",
            },
          ]);
        }
      } catch (error) {
        console.log("Error fetching Unsplash images:", error);
        //  Show a default image if fetch fails
        setSlides([
          {
            url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
            heading: "Bakery Gallery",
            btn: "Order Now",
            color: "text-pink-400",
          },
        ]);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <>
    <div
      className="w-full h-screen bg-cover flex items-center justify-center font-serif"
      style={{
        backgroundImage:
          slides.length > 0 ? `url(${slides[currentIndex].url})` : "none",
      }}
    >
      {slides.length > 0 ? (
        <div className="p-6 rounded-xl max-w-xl">
          <h1 className={`text-5xl md:text-4xl font-bold mb-4 ${slides[currentIndex].color}`}>
            {slides[currentIndex].heading}
          </h1>
          <h1 className="text-white text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore voluptates eos optio!.
          </h1>
          <button className="bg-pink-600 text-black hover:bg-blue-400 hover:text-white mt-5 p-3 rounded">
            {slides[currentIndex].btn}
          </button>
        </div>
      ) : (
        <p className="text-white text-xl">Loading images...</p>
      )}
      
      
    </div>
      <About/>
      <Services/></>
  );
}

export default Home;
