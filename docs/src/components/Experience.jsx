// Experience.jsx
import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Kavenegar',
      role: 'DevOps Director',
      period: 'Oct 2024 - Present',
      location: 'Tehran, Iran',
      highlights: [
        'Setup/Manage/Config infrastructure architecture',
        'Deploy/init and configure multi-master k8s cluster with 10 worker nodes',
        'Manage 5-node elasticsearch cluster',
        'Configure HighAvailability solutions',
        'Setup and manage redis-sentinel cluster'
      ]
    },
    {
      company: 'Rakuten',
      role: 'Site Reliability Engineer',
      period: 'Dec 2023 - Mar 2024',
      location: 'Tokyo, Japan',
      highlights: [
        'Maintained Rakuten gulf infrastructure',
        'Developed elastAlert for notification alerts',
        'Updated logstash configuration',
      ]
    },
    {
      company: 'Namava',
      role: 'DevOps Engineer',
      period: 'Dec 2019 - Nov 2023',
      location: 'Tehran, Iran',
      highlights: [
        'Managed ELK cluster handling 500M documents per day',
        'Set up HA Rocket-chat with MongoDB cluster',
        'Implemented GitOps approach for infrastructure management',
        'Created Prometheus-Grafana-Kibana monitoring system'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
              </div>
              <div className="text-right text-gray-400">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;