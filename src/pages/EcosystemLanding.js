import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const EcosystemLanding = () => {
    const [hovered, setHovered] = useState(null);

    const bestVentures = [
        {
            id: 'wham',
            title: 'WHAM!',
            domain: 'wham.cosq.in',
            tagline: 'OTT Platform',
            description: 'Hybrid playback, Comic-paneled immersive "Living Comic Book" design.',
            color: '#FF1493', // Hot Pink from legacy
            action: 'Watch Now',
            link: 'https://wham.cosq.in'
        },
        {
            id: 'previouslyon',
            title: 'PreviouslyOn',
            domain: 'previouslyon.cosq.in',
            tagline: 'Letterboxd for TV',
            description: 'Social TV tracking, real-time feeds, and AI recommendations.',
            color: '#00D4FF', // Cyan-ish
            action: 'Track Shows',
            link: 'https://previouslyon.cosq.in'
        },
        {
            id: 'research',
            title: 'Research & IT',
            domain: 'research.cosq.in',
            tagline: 'Innovation Wing',
            description: 'Home of SaaS products like MemoChan (AI Note Taker) and model research.',
            color: '#50C878', // Emerald Green
            action: 'Explore Labs',
            link: 'https://research.cosq.in'
        },
        {
            id: 'labs',
            title: 'CosQ Labs',
            domain: 'labs.cosq.in',
            tagline: 'Creative & Talent',
            description: 'Digital Labs (Graphics) & Creators Labs (Talent Agency).',
            color: '#9D00FF', // Electric Purple
            action: 'Create',
            link: 'https://labs.cosq.in'
        }
    ];

    return (
        <div className="ecosystem-container">
            {/* Background Overlay */}
            <div className="ecosystem-overlay"></div>

            {/* Hero Section */}
            <header className="ecosystem-header">
                <img src="/icon.png" alt="CosQ Logo" className="ecosystem-logo" />
                <h1 className="ecosystem-title">The CosQ Ecosystem</h1>
                <p className="ecosystem-subtitle">A collection of ventures, projects, and personal passions.</p>

                <Link to="/legacy" className="legacy-link">Visit Legacy Event Page &rarr;</Link>
            </header>

            {/* Ventures Grid */}
            <div className="ventures-grid">
                {bestVentures.map((venture) => (
                    <a
                        key={venture.id}
                        href={venture.link}
                        className={`venture-card ${venture.id}`}
                        onMouseEnter={() => setHovered(venture.id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ '--hover-color': venture.color }}
                    >
                        <div className="card-content">
                            <h2 className="venture-title">{venture.title}</h2>
                            <span className="venture-domain">{venture.domain}</span>
                            <p className="venture-tagline">{venture.tagline}</p>
                            <p className="venture-desc">{venture.description}</p>
                            <span className="venture-action">{venture.action} &rarr;</span>
                        </div>
                        {/* Visual Flair */}
                        <div className="card-shine"></div>
                        {venture.id === 'wham' && hovered === 'wham' && (
                            <div className="bam-effect">BAM!</div>
                        )}
                    </a>
                ))}
            </div>

            <footer className="ecosystem-footer">
                <p>&copy; {new Date().getFullYear()} CosQ. All rights reserved.</p>
            </footer>

            <style>{`
        /* Inline styles for rapid development, can be moved to CSS later */
        .ecosystem-container {
          min-height: 100vh;
          width: 100%;
          background-image: url('/wall.jpg'); /* Using the heavier wall texture for premium feel */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          font-family: 'Kagitingan', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow-x: hidden;
        }

        .ecosystem-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75); /* Dark noir overlay */
          z-index: 0;
        }

        .ecosystem-header, .ventures-grid, .ecosystem-footer {
          position: relative;
          z-index: 2;
        }

        .ecosystem-header {
          text-align: center;
          padding: 60px 20px 40px;
          animation: fadeDown 1s ease-out;
        }

        .ecosystem-logo {
          width: 80px;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
        }

        .ecosystem-title {
          font-size: 4rem;
          margin: 0;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: linear-gradient(to right, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ecosystem-subtitle {
          font-size: 1.2rem;
          color: #ccc;
          margin-top: 10px;
          max-width: 600px;
          font-family: sans-serif; /* Readable secondary font */
          font-weight: 300;
        }

        .legacy-link {
          display: inline-block;
          margin-top: 20px;
          color: #FF1493;
          text-decoration: none;
          font-size: 0.9rem;
          border-bottom: 1px solid transparent;
          transition: all 0.3s;
        }
        .legacy-link:hover {
          border-bottom-color: #FF1493;
          letter-spacing: 1px;
        }

        .ventures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          width: 90%;
          padding: 20px;
          margin-bottom: 60px;
        }

        .venture-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 30px;
          text-decoration: none;
          color: white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
        }

        .venture-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--hover-color);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px var(--hover-color);
        }

        .venture-domain {
          font-family: monospace;
          color: #888;
          font-size: 0.8rem;
          margin-bottom: 10px;
          display: block;
        }

        .venture-title {
          font-size: 2rem;
          margin: 0 0 5px 0;
          color: var(--hover-color);
          transition: color 0.3s;
        }

        .venture-tagline {
          font-size: 1.1rem;
          font-weight: bold;
          margin: 0 0 15px 0;
          color: #eee;
        }

        .venture-desc {
          font-size: 0.95rem;
          color: #bbb;
          line-height: 1.5;
          margin: 0 0 20px 0;
          font-family: sans-serif;
        }

        .venture-action {
          font-weight: bold;
          color: white;
          margin-top: auto;
          display: inline-block;
          font-size: 1rem;
          transition: transform 0.3s;
        }

        .venture-card:hover .venture-action {
          transform: translateX(10px);
          color: var(--hover-color);
        }

        /* Wham! Special Effect */
        .bam-effect {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #fff;
          color: #000;
          font-weight: 900;
          padding: 5px 10px;
          transform: rotate(15deg) scale(0);
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
          animation: bamPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          font-family: 'Impact', sans-serif;
          font-size: 1.5rem;
        }

        @keyframes bamPop {
          to { transform: rotate(15deg) scale(1); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ecosystem-footer {
          padding: 40px;
          color: #666;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .ecosystem-title { font-size: 2.5rem; }
          .ventures-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default EcosystemLanding;
