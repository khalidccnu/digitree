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
      fontSize: 16,
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <main role="main" id="__main" className={nextFont?.className}>
        {children}
      </main>
    </ConfigProvider>
  );
};
