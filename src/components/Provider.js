import React from 'react';
import { Provider } from 'mobx-react';
import urlStore from '../store/urlStore';

const UrlProvider = ({ children }) => {
  return <Provider urlStore={urlStore}>{children}</Provider>;
};

export default UrlProvider;