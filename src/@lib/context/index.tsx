import { queryClient } from '@lib/config';
import { QueryClientProvider } from '@tanstack/react-query';
import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

type TProps = {
  nextFont?: NextFont;
  children: React.ReactNode;
};

export const Providers = ({ nextFont, children }: TProps) => {
  const theme: ThemeConfig = {
    token: {
      fontFamily: 'var(--font-inter)',
      fontSize: 16,
      colorPrimary: 'var(--color-primary)',
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider getPopupContainer={() => document.getElementById('__main') || document.body} theme={theme}>
        <main role="main" id="__main" className={nextFont?.className}>
          {children}
        </main>
      </ConfigProvider>
    </QueryClientProvider>
  );
};
