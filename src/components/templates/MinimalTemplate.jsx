import '../../style/templates/MinimalTemplate.css';

function MinimalTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects } = content;

  return (
    <div className={`minimal-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Header */}
      <header className="minimal-header">
        <div className="container">
          <div className="header-content">
            <div className="personal-info">
              <h1 className="name">{personalInfo.name}</h1>
              <h2 className="title">{personalInfo.title}</h2>
              <p className="bio">{personalInfo.bio}</p>
            </div>
            <div className="contact-info">
              <div className="contact-grid">
                <div className="contact-item">
                  <label>Email</label>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <label>Phone</label>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <label>Location</label>
                  <span>{personalInfo.location}</span>
                </div>
                {personalInfo.website && (
                  <div className="contact-item">
                    <label>Website</label>
                    <span>{personalInfo.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="minimal-main">
        <div className="container">
          <div className="content-grid">
            
            {/* Left Column */}
            <aside className="sidebar">
              
              {/* Skills */}
              <section className="section">
                <h3 className="section-title">Skills</h3>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="section">
                <h3 className="section-title">Links</h3>
                <div className="links-list">
                  {personalInfo.linkedin && (
                    <a 
                      href={`https://${personalInfo.linkedin}`} 
                      className="link-item"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}
                  {personalInfo.github && (
                    <a 
                      href={`https://${personalInfo.github}`} 
                      className="link-item"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {personalInfo.website && (
                    <a 
                      href={`https://${personalInfo.website}`} 
                      className="link-item"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  )}
                </div>
              </section>
            </aside>

            {/* Right Column */}
            <div className="main-content">
              
              {/* Experience */}
              <section className="section">
                <h3 className="section-title">Experience</h3>
                <div className="experience-list">
                  {experience.map((exp, index) => (
                    <div key={exp.id} className="experience-item">
                      <div className="experience-header">
                        <div>
                          <h4 className="job-title">{exp.title}</h4>
                          <h5 className="company">{exp.company}</h5>
                        </div>
                        <span className="period">{exp.period}</span>
                      </div>
                      <p className="description">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section className="section">
                <h3 className="section-title">Projects</h3>
                <div className="projects-list">
                  {projects.map((project, index) => (
                    <div key={project.id} className="project-item">
                      <div className="project-header">
                        <h4 className="project-title">{project.title}</h4>
                        <div className="project-links">
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              className="project-link"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              className="project-link"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <div className="technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MinimalTemplate;