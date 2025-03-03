import React from 'react';
import { Cloud, ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'Heroku',
    description: 'Easily deploy with one click on Heroku.',
    link: 'https://dashboard.heroku.com/new?template=https://github.com/Fred1e/LUCKY_MD',
    buttonText: 'Deploy to Heroku'
  },
  {
    name: 'Talkdrove',
description: 'Free 24/7 hosting on Talkdrove.',
link: 'https://talkdrove.com/auth/signup?ref=F492E352',
buttonText: 'Deploy to Talkdrove'
  },
  {
    name: 'GitHub Actions',
description: 'Automated deployment with GitHub Actions.',
link: 'https://github.com/Fred1e/LUCKY_MD',
buttonText: 'See the GitHub guide'
  },
  {
    name: 'Koyeb',
description: 'Modern and high-performance cloud platform.',
link: 'https://app.koyeb.com/apps/deploy?type=git&repository=https://github.com/Fred1e/LUCKY_MD',
buttonText: 'Deploy to Koyeb'
  }
];

export default function Deployment() {
  return (
    <div id="deployment" className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Cloud className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Deployment options
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose the platform that suits you best
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="relative group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
            >
              <h3 className="text-lg font-medium text-white">{platform.name}</h3>
              <p className="mt-2 text-gray-300">{platform.description}</p>
              <a
                href={platform.link}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                {platform.buttonText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}