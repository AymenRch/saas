import '../../style/templates/CreativeTemplate.css';
import {FaEnvelope} from 'react-icons/fa'
import { CiLocationOn } from "react-icons/ci";


function CreativeTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects } = content;

  return (
    <div className={`creative-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Hero Section */}
      <section className="creative-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="name-wrapper">
              <h1 className="creative-name">{personalInfo.name}</h1>
              <div className="name-decoration"></div>
            </div>
            <h2 className="creative-title">{personalInfo.title}</h2>
            <p className="creative-bio">{personalInfo.bio}</p>
            <div className="hero-cta">
              <a href={`mailto:${personalInfo.email}`} className="cta-button">
                <span>Let's Create Together</span>
                <div className="button-decoration"></div>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-card">
              <div className="card-decoration"></div>
              <div className="contact-info-creative">
                {personalInfo.email && (
                  <div className="contact-item-creative">
                    <div className="contact-icon"><FaEnvelope/></div>
                    <span>{personalInfo.email}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="contact-item-creative">
                    <div className="contact-icon"><CiLocationOn/></div>
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="contact-item-creative">
                    <div className="contact-icon">📱</div>
                    <span>{personalInfo.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="creative-skills">
        <div className="container">
          <h2 className="creative-section-title">
            <span>My Superpowers</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="skills-creative-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card-creative">
                <div className="skill-icon">
                  <div className="skill-percentage-circle">
                    <svg className="progress-ring" width="80" height="80">
                      <circle
                        className="progress-ring-circle-bg"
                        stroke="#f1f5f9"
                        strokeWidth="4"
                        fill="transparent"
                        r="36"
                        cx="40"
                        cy="40"
                      />
                      <circle
                        className="progress-ring-circle"
                        stroke="#f093fb"
                        strokeWidth="4"
                        fill="transparent"
                        r="36"
                        cx="40"
                        cy="40"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.level / 100)}`}
                      />
                    </svg>
                    <div className="percentage-text">{skill.level}%</div>
                  </div>
                </div>
                <h3 className="skill-name-creative">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="creative-experience">
        <div className="container">
          <h2 className="creative-section-title">
            <span>Journey So Far</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="experience-creative-grid">
            {experience.map((exp, index) => (
              <div key={exp.id} className="experience-card-creative">
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="experience-content-creative">
                  <div className="experience-period-creative">{exp.period}</div>
                  <h3 className="experience-title-creative">{exp.title}</h3>
                  <h4 className="experience-company-creative">{exp.company}</h4>
                  <p className="experience-desc-creative">{exp.description}</p>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="creative-projects">
        <div className="container">
          <h2 className="creative-section-title">
            <span>Creative Playground</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="projects-creative-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card-creative">
                <div className="project-image-creative">
                  <div className="project-overlay">
                    <div className="project-links-creative">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          className="project-link-creative demo-link"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          className="project-link-creative code-link"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-placeholder-creative">
                    <div className="placeholder-icon">🚀</div>
                  </div>
                </div>
                <div className="project-info-creative">
                  <h3 className="project-title-creative">{project.title}</h3>
                  <p className="project-description-creative">{project.description}</p>
                  <div className="project-tech-creative">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-creative">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="creative-footer">
        <div className="container">
          <div className="footer-content-creative">
            <div className="footer-text-creative">
              <h3>Ready to Create Something Amazing?</h3>
              <p>Let's turn your ideas into reality</p>
            </div>
            <div className="footer-contact">
              <a href={`mailto:${personalInfo.email}`} className="footer-email">
                {personalInfo.email}
              </a>
              <div className="social-links-creative">
                {personalInfo.linkedin && (
                  <a 
                    href={`https://${personalInfo.linkedin}`} 
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {personalInfo.github && (
                  <a 
                    href={`https://${personalInfo.github}`} 
                    className="social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CreativeTemplate;