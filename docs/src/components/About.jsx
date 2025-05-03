// About.jsx
import React from 'react';

function About() {
  const skills = [
    'Kubernetes', 'HelmChart', 'Kustomize', 'ArgoCD', 'Containerization', 'SRE',
    'GitOps', 'Docker', 'CI/CD', 'Linux', 'Elasticsearch', 'Prometheus',
    'Grafana', 'Python', 'Ansible', 'High Availability'
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-300 mb-8 text-center">
          A DevOps experienced fellow who is helping developers help themselves help us all!
          Specialized in Kubernetes, containerization, and Site Reliability Engineering with
          a strong focus on building scalable and reliable systems.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;