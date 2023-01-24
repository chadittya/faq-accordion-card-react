import React from "react";
import Accordion from "./Accordion";
import illuWomanDesktop from "../assets/images/illustration-woman-online-desktop.svg";
import illuWomanMobile from "../assets/images/illustration-woman-online-mobile.svg";

export default function FaqAccordionCard() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* card */}
      <div className="flex flex-row bg-white bg-[url('../assets/images/bg-pattern-mobile.svg')] lg:bg-[url('../assets/images/bg-pattern-desktop.svg')] bg-cover bg-no-repeat bg-[-45rem_-24rem] w-[920px] h-[510px] rounded-3xl overflow-hidden">
        <div className="flex flex-auto relative left-[-85px] top-20">
          <picture>
            <source srcset={illuWomanDesktop} media="(min-width: 1024px)" />
            <img src={illuWomanMobile} alt="illustration woman" />
          </picture>
        </div>
        {/* faq container */}
        <div className="relative flex flex-auto flex-col gap-7 justify-center left-[-10px]">
          <div>
            <h1 className="uppercase font-bold text-4xl">faq</h1>
          </div>
          <div className="flex flex-col divide-y gap-5">
            <Accordion
              title="How many team members can i invite?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
            />
            <Accordion
              title="What is the maximum file upload size?"
              content="No more than 2GB. All files in your account must fit your alloted storage space."
            />
            <Accordion
              title="How do i reset my password?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
            />
            <Accordion
              title="Can i cancel my subscription?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
            />
            <Accordion
              title="Do you provide additional support?"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam."
            />
            <div>
              <div className="invisible">space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
