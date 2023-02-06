import React from "react";
import { WorkItem } from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Freelance Web Developer",
    duration: "3 Years",
    details:"While pursuing my studies, I took on the challenge of working as a freelance web developer for three years. I honed my skills in HTML, CSS, JavaScript, and later in React, to create high-quality websites for my clients. This experience allowed me to apply the theories I learned in the classroom to real-world projects, and helped me to develop a strong understanding of the web development process. Furthermore, working as a freelancer gave me the opportunity to interact with clients, understand their needs, and deliver solutions that exceeded their expectations."},

    {
    year: 2023,
    title:"The School of Electrical and Computer Engineering of Applied Studies",
    duration: "4 Years",
    details:"As a recent graduate from The School of Electrical and Computer Engineering of Applied Studies, I have the skills and knowledge to make a real impact in the field of Software Development. My strong analytical and problem-solving skills, combined with my proficiency in programming languages and experience in  design and developing, make me a valuable asset to any organization."

  },

  {

    year: 2019,
    title: "Eight Belgrade Gymnasium",
    duration: "4 Years",
    details:"I am a proud alumni of Eight Belgrade Gymnasium, where I had the opportunity to cultivate my language abilities and enhance my interpersonal skills. This institution provided me with a dynamic and supportive learning environment that encouraged me to explore my full potential. During my time there, I was able to engage with a diverse community of individuals, fostering my ability to effectively communicate and collaborate with others. I am grateful for the experiences and education that Eight Belgrade Gymnasium has given me, as they have been instrumental in shaping who I am today.",
  },
];

function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Expirience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          
        />
        
      ))}
    </div>
  );
}

export default Work;
