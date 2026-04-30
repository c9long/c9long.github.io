"use client";
import React, { useState } from "react";
import Image from "next/image";

import NameTitle from "./titles/nametitle";
import ShowOnScroll from "../animations/showonscroll";
import BulletPoint from "./bulletpoint";

export default function AboutMe() {
  return (
    <div id="About Me Section" className="flex flex-col sm:flex-row gap-10 ">
      <div className="w-full sm:w-1/3">
        <Image
          className="aspect-square rounded-lg border-4 object-contain border-gray-text dark:border-white"
          src="headshot.png"
          alt="Chris Long"
          loading="lazy"
          width={1000}
          height={1000}
        />
      </div>

      <ShowOnScroll className="w-full sm:w-2/3 flex flex-col gap-5 whitespace-pre-line" timing={250} delay={500}>
        <NameTitle />
        <BulletPoint point={"Identity Security Engineer"} />
        <BulletPoint point={"Authentication & DevOps Specialist"} />
        <BulletPoint point={"Full-Stack Product Developer"} />
        <p className="text-gray-text dark:text-white">
          Welcome to my Portfolio! I'm a full-stack developer with expertise in building scalable
          authentication systems, cloud infrastructure, and immersive digital experiences.
        </p>
        <p className="text-gray-text dark:text-white">
          I've engineered OAuth 2.0 authentication flows at Clio, optimized cloud platforms at Manulife,
          built VR applications at Amped Up Aviation, and automated security processes. My work spans
          Ruby on Rails, React, Node.js, Azure, and modern DevOps practices.
        </p>
        <p className="text-gray-text dark:text-white">
          I'm passionate about solving complex technical challenges and building tools that make a
          difference. Always eager to learn new technologies and collaborate with talented teams.
          Feel free to reach out!
        </p>
      </ShowOnScroll>
    </div>
  );
}
