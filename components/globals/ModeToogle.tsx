'use client';

import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import { icons } from '../icons';

interface ModeToogleProps {}

const ModeToogle: FC<ModeToogleProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="lg"
      variant="secondary"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <icons.sun className="text-primary-foreground" />
      ) : (
        <icons.moon />
      )}
    </Button>
  );
};

export default ModeToogle;
