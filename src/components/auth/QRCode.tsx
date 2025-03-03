import React, { useState, useEffect } from 'react';
import { QrCode, RefreshCw, Loader } from 'lucide-react';

export default function QRCode() {
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQRCode = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://fredietech.onrender.com/api/auth?mode=qr');
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error generating QR code');
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setQrImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <QrCode className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white">Scan the QR Code</h2>
          <p className="mt-2 text-gray-300">
            Open WhatsApp on your phone and scan the QR code to log in
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Loader className="h-8 w-8 text-blue-500 animate-spin" />
              <p className="mt-4 text-gray-300">QR code generation...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={fetchQRCode}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Réessayer
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={qrImage!}
                alt="QR Code WhatsApp"
                className="w-64 h-64 rounded-lg"
              />
              <button
                onClick={fetchQRCode}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate a new QR code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}