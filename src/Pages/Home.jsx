import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import appStore from '../assets/app-store.png';
import googlePlay from '../assets/google-play.png';
import hero from '../assets/hero.png';
import ApplicationsCard from '../Components/ApplicationsCard';
const Home = () => {
    const applications = useLoaderData()
    const featuredApps = applications.slice(0,8)
    console.log(applications);
    return (
        <div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-center text-5xl mt-5 text-gray-800'>We Build <br /> <span className='bg-gradient-to-r from-[#642de3] to-[#9f62f2] text-transparent bg-clip-text inline-block '>Productive</span> Apps</h2>
                <p className='text-[15px] text-center text-bold text-gray-700'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex flex-row justify-center mt-5'> 
                <a 
                    href="https://play.google.com/store/games?device=windows" 
                    className="btn bg-white  border-1 text-black normal-case rounded-lg px-6 gap-2 flex items-center"><img src={googlePlay} alt="GitHub" className="w-12 h-10 " />Google Play
                </a>
                <a 
                    href="https://www.apple.com/app-store/" 
                    className="btn bg-white  border-1 text-black normal-case rounded-lg px-6 gap-2 flex items-center"><img src={appStore} alt="GitHub" className="w-12 h-10 " />App Store
                </a>
                </div>
                <div className='flex justify-center mt-4'><img src={hero} alt="heroapp" className="w-full max-w-lg h-auto object-contain" /></div>
                
<div className="relative z-10 -mt-3 lg:-mt-4 bg-gradient-to-r from-[#642de3] to-[#9f62f2] text-white py-16 px-10  ">
    <h2 className="text-center text-4xl font-bold mb-12">Trusted By Millions, Built For You</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
       
        <div className="flex flex-col items-center">
            <p className="text-sm opacity-80 mb-2">Total Downloads</p>
            <h3 className="text-6xl font-black mb-2">29.6M</h3>
            <p className="text-xs font-medium">21% More Than Last Month</p>
        </div>

        
        <div className="flex flex-col items-center border-x-0 md:border-x border-white/20">
            <p className="text-sm opacity-80 mb-2">Total Reviews</p>
            <h3 className="text-6xl font-black mb-2">906K</h3>
            <p className="text-xs font-medium">46% More Than Last Month</p>
        </div>

        <div className="flex flex-col items-center">
            <p className="text-sm opacity-80 mb-2">Active Apps</p>
            <h3 className="text-6xl font-black mb-2">132+</h3>
            <p className="text-xs font-medium">31 More Will Launch</p>
        </div>
    </div>
</div>
        <div className='flex flex-col gap-2 my-12'>
                <h2 className='font-bold text-center text-2xl mt-5 text-gray-800'>Trending Apps</h2>
                <p className='text-[15px] text-center text-bold text-gray-700'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'>
                {
                    featuredApps.map(application => (
                        
                        <ApplicationsCard key={application.id} application={application}/>
                    ))
                }  
            </div>
            
            <div className='flex justify-center my-4 '><Link to ='/Apps' className="btn bg-[#8B5CF6] hover:bg-[rgb(124,58,237)] border-none text-white rounded-lg px-6 gap-2 ">See All</Link>
             </div>
            
                    
        </div>
    );
};

export default Home;