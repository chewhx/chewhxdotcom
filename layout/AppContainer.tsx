import React, { PropsWithChildren } from 'react';
import Brand from '../components/Brand';
import Footer from './Footer';

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-[1200px] mx-auto px-10'>
      <Brand />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppContainer;
