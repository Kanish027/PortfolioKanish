import Footer from "@/components/Footer";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { EductionAndExperiences } from "../../constants/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <div>
      <div className="fixed px-10 top-7">
        <Link href={"/"}>
          <img
            src="https://media.licdn.com/dms/image/D5603AQHd8pC3epdBaw/profile-displayphoto-shrink_400_400/0/1710508460302?e=1717027200&v=beta&t=fRjKKSnUz_PLsPZ11jWWKz2wXSWVWxFKArbllxxbq90"
            alt=""
            className="rounded-full w-10"
          />
        </Link>
      </div>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 pt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <img
                        alt=""
                        src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&w=828&q=75"
                        width="800"
                        height="800"
                        className="aspect-square rotate-3 rounded-2xl"
                        sizes="(min-width: 1024px) 32rem, 20rem"
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:white">
                      I’m Kanish Mohariya. I live in Nagpur City.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc">
                      <p>
                        I'm Kanish Mohariya, an IT graduate with a strong
                        passion for web development. With hands-on experience as
                        a Web Developer Intern at TrickySys IT Solutions and
                        specialized training in the MERN stack from Internshala
                        Trainings, I bring a blend of practical skills and
                        theoretical knowledge to the table.
                      </p>
                      <p>
                        During my internship, I contributed to the development
                        of dynamic web applications, gaining valuable insights
                        into front-end and back-end technologies. The intensive
                        6-month Full Stack Web Development training sharpened my
                        expertise in MongoDB, Express.js, React.js, and Node.js,
                        empowering me to create robust and scalable solutions.
                      </p>
                      <p>
                        Driven by a love for crafting seamless digital
                        experiences, I continuously strive to stay updated with
                        the latest industry trends and best practices. My
                        proficiency extends to HTML, CSS, JavaScript, React,
                        Node.js, and more, enabling me to tackle complex
                        challenges with confidence and creativity.
                      </p>
                      <p>
                        I thrive in collaborative environments where innovation
                        and problem-solving are encouraged. Committed to
                        delivering excellence, I am eager to leverage my skills
                        and contribute meaningfully to transformative web
                        development projects.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">
                      <li className="flex">
                        <Link
                          href={"https://twitter.com/KMohariya"}
                          target="blank"
                          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-600 dark:hover:text-teal-500"
                        >
                          <AiFillTwitterSquare className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500" />
                          <span className="ml-4">Follow on X</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href={"https://www.instagram.com/kanish_mohariya/"}
                          target="blank"
                          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-600 dark:hover:text-teal-500"
                        >
                          <AiFillInstagram className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500" />
                          <span className="ml-4">Follow on Instagram</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href={"https://github.com/Kanish027"}
                          target="blank"
                          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-600 dark:hover:text-teal-500"
                        >
                          <AiFillGithub className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500" />
                          <span className="ml-4">Follow on GitHub</span>
                        </Link>
                      </li>
                      <li className="mt-4 flex">
                        <Link
                          href={
                            "https://www.linkedin.com/in/kanish-mohariya-7a904a240/"
                          }
                          target="blank"
                          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-600 dark:hover:text-teal-500"
                        >
                          <AiFillLinkedin className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500" />
                          <span className="ml-4">Follow on LinkedIn</span>
                        </Link>
                      </li>
                      <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc flex">
                        <Link
                          href={"mailto:mekanishmohariya@gmail.com"}
                          className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-500 dark:hover:text-teal-500"
                        >
                          <AiFillMail className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500" />
                          <span className="ml-4">
                            mekanishmohariya@gmail.com
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-16 sm:mt-20">
                  <header className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc">
                      Education And Experiences
                    </h1>
                  </header>
                  <div className="mt-6">
                    <HoverEffect items={EductionAndExperiences} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
