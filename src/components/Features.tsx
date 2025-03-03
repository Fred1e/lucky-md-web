import React from 'react';
import { FileText, MessageSquare, Users, Sticker, Globe, Shield } from 'lucide-react';

const features = [
  {
    name: 'File Management',
    description: 'Send and receive files of all types with automatic compression.',
    icon: FileText
  },
  {
    name: 'Interaction with stickers',
    description: 'Find and share the perfect stickers for every conversation.',
    icon: Sticker
  },
  {
    name: 'Group management',
    description: 'Easily manage your WhatsApp groups with simple commands.',
    icon: Users
  },
  {
    name: 'Multi-device',
    description: 'Compatible with all your devices: smartphones, tablets and computers.',
    icon: Globe
  },
  {
    name: 'Automatic messages',
    description: 'Automatically reply to messages with personalized responses.',
    icon: MessageSquare
  },
  {
    name: 'Advanced security',
    description: 'Spam Protection and Permission Management.',
    icon: Shield
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Main features
            
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Discover everything LUCKY-MD can do for you
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}