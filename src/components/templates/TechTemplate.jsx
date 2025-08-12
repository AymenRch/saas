import '../../style/templates/TechTemplate.css';

function TechTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects } = content;

  return (
    <div className={`tech-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Hero Section */}
      <section className="tech-hero">
        <div className="hero-background">
          <div className="code-pattern">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="tech-badge">
              <span>&lt;developer/&gt;</span>
            </div>
            <h1 className="tech-name">{personalInfo.name}</h1>
            <h2 className="tech-title">{personalInfo.title}</h2>
            <p className="tech-bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <a href={`mailto:${personalInfo.email}`} className="cta-primary">
                <span>{'{'} Contact Me {'}'}</span>
              </a>
              {personalInfo.github && (
                <a 
                  href={`https://${personalInfo.github}`} 
                  className="cta-secondary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
          <div className="hero-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <div className="terminal-title">terminal</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">whoami</span>
              </div>
              <div className="terminal-output">{personalInfo.name.toLowerCase().replace(' ', '_')}</div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">cat skills.json</span>
              </div>
              <div className="terminal-output">
                {'{'}
                <br />
                &nbsp;&nbsp;"languages": {skills.slice(0, 3).map(skill => `"${skill.name}"`).join(', ')},
                <br />
                &nbsp;&nbsp;"experience": "{experience.length}+ years"
                <br />
                {'}'}
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="tech-skills">
        <div className="container">
          <h2 className="tech-section-title">
            <span className="code-bracket">{'<'}</span>
            Technical Skills
            <span className="code-bracket">{'/>'}</span>
          </h2>
          <div className="skills-tech-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card-tech">
                <div className="skill-header-tech">
                  <h3>{skill.name}</h3>
                  <div className="skill-level-tech">
                    <div className="level-bar">
                      <div 
                        className="level-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="level-text">{skill.level}%</span>
                  </div>
                </div>
                <div className="skill-category-tech">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="tech-experience">
        <div className="container">
          <h2 className="tech-section-title">
            <span className="code-bracket">{'<'}</span>
            Work Experience
            <span className="code-bracket">{'/>'}</span>
          </h2>
          <div className="experience-tech-list">
            {experience.map((exp, index) => (
              <div key={exp.id} className="experience-card-tech">
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-content-tech">
                  <div className="experience-meta-tech">
                    <span className="experience-period-tech">{exp.period}</span>
                    <span className="experience-location-tech">{exp.location}</span>
                  </div>
                  <h3 className="experience-title-tech">{exp.title}</h3>
                  <h4 className="experience-company-tech">{exp.company}</h4>
                  <p className="experience-desc-tech">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="achievements-tech">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="technologies-tech">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-tech">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="tech-projects">
        <div className="container">
          <h2 className="tech-section-title">
            <span className="code-bracket">{'<'}</span>
            Featured Projects
            <span className="code-bracket">{'/>'}</span>
          </h2>
          <div className="projects-tech-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card-tech">
                <div className="project-header-tech">
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-links-tech">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        className="project-link-tech"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="project-link-tech"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title-tech">{project.title}</h3>
                <p className="project-description-tech">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge-tech">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="container">
          <div className="footer-content-tech">
            <div className="footer-code">
              <div className="code-block">
                <div className="code-line-footer">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"{personalInfo.name}"</span>
                </div>
                <div className="code-line-footer">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> contact</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"{personalInfo.email}"</span>
                </div>
                <div className="code-line-footer">
                  <span className="code-comment">// Let's build something amazing together</span>
                </div>
              </div>
            </div>
            <div className="footer-links-tech">
              {personalInfo.linkedin && (
                <a 
                  href={`https://${personalInfo.linkedin}`} 
                  className="footer-link-tech"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a 
                  href={`https://${personalInfo.github}`} 
                  className="footer-link-tech"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              <a href={`mailto:${personalInfo.email}`} className="footer-link-tech">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TechTemplate;