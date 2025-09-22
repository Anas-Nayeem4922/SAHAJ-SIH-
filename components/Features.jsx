import React from 'react';
import { Brain, Shield, BarChart3, UserCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Smart Student Support",
    description: "Quick self-reflection quizzes identify stress or anxiety in early stages. AI chatbot provides immediate support, motivation, and redirects to helpline and trusted experts.",
    color: "from-spinach to-spinach",
    bgColor: "spinach"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Guest mode option with no data saving, or login to track progress. All conversations are encrypted for non-stigmatizing support in a safe, confidential environment.",
    color: "from-kaleleaf to-kaleleaf",
    bgColor: "kaleleaf"
  },
  {
    icon: BarChart3,
    title: "Help Institutions Help Students",
    description: "Anonymous trend insights for institutions, exam stress alerts, workshop recommendations, and Mental Health Awareness Index to track progress without breaking anonymity.",
    color: "from-cherry to-cherry",
    bgColor: "cherry"
  },
  {
    icon: UserCheck,
    title: "Verified Experts",
    description: "All staff must have post-licensure verification, present ID, and undergo thorough vetting to ensure students work with real, qualified professionals.",
    color: "from-radicchio to-radicchio",
    bgColor: "radicchio"
  },
  {
    icon: Globe,
    title: "Inclusive and Welcoming",
    description: "Multi-language support across many regions, accessible content, and multiple program access to ensure all students feel comfortable and supported.",
    color: "from-radiate to-radiate",
    bgColor: "radiate"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with human expertise to provide 
            the most effective mental health support system for students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-gradient-to-br hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${feature.bgColor.split(' ').join(', ')})`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;