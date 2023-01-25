import React from "react";
import Accordion from "./Accordion";
import illuWomanDesktop from "../assets/images/illustration-woman-online-desktop.svg";
import illuWomanMobile from "../assets/images/illustration-woman-online-mobile.svg";
import illuBox from "../assets/images/illustration-box-desktop.svg";

export default function FaqAccordionCard() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* card */}
      <div className="flex lg:flex-row flex-col lg:static relative bg-white bg-[url('../assets/images/bg-pattern-mobile.svg')] lg:bg-[url('../assets/images/bg-pattern-desktop.svg')] lg:bg-cover bg-no-repeat lg:bg-[-45rem_-24rem] bg-top lg:w-[920px] w-[330px] lg:h-[510px] h-[535px] rounded-3xl lg:overflow-hidden mt-24">
        <div className="flex flex-auto flex-col relative lg:left-[-85px] lg:top-20 lg:scale-100 scale-75 top-[-145px]">
          <picture>
            <source srcset={illuWomanDesktop} media="(min-width: 1024px)" />
            <img src={illuWomanMobile} alt="illustration woman" />
          </picture>
        </div>
        <div className="absolute lg:flex flex-auto left-[13.9rem] top-[25rem] hidden">
          <img src={illuBox} alt="illustration box desktop" />
        </div>
        {/* faq container */}
        <div className="relative flex flex-auto flex-col gap-7 lg:left-[-100px] lg:top-0 top-[-110px] box-border lg:w-[345px] lg:mt-20 lg:pl-16 text-c-darkGrayishBlue">
          <div className="lg:text-left text-center">
            <h1 className="uppercase font-bold text-4xl text-c-veryDarkDesaturatedBlue">
              faq
            </h1>
          </div>
          <div className="relative flex flex-col divide-y gap-5 lg:px-0 px-8">
            <div>
              <Accordion
                title="How many team members can i invite?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
              />
            </div>
            <div>
              <Accordion
                title="What is the maximum file upload size?"
                content="No more than 2GB. All files in your account must fit your alloted storage space."
              />
            </div>
            <div>
              <Accordion
                title="How do i reset my password?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
              />
            </div>
            <div>
              <Accordion
                title="Can i cancel my subscription?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
              />
            </div>
            <div>
              <Accordion
                title="Do you provide additional support?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
              />
            </div>
            <div>
              <div className="invisible">space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
