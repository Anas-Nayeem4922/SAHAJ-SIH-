import React from 'react';
import { Award, CheckCircle, Star, Users } from 'lucide-react';

const ExpertsSection = () => {
  const experts = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Clinical Psychology",
      rating: 4.9,
      sessions: "2,400+ sessions",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. James Chen",
      specialty: "Anxiety & Depression",
      rating: 4.8,
      sessions: "1,800+ sessions",
      image: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Dr. Maria Rodriguez",
      specialty: "Student Counseling",
      rating: 4.9,
      sessions: "3,200+ sessions",
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="experts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Verified Mental Health Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with licensed, verified professionals who specialize in student mental health 
            and have undergone rigorous background checks and credential verification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Licensed Professionals Only</h3>
                  <p className="text-gray-600">All experts must have post-licensure qualifications and ongoing professional development.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Identity Verification</h3>
                  <p className="text-gray-600">Rigorous ID verification and background checks ensure you're working with legitimate professionals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Student Specialization</h3>
                  <p className="text-gray-600">Our experts specialize in student mental health challenges and age-appropriate interventions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-lg">{expert.name}</h4>
                    <p className="text-purple-600 font-medium">{expert.specialty}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{expert.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">{expert.sessions}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;