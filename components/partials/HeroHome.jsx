import React, { useState } from 'react';
import Modal from '../utils/Modal';
import Link from 'next/link'
import HeroImage from '../../public/hero-image-01.png';

export default function HeroHome(props) {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-white" id={props.id}>
      <div className="flex h-screen justify-center items-center max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 relative">
            {/* <h1 className="text-6xl lg:text-8xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Solis
              </span>
            </h1> */}
            <h1 className="animate__animated animate__fadeInDown font-serif text-5xl lg:text-7xl font-semibold leading-tighter tracking-tighter mb-12" data-aos="zoom-y-out">
              Welcome to Solis
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="animate__animated animate__fadeInDown animate__delay-1s text-2xl mb-12" data-aos="zoom-y-out" data-aos-delay="150">
                Run your computer faster with a click of a button!
              </p>
              <div className="animate__animated animate__fadeInUp animate__delay-2s max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <Link href="/dashboard" className=" px-8 py-4 rounded-md font-semibold bg-[#eb9363] text-white hover:shadow-lg hover:shadow-orange transition duration-150 w-full mb-4 sm:w-auto sm:mb-0">
                  Try Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src='logo.png' width="768" height="432" alt="Hero" />
              </div>
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-orange-500 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video </span>
              </button>
            </div>

            Modal
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div> */}
        </div>
      </div>
    </section>
  );
}