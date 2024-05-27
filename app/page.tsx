import { Dropzone } from '@/components/globals';
import React, { FC } from 'react';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Set your imagination free with Edito – the ultimate online alchemist
          for transforming multimedia, all at no cost. Seamlessly convert
          images, audio, and videos to unlock the full potential of your
          content. Start your journey with Edito, the premier free conversion
          app, and watch your creations soar to new heights!
        </p>
      </div>

      {/* upload files */}
      <Dropzone />
    </div>
  );
};

export default HomePage;
