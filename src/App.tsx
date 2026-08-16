import { useEffect, useState } from 'react';
import {
  contact,
  experiences,
  hero,
  introduction,
  skills,
  stats
} from './content';

function App() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((current) =>
              current.includes(entry.target.id) ? current : [...current, entry.target.id]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => (visibleSections.includes(id) ? 'is-visible' : '');

  return (
    <div className="page-shell">
      <div className="ambient ambient-top" aria-hidden="true" />
      <div className="ambient ambient-bottom" aria-hidden="true" />

      <main className="page">
        <section id="hero" data-section className={`hero section ${isVisible('hero')}`}>
          <div className="hero-copy">
            <p className="eyebrow">Hero Banner</p>
            <h1>{hero.name}</h1>
            <p className="hero-title">{hero.title}</p>
            <p className="hero-summary">{hero.summary}</p>
            <a className="primary-link" href={hero.ctaHref}>
              {hero.ctaLabel}
            </a>
          </div>

          <div className="hero-portrait" aria-label="Portrait panel for Pranay Shah">
            <div className="portrait-frame">
              <div className="portrait-pattern portrait-pattern-left" />
              <div className="portrait-pattern portrait-pattern-right" />
              <div className="portrait-monogram">PS</div>
            </div>
          </div>
        </section>

        <section
          id="introduction"
          data-section
          className={`introduction section ${isVisible('introduction')}`}
        >
          <div className="section-heading">
            <p className="eyebrow">{introduction.eyebrow}</p>
            <h2>Building growth with clarity, systems, and story.</h2>
          </div>
          <div className="intro-copy">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="stats-skills"
          data-section
          className={`stats-skills section ${isVisible('stats-skills')}`}
        >
          <div className="section-heading">
            <p className="eyebrow">Stats & Skills</p>
            <h2>Selected outcomes and core capability areas.</h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <article
                className="stat-card"
                key={stat.label}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          data-section
          className={`experience section ${isVisible('experience')}`}
        >
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Career moments shaped by scale, access, and commercial growth.</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.role}-${experience.company}`}>
                <div className="timeline-meta">
                  <p className="timeline-period">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                </div>

                <div className="timeline-body">
                  <p>{experience.summary}</p>
                  <div className="chip-row">
                    {experience.highlights.map((highlight) => (
                      <span className="chip" key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" data-section className={`contact section ${isVisible('contact')}`}>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build the next phase of growth.</h2>
          </div>

          <div className="contact-panel">
            <p className="contact-prompt">{contact.prompt}</p>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              <a href={contact.socialHref} target="_blank" rel="noreferrer">
                {contact.socialLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
