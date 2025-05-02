export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link: string | null;
  github: string | null;
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "braincase",
    title: "Braincase",
    category: "flagship_",
    description:
      "An educational AI platform empowering teachers to create higher quality learning materials and enhance the teaching experience.",
    longDescription:
      "Braincase is our flagship educational AI platform that revolutionizes how teachers create and manage learning materials. Using advanced natural language processing and machine learning algorithms, it helps educators generate customized content, assessments, and lesson plans tailored to their specific classroom needs. The platform includes features like automated grading, personalized feedback generation, and content adaptation based on student performance data.",
    technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://braincase.app",
    github: null,
    achievements: [
      "Reduced lesson planning time by 40% for teachers",
      "Increased student engagement by 25% through personalized content",
      "Currently used by over 500 educators across 50 schools",
    ],
  },
  {
    id: "praewbank",
    title: "Praewbank's Wedding",
    category: "utility_",
    description: "A modern and heartfelt wedding website for Bank and Praew.",
    longDescription:
      "A beautifully crafted wedding website made for Bank and Praew's special day. It features their love story, event details, RSVP management, and a gallery to share memories with guests. Designed with elegance and mobile responsiveness in mind, the site delivers a seamless experience for both local and international guests.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://praewbankforevermore.love",
    github: null,
    achievements: [
      "Streamlined RSVP collection and guest communication",
      "Optimized for mobile, ensuring access for all invitees",
      "Delivered a memorable, shareable digital experience for the couple",
    ],
  },
  {
    id: "gold-shopping",
    title: "Hua Seng Heng Gold Store",
    category: "e-commerce_",
    description:
      "A modern, vibrant e-commerce redesign for Hua Seng Heng’s gold shopping experience.",
    longDescription:
      "This project involved a complete UI/UX redesign for Hua Seng Heng’s online gold store. The designer created a bold, modern visual identity that reflects both the brand’s heritage and its forward-looking approach. With a vibrant color palette, clean layouts, and user-focused interactions, the design elevates the shopping experience for a new generation of gold buyers. The redesign focused on clarity, trustworthiness, and mobile-first usability.",
    technologies: ["Figma"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://goldshopping.huasengheng.com/",
    github: null,
    achievements: [
      "Delivered a refreshed, modern look for a traditional gold brand",
      "Enhanced visual hierarchy and accessibility across all screen sizes",
      "Improved perceived trust and shopping confidence through thoughtful UI",
    ],
  },
  {
    id: "pork-beer",
    title: "Hatyai BBQ",
    category: "restaurant_",
    description: "Hatyai BBQ is a BBQ restaurant in Hatyai, Thailand.",
    longDescription:
      "Scheduler Pro is a comprehensive time management solution designed for busy professionals and teams. The application uses AI to analyze scheduling patterns, meeting effectiveness, and productivity metrics to suggest optimal scheduling arrangements. Features include automated meeting scheduling across time zones, smart conflict resolution, integration with popular calendar platforms, and detailed analytics on time usage patterns.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Google Calendar API"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://hatyai-bbq-git-main-stateless-projects.vercel.app/",
    github: null,
    achievements: [
      "Saved users an average of 5 hours per week on scheduling tasks",
      "Reduced meeting overruns by 35%",
      "Adopted by 25+ corporate clients for team productivity",
    ],
  },
  {
    id: "mining_one",
    title: "Mining One",
    category: "utility_",
    description:
      "Mining One is a utility app that help tracking bitcoin mining pool rewards in different time periods.",
    longDescription: "Nothing but Ye",
    technologies: ["JavaScript", "WebGL", "Canvas API", "Firebase"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://stateless-x.github.io/ye/",
    github: "https://github.com/stateless-x/ye",
    achievements: [
      "Featured in Digital Arts Magazine",
      "Over 10,000 monthly active users",
      "Community of 5,000+ artists sharing their creations",
    ],
  },
  {
    id: "ye",
    title: "Ye",
    category: "pure-art_",
    description: "Ye",
    longDescription: "Nothing but Ye",
    technologies: ["JavaScript", "WebGL", "Canvas API", "Firebase"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://stateless-x.github.io/ye/",
    github: "https://github.com/stateless-x/ye",
    achievements: [
      "Featured in Digital Arts Magazine",
      "Over 10,000 monthly active users",
      "Community of 5,000+ artists sharing their creations",
    ],
  },
];
