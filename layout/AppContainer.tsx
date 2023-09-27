import React, { PropsWithChildren } from 'react';
import Brand from '../components/Brand';
import Footer from './Footer';

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-2xl mx-auto px-10'>
      <Brand />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppContainer;
