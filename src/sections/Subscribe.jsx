import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-contaienr flex justify-between items-center max-lg:flex-col gap-10"
      id="contact us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin">
        Sign up from <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder="subscribe@nike.com" className="input"/>
        <div>
          <Button label='Sign up' fullWidth className='flex max-sm:justify-end items-center max-sm:w-full'/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
