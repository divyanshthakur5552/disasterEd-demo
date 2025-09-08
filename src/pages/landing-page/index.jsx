import React from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import EmergencyBanner from './components/EmergencyBanner';
import NavigationCards from './components/NavigationCards';
import StatsSection from './components/StatsSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Emergency Banner */}
      <EmergencyBanner />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb />
        </div>
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Navigation Cards */}
        <NavigationCards />
        
        {/* Stats Section */}
        <StatsSection />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground">DisasterEd</div>
                  <div className="text-sm text-muted-foreground">Emergency Preparedness</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Empowering educational institutions with comprehensive disaster preparedness training, 
                real-time alerts, and emergency response resources to ensure student and staff safety.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/training-modules" className="text-muted-foreground hover:text-primary transition-colors">Training Modules</a></li>
                <li><a href="/interactive-quizzes" className="text-muted-foreground hover:text-primary transition-colors">Interactive Quizzes</a></li>
                <li><a href="/live-alerts-dashboard" className="text-muted-foreground hover:text-primary transition-colors">Live Alerts</a></li>
                <li><a href="/safe-zones-map" className="text-muted-foreground hover:text-primary transition-colors">Safe Zones</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Emergency Contacts</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Emergency: 112</li>
                <li className="text-muted-foreground">Fire: 101</li>
                <li className="text-muted-foreground">Police: 100</li>
                <li className="text-muted-foreground">Medical: 108</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} DisasterEd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;