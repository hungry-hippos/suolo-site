
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import BuildingsLogoAnimation from './components/BuildingsLogoAnimation'

import TextSlidingLeftAnimation from './components/TextSlidingLeftAnimation';
import { useEffect,useState } from 'react';

function App() {
  const [isLoading,setIsLoading]=useState(true);
  
  useEffect(()=>{
    cacheImages(imgUrls);
    setIsLoading(false);
  },[])

  const imgUrls=[
    './images/regular/city.jpg',
    './images/regular/crane.jpg',
    './images/regular/sky.jpg'
  ];

  const cacheImages=async(srcArr)=>{
    const promises=await srcArr.map((src)=>{
      return new Promise(function (resolve,reject){
        const img=new Image();
        img.src=src;
        img.onload=resolve();
        img.onerror=reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
    console.log('cached');
  }

  return (
    <div className="App">
      {/* {isLoading ? <div style={{backgrounColor:'white',fontSize:'70px'}}> LOADING</div> : <FirstSection />} */}
      
      <SecondSection />
      {/* <div style={{position:'relative',height:'40vw',width:'40vw',backgroundColor:'orange'}}>
        <TextSlidingLeftAnimation />
      </div> */}
    </div>
  );
}

export default App;
