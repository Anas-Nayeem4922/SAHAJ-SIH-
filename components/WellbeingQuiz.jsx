import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Heart, CheckCircle, Sparkles, Star, X } from 'lucide-react';

const WellbeingQuiz = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 1, question: "In the past two weeks, have you felt down, sad, or hopeless?", category: "Mood", type: 'objective' },
    { id: 2, question: "Do you find it hard to enjoy activities you usually like?", category: "Mood/Depression", type: 'objective' },
    { id: 3, question: "Do you feel nervous, anxious, or on edge almost daily?", category: "Anxiety", type: 'objective' },
    { id: 4, question: "Do you worry too much about studies, future, or personal matters?", category: "Stress", type: 'objective' },
    { id: 5, question: "Do you feel overwhelmed by tasks or deadlines?", category: "Stress/Anxiety", type: 'objective' },
    { id: 6, question: "Do you often feel exhausted after classes or studying?", category: "Academic burnout", type: 'objective' },
    { id: 7, question: "Do you feel your efforts in academics are \"never enough\"?", category: "Academic pressure", type: 'objective' },
    { id: 8, question: "Do you often feel lonely, even when surrounded by others?", category: "Social/emotional well-being", type: 'objective' },
    { id: 9, question: "Do you find it difficult to share your feelings with friends/family?", category: "Social support", type: 'objective' },
    { id: 10, question: "Do you use social media excessively or late at night?", category: "Lifestyle balance", type: 'objective' },
    { id: 11, question: "What usually stresses you out the most in your daily life?", type: 'subjective' },
    { id: 12, question: "When you feel low or anxious, what do you normally do to cope?", type: 'subjective' },
    { id: 13, question: "Who do you feel most comfortable talking to when you're struggling, and why?", type: 'subjective' },
    { id: 14, question: "What changes in college life (academics, environment, or support) would help your mental well-being?", type: 'subjective' },
    { id: 15, question: "Describe a moment when you felt truly happy or motivated in recent weeks. What made it meaningful?", type: 'subjective' }
  ];

  const scaleLabels = ['Almost every day', 'Often', 'Sometimes', 'Not at all'];
  const scaleScores = [0, 1, 2, 3]; 

  const handleObjectiveAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubjectiveAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    const objectiveAnswers = Object.entries(answers)
      .filter(([id]) => questions.find(q => q.id === parseInt(id))?.type === 'objective')
      .map(([, value]) => scaleScores[value]);
    
    const totalScore = objectiveAnswers.reduce((sum, score) => sum + score, 0);
    const maxScore = 10 * 3;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getResultMessage = (score) => {
    if (score >= 70) return { 
      title: "You're doing great!", 
      message: "Your responses suggest you're managing well. Keep up the good work with self-care!",
      color: "from-turmeric to-turmeric"
    };
    if (score >= 40) return { 
      title: "Some areas to focus on", 
      message: "Consider incorporating more stress management techniques and don't hesitate to reach out for support.",
      color: "from-turmeric to-turmeric"
    };
    return { 
      title: "We're here to help", 
      message: "Your responses suggest you might benefit from additional support. Consider speaking with a mental health professional.",
      color: "from-turmeric to-turmeric"
    };
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const result = getResultMessage(score);
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-500">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 bg-gradient-to-br from-turmeric to-cherry rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce`}>
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{result.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{result.message}</p>
              
              <div className="bg-gradient-to-r from-pearl to-yellow-100 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Brain className="w-8 h-8 text-cherry" />
                  <span className="text-2xl font-bold text-gray-800">Wellbeing Score: {score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className={`bg-gradient-to-r ${result.color} h-4 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Journey Insights:</h3>
              <div className="bg-gradient-to-r from-white to-yellow-50 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Reflective Responses:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {Object.entries(answers)
                    .filter(([id]) => questions.find(q => q.id === parseInt(id))?.type === 'subjective')
                    .slice(0, 2)
                    .map(([id, answer]) => (
                      <div key={id} className="italic">
                        "{typeof answer === 'string' ? answer.substring(0, 80) + '...' : answer}"
                      </div>
                    ))
                  }
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Next Steps:</h3>
              <div className="grid gap-4">
                <div className="flex items-center space-x-3 p-4 bg-pearl rounded-xl hover:shadow-md transition-all duration-300">
                  <Heart className="w-6 h-6 text-cherry" />
                  <span className="text-slate-900">Start with guided meditation sessions</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-pearl to-blue-50 rounded-xl hover:shadow-md transition-all duration-300">
                  <Brain className="w-6 h-6 text-cherry" />
                  <span className="text-slate-900">Connect with our AI support chat</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-pearl rounded-xl hover:shadow-md transition-all duration-300">
                  <Star className="w-6 h-6 text-cherry" />
                  <span className="text-slate-900">Speak with a verified mental health expert</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-cherry text-butter rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setIsCompleted(false);
                  setShowResults(false);
                }}
                className="flex-1 px-6 py-3 bg-white text-cherry border-2 border-cherry/50 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-500">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-cherry" />
              <span className="font-semibold text-gray-800">Wellbeing Assessment</span>
            </div>
            <div className="text-sm text-gray-500">
              {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-radicchio to-cherry h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <div
            className="mb-8 animate-in slide-in-from-right duration-500"
            key={currentQuestion}
          >
            {currentQ.type === "objective" && (
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-1 bg-butter text-cherry rounded-full text-sm font-medium">
                  {currentQ.category}
                </span>
              </div>
            )}

            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center leading-relaxed">
              {currentQ.question}
            </h2>

            {currentQ.type === "objective" ? (
              <div className="space-y-4">
                <p className="text-center text-muted-foreground mb-6">
                  Select how often this applies to you:
                </p>
                <div className="grid gap-3">
                  {scaleLabels.map((label, index) => (
                    <button
                      key={index}
                      onClick={() => handleObjectiveAnswer(currentQ.id, index)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        answers[currentQ.id] === index
                          ? "border-cherry bg-butter shadow-lg"
                          : "border-cherry/40 hover:border-cherry hover:bg-butter/70"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              answers[currentQ.id] === index
                                ? "border-cherry bg-cherry"
                                : "border-slate-900/30"
                            }`}
                          >
                            {answers[currentQ.id] === index && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-slate-900">{label}</span>
                        </div>
                        <span className="text-sm text-slate-900/60 font-semibold">
                          {scaleScores[index]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-center text-cherry/70 mb-6">
                  Take your time to reflect and share your thoughts honestly:
                </p>
                <textarea
                  value={answers[currentQ.id] || ""}
                  onChange={(e) =>
                    handleSubjectiveAnswer(currentQ.id, e.target.value)
                  }
                  placeholder="Share what's on your mind... Your honest response helps us understand you better and provide more personalized support."
                  className="w-full h-32 p-4 border-2 border-cherry/30 rounded-2xl focus:border-cherry focus:outline-none resize-none transition-all duration-300 bg-butter/30 text-slate-950"
                  rows={4}
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center p-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-cherry hover:text-cherry transform hover:scale-105 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuestion
                    ? 'bg-cherry scale-125'
                    : index < currentQuestion
                    ? 'bg-cherry/60'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuestion}
            disabled={answers[currentQ.id] === undefined || answers[currentQ.id] === ''}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              answers[currentQ.id] === undefined || answers[currentQ.id] === ''
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-cherry text-butter hover:shadow-lg transform hover:scale-105 cursor-pointer'
            }`}
          >
            <span>{currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WellbeingQuiz;
