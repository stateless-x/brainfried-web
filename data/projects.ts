export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  link: string | null
  github: string | null
  achievements: string[]
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
    link: null,
    github: null,
    achievements: [
      "Reduced lesson planning time by 40% for teachers",
      "Increased student engagement by 25% through personalized content",
      "Currently used by over 500 educators across 50 schools",
    ],
  },
  {
    id: "ye",
    title: "Ye",
    category: "art_app",
    description:
      "A creative platform that transforms ordinary images into extraordinary art through innovative filtering techniques.",
    longDescription:
      "Ye is an artistic transformation platform that uses advanced image processing algorithms to convert ordinary photos into various artistic styles. Users can apply filters inspired by famous art movements or create their own custom styles. The application features real-time previews, layered editing capabilities, and social sharing integration that allows artists to showcase their creations within a dedicated community space.",
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
    id: "gold-shopping",
    title: "Gold Shopping",
    category: "ecommerce_",
    description: "A premium online shopping experience featuring elegant design and seamless user journey.",
    longDescription:
      "Gold Shopping is a luxury e-commerce platform designed for high-end retail products. The site features a minimalist, elegant interface with emphasis on product photography and seamless user experience. Key features include personalized product recommendations, virtual try-on capabilities for select items, and a streamlined checkout process optimized for conversion. The platform also includes a sophisticated inventory management system and analytics dashboard for merchants.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    image: "/placeholder.svg?height=400&width=600",
    link: "https://goldshopping.huasengheng.com/",
    github: null,
    achievements: [
      "Increased conversion rate by 25% compared to previous platform",
      "Reduced cart abandonment by 30%",
      "Improved page load speed by 40%",
    ],
  },
  {
    id: "scheduler-pro",
    title: "Scheduler Pro",
    category: "productivity_",
    description: "An intelligent scheduling system that optimizes time management for professionals and teams.",
    longDescription:
      "Scheduler Pro is a comprehensive time management solution designed for busy professionals and teams. The application uses AI to analyze scheduling patterns, meeting effectiveness, and productivity metrics to suggest optimal scheduling arrangements. Features include automated meeting scheduling across time zones, smart conflict resolution, integration with popular calendar platforms, and detailed analytics on time usage patterns.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Google Calendar API"],
    image: "/placeholder.svg?height=400&width=600",
    link: null,
    github: null,
    achievements: [
      "Saved users an average of 5 hours per week on scheduling tasks",
      "Reduced meeting overruns by 35%",
      "Adopted by 25+ corporate clients for team productivity",
    ],
  },
]
