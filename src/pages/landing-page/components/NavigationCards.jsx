import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NavigationCards = () => {
  const navigationItems = [
    {
      title: "Training Modules",
      description: "Interactive disaster preparedness courses covering fire safety, earthquake response, flood management, and emergency evacuation procedures.",
      icon: "BookOpen",
      path: "/training-modules",
      color: "bg-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
      stats: "12 Modules Available"
    },
    {
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quizzes on emergency protocols, safety procedures, and disaster response techniques.",
      icon: "Brain",
      path: "/interactive-quizzes",
      color: "bg-purple-500",
      bgGradient: "from-purple-50 to-purple-100",
      stats: "25+ Quiz Topics"
    },
    {
      title: "Live Alerts Dashboard",
      description: "Real-time disaster alerts, weather warnings, and emergency notifications with severity indicators and response guidelines.",
      icon: "AlertTriangle",
      path: "/live-alerts-dashboard",
      color: "bg-red-500",
      bgGradient: "from-red-50 to-red-100",
      stats: "24/7 Monitoring",
      badge: "Live"
    },
    {
      title: "Safe Zones Map",
      description: "Interactive map showing designated safe zones, evacuation routes, emergency shelters, and assembly points in your area.",
      icon: "MapPin",
      path: "/safe-zones-map",
      color: "bg-green-500",
      bgGradient: "from-green-50 to-green-100",
      stats: "500+ Safe Zones"
    },
    {
      title: "First Aid Guide",
      description: "Step-by-step first aid instructions, CPR procedures, injury treatment protocols, and emergency medical response techniques.",
      icon: "Heart",
      path: "/resources-directory",
      color: "bg-pink-500",
      bgGradient: "from-pink-50 to-pink-100",
      stats: "Essential Skills"
    },
    {
      title: "Resources Directory",
      description: "Comprehensive collection of emergency contacts, relief organizations, mental health support, and disaster recovery resources.",
      icon: "Library",
      path: "/resources-directory",
      color: "bg-cyan-500",
      bgGradient: "from-cyan-50 to-cyan-100",
      stats: "200+ Resources"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Our Training Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive disaster preparedness resources designed for educational institutions. 
            Start your journey to enhanced safety awareness and emergency readiness.
          </p>
        </motion.div>

        {/* Navigation Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {navigationItems?.map((item, index) => (
            <motion.div
              key={item?.path}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link to={item?.path} className="block h-full">
                <div className={`relative h-full bg-gradient-to-br ${item?.bgGradient} border border-border rounded-xl p-6 shadow-elevation-2 hover:shadow-elevation-8 transition-all duration-300 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full ${item?.color} rounded-full blur-3xl transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  {/* Badge */}
                  {item?.badge && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full animate-pulse">
                        {item?.badge}
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${item?.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item?.icon} size={28} color="white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item?.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item?.stats}
                      </span>
                      <Icon 
                        name="ArrowRight" 
                        size={20} 
                        color="var(--color-muted-foreground)" 
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Safety Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students and educators who have enhanced their emergency preparedness skills through our comprehensive training platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/training-modules">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Play" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Begin Training Now
                </Button>
              </Link>
              <Link to="/interactive-quizzes">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Trophy" 
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Take a Quiz
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NavigationCards;