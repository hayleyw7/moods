'use client'

import { Links } from './components/links';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';

type RandomImage = {
  url: string;
};

async function getRandomImages(count: number): Promise<RandomImage[]> {
  const urls = Array.from({ length: count }, () => 'https://picsum.photos/300');
  const responses = await Promise.all(urls.map(url => fetch(url)));
  
  const images = responses.map(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch image`);
    }
    return { url: URL.createObjectURL(await response.blob()) };
  });

  return Promise.all(images);
}

export default function Page() {
  const [randomImages, setRandomImages] = useState<RandomImage[]>([]);

  useEffect(() => {
    getRandomImages(3)
      .then(images => {
        setRandomImages(images);
      })
      .catch(error => {
        console.error('Error fetching random images:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold text-gray-500">Mood</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {randomImages.length > 0 ? (
          <Suspense fallback={<p className="text-center">Preparing Mood...</p>}>
            {randomImages.map((image, index) => (
              <div key={index} className="p-4 mb-4 mt-4">
                <Image
                  src={image.url}
                  alt={`Random Image ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Suspense>
        ) : (
          <div className="col-span-3 flex justify-center mt-5 mb-5">
            <p className="text-center">Preparing Mood...</p>
          </div>
        )}
      </div>
      <Links />
    </div>
  );
}
