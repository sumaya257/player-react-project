import React from 'react';
import footerImg from '../images/logo-footer.png';

const Footer = () => {
    return (
        <div className='mt-10'>
            {/* Newsletter Section */}
            <div className='relative text-center border py-8 h-20 bg-gradient-to-r from-red-500 to-yellow-500 w-7/12 mx-auto z-10'>
                <h2 className='mb-4 text-2xl font-bold'>Subscribe to our Newsletter</h2>
                <p className='mb-4 text-slate-400'>Get the latest updates and news in your inbox</p>
                <div className="flex justify-center">
                    <div className='border'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-l-md outline-none text-black"
                        />
                    </div>
                    <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-4 py-2 rounded-r-md hover:from-yellow-500 hover:to-red-500 transform duration-300">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-[#06091a] py-8 text-white relative z-0">
                <div className="flex justify-center mb-6 pt-20">
                    <img src={footerImg} alt="footer" className="h-16" />
                </div>
                <div className="flex justify-around space-x-8 px-4">
                    {/* About Us Section */}
                    <div className="flex flex-col max-w-xs">
                        <h3 className="font-bold text-lg mb-2">About Us</h3>
                        <p className="text-sm">
                            We are dedicated to providing fans with the best experience.
                            Discover upcoming events, match schedules, and more!
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col max-w-xs">
                        <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/" className="hover:underline">Fixture</a></li>
                            <li><a href="/" className="hover:underline">Terms</a></li>
                            <li><a href="/" className="hover:underline">Schedules</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="flex flex-col max-w-xs">
                        <h3 className="font-bold text-lg mb-2">Subscribe</h3>
                        <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 w-full rounded-l-md outline-none text-black"
                            />
                            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border border-blue-400 mt-6'></div>
                <p className='text-center text-sm'>2024 All rights are reserved here</p>
            </div>
        </div>
    );
};

export default Footer;
