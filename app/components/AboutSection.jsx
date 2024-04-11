"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node</li>
                <li>Next</li>
                <li>React</li>
                <li>Angular</li>
                <li>PyTorch</li>
                <li>AWS Lambda</li>
                <li>AKS</li>
                <li>API-M</li>
                <li>JFrog Artifactory</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>University of Waterloo, BCS Honours Co-op</li>
                <li>Korea Advanced Institute of Science and Technology, International Exchange</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Manulife Cloud Platforms</li>
                <li>Manulife Global Cyber Security</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/AboutMe.jpg" alt="Generic image with laptop and notebook" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        I'm a third year honours co-op computer science student studying at the University of Waterloo. My primary expertise is in Cloud Platforms Engineering, working with technologies such as Azure Kubernetes Service, API-Management, and JFrog Artifactory. Additionally, I have worked as an operations intern building data pipelines for Manulife Global Cyber Security. I love working on personal (oftentimes programming) projects in my spare time, as well as playing competitive strategy games. Passionate about everything I love, I thrive in any environment where I truly enjoy what I'm doing.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection