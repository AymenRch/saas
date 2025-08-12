import '../../style/templates/ConsultantTemplate.css';
import { Business, Assessment, TrendingUp, Group, Lightbulb, Code } from '@mui/icons-material';

function ConsultantTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects, testimonials } = content;

  const getIcon = (index) => {
    const icons = [<Business />, <Assessment />, <TrendingUp />, <Group />, <Lightbulb />, <Code />];
    return icons[index % icons.length];
  };

  return (
    <div className={`consultant-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Hero Section */}
      <section className="consultant-hero">
        <div className="hero-background-consultant">
          <div className="geometric-pattern">
            <div className="pattern-element"></div>
            <div className="pattern-element"></div>
            <div className="pattern-element"></div>
            <div className="pattern-element"></div>
          </div>
        </div>
        <div className="hero-content-consultant">
          <div className="hero-text-consultant">
            <div className="consultant-badge">
              <span>Strategic Consultant</span>
            </div>
            <h1 className="consultant-name">{personalInfo.name}</h1>
            <h2 className="consultant-title">{personalInfo.title}</h2>
            <p className="consultant-bio">{personalInfo.bio}</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{experience.length}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{projects.length}+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            <div className="hero-cta-consultant">
              <a href={`mailto:${personalInfo.email}`} className="cta-primary-consultant">
                Schedule Consultation
              </a>
              <a href={`tel:${personalInfo.phone}`} className="cta-secondary-consultant">
                {personalInfo.phone}
              </a>
            </div>
          </div>
          <div className="hero-visual-consultant">
            <div className="consultant-card">
              <div className="card-header">
                <div className="profile-image-consultant">
                  {personalInfo.avatar ? (
                    <img src={personalInfo.avatar} alt={personalInfo.name} />
                  ) : (
                    <div className="avatar-placeholder-consultant">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="contact-info-consultant">
                  <div className="contact-item-consultant">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{personalInfo.email}</span>
                  </div>
                  <div className="contact-item-consultant">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="consultant-services">
        <div className="container">
          <h2 className="consultant-section-title">Core Competencies</h2>
          <p className="section-subtitle-consultant">
            Strategic expertise across multiple business domains
          </p>
          <div className="services-grid">
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {getIcon(index)}
                </div>
                <h3 className="service-title">{skill.name}</h3>
                <div className="service-level">
                  <div className="level-indicator">
                    <div 
                      className="level-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="level-percentage">{skill.level}%</span>
                </div>
                <p className="service-category">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="consultant-experience">
        <div className="container">
          <h2 className="consultant-section-title">Professional Journey</h2>
          <p className="section-subtitle-consultant">
            Proven track record of delivering results for leading organizations
          </p>
          <div className="experience-consultant-timeline">
            {experience.map((exp, index) => (
              <div key={exp.id} className="timeline-item-consultant">
                <div className="timeline-marker-consultant">
                  <div className="marker-inner"></div>
                </div>
                <div className="timeline-content-consultant">
                  <div className="experience-card-consultant">
                    <div className="experience-header-consultant">
                      <div className="experience-meta-consultant">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <div className="experience-details-consultant">
                          <span className="period-consultant">{exp.period}</span>
                          <span className="location-consultant">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="experience-description-consultant">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="achievements-consultant">
                        <h5>Key Achievements</h5>
                        <ul>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies/Projects */}
      <section className="consultant-projects">
        <div className="container">
          <h2 className="consultant-section-title">Case Studies</h2>
          <p className="section-subtitle-consultant">
            Strategic initiatives that delivered measurable business impact
          </p>
          <div className="case-studies-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="case-study-card">
                <div className="case-study-header">
                  <div className="case-study-meta">
                    <span className="case-study-category">{project.category}</span>
                    <span className="case-study-year">{project.year}</span>
                  </div>
                  <h3 className="case-study-title">{project.title}</h3>
                </div>
                <p className="case-study-description">{project.description}</p>
                {project.results && project.results.length > 0 && (
                  <div className="case-study-results">
                    <h5>Results Achieved</h5>
                    <ul>
                      {project.results.slice(0, 3).map((result, resultIndex) => (
                        <li key={resultIndex}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="case-study-footer">
                  <div className="project-technologies-consultant">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-consultant">{tech}</span>
                    ))}
                  </div>
                  {project.caseStudyUrl && (
                    <a 
                      href={project.caseStudyUrl} 
                      className="case-study-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Case Study →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="consultant-testimonials">
          <div className="container">
            <h2 className="consultant-section-title">Client Testimonials</h2>
            <p className="section-subtitle-consultant">
              What clients say about working with me
            </p>
            <div className="testimonials-consultant-grid">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-card-consultant">
                  <div className="testimonial-content-consultant">
                    <div className="quote-icon">"</div>
                    <p>{testimonial.content}</p>
                    <div className="rating-consultant">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star-consultant">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author-consultant">
                    <div className="author-info-consultant">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <p className="company-consultant">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="consultant-footer">
        <div className="container">
          <div className="footer-content-consultant">
            <div className="footer-text-consultant">
              <h3>Ready to Transform Your Business?</h3>
              <p>Let's discuss how strategic consulting can accelerate your growth and optimize your operations.</p>
            </div>
            <div className="footer-actions-consultant">
              <a href={`mailto:${personalInfo.email}`} className="footer-cta-consultant">
                Schedule Free Consultation
              </a>
              <div className="footer-contact-consultant">
                <span>{personalInfo.email}</span>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConsultantTemplate;