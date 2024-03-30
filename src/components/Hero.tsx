"use client";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { GrLinkDown } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="mx-auto w-full sm:px-8 mt-9 max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="my-4">
              <img
                src="https://media.licdn.com/dms/image/D5603AQHd8pC3epdBaw/profile-displayphoto-shrink_400_400/0/1710508460302?e=1717027200&v=beta&t=fRjKKSnUz_PLsPZ11jWWKz2wXSWVWxFKArbllxxbq90"
                alt=""
                className="rounded-full w-14"
              />
            </div>
            <div className="max-w-2xl">
              <div className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  Software Development Engineer.
                </h1>
              </div>
              <div>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I'm Kanish Mohariya, a Nagpur-based software designer and
                  developer who has successfully completed an internship at
                  Trickysys IT Solutions, along with a Full Stack Development
                  Guaranteed Placement course from Internshala Trainings.
                </p>
              </div>
              <div className="text-white text-2xl mt-6 flex gap-6">
                <Link
                  href={
                    "https://www.linkedin.com/in/kanish-mohariya-7a904a240/"
                  }
                  target="blank"
                >
                  <AiFillLinkedin />
                </Link>
                <Link href={"https://github.com/Kanish027"} target="blank">
                  <AiFillGithub />
                </Link>
                <Link
                  href={"https://www.instagram.com/kanish_mohariya/"}
                  target="blank"
                >
                  <AiFillInstagram />
                </Link>
                <Link href={"https://twitter.com/KMohariya"} target="blank">
                  <AiFillTwitterSquare />
                </Link>
              </div>
              <div>
                <Link
                  href={"/Kanish_Mohariya_Full_Stack_Developer_Resume.pdf"}
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-48"
                  download
                >
                  Download CV <GrLinkDown />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams className="absolute inset-0 z-0 pointer-events-none" />
    </div>
  );
};

export default Hero;
