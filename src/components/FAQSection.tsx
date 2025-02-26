import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Trėzor.io/start?",
      answer: "Trėzor.io/start is a comprehensive cryptocurrency management platform that combines advanced security features with an intuitive user interface. It allows users to securely store, manage, and track their digital assets across multiple blockchain networks."
    },
    {
      question: "How secure is Trėzor.io/start?",
      answer: "We implement industry-leading security measures including end-to-end encryption, two-factor authentication, and secure key storage. Our platform undergoes regular security audits and follows best practices in cryptocurrency security."
    },
    {
      question: "What cryptocurrencies are supported?",
      answer: "Trėzor.io/start supports a wide range of cryptocurrencies including Bitcoin, Ethereum, and many other popular tokens. Our platform is regularly updated to include support for new cryptocurrencies and tokens."
    },
    {
      question: "How do I get started?",
      answer: "Getting started with Trėzor.io/start is simple. Create an account, complete the verification process, and you can begin managing your digital assets immediately. Our platform includes comprehensive guides and tutorials to help you get started."
    },
    {
      question: "What makes Trėzor.io/start different?",
      answer: "Trėzor.io/start stands out through its combination of robust security, user-friendly interface, and comprehensive feature set. We prioritize both security and usability, making cryptocurrency management accessible to both beginners and experienced users."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20" id="faq">
      <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={false}
      className="animated-border overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <Minus className="flex-shrink-0" /> : <Plus className="flex-shrink-0" />}
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-gray-300">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;