import React from 'react';
import Header from '../component/Header';
import HeroSection from '../component/Hero';
import FeatureList from '../component/FeatureList';
import Footer from '../component/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeatureList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
