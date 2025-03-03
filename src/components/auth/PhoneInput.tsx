import React from 'react';
import { Country, countries } from '../../utils/countries';
import { CountrySelect } from './CountrySelect';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function PhoneInput({ value, onChange, disabled }: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(
    countries.find(c => c.code === 'CI') || countries[0]
  );

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    onChange(selectedCountry.dialCode + input);
  };

  const phoneNumberWithoutDialCode = value.startsWith(selectedCountry.dialCode)
    ? value.slice(selectedCountry.dialCode.length)
    : value;

  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
        phone number 
      </label>
      <div className="mt-1 flex space-x-2">
        <CountrySelect
          selectedCountry={selectedCountry}
          onSelect={(country) => {
            setSelectedCountry(country);
            onChange(country.dialCode + phoneNumberWithoutDialCode);
          }}
        />
        <input
          type="tel"
          id="phone"
          value={phoneNumberWithoutDialCode}
          onChange={handlePhoneChange}
          disabled={disabled}
          className="flex-1 px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
          placeholder="XXXXXXXXX"
        />
      </div>
      <p className="mt-1 text-xs text-gray-400">
        Format: +{selectedCountry.dialCode} tracking your number
      </p>
    </div>
  );
}