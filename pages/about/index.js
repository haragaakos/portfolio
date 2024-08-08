import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import Circles from "../../components/Circles";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaPhp,
} from "react-icons/fa";

import {
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMysql,
  SiOracle,
  SiPostgresql
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "Számítástechnikai ismeretek",
    info: [
      {
        title: "Programozási nyelvek",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <FaReact />, name: "React" },
          { icon: <SiCsharp />, name: "C#" },
          { icon: <FaJava />, name: "Java" },
          { icon: <FaPhp />, name: "PHP" },
        ],
      },
      {
        title: "Adatbázis kezelő rendszerek",
        icons: [
          { icon: <SiMicrosoftsqlserver />, name: "Microsoft SQL Server" },
          { icon: <SiMysql />, name: "MySQL" },
          { icon: <SiPostgresql />, name: "PostgreSQL" },
          { icon: <SiOracle />, name: "Oracle" },
        ],
      },
    ],
  },
  {
    title: "Tapasztalat",
    info: [
      {
        title: "Hatóanyaggyártó, Egis Gyógyszergyár Zrt., Budapest",
        stage: "2017 - 2023",
      },
      {
        title: "Vegyianyaggyártó, Sanofi/Chinoin Zrt., Újpest",
        stage: "2015 - 2016",
      },
      {
        title: "Technikus, Ceva Phylaxia Oltóanyagtermelő Zrt., Budapest",
        stage: "2013 - 2015",
      },
    ],
  },
  {
    title: "Tanulmányok",
    info: [
      {
        title: "Üzemmérnök-informatikus, Szoftverfejlesztő specializáció (levelező tagozat), Neumann János Egyetem, Kecskemét",
        stage: "2019 - 2025",        
      },
      {
        title: "Vegyianyaggyártó (OKJ 31 5244 14), Surányi Endre Szakképző Iskola és Kollégium",
        stage: "2004 - 2005",
      },
      {
        title: "Számítástechnikai Szoftverüzemeltető (OKJ: 52 4641 03), Európai Üzleti Polytechnikum és Nemzetközi Szakközépiskola, Budapest",
        stage: "2003 - 2004",
      },
      {
        title: "Szakközépiskolai Érettségi, Irinyi János Középiskola, Közgazdasági szak, Kazincbarcika",
        stage: "1999 - 2003",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs
          </motion.h2>
          <motion.p 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            blablabla..........
          </motion.p>
          <motion.div 
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute
                after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col items-center xl:items-start"
              >
                <div className="font-light mb-2 text-center xl:text-left">{item.title}</div>
                {item.stage && (
                  <div className="text-accent">{item.stage}</div>
                )}
                {item.icons && (
                  <div className="flex gap-x-4 mt-2">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white" title={icon.name}>
                        {icon.icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;