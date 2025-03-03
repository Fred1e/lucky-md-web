import React from 'react';
import { Github, Heart } from 'lucide-react';

const developers = [
  {
    name: 'Channel',
    link: 'https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f'
  },
  {
    name: 'FREDIE-TECH',
    link: 'https://wa.me/255752593977'
  },
  {
    name: 'FrediEzra',
    link: 'https://wa.me/255620814108'
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Developer</h3>
          <div className="flex justify-center space-x-6 mb-8">
            {developers.map((dev) => (
              <a
                key={dev.name}
                href={dev.link}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                {dev.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Fred1e/LUCKY_MD"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by LUCKY-MD Team
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Licensed under MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}