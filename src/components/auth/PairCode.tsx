import React, { useState } from 'react';
import { Smartphone, Loader, AlertCircle } from 'lucide-react';
import { PhoneInput } from './PhoneInput';

export default function PairCode() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pairCode, setPairCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      setPairCode(null);

      const response = await fetch(
        `https://fredietech.onrender.com/api/auth?mode=pair&number=${phoneNumber}`
      );
      const data = await response.json();

      if (!data.status) {
        throw new Error(data.error || 'Error generating code');
      }

      setPairCode(data.code);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inattendue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Smartphone className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white">Code d'appairage</h2>
          <p className="mt-2 text-gray-300">
            Select your country and enter your number to receive a code
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              disabled={loading}
            />

            {error && (
              <div className="flex items-center text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !phoneNumber}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Generating the code...
                </>
              ) : (
                'Get the code'
              )}
            </button>
          </form>

          {pairCode && (
            <div className="mt-6 p-4 bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Your pairing code :</p>
              <p className="text-2xl font-mono text-white text-center tracking-wider">
                {pairCode}
              </p>
              <p className="mt-2 text-xs text-gray-400 text-center">
                This code is for one time use only and will expire after use.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}