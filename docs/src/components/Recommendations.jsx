// Recommendations.jsx
import React from 'react';

function Recommendations() {
  const recommendations = [
    {
      name: "Shahab Noori Goodarzi",
      role: "Senior .Net Developer",
      date: "November 11, 2023",
      text: "Mojtaba is one of the best colleagues I have ever worked with. As I remember, Mojtaba was a very productive person, hardworking, broad-minded, and forward-thinking. Their intelligence, ambition, energy, and proactive approach make Mojtaba a valuable asset to any team. Working with Mojtaba is a signature of success."
    },
    {
      name: "Hadi Pourneshati",
      role: "Database Administrator at Kavenegar",
      date: "August 13, 2022",
      text: "I worked with Mojtaba in same group, He is very hard worker and smart; I learned a lot of things about Linux, Grafana, ELK an DevOps components from him. He is very kind and Patient coworker and Helped me to improve my skills. If someone looking for a good DevOps, Mojtaba is one of the best."
    }
  ];

  return (
    <section id="recommendations" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Recommendations</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-blue-400">{rec.name}</h3>
              <p className="text-gray-400">{rec.role}</p>
              <p className="text-sm text-gray-500 mt-1">{rec.date}</p>
            </div>
            <p className="text-gray-300 italic">"{rec.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;