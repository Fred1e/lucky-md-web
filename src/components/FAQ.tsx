import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Comment obtenir mon Session ID ?',
    answer: 'Visit our Session ID generation page and follow the instructions to scan the QR code or PAIR code with WhatsApp.'
  },
  {
    question: 'Is the bot free?',
answer: 'Yes, LUCKY-MD is completely free and open source under the MIT license.'
  },
  {
    question: 'Can I customize the commands?',
answer: 'Yes, you can modify and add your own commands by editing the source code.'
  },
  {
    question: 'How to contribute to the project?',
answer: 'You can contribute by submitting pull requests on GitHub or reporting bugs.'
  }
];

export default function FAQ() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-16">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
              >
                <dt className="text-lg font-medium text-white">{faq.question}</dt>
                <dd className="mt-2 text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}