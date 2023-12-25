'use client'

import { Links } from './components/links'
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';

type RandomImage = {
  url: string;
};

async function getRandomImages(count: number): Promise<RandomImage[]> {
  const urls = Array.from({ length: count }, () => 'https://picsum.photos/200');
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const images = await Promise.all(responses.map(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch image`);
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }));
  return images.map(url => ({ url }));
}

export default function Page() {
  const [randomImages, setRandomImages] = useState<RandomImage[]>([]);

  useEffect(() => {
    getRandomImages(3) // Fetch 3 random images
      .then(images => {
        setRandomImages(images);
      })
      .catch(error => {
        console.error('Error fetching random images:', error);
      });
  }, []);

  return (
    <div>
      <Links />
      <h1>Home</h1>
      <div>
        {randomImages.length > 0 ? (
          <Suspense fallback={<p>Loading Images...</p>}>
            {randomImages.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.url}
                  alt={`Random Image ${index + 1}`}
                />
              </div>
            ))}
          </Suspense>
        ) : (
          <p>Loading Images...</p>
        )}
      </div>
    </div>
  );
}
