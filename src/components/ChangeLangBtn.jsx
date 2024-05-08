import React, { useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  MixerHorizontalIcon,
  Cross2Icon,
  GlobeIcon,
} from "@radix-ui/react-icons";

const LangButton = ({ tag, lang, changeLanguage }) => {
  return (
    <button
      onClick={() => changeLanguage(tag)}
      className='py-2 px-4 rounded-md outline-none active:border-none bg-gray-50 hover:bg-brand flex flex-row items-center gap-1 hover:text-white text-left text-md font-semibold'
    >
      <GlobeIcon /> {lang}
    </button>
  );
};

const LanguageChanger = ({ textChange, textToChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("en")

  const changeLanguage = async (tag) => {
    setIsOpen(false);
    console.log("Loading...");
    console.log(tag, source)
    const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API,
        "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
      },
      body: JSON.stringify({
        q: textToChange,
        source: source,
        target: tag,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSource(tag)
      textChange(result.data?.translations?.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-md shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
          aria-label='Update dimensions'
        >
          <GlobeIcon color='darkgreen' />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className='rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade'
          sideOffset={5}
        >
          <div className='flex flex-col gap-2.5'>
            <p className='text-mauve12 text-[15px] leading-[19px] text-center font-medium mb-2.5'>
              Change Language
            </p>
            <div className='flex flex-col gap-4'>
              <LangButton tag="ar" changeLanguage={changeLanguage} lang={"Arabic"} />
              <LangButton tag="ha" changeLanguage={changeLanguage} lang={"Hausa"} />
            </div>
          </div>
          <Popover.Close onClick={()=>setIsOpen(false)}
            className='rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default'
            aria-label='Close'
          >
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className='fill-white' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default LanguageChanger;
