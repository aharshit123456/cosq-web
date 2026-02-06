import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const teamMembers = [
    {
        name: 'Snehasis Ghosh',
        role: 'CEO',
        roleFull: 'Chief Executive Officer',
        description: 'Visionary leadership driving the CosQ ecosystem forward.',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #C44D58 100%)'
    },
    {
        name: 'Harshit Agarwal',
        role: 'CTO',
        roleFull: 'Chief Technology Officer',
        description: 'Architecting the technological infrastructure of our future.',
        gradient: 'linear-gradient(135deg, #4AC29A 0%, #BDFFF3 100%)'
    },
    {
        name: 'Soham Patel',
        role: 'CMO',
        roleFull: 'Chief Marketing Officer',
        description: 'Crafting the narrative and connecting with our community.',
        gradient: 'linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)'
    },
    {
        name: 'Randeep Singh',
        role: 'CDO',
        roleFull: 'Chief Design Officer',
        description: 'Shaping the visual identity and user experience.',
        gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
    }
];

const Team = () => {
    return (
        <div className="team-container">
            <div className="team-overlay"></div>

            <header className="team-header">
                <Link to="/" className="back-link">&larr; Back to Ecosystem</Link>
                <h1 className="team-title">The Minds Behind CosQ</h1>
                <p className="team-subtitle">Meet the team building the future of digital experiences.</p>
            </header>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="card-avatar" style={{ background: member.gradient }}>
                            {member.name.charAt(0)}
                        </div>
                        <div className="card-info">
                            <h2 className="member-name">{member.name}</h2>
                            <h3 className="member-role" title={member.roleFull}>{member.role}</h3>
                            <p className="member-desc">{member.description}</p>
                        </div>
                        <div className="card-border"></div>
                    </div>
                ))}
            </div>

            <footer className="team-footer">
                <p>&copy; {new Date().getFullYear()} CosQ. All rights reserved.</p>
            </footer>

            <style>{`
        .team-container {
          min-height: 100vh;
          width: 100%;
          background-image: url('/wall.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          font-family: 'Kagitingan', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .team-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.85); /* Darker overlay for text readability */
          z-index: 0;
        }

        .team-header, .team-grid, .team-footer {
          position: relative;
          z-index: 2;
        }

        .team-header {
          text-align: center;
          padding: 60px 20px 40px;
        }

        .back-link {
          position: absolute;
          top: 20px;
          left: 20px;
          color: #aaa;
          text-decoration: none;
          font-family: sans-serif;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .back-link:hover {
          color: white;
        }

        .team-title {
          font-size: 3.5rem;
          margin: 0;
          background: linear-gradient(to right, #fff, #999);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .team-subtitle {
          font-size: 1.2rem;
          color: #888;
          margin-top: 10px;
          font-family: sans-serif;
          font-weight: 300;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          max-width: 1200px;
          width: 90%;
          padding: 40px 20px;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          transition: transform 0.3s ease, background 0.3s;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .team-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .card-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .member-name {
          font-size: 1.8rem;
          margin: 10px 0 5px;
          color: white;
        }

        .member-role {
          font-size: 1.2rem;
          color: #FF1493; /* Hot Pink Brand Color */
          margin: 0 0 15px;
          letter-spacing: 1px;
        }

        .member-desc {
          font-family: sans-serif;
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .team-footer {
          margin-top: auto;
          padding: 40px;
          color: #555;
          font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
};

export default Team;
