import React, { useEffect, useState } from 'react';
import { 
  Shield, 
  Wallet, 
  Lock, 
  Download, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X, 
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import './animations.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white font-sans">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative flex items-center bg-black rounded-lg p-2">
                  <Shield className="h-8 w-8 text-purple-500 mr-2" />
                  <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Trězor.io/start
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('install')}
                className={`nav-link ${activeSection === 'install' ? 'active' : ''}`}
              >
                Installation
              </button>
              <button 
                onClick={() => scrollToSection('troubleshooting')}
                className={`nav-link ${activeSection === 'troubleshooting' ? 'active' : ''}`}
              >
                Troubleshooting
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className={`nav-link ${activeSection === 'security' ? 'active' : ''}`}
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
              >
                FAQs
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-purple-500/30 animate-fadeIn">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('install')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  Installation
                </button>
                <button 
                  onClick={() => scrollToSection('troubleshooting')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  Troubleshooting
                </button>
                <button 
                  onClick={() => scrollToSection('security')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  Security
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-white hover:text-purple-400 transition-colors py-2"
                >
                  FAQs
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-gray-900"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Trězor.io/start® | Introducing the New Trězor.io/start App
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fadeInUp animation-delay-200">
              Your Secure Gateway to Hassle-Free Crypto Management
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp animation-delay-400">
              <button className="cybr-btn">
                Get Started
                <span aria-hidden className="cybr-btn__glitch">Get Started</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
              </button>
              
              <button className="neon-btn">
                Learn More
                <span className="neon-btn__horizontal"></span>
                <span className="neon-btn__vertical"></span>
              </button>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-card__icon">
                <Shield className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maximum Security</h3>
              <p className="text-gray-300">Industry-leading protection for your digital assets with advanced encryption.</p>
            </div>
            
            <div className="feature-card animation-delay-200">
              <div className="feature-card__icon">
                <Wallet className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Management</h3>
              <p className="text-gray-300">Intuitive interface to manage all your cryptocurrencies in one place.</p>
            </div>
            
            <div className="feature-card animation-delay-400">
              <div className="feature-card__icon">
                <Lock className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full Control</h3>
              <p className="text-gray-300">You own your private keys, ensuring complete control over your assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="hexagon-bg"></div>
          <div className="section-title">
            <h2>What Is Trezor.io/start?</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="glowing-box">
                <p className="mb-6">
                  Trezor.io/start is the official gateway to set up and manage your Trezor hardware wallet. As the entry point to the Trezor ecosystem, this platform provides a seamless experience for both new and experienced cryptocurrency users who prioritize security and ease of use.
                </p>
                <p className="mb-6">
                  Developed by SatoshiLabs, Trezor has been at the forefront of cryptocurrency security since 2013. The Trezor.io/start platform serves as the central hub for initializing your device, installing the latest firmware, managing your crypto assets, and accessing a suite of advanced security features.
                </p>
                <p>
                  Unlike traditional online wallets or exchanges, Trezor.io/start connects to your physical Trezor device, ensuring your private keys never leave your hardware wallet. This cold storage approach provides maximum protection against online threats while maintaining convenient access to your digital assets.
                </p>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative rounded-lg overflow-hidden border border-purple-500/30">
                  <img 
                    src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Trezor device" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Key Features of Trezor.io/start</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-box">
              <div className="feature-box__icon">
                <Shield className="h-12 w-12" />
              </div>
              <h3>Cold Storage Security</h3>
              <p>
                Trezor.io/start connects to your hardware wallet, ensuring your private keys never touch the internet. This cold storage approach provides the highest level of security for your digital assets, protecting them from online threats, malware, and phishing attacks.
              </p>
              <ul className="fancy-list">
                <li>Offline private key generation</li>
                <li>PIN protection with exponential backoff</li>
                <li>Optional passphrase for added security</li>
                <li>Physical device verification</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <div className="feature-box__icon">
                <Wallet className="h-12 w-12" />
              </div>
              <h3>Multi-Currency Support</h3>
              <p>
                Manage a wide range of cryptocurrencies through a single interface. Trezor.io/start supports Bitcoin, Ethereum, and thousands of other tokens and coins, allowing you to diversify your portfolio while maintaining the same high level of security for all your assets.
              </p>
              <ul className="fancy-list">
                <li>Support for 1,000+ cryptocurrencies</li>
                <li>Native token management</li>
                <li>NFT support and visualization</li>
                <li>Custom token addition</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <div className="feature-box__icon">
                <Lock className="h-12 w-12" />
              </div>
              <h3>Intuitive Interface</h3>
              <p>
                Despite its advanced security features, Trezor.io/start offers a user-friendly interface that makes cryptocurrency management accessible to everyone. The clean design and straightforward navigation help both beginners and experienced users manage their digital assets with confidence.
              </p>
              <ul className="fancy-list">
                <li>Clear transaction details</li>
                <li>Simplified address verification</li>
                <li>Account labeling and organization</li>
                <li>Transaction history visualization</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <div className="feature-box__icon">
                <Download className="h-12 w-12" />
              </div>
              <h3>Seamless Updates</h3>
              <p>
                Keep your Trezor device up-to-date with the latest security features and cryptocurrency support. Trezor.io/start provides a simple way to check for and install firmware updates, ensuring your hardware wallet always has the latest protections and capabilities.
              </p>
              <ul className="fancy-list">
                <li>One-click firmware updates</li>
                <li>Verified firmware signatures</li>
                <li>Update notifications</li>
                <li>Rollback protection</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <div className="feature-box__icon">
                <HelpCircle className="h-12 w-12" />
              </div>
              <h3>Backup & Recovery</h3>
              <p>
                Trezor.io/start guides you through creating and verifying your recovery seed during setup. This 12 or 24-word phrase serves as a backup for your wallet, allowing you to recover all your assets even if your device is lost, damaged, or stolen.
              </p>
              <ul className="fancy-list">
                <li>Guided recovery seed creation</li>
                <li>Seed verification process</li>
                <li>Multiple recovery methods</li>
                <li>Shamir backup support (advanced)</li>
              </ul>
            </div>
            
            <div className="feature-box">
              <div className="feature-box__icon">
                <AlertTriangle className="h-12 w-12" />
              </div>
              <h3>Advanced Protection</h3>
              <p>
                Beyond basic security, Trezor.io/start offers advanced protection features like passphrase protection, hidden wallets, and address verification. These tools give you additional layers of security and privacy for your most sensitive digital assets.
              </p>
              <ul className="fancy-list">
                <li>Hidden wallet functionality</li>
                <li>Address whitelisting</li>
                <li>Transaction signing verification</li>
                <li>Duress PIN options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>How to Install Trezor.io/start</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-item__number">1</div>
                <div className="timeline-item__content">
                  <h3>Visit the Official Website</h3>
                  <p>
                    Begin by navigating to Trezor.io/start using a secure browser. Always verify you're on the official Trezor website by checking the URL and security certificate. Avoid clicking on links from emails or search results to prevent phishing attempts.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">2</div>
                <div className="timeline-item__content">
                  <h3>Download Trezor Suite</h3>
                  <p>
                    From the Trezor.io/start page, download the Trezor Suite application for your operating system (Windows, macOS, or Linux). The desktop application provides enhanced security compared to the web version and works offline for most functions.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">3</div>
                <div className="timeline-item__content">
                  <h3>Verify the Download</h3>
                  <p>
                    Before installation, verify the authenticity of your download using the provided SHA-256 checksums. This step ensures the software hasn't been tampered with and comes directly from Trezor's developers.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">4</div>
                <div className="timeline-item__content">
                  <h3>Install Trezor Suite</h3>
                  <p>
                    Run the installer and follow the on-screen instructions to install Trezor Suite on your computer. The installation process is straightforward and similar to other applications you may have installed before.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">5</div>
                <div className="timeline-item__content">
                  <h3>Connect Your Trezor Device</h3>
                  <p>
                    Connect your Trezor hardware wallet to your computer using the provided USB cable. If this is your first time using the device, you'll be guided through the initial setup process, including firmware installation.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">6</div>
                <div className="timeline-item__content">
                  <h3>Follow the Setup Wizard</h3>
                  <p>
                    Trezor Suite will automatically detect your device and launch a setup wizard. Follow the instructions to create a new wallet or recover an existing one using your recovery seed. This process includes setting up a PIN for device access.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">7</div>
                <div className="timeline-item__content">
                  <h3>Create and Verify Backup</h3>
                  <p>
                    During setup, you'll create a recovery seed - a sequence of 12 or 24 words that serves as a backup for your wallet. Write these words down on the provided recovery card and keep them in a secure location. Never store your recovery seed digitally.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-item__number">8</div>
                <div className="timeline-item__content">
                  <h3>Start Using Trezor Suite</h3>
                  <p>
                    Once setup is complete, you can start using Trezor Suite to manage your cryptocurrencies. The dashboard provides an overview of your portfolio, and you can send, receive, and exchange cryptocurrencies directly from the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshooting" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Troubleshooting Common Trezor.io/start Issues</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Device Not Recognized</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If your computer doesn't recognize your Trezor device when connected, try these solutions:
                </p>
                <ul className="fancy-list">
                  <li>Try a different USB cable, preferably the one that came with your device</li>
                  <li>Connect directly to your computer instead of through a USB hub</li>
                  <li>Try a different USB port on your computer</li>
                  <li>Restart your computer and try again</li>
                  <li>Check if you need to install bridge software from Trezor.io/start</li>
                </ul>
              </div>
            </div>
            
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Firmware Update Issues</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If you encounter problems during firmware updates, consider these steps:
                </p>
                <ul className="fancy-list">
                  <li>Ensure your device has sufficient battery power</li>
                  <li>Don't disconnect the device during the update process</li>
                  <li>If the update fails, try restarting Trezor Suite and your device</li>
                  <li>Check your internet connection stability</li>
                  <li>Temporarily disable antivirus software that might be blocking the update</li>
                </ul>
              </div>
            </div>
            
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Recovery Seed Issues</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If you're having trouble with your recovery seed:
                </p>
                <ul className="fancy-list">
                  <li>Double-check each word against the BIP39 word list</li>
                  <li>Verify you're entering words in the correct order</li>
                  <li>Make sure you're using the right recovery method (12, 18, or 24 words)</li>
                  <li>Check if you need to enter an additional passphrase</li>
                  <li>Contact Trezor support if you're still having issues</li>
                </ul>
              </div>
            </div>
            
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Browser Compatibility</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If you're using the web version and experiencing issues:
                </p>
                <ul className="fancy-list">
                  <li>Try using Google Chrome or Firefox, which have the best compatibility</li>
                  <li>Ensure your browser is updated to the latest version</li>
                  <li>Disable browser extensions that might interfere with the connection</li>
                  <li>Allow pop-ups from Trezor.io/start</li>
                  <li>Consider switching to the desktop application for better compatibility</li>
                </ul>
              </div>
            </div>
            
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Transaction Issues</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If you're having problems sending transactions:
                </p>
                <ul className="fancy-list">
                  <li>Verify you have sufficient funds (including for network fees)</li>
                  <li>Check that the recipient address is correct</li>
                  <li>Ensure your device is properly connected and unlocked</li>
                  <li>Try setting a higher fee if transactions are pending for too long</li>
                  <li>Restart Trezor Suite if the interface becomes unresponsive</li>
                </ul>
              </div>
            </div>
            
            <div className="trouble-card">
              <div className="trouble-card__header">
                <AlertTriangle className="h-6 w-6 text-yellow-400" />
                <h3>Account Visibility Issues</h3>
              </div>
              <div className="trouble-card__body">
                <p>
                  If some accounts or cryptocurrencies aren't visible:
                </p>
                <ul className="fancy-list">
                  <li>Check if you need to enable specific coins in the settings</li>
                  <li>Verify that your firmware is updated to support the cryptocurrencies</li>
                  <li>Try refreshing the account data</li>
                  <li>Ensure you're connected to the correct network (mainnet vs testnet)</li>
                  <li>For custom tokens, verify the contract address is correct</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="hexagon-bg"></div>
          <div className="section-title">
            <h2>Why Trezor.io/start Prioritizes Security</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="security-box">
              <p className="mb-6">
                In the world of cryptocurrency, security isn't just a feature—it's the foundation. Trezor.io/start was built from the ground up with security as its primary focus, implementing multiple layers of protection to safeguard your digital assets.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="security-feature">
                  <div className="security-feature__icon">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3>Hardware Isolation</h3>
                  <p>
                    Your private keys never leave your Trezor device, keeping them isolated from potentially vulnerable computers and smartphones. This physical separation ensures that even if your computer is compromised, your cryptocurrencies remain secure.
                  </p>
                </div>
                
                <div className="security-feature">
                  <div className="security-feature__icon">
                    <Lock className="h-8 w-8" />
                  </div>
                  <h3>Open-Source Transparency</h3>
                  <p>
                    Trezor's firmware and the Trezor Suite application are completely open-source, allowing security researchers to verify the code and ensure there are no hidden vulnerabilities or backdoors. This transparency builds trust and strengthens security.
                  </p>
                </div>
                
                <div className="security-feature">
                  <div className="security-feature__icon">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3>Verified Boot</h3>
                  <p>
                    Every time you connect your Trezor device, it performs a secure boot process that verifies the integrity of the firmware. This prevents tampering and ensures you're always using authentic, unmodified software.
                  </p>
                </div>
                
                <div className="security-feature">
                  <div className="security-feature__icon">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3>Physical Security Features</h3>
                  <p>
                    Trezor devices are designed to be tamper-evident, making it difficult for attackers to physically modify the hardware without detection. The secure element in newer models provides additional protection against sophisticated physical attacks.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Security Best Practices</h3>
                <ul className="fancy-list">
                  <li>Store your recovery seed offline in a secure location, never digitally</li>
                  <li>Use a strong PIN to protect access to your device</li>
                  <li>Consider adding a passphrase for an extra layer of security</li>
                  <li>Always verify recipient addresses on the device screen</li>
                  <li>Keep your firmware updated to the latest version</li>
                  <li>Only download Trezor Suite from the official website</li>
                  <li>Be wary of phishing attempts claiming to be from Trezor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>FAQs About Trězor.io/start</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="faq-accordion">
              <div className="faq-item">
                <div className="faq-question">
                  <h3>Is Trezor.io/start free to use?</h3>
                  <ChevronDown className="h-6 w-6" />
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, Trezor.io/start and the Trezor Suite application are completely free to download and use. The only cost associated with using Trezor is the initial purchase of the hardware wallet device itself. There are no subscription fees or hidden charges for using the software.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h3>Can I use Trezor.io/start on multiple devices?</h3>
                  <ChevronDown className="h-6 w-6" />
                </div>
                <div className="faq-answer">
                  <p>
                    Absolutely! You can install Trezor Suite on multiple computers and access your wallet from any of them by connecting your Trezor device. Your cryptocurrencies aren't stored in the software but on the blockchain, with your private keys secured in your hardware wallet. This allows for flexible access while maintaining security.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h3>What happens if I lose my Trezor device?</h3>
                  <ChevronDown className="h-6 w-6" />
                </div>
                <div className="faq-answer">
                  <p>
                    If you lose your Trezor device, your funds remain safe as long as you have your recovery seed (the 12 or 24 words you wrote down during setup). You can purchase a new Trezor device and use the recovery process to restore access to all your cryptocurrencies. This is why properly backing up and securing your recovery seed is crucial.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h3>Does Trezor.io/start work offline?</h3>
                  <ChevronDown className="h-6 w-6" />
                </div>
                <div className="faq-answer">
                  <p>
                    The Trezor Suite desktop application can work in an offline mode for many functions, including generating receive addresses and signing transactions. However, to update account balances and broadcast transactions to the blockchain, an internet connection is required. The offline capabilities enhance security by allowing sensitive operations to be performed without network connectivity.
                  </p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h3>Can I use Trezor.io/start with other hardware wallets?</h3>
                  <ChevronDown className="h-6 w-6" />
                </div>
                <div className="faq-answer">
                  <p>
                    Trezor.io/start and Trezor Suite are specifically designed for Trezor hardware wallets and are not compatible with other brands of hardware wallets. Each hardware wallet manufacturer typically provides their own companion software optimized for their specific devices and security architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Conclusion</h2>
            <div className="section-title__underline"></div>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="conclusion-box">
              <p className="mb-6">
                Trezor.io/start represents the gold standard in cryptocurrency security and management. By combining the physical security of hardware wallets with intuitive software, Trezor has created an ecosystem that makes digital asset protection accessible to everyone, from crypto novices to seasoned investors.
              </p>
              <p className="mb-6">
                The platform's focus on security doesn't come at the expense of usability. The clean interface, comprehensive support documentation, and regular updates ensure that managing your cryptocurrencies is straightforward while maintaining the highest security standards.
              </p>
              <p>
                As the cryptocurrency landscape continues to evolve, Trezor.io/start remains committed to innovation, regularly adding support for new cryptocurrencies and implementing advanced features that enhance both security and convenience. By choosing Trezor, you're not just selecting a product—you're joining a community dedicated to the principles of financial sovereignty and digital security.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button className="cybr-btn">
                  Get Started Now
                  <span aria-hidden className="cybr-btn__glitch">Get Started Now</span>
                  <span aria-hidden className="cybr-btn__tag">R25</span>
                </button>
                
                <button className="neon-btn">
                  Learn More
                  <span className="neon-btn__horizontal"></span>
                  <span className="neon-btn__vertical"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-10 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Disclaimer</h2>
            <div className="disclaimer-box">
              <p className="text-sm text-gray-400">
                The information provided on Trezor.io/start is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Cryptocurrency investments are subject to market risks. The value of cryptocurrencies can go up or down, and there can be a substantial risk that you lose money. Always conduct your own research before making any investment decisions. Trezor.io/start does not provide financial advice, and nothing on this website should be construed as financial advice.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Trezor® is a registered trademark. This website is for educational purposes and is not affiliated with, endorsed by, or sponsored by SatoshiLabs or the Trezor brand unless explicitly stated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black relative overflow-hidden">
        <div className="footer-animation"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Trězor.io/start
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your secure gateway to hassle-free crypto management. Protecting your digital assets with cutting-edge security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('install')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Installation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('troubleshooting')}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Troubleshooting
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Email: support@trezor.io
                </li>
                <li className="text-gray-400">
                  Twitter: @trezor
                </li>
                <li className="text-gray-400">
                  Reddit: r/trezor
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; 2025 Trězor.io/start. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="back-to-top"
      >
        <ChevronDown className="h-5 w-5 transform rotate-180" />
      </button>
    </div>
  );
}

export default App;