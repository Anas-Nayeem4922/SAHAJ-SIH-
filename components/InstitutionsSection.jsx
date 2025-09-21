import React from 'react';
import { BarChart3, TrendingUp, AlertCircle, MapPin, Lightbulb } from 'lucide-react';

const InstitutionsSection = () => {
  return (
    <section id="institutions" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Institutions with Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help your institution support students better with anonymous analytics, 
            early warning systems, and actionable recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Admin Dashboard</h3>
                <p className="text-gray-600">Comprehensive insights that preserve student privacy</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">73%</div>
                  <div className="text-sm text-gray-600">Student Engagement</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">↑18%</div>
                  <div className="text-sm text-gray-600">Wellbeing Trend</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">Exam Period Alert</span>
                  </div>
                  <span className="text-sm text-orange-600 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700 font-medium">Workshop Recommended</span>
                  </div>
                  <span className="text-sm text-blue-600 font-semibold">New</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Anonymous Trend Analysis</h3>
                  <p className="text-gray-600">Track rising anxiety, exam stress, and similar concerns without compromising individual privacy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Stress Heat Maps</h3>
                  <p className="text-gray-600">Visual representations of campus stress patterns to identify areas needing additional support.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Early Warning System</h3>
                  <p className="text-gray-600">Proactive alerts about emerging mental health trends before they become critical issues.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Smart Recommendations</h3>
                  <p className="text-gray-600">AI-driven suggestions for workshops, policy changes, and interventions based on anonymous data.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Mental Health Awareness Index</h4>
              <p className="text-gray-600 mb-4">Track institutional progress in supporting student mental health over time.</p>
              <div className="w-full bg-white rounded-full h-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full w-3/4 flex items-center justify-end pr-2">
                  <span className="text-xs text-white font-semibold">74%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;