import React from 'react';
import { Lock, Eye, UserX, AlertTriangle, Shield } from 'lucide-react';

const SafetySection = () => {
  return (
    <section id="safety" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Trust, Safety & Governance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy and safety are our top priorities. Every interaction is protected 
                with enterprise-grade security and verified professional oversight.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">All conversations and data are encrypted using military-grade security protocols.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserX className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Anonymous Mode</h3>
                  <p className="text-gray-600">Use guest mode with no data retention or create an account to track your journey.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">KYC Verification</h3>
                  <p className="text-gray-600">All professionals undergo rigorous identity and credential verification.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Emergency SOS Button</h3>
                  <p className="text-gray-600">Instant connection to professionals or volunteers for urgent support situations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">100% Secure</h3>
                  <p className="text-gray-600">Your data is protected with the highest security standards</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">256-bit</div>
                    <div className="text-sm text-gray-600">Encryption</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">GDPR</div>
                    <div className="text-sm text-gray-600">Compliant</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-pink-600 mb-1">SOC2</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;