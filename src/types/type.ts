import React, { ReactNode } from 'react';

export type PropshortenUrlType = {
    propshortenUrl: string;
};

export type UrlProviderProps = {
  children: ReactNode;
};

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};