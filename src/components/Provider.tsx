import React from 'react';
import { Provider } from 'mobx-react';
import urlStore from '../store/urlStore';
import { UrlProviderProps } from '../types/type';

const UrlProvider: React.FC<UrlProviderProps> = ({ children }) => {
  return <Provider urlStore={urlStore}>{children}</Provider>;
};

export default UrlProvider;