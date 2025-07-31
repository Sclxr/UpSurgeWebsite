import React, { useState, useEffect } from 'react';
import './home.css';
import games from '../../data/games';

const Home = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      icon: '⚡',
      question: 'Why should I choose UpSurge as my server host?',
      answer: 'We offer premium performance, 24/7 support, and full DDoS protection with every plan.',
    },
    {
      icon: '💳',
      question: 'Can I change my plan or upgrade my server later?',
      answer: 'Yes, upgrades and downgrades are fully supported through your client dashboard.',
    },
    {
      icon: '💸',
      question: 'Can I get my money back if I don’t like my server?',
      answer: 'We offer refunds within the first 3 days of service if you’re not satisfied—no support ticket required.',
    },
    {
      icon: '🧩',
      question: 'Do you support mods and plugins?',
      answer: 'Absolutely. Our servers support full mod/plugin integration including Forge, Fabric, and Bukkit.',
    },
  ];

  const rotatedGames = [
    ...games.slice(currentGameIndex),
    ...games.slice(0, currentGameIndex),
  ];

  const currentGame = games[currentGameIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prev) => (prev + 1) % games.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrentGameIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  const goNext = () => {
    setCurrentGameIndex((prev) => (prev + 1) % games.length);
  };

  return (
    <>
      <section
        className="hero-image"
        style={{
          backgroundImage: currentGame.background
            ? `url(${currentGame.background})`
            : 'none',
        }}
      >
        <div className="overlay" />
        <div className="hero-text">
          <div className="hero-game-info">
            <div className="text-content">
              <h1 className="game-name">{currentGame.name}</h1>
              <p className="game-description">{currentGame.description}</p>
              <button className="btn-order">ORDER SERVER</button>
            </div>

            <div className="game-carousel">
              <button onClick={goPrev} className="carousel-arrow">{'<'}</button>
              <div className="game-carousel-list">
                {rotatedGames.map((game, i) => (
                  <img
                    key={i}
                    src={game.logo}
                    alt={game.name}
                    className={`carousel-logo ${i === 0 ? 'active' : ''}`}
                    onClick={() =>
                      setCurrentGameIndex((currentGameIndex + i) % games.length)
                    }
                  />
                ))}
              </div>
              <button onClick={goNext} className="carousel-arrow">{'>'}</button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator outside .hero-text */}
        <div className="scroll-down">
          <div className="mouse-icon"></div>
          <p>Scroll Down</p>
        </div>
      </section>

      <div className="hero-fade-divider"></div>

      <section className="below-hero">
        <h2 className="below-hero-title">Premium, Reliable, Affordable Game Server Hosting</h2>

        <div className="features-section">
          <div className="features-row">
            <div className="feature-card green">
              <i className="fas fa-clock"></i>
              <div>
                <h3>99% Uptime</h3>
                <p>All network outages are covered by our SLA.</p>
              </div>
            </div>
            <div className="feature-card yellow">
              <i className="fas fa-bolt"></i>
              <div>
                <h3>Instant Setup</h3>
                <p>Start hosting in seconds after purchasing your game server.</p>
              </div>
            </div>
          </div>

          <div className="features-row center">
            <div className="feature-card blue">
              <i className="fas fa-headset"></i>
              <div>
                <h3>24/7 Support</h3>
                <p>Our support team is available around-the-clock to assist you.</p>
              </div>
            </div>

            <div className="features-text">
              <h2>EXCLUSIVE FEATURES</h2>
              <p>
                We offer a wide variety of features that enhance your gaming
                experience and provide the most powerful hardware at the best price.
              </p>
            </div>

            <div className="feature-card red">
              <i className="fas fa-shield-alt"></i>
              <div>
                <h3>DDoS Protection</h3>
                <p>We guarantee full protection against DDoS attacks under our SLA.</p>
              </div>
            </div>
          </div>

          <div className="features-row">
            <div className="feature-card purple">
              <i className="fas fa-globe"></i>
              <div>
                <h3>Free Subdomain</h3>
                <p>
                  Get a custom IP address for free using our subdomain creator.
                </p>
              </div>
            </div>
            <div className="feature-card indigo">
              <i className="fas fa-gamepad"></i>
              <div>
                <h3>Expanding Game Library</h3>
                <p>Our team is constantly working to keep our library up to date.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-intro">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <p>
            Here are some of our new customers' frequently asked questions. If you still need help, you can check out our knowledgebase articles or contact support.
          </p>
          <div className="faq-buttons">
            <button className="btn primary">View FAQ</button>
            <button className="btn secondary">View Knowledgebase</button>
          </div>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <span className="faq-icon">{item.icon}</span>
                {item.question}
              </div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Discord Banner Strip */}
      <section className="discord-strip">
        <div className="container">
          <div>Join our Discord server for exclusive industry news, updates & giveaways!</div>
          <a
            href="https://discord.gg/upsurgehost"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-btn"
          >
            <i className="fab fa-discord"></i> Join Discord
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
