'use client'

import { Links } from './components/links'
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';

type KittenImage = {
  url: string;
};

async function getRandomKittenImages(): Promise<KittenImage[]> {
  const randomNumbers = Array.from({ length: 3 }, () => 
    Math.floor(Math.random() * 999) + 1
  );

  const fetchKittenImage = async (number: number): Promise<KittenImage> => {
    const url = `https://placekitten.com/g/200/${number}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch image at ${url}`);
    }

    return { url };
  };

  return Promise.all(randomNumbers.map(fetchKittenImage));
}

export default function Page() {
  const [kittenImages, setKittenImages] = useState<KittenImage[]>([]);

  useEffect(() => {
    getRandomKittenImages()
      .then(images => {
        setKittenImages(images);
      })
      .catch(error => {
        console.error('Error fetching kitten images:', error);
      });
  }, []);

  return (
    <div>
      <Links />
      <h1>Home</h1>
      <div>
        {kittenImages.map((image, index) => (
          <Suspense fallback={<p>Loading Kitten...</p>} key={index}>
            <Image
              src={image.url}
              alt={`Kitten ${index}`}
              key={index}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
