import FirstSection from "./components/FirstSection";
import Slogan from "./components/Slogan";
import SloganV2 from "./components/SloganV2";
import SecondSection from "./components/SecondSection";
import BuildingsLogoAnimation from "./components/BuildingsLogoAnimation";

import TextSlidingLeftAnimation from "./components/TextSlidingLeftAnimation";
import RankingsSection from "./components/RankingsSection";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(imgUrls);
    setIsLoading(false);
  }, []);

  const imgUrls = [
    "./images/regular/city.jpg",
    "./images/regular/crane.jpg",
    "./images/regular/sky.jpg",
  ];

  const cacheImages = async (srcArr) => {
    const promises = await srcArr.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
    console.log("cached");
  };

  return (
    <div className="App">
      <FirstSection />
      <SloganV2 />
      <RankingsSection />

      <SecondSection />
    </div>
  );
}

export default App;
