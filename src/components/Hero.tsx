import React from 'react';
import { Bot, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Bot className="h-24 w-24 mx-auto mb-8 text-blue-500" />
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            LUCKY-MD
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The multifunctional WhatsApp bot that revolutionizes your conversations
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Fred1e/LUCKY_MD/fork"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Star className="mr-2 h-5 w-5" />
              Fork on GitHub
            </a>
            <a
              href="https://fredietech.onrender.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Obtenir Session ID
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}