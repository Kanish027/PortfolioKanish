import React from "react";
import Footer from "@/components/Footer";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { testimonials } from "../../constants/data";
import { IoIosLink } from "react-icons/io";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="fixed px-10 top-7">
        <Link href={"/"}>
          {/* <img
            src="https://media.licdn.com/dms/image/D5603AQHd8pC3epdBaw/profile-displayphoto-shrink_400_400/0/1710508460302?e=1717027200&v=beta&t=fRjKKSnUz_PLsPZ11jWWKz2wXSWVWxFKArbllxxbq90"
            alt=""
            className="rounded-full w-10"
          /> */}
        </Link>
      </div>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 pt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc">
                    Things I’ve made trying to put my dent in the universe.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I’ve worked on tons of little projects over the years but
                    these are the ones that I&apos;m most proud of.
                  </p>
                </header>
              </div>
              <div className="flex py-20 items-center justify-center antialiased">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Ecommerce App
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        The Full Stack Ecommerce Web Application with Admin
                        Dashboard.
                        <br />
                        <span className="my-2 text-xs">
                          React. Node. Express. Mongo. Bootstrap
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://applewithkanish.netlify.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={"https://github.com/Kanish027/Ecommerce---Frontend"}
                      className="text-white flex items-center gap-2 mt-2"
                      target="blank"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Social Media
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        The Full Stack Social Media App created during Full
                        Stack Development Training.
                        <br />
                        <span className="my-2 text-xs">
                          React. Node. Express. Mongo. MUI
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://twitterint.netlify.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={
                        "https://github.com/Kanish027/Social-Media-Frontend"
                      }
                      target="blank"
                      className="text-white flex items-center gap-2 mt-2"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Sales App
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        The Full Stack Sales Application for Adding sales entry
                        with Authentication.
                        <br />
                        <span className="my-2 text-xs">
                          React. Node. Express. Mongo. Bootstrap
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://salesappint.netlify.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={"https://github.com/Kanish027/Sales-App-Frontend"}
                      className="text-white flex items-center gap-2 mt-2"
                      target="blank"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Ecommerce UI
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        The Ecommerce User Interface (UI) was developed as part
                        of the frontend training in Internshala's full-stack
                        course.
                        <br />
                        <span className="my-2 text-xs">
                          HTML. CSS. Bootstrap. JavaScript. Swiper.js
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://elegant-druid-dd7b4c.netlify.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={"https://github.com/Kanish027/E-Commerce-Frontend"}
                      className="text-white flex items-center gap-2 mt-2"
                      target="blank"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Meme Generator
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        A meme generator was developed using ReactJS and the
                        Imgflip API for accessing meme templates.
                        <br />
                        <span className="my-2 text-xs">
                          React. CSS. JavaScript. Imgflip API
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://meme-generator-kanish027.vercel.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={"https://github.com/Kanish027/meme-generator"}
                      className="text-white flex items-center gap-2 mt-2"
                      target="blank"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                  <GlowingStarsBackgroundCard>
                    <GlowingStarsTitle className="my-2">
                      Portfolio
                    </GlowingStarsTitle>
                    <div className="flex justify-between items-end">
                      <GlowingStarsDescription>
                        Personal Portfolio showcasing projects, technical
                        skills, and provide user information with contact
                        details.
                        <br />
                        <span className="my-2 text-xs">
                          Nextjs. Tailwind CSS. Aceternity UI
                        </span>
                      </GlowingStarsDescription>
                      <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                        <Link
                          href={"https://main--kanish.netlify.app/"}
                          target="blank"
                        >
                          <Icon />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={"https://github.com/Kanish027/PortfolioKanish"}
                      className="text-white flex items-center gap-2 mt-2"
                      target="blank"
                    >
                      <div>
                        <IoIosLink />
                      </div>
                      <div>GitHub</div>
                    </Link>
                  </GlowingStarsBackgroundCard>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc">
                Tech Stacks
              </h1>
            </div>
          </div>
        </div>
        <div className="rounded-md mt-16 flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
