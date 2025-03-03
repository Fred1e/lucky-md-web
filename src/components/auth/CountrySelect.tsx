import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Country, countries } from '../../utils/countries';

interface CountrySelectProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
}

export function CountrySelect({ selectedCountry, onSelect }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dialCode.includes(searchQuery)
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white hover:bg-gray-600"
      >
        <span>{selectedCountry.flag}</span>
        <span>+{selectedCountry.dialCode}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-72 bg-gray-800 rounded-md shadow-lg">
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un pays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="max-h-60 overflow-auto">
            {filteredCountries.map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  onSelect(country);
                  setIsOpen(false);
                }}
                className="w-full flex items-center px-4 py-2 text-white hover:bg-gray-700"
              >
                <span className="mr-2">{country.flag}</span>
                <span>{country.name}</span>
                <span className="ml-auto text-gray-400">+{country.dialCode}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}