"use client";
import React, { useState } from "react";
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { LiaCodeBranchSolid } from "react-icons/lia";
import { RiCodeBlock, RiGitBranchLine, RiDatabase2Line } from "react-icons/ri";
import { SiSketch, SiInvision } from 'react-icons/si';
import { FaHtml5, FaDatabase, FaCode, FaTasks, FaBrain, FaBriefcase, FaLayerGroup } from 'react-icons/fa';
import { SparklesIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const renderSkills = () => {
    let skills;
    switch (activeTab) {
      case "frontend":
        skills = Frontend_skill;
        break;
      case "backend":
        skills = Backend_skill;
        break;
      case "fullstack":
        skills = Full_stack;
        break;
      case "other":
        skills = Other_skill;
        break;
      default:
        skills = Skill_data;
    }

    return skills.map((image, index) => (
      <SkillDataProvider
        key={index}
        src={image.Image}
        width={image.width}
        height={image.height}
        index={index}
        name={image.skill_name}
      />
    ));
  };

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-6 py-16 md:py-20 lg:py-24"
    >
      <SkillText />

      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
        <button
          className={`text-white Welcome-box py-2 px-4 md:py-2 md:px-6 border border-[#7042f88b] opacity-90 ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 md:h-6 md:w-6" />
          <h1 className="Welcome-text text-sm md:text-base">
            All Skills
          </h1>
        </button>
        <button
          className={`text-white Welcome-box py-2 px-4 md:py-2 md:px-6 border border-[#7042f88b] opacity-90 ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => setActiveTab("frontend")}
        >
          <RiCodeBlock className="text-[#b49bff] mr-2 h-5 w-5 md:h-6 md:w-6" />
          <h1 className="Welcome-text text-sm md:text-base">
            Frontend
          </h1>
        </button>
        <button
          className={`text-white Welcome-box py-2 px-4 md:py-2 md:px-6 border border-[#7042f88b] opacity-90 ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => setActiveTab("backend")}
        >
          <RiDatabase2Line className="text-[#b49bff] mr-2 h-5 w-5 md:h-6 md:w-6" />
          <h1 className="Welcome-text text-sm md:text-base">
            Backend
          </h1>
        </button>
        <button
          className={`text-white Welcome-box py-2 px-4 md:py-2 md:px-6 border border-[#7042f88b] opacity-90 ${activeTab === "other" ? "active" : ""}`}
          onClick={() => setActiveTab("other")}
        >
          <RiGitBranchLine className="text-[#b49bff] mr-2 h-5 w-5 md:h-6 md:w-6" />
          <h1 className="Welcome-text text-sm md:text-base">
            Other
          </h1>
        </button>
      </div>

      {/* Render Skills */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
        {renderSkills()}
      </div>

      {/* Optional background video */}
      <div className="absolute inset-0 z-[-10]">
        <div className="w-full h-full bg-black opacity-30 flex items-center justify-center">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
