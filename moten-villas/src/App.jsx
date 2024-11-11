import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

// Lazy load the other components
const About = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Testimonials = lazy(() => import('./components/testimonilas'));

// Memoize Header and Footer to prevent unnecessary re-renders
const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

const App = () => {
  return (
    <Router>
      <div id="root">
        <header>
          <MemoizedHeader />
        </header>

        <div>
          <Routes>
            {/* Directly load Home component, lazy load others */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* Wrap each lazy-loaded route with Suspense for fallback loading indicator */}
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Portfolio />
                </Suspense>
              } 
            />
            <Route 
              path="/testimonials" 
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Testimonials />
                </Suspense>
              } 
            />
          </Routes>
        </div>
        
        <footer>
          <MemoizedFooter />
        </footer>
      </div>
    </Router>
  );
};

export default App;
