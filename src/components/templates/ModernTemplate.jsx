import '../../style/templates/ModernTemplate.css';

function ModernTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects } = content;

  return (
    <div className={`modern-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Hero Section */}
      <section className="modern-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                Get In Touch
              </a>
              <a href={`tel:${personalInfo.phone}`} className="btn-secondary">
                {personalInfo.phone}
              </a>
            </div>
          </div>
          <div className="hero-contact">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>{personalInfo.location}</span>
            </div>
            {personalInfo.website && (
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="modern-skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="modern-experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="company-name">{exp.company}</h4>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="modern-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>📱</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        View Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <h3>{personalInfo.name}</h3>
              <p>Let's build something amazing together</p>
            </div>
            <div className="footer-links">
              {personalInfo.linkedin && (
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              <a href={`mailto:${personalInfo.email}`}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ModernTemplate;