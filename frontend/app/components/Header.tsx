import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Header = () => {

  const words = [
    {
      text: "Access",
    },
    {
      text: "Awesome",
    },
    {
      text: "Artwork",
    },
    {
      text: "@EXCA.",
      className: "text-customPurple"
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[8rem]  ">
        <TypewriterEffectSmooth words={words} className="font-normal"/>
      </div>
    </>
  )
}

export default Header;