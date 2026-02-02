import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Phone, Globe, User, ArrowRight, TrendingUp, ChevronRight, Activity, BarChart2, DollarSign, PieChart, Briefcase, Zap } from 'lucide-react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    country: 'India',
    email: '',
    phone: '',
    password: '',
    partnerId: '',
    showPassword: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Signup successful:', formData);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="onboarding-container">
      {/* Animated Background */}
      <div className="animated-background">
        {/* Large Blurred Trading Clipart */}
        <div className="clipart-layer">
          {/* Animated Line Chart 1 - Top Left */}
          <motion.div 
            className="blur-clipart animated-chart chart-top-left"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              y: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 500 300" fill="none">
              <motion.path 
                d="M20 250 L80 180 L140 200 L200 120 L260 140 L320 80 L380 100 L440 60 L480 80" 
                stroke="#ffd700" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path 
                d="M20 250 L80 180 L140 200 L200 120 L260 140 L320 80 L380 100 L440 60 L480 80 L480 250 L20 250 Z" 
                fill="#ffd700" 
                opacity="0.15"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0.15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Animated Line Chart 2 - Bottom Right */}
          <motion.div 
            className="blur-clipart animated-chart chart-bottom-right"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <svg viewBox="0 0 500 300" fill="none">
              <motion.path 
                d="M20 200 L80 150 L140 180 L200 100 L260 130 L320 70 L380 90 L440 50 L480 70" 
                stroke="#a855f7" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.path 
                d="M20 200 L80 150 L140 180 L200 100 L260 130 L320 70 L380 90 L440 50 L480 70 L480 250 L20 250 Z" 
                fill="#a855f7" 
                opacity="0.12"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.12, 0.12, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* Animated Line Chart 3 - Center */}
          <motion.div 
            className="blur-clipart animated-chart chart-center"
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <svg viewBox="0 0 500 300" fill="none">
              <motion.path 
                d="M20 220 L80 170 L140 190 L200 130 L260 150 L320 90 L380 110 L440 70 L480 90" 
                stroke="#60a5fa" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </svg>
          </motion.div>

          {/* Large Bar Chart Left */}
          <motion.div 
            className="blur-clipart bar-chart-left"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 400 300" fill="none">
              <rect x="40" y="120" width="50" height="180" fill="#ffd700" opacity="0.3" rx="6"/>
              <rect x="110" y="80" width="50" height="220" fill="#d4af37" opacity="0.35" rx="6"/>
              <rect x="180" y="140" width="50" height="160" fill="#ffed4e" opacity="0.28" rx="6"/>
              <rect x="250" y="60" width="50" height="240" fill="#ffd700" opacity="0.32" rx="6"/>
              <rect x="320" y="100" width="50" height="200" fill="#d4af37" opacity="0.3" rx="6"/>
            </svg>
          </motion.div>

          {/* Large Bar Chart Right */}
          <motion.div 
            className="blur-clipart bar-chart-right"
            animate={{ 
              y: [0, 25, 0],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <svg viewBox="0 0 350 280" fill="none">
              <rect x="30" y="100" width="45" height="180" fill="#c084fc" opacity="0.3" rx="6"/>
              <rect x="95" y="60" width="45" height="220" fill="#a855f7" opacity="0.35" rx="6"/>
              <rect x="160" y="130" width="45" height="150" fill="#c084fc" opacity="0.28" rx="6"/>
              <rect x="225" y="40" width="45" height="240" fill="#a855f7" opacity="0.32" rx="6"/>
              <rect x="290" y="90" width="45" height="190" fill="#c084fc" opacity="0.3" rx="6"/>
            </svg>
          </motion.div>

          {/* Chart Pattern 1 */}
          <motion.div 
            className="blur-clipart chart-1"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 400 300" fill="none">
              <path d="M50 250 L100 200 L150 220 L200 150 L250 170 L300 100 L350 120" 
                    stroke="#ffd700" strokeWidth="10" strokeLinecap="round" opacity="0.4"/>
              <path d="M50 250 L100 200 L150 220 L200 150 L250 170 L300 100 L350 120 L350 250 L50 250 Z" 
                    fill="#ffd700" opacity="0.2"/>
            </svg>
          </motion.div>

          {/* Bar Chart Pattern */}
          <motion.div 
            className="blur-clipart bars-1"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <svg viewBox="0 0 300 200" fill="none">
              <rect x="20" y="80" width="40" height="120" fill="#8b6adf" opacity="0.25" rx="4"/>
              <rect x="80" y="50" width="40" height="150" fill="#ae8bff" opacity="0.3" rx="4"/>
              <rect x="140" y="100" width="40" height="100" fill="#c4b5fd" opacity="0.2" rx="4"/>
              <rect x="200" y="30" width="40" height="170" fill="#ae8bff" opacity="0.28" rx="4"/>
            </svg>
          </motion.div>

          {/* Pie Chart Pattern */}
          <motion.div 
            className="blur-clipart pie-1"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" fill="#ae8bff" opacity="0.18"/>
              <path d="M100 100 L100 20 A80 80 0 0 1 180 100 Z" fill="#8b6adf" opacity="0.25"/>
              <path d="M100 100 L180 100 A80 80 0 0 1 100 180 Z" fill="#c4b5fd" opacity="0.2"/>
            </svg>
          </motion.div>

          {/* Candlestick Pattern */}
          <motion.div 
            className="blur-clipart candles-1"
            animate={{ 
              x: [0, -20, 0],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <svg viewBox="0 0 300 200" fill="none">
              <line x1="40" y1="50" x2="40" y2="150" stroke="#ae8bff" strokeWidth="2" opacity="0.3"/>
              <rect x="30" y="80" width="20" height="50" fill="#ae8bff" opacity="0.25" rx="2"/>
              
              <line x1="100" y1="30" x2="100" y2="170" stroke="#8b6adf" strokeWidth="2" opacity="0.3"/>
              <rect x="90" y="60" width="20" height="80" fill="#8b6adf" opacity="0.25" rx="2"/>
              
              <line x1="160" y1="70" x2="160" y2="180" stroke="#c4b5fd" strokeWidth="2" opacity="0.3"/>
              <rect x="150" y="100" width="20" height="60" fill="#c4b5fd" opacity="0.25" rx="2"/>
              
              <line x1="220" y1="40" x2="220" y2="160" stroke="#ae8bff" strokeWidth="2" opacity="0.3"/>
              <rect x="210" y="70" width="20" height="70" fill="#ae8bff" opacity="0.25" rx="2"/>
            </svg>
          </motion.div>
        </div>
        
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        {/* Floating Trading Icons */}
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => {
            const icons = [
              <TrendingUp size={40} strokeWidth={1.5} />,
              <Activity size={35} strokeWidth={1.5} />,
              <BarChart2 size={38} strokeWidth={1.5} />,
              <DollarSign size={42} strokeWidth={1.5} />,
              <PieChart size={36} strokeWidth={1.5} />,
              <Briefcase size={34} strokeWidth={1.5} />,
              <Globe size={37} strokeWidth={1.5} />,
              <Zap size={33} strokeWidth={1.5} />
            ];
            
            return (
              <motion.div
                key={i}
                className="float-icon"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0.05,
                  scale: 0.6 + Math.random() * 0.6,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  y: [null, Math.random() * -150, null],
                  x: [null, Math.random() * 50 - 25, null],
                  rotate: [null, Math.random() * 360],
                  opacity: [0.05, 0.12, 0.05]
                }}
                transition={{ 
                  duration: 15 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                {icons[i % icons.length]}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="onboarding-content">
        <AnimatePresence mode="wait">
          {showLogin ? (
            /* LOGIN PAGE */
            <motion.div
              key="login"
              className="step-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="form-screen">
                <motion.div
                  className="form-header"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="form-title">Log In with</h2>
                </motion.div>

                <motion.form
                  className="login-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle login
                    console.log('Login:', formData.email);
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Email"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" className="checkbox-input" />
                      <span>Keep me logged in</span>
                      <span className="info-icon">ⓘ</span>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue
                  </motion.button>
                </motion.form>

                <motion.p
                  className="login-link"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(false); }}>Register</a>
                </motion.p>
              </div>
            </motion.div>
          ) : (
          /* SIGNUP PAGES */
          <>
          {step === 1 ? (
            <motion.div
              key="step1"
              className="step-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="welcome-screen">
                <motion.div 
                  className="brand-logo"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="brand-title">DoshFX</h1>
                  <div className="brand-tagline">Trade Smarter, Grow Faster</div>
                </motion.div>

                <motion.div
                  className="illustration-container"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="illustration-card">
                    <svg className="trading-illustration" viewBox="0 0 400 300" fill="none">
                      {/* Grid Background */}
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="400" height="300" fill="url(#grid)" />
                      
                      {/* Upward Arrow */}
                      <motion.path
                        d="M 100 200 L 150 150 L 200 170 L 250 100 L 300 120"
                        stroke="#10b981"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                      
                      {/* Arrow Head */}
                      <motion.path
                        d="M 280 90 L 320 60 L 340 100 Z"
                        fill="#10b981"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 1 }}
                      />
                      
                      {/* Trader Character */}
                      <g transform="translate(180, 180)">
                        {/* Body */}
                        <ellipse cx="0" cy="20" rx="25" ry="35" fill="#1f2937"/>
                        {/* Head */}
                        <circle cx="0" cy="-10" r="18" fill="#fbbf24"/>
                        {/* Eyes */}
                        <circle cx="-6" cy="-12" r="2" fill="#1f2937"/>
                        <circle cx="6" cy="-12" r="2" fill="#1f2937"/>
                        {/* Smile */}
                        <path d="M -6 -5 Q 0 -2 6 -5" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
                        {/* Laptop */}
                        <rect x="-20" y="35" width="40" height="25" rx="2" fill="#3b82f6"/>
                        <rect x="-18" y="37" width="36" height="18" fill="#60a5fa"/>
                        {/* Chart on laptop */}
                        <motion.path
                          d="M -12 50 L -5 45 L 2 48 L 10 42"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          fill="none"
                          animate={{ pathLength: [0, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </g>
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  className="welcome-text"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  


                  <h2 className="welcome-title">Trade 1,000+ CFDs <span className="highlight"></span></h2>
                  <p className="welcome-subtitle">Forex, Commodities, Indices, Shares, and ETFs</p>
                </motion.div>

                <motion.button
                  className="next-button"
                  onClick={() => setStep(2)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Get Started
                  <ChevronRight size={20} />
                </motion.button>

                <motion.div
                  className="step-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="dot active"></div>
                  <div className="dot"></div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              className="step-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="form-screen">
                <motion.div
                  className="form-header"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="form-title">Sign <span className="highlight">Up</span></h2>
                  <p className="form-subtitle">Join thousands of traders worldwide</p>
                </motion.div>

                <motion.form
                  className="signup-form"
                  onSubmit={handleSubmit}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="form-group">
                    <label className="form-label">Country/Area of Residence</label>
                    <div className="select-wrapper">
                      <span className="flag-emoji">🇮🇳</span>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-input select-input"
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone number</label>
                    <div className="phone-input-group">
                      <span className="phone-prefix">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className={`form-input phone-field ${errors.phone ? 'error' : ''}`}
                      />
                    </div>
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <div className="password-wrapper">
                      <input
                        type={formData.showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter Your Password"
                        className={`form-input ${errors.password ? 'error' : ''}`}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setFormData({...formData, showPassword: !formData.showPassword})}
                      >
                        {formData.showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>

                  <details className="partner-details">
                    <summary className="partner-summary">Partner Id (optional)</summary>
                    <div className="form-group partner-input-group">
                      <input
                        type="text"
                        name="partnerId"
                        value={formData.partnerId}
                        onChange={handleInputChange}
                        placeholder="Enter partner ID"
                        className="form-input"
                      />
                    </div>
                  </details>

                  <motion.button
                    type="submit"
                    className="submit-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="spinner"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Processing...
                      </>
                    ) : (
                      'Continue'
                    )}
                  </motion.button>

                </motion.form>

                <motion.p
                  className="login-link"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(true); }}>Log In</a>
                </motion.p>

                <motion.div
                  className="step-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="dot" onClick={() => setStep(1)}></div>
                  <div className="dot active"></div>
                </motion.div>
              </div>
            </motion.div>
          )}
          </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
