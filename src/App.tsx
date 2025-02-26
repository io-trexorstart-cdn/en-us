import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Lock, Settings, HelpCircle, ChevronRight, Menu, Box, Send, Download, Key } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureBox from './components/FeatureBox';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Your Secure Gateway to Hassle-Free Crypto Management
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experience the future of cryptocurrency management with Trėzor.io/start. 
          Advanced security meets intuitive design.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--primary)] rounded-full font-bold text-white glow"
          >
            Get Started
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[var(--primary)] rounded-full font-bold text-white"
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Setup Guide Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="animated-border p-8"
        >
          <h1 className="text-4xl font-bold mb-6 gradient-text">Setting Up Your Trezor Wallet at Trėzor.io/Start</h1>
          <p className="text-xl text-gray-300 mb-12">Secure your cryptocurrency by setting up your Trezor hardware wallet properly.</p>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 1: Unboxing and Connecting Your Trezor Wallet</h2>
            <div className="animated-border p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4">What's in the Box?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Box className="text-[var(--accent)]" size={20} />
                  Trezor Hardware Wallet (Model One or Model T)
                </li>
                <li className="flex items-center gap-2">
                  <Box className="text-[var(--accent)]" size={20} />
                  USB-C or Micro USB Cable
                </li>
                <li className="flex items-center gap-2">
                  <Box className="text-[var(--accent)]" size={20} />
                  Recovery Seed Cards
                </li>
                <li className="flex items-center gap-2">
                  <Box className="text-[var(--accent)]" size={20} />
                  Quick Start Guide
                </li>
                <li className="flex items-center gap-2">
                  <Box className="text-[var(--accent)]" size={20} />
                  Security Seal (Ensure it is intact)
                </li>
              </ul>
            </div>
            <div className="animated-border p-6">
              <h3 className="text-2xl font-semibold mb-4">How to Connect</h3>
              <p className="text-gray-300">
                Plug your Trezor into your computer or mobile device and visit{' '}
                <a href="https://trėzor.io/start" className="text-[var(--accent)] hover:underline">
                  Trėzor.io/Start
                </a>{' '}
                to install Trezor Suite.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 2: Installing Firmware and Creating a Wallet</h2>
            <div className="animated-border p-6">
              <p className="text-gray-300">Follow on-screen instructions to install the firmware and create a new wallet.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 3: Backing Up Your Recovery Seed</h2>
            <div className="animated-border p-6 border-red-500">
              <p className="text-red-400 font-bold mb-4">NEVER store your recovery seed digitally. Keep it offline and secure.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Key className="text-[var(--accent)]" size={20} />
                  Write down the 12, 18, or 24-word recovery phrase.
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="text-[var(--accent)]" size={20} />
                  Store it in a safe and private location.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 4: Setting Up a PIN Code</h2>
            <div className="animated-border p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Key className="text-[var(--accent)]" size={20} />
                  Choose a secure PIN.
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="text-[var(--accent)]" size={20} />
                  Enter and confirm the PIN on your Trezor device.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 5: Using Trezor Suite to Manage Cryptocurrencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animated-border p-6">
                <h3 className="text-2xl font-semibold mb-4">Receiving Crypto</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Download className="text-[var(--accent)]" size={20} />
                    Open Trezor Suite and select a cryptocurrency.
                  </li>
                  <li className="flex items-center gap-2">
                    <Download className="text-[var(--accent)]" size={20} />
                    Click "Receive" and copy the wallet address.
                  </li>
                </ul>
              </div>
              <div className="animated-border p-6">
                <h3 className="text-2xl font-semibold mb-4">Sending Crypto</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Send className="text-[var(--accent)]" size={20} />
                    Click "Send" in Trezor Suite.
                  </li>
                  <li className="flex items-center gap-2">
                    <Send className="text-[var(--accent)]" size={20} />
                    Enter recipient's wallet address and amount.
                  </li>
                  <li className="flex items-center gap-2">
                    <Send className="text-[var(--accent)]" size={20} />
                    Confirm transaction on your Trezor device.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Step 6 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Step 6: Enhancing Security</h2>
            <div className="animated-border p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Shield className="text-[var(--accent)]" size={20} />
                  Update firmware via{' '}
                  <a href="https://trėzor.io/start" className="text-[var(--accent)] hover:underline">
                    Trėzor.io/Start
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-[var(--accent)]" size={20} />
                  Enable passphrase protection.
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-[var(--accent)]" size={20} />
                  Use a strong PIN.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <div className="animated-border p-6">
              <p className="text-gray-300">Take full control of your cryptocurrency security with a Trezor hardware wallet today!</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBox 
            icon={<Shield className="w-8 h-8" />}
            title="Advanced Security"
            description="State-of-the-art encryption and security protocols to keep your assets safe."
          />
          <FeatureBox 
            icon={<Cpu className="w-8 h-8" />}
            title="Smart Integration"
            description="Seamlessly connect with multiple blockchain networks and exchanges."
          />
          <FeatureBox 
            icon={<Lock className="w-8 h-8" />}
            title="Private Keys"
            description="You maintain full control of your private keys at all times."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Disclaimer */}
      <section className="container mx-auto px-4 py-10">
        <div className="animated-border p-6">
          <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
          <p className="text-gray-300">
            Cryptocurrency investments carry inherent risks. Always conduct thorough research and consider consulting with financial advisors before making investment decisions. Trėzor.io/start is a platform for managing digital assets and does not provide financial advice.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;