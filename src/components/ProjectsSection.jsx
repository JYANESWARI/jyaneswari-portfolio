import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Human Body Pose Estimation",
    description:
      "A computer vision project using OpenPose and deep learning to detect and estimate human body keypoints in real-time.",
    image: "/projects/project1.png", // replace with your actual image path
    tags: ["Python", "OpenCV", "Deep Learning"],
    githubUrl: "https://github.com/JYANESWARI/HUMAN_BODY_POSE_ESTIMATION", // replace with your GitHub repo link
  },
  {
    id: 2,
    title: "House Price Prediction",
    description:"Built a machine learning model to predict Bangalore house prices using Linear Regression. Includes data cleaning, feature engineering. Deployed using Flask with a simple web UI.",
    image: "/projects/project2.jpg", // replace with your actual image path
    tags: ["Python", "Scikit-Learn", "HTML/CSS/JS"],
    githubUrl: "https://github.com/JYANESWARI/HOUSE_PRICE_PREDICTION", // replace with your GitHub repo link
  },
  {
  id: 3,
  title: "Console-Based GitHub Application",
  description: "A Java terminal application for managing repositories, tracking commits, and handling files with user authentication.",
  image: "/projects/project5.jpg", // Replace with actual image path
  tags: ["Java", "OOP", "File Handling"],
  githubUrl: "https://github.com/JYANESWARI/CONSOLE_BASED_GIT_APPLICATION" // Replace with actual repo link
}
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/JYANESWARI"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
