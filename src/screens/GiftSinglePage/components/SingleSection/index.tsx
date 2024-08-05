'use client';

import Image from 'next/image';
import { useState } from 'react';

const SingleSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '00020126580014BR.GOV.BCB.PIX0136c6540b89-fcc6-4d8d-9014-83cd795561865204000053039865802BR5924GABRIELA LOPES DE FRANCA6008BRASILIA622605222Y2dMc8EfEKqG75QDXnHRI630461FD'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <article>
            <div className="relative">
              <Image
                src="/assets/images/qr-code.jpeg"
                alt="qr-code do pix"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </article>
          <article>
            <h2 className="text-3xl font-bold mb-4">Presente dos Noivos</h2>
            <p className="mb-4">
              Ajude os noivos com um presente especial. Utilize o QR Code ou
              copie a chave Pix abaixo para realizar sua contribuição.
            </p>
            <div className="mb-4">
              <label
                htmlFor="pix-key"
                className="block text-sm font-medium text-gray-700"
              >
                Chave Pix Aleatória:
              </label>
              <div className="flex mt-1">
                <input
                  type="text"
                  id="pix-key"
                  readOnly
                  value="00020126580014BR.GOV.BCB.PIX0136c6540b89-fcc6-4d8d-9014-83cd795561865204000053039865802BR5924GABRIELA LOPES DE FRANCA6008BRASILIA622605222Y2dMc8EfEKqG75QDXnHRI630461FD"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
                />
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-500 text-black rounded-r-md hover:bg-blue-600"
                >
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SingleSection;
