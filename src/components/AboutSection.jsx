import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Java Developer | Full-Stack Web Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate Java developer with a knack for building powerful
              and scalable web applications. My expertise lies in backend
              development using Servlets, JDBC, and JSP, paired with front-end
              skills in HTML, CSS, JavaScript, and React to deliver complete,
              seamless user experiences. 
            </p>

            <p className="text-muted-foreground">
              With every project, I aim to bridge
              functionality and design—writing clean, efficient code that not
              only works well but looks great too. I thrive on solving complex
              problems and constantly push myself to learn new technologies that
              enhance my craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Jyaneswari._.Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications and visually appealing user interfaces using React, Tailwind CSS, and modern web tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Data Science</h4>
                  <p className="text-muted-foreground">
                    Building smart applications using Python, ML models, and data-driven techniques. Final Year Project: Human Body Pose Estimation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Fundamentals</h4>
                  <p className="text-muted-foreground">
                    Creating dynamic Java-based web applications using Servlets and integrating them with MySQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
