export const Skill_data = [
  {
    skill_name: "HTML",
    Image: "/skills/html.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "CSS",
    Image: "/skills/css.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "JavaScript",
    Image: "/skills/js.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Tailwind",
    Image: "/skills/tailwind.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "React",
    Image: "/skills/react.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "TypeScript",
    Image: "/skills/ts.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Next.js",
    Image: "/skills/next.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Framer Motion",
    Image: "/skills/motion.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Node.js",
    Image: "/skills/node.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "MongoDB",
    Image: "/skills/mongodb.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Figma",
    Image: "/skills/figma.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Python",
    Image: "/skills/python.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "PHP",
    Image: "/skills/php.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "MySQL",
    Image: "/skills/mysql.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Git",
    Image: "/skills/git.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "GitHub",
    Image: "/skills/github.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "GitLab",
    Image: "/skills/gitlab.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "WordPress",
    Image: "/skills/wordpress.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "VSCode",
    Image: "/skills/vscode.svg",
    width: 30,
    height: 30,
  },
  {
    skill_name: "Bootstrap",
    Image: "/skills/bootstrap.svg",
    width: 30,
    height: 30,
  },
  // {
  //   skill_name: "Flutter",
  //   Image: "/skills/flutter.svg",
  //   width: 30,
  //   height: 30,
  // },
  // {
  //   skill_name: "Django",
  //   Image: "/skills/django.svg",
  //   width: 30,
  //   height: 30,
  // },
  {
    skill_name: "Electron",
    Image: "/skills/electron.svg",
    width: 30,
    height: 30,
  },
];


export const Frontend_skill = Skill_data.filter(skill =>
  ["HTML", "CSS", "JavaScript", "Tailwind","Bootstrap", "React", "TypeScript", "Next.js", "Framer Motion", "Figma", "Flutter", "Electron"].includes(skill.skill_name)
);

export const Backend_skill = Skill_data.filter(skill =>
  ["Node.js", "MongoDB", "Python", "PHP", "MySQL", "Django"].includes(skill.skill_name)
);

export const Full_stack = Skill_data.filter(skill =>
  ["Node.js", "MongoDB", "React", "Next.js", "TypeScript", "JavaScript", "Python", "Django", "Electron"].includes(skill.skill_name)
);

export const Other_skill = Skill_data.filter(skill =>
  ["Git", "GitHub", "GitLab", "WordPress", "VSCode"].includes(skill.skill_name)
);
