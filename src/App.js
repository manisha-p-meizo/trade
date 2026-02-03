import React, { useState } from 'react';
import { Mail, Lock, Phone, ArrowRight, Sparkles, Shield, Globe, Award } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './App.css';

// Sub-component for Parallax Orbs to follow Rules of Hooks
const ParallaxOrb = ({ i, mouseXSpring, mouseYSpring }) => {
  const x = useTransform(mouseXSpring, [-0.5, 0.5], [i * -50, i * 50]);
  const y = useTransform(mouseYSpring, [-0.5, 0.5], [i * -50, i * 50]);

  return (
    <motion.div
      className="parallax-orb"
      style={{
        width: 40 + i * 20,
        height: 40 + i * 20,
        left: `${10 + i * 20}%`,
        top: `${15 + i * 15}%`,
        x,
        y,
        opacity: 0.1 + i * 0.05,
      }}
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    country: 'India',
    email: '',
    phone: '',
    password: '',
    partnerId: '',
  });

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="app-container">
      {/* Mesh Background Blobs */}
      <div className="bg-blobs">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="blob blob-1" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, 50, 0], rotate: [360, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="blob blob-2" 
        />
      </div>

      <div className="noise-overlay" />

      {/* Floating Parallax Orbs */}
      {[...Array(5)].map((_, i) => (
        <ParallaxOrb 
          key={i} 
          i={i} 
          mouseXSpring={mouseXSpring} 
          mouseYSpring={mouseYSpring} 
        />
      ))}

      <div className="content-wrapper">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-section"
        >
          <motion.div 
            whileHover={{ scale: 1.1, x: 10 }}
            className="brand-logo"
            style={{ position: 'relative' }}
          >
            DOSHFX
            <motion.div 
              className="logo-underline"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="hero-content">
            <h1 className="hero-headline">
              {["Trade 1,000+", "CFDs"].map((phrase, i) => (
                <div key={i} className={i === 1 ? "highlight-text phrase-row" : "phrase-row"}>
                  {phrase.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index + (i * 10)}
                      initial="hidden"
                      animate="visible"
                      variants={charVariants}
                      className="char"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </h1>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.2 }} className="hero-subtext">
              Forex, Commodities, Indices, Shares, and ETFs
            </motion.p>
            
            <div className="feature-pills">
              {[
                { icon: <Sparkles size={14} />, text: "Zero Fees" },
                { icon: <Shield size={14} />, text: "Institutional Grade" },
                { icon: <Globe size={14} />, text: "Global Reach" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,215,0,0.3)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                  className="pill"
                >
                  {item.icon} {item.text}
                </motion.div>
              ))}
            </div>

            <div className="trust-badges">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="badge"
              >
                <Award size={16} /> Verified
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="form-section">
            <div className="form-inner">
              <div className="form-header">
                <motion.h2 layout className="form-title">
                  {showLogin ? 'Welcome' : 'Sign Up'}
                </motion.h2>
                {/* <p className="form-subtitle">
                  {showLogin ? 'Enter your credentials' : 'Start your financial revolution'}
                </p> */}
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                {!showLogin && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="input-group">
                     <span className="input-icon">🇮🇳</span>
                     <select name="country" value={formData.country} onChange={handleInputChange} className="form-input">
                       <option value="India">India</option>
                       <option value="USA">USA</option>
                       <option value="UK">UK</option>
                     </select>
                  </motion.div>
                )}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="input-group">
                  <Mail className="input-icon-svg" size={18} />
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="form-input" required />
                </motion.div>

                {!showLogin && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="input-group">
                    <Phone className="input-icon-svg" size={18} />
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="form-input" required />
                  </motion.div>
                )}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="input-group">
                  <Lock className="input-icon-svg" size={18} />
                  <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="form-input" required />
                </motion.div>

                {!showLogin && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="input-group">
                    <span className="input-icon" style={{ fontSize: '14px' }}>ID</span>
                    <input type="text" name="partnerId" placeholder="Partner Id (optional)" value={formData.partnerId} onChange={handleInputChange} className="form-input" />
                  </motion.div>
                )}

                <motion.button 
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="action-btn"
                >
                  {showLogin ? 'ACCESS ACCOUNT' : 'SECURE ACCESS'} 
                  <ArrowRight size={20} />
                </motion.button>
              </form>

              <div className="form-footer">
                <p className="switch-text">
                  {showLogin ? "Don't have an account? " : "Already have and account? "}
                  <button type="button" onClick={() => setShowLogin(!showLogin)} className="switch-btn">
                    {showLogin ? 'Create One' : 'Log In'}
                  </button>
                </p>
                <div className="footer-line"></div>
                <div className="legal-links">
                  <a href="#t">Terms</a> • <a href="#p">Privacy</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
