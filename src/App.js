import React, { useState } from 'react';
import './App.css';

const modules = [
  { id: 'algebra', name: 'Algebra', weight: 0.0208333333333333 },
  { id: 'english', name: 'English', weight: 0.0208333333333333 },
  { id: 'algDat', name: 'Algorithmen und Datenstrukturen', weight: 0.0208333333333333 },
  { id: 'ti', name: 'Theoretische Informatik, Automaten und formale Sprachen', weight: 0.0208333333333333 },
  { id: 'swea', name: 'Software Engineering - Analysis', weight: 0 },
  { id: 'db', name: 'Databases', weight: 0.0277777777777778 },
  { id: 'compnet', name: 'Computer Networks', weight: 0.0277777777777778 },
  { id: 'ops', name: 'Operating Systems', weight: 0.0277777777777778 },
  { id: 'c_cpp', name: 'Einführung in die Programmierung mit C und Objektorientierte Programmierung Grundlagen', weight: 0.0625 },
  { id: 'swed', name: 'Software Engineering - Design', weight: 0.0347222222222222 },
  { id: 'rts', name: 'Real-Time Systems', weight: 0.0347222222222222 },
  { id: 'itSec', name: 'IT Security', weight: 0.0347222222222222 },
  { id: 'pcna', name: 'Practical Computer Networks and Applications', weight: 0 },
  { id: 'analysis', name: 'Analysis', weight: 0.0208333333333333 },
  { id: 'stat', name: 'Statistics', weight: 0.0277777777777778 },
  { id: 'oop_java', name: 'Object-oriented Programming in Java - Advanced Course', weight: 0.0277777777777778 },
  { id: 'rd', name: 'Recht und Datenschutz', weight: 0.0347222222222222 },
  { id: 'aktuelleThemen', name: 'Aktuelle Themen der Informatik', weight: 0.0347222222222222 },
  { id: 'wp', name: 'Wahlpflicht', weight: 0.0347222222222222 },
  { id: 'studiumGenerale', name: 'Interdisziplinäres Studium Generale', weight: 0.0277777777777778 },
  { id: 'einf', name: 'Einführung in die Informatik', weight: 0.0208333333333333 },
  { id: 'bwl', name: 'Betriebswirtschaftslehre', weight: 0.0208333333333333 },
  { id: 'disMa', name: 'Diskrete Mathematik', weight: 0.0208333333333333 },
  { id: 'ra', name: 'Rechnerarchitekturen', weight: 0.0208333333333333 },
  { id: 'disSys', name: 'Distributed Systems', weight: 0.0347222222222222 },
  { id: 'progEx', name: 'Programming Exercises', weight: 0.0347222222222222 },
  { id: 'infoProjekt', name: 'Informatik Projekt', weight: 0.0833333333333333 }
];


function App() {
  const [grades, setGrades] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrades({ ...grades, [name]: value });
    console.log(calculateMean());
  };
  
  const calculateMean = () => {
    let totalWeightedGrade = 0;
    let totalWeight = 0;

    for (const moduleId in grades) {
      const grade = parseFloat(grades[moduleId]);
      const module = modules.find((m) => m.id === moduleId);

      if (grade && module) {
        totalWeightedGrade += grade * module.weight;
        totalWeight += module.weight;
      }
    }

    const mean = totalWeightedGrade / totalWeight;
    return mean;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(grades);
    alert('Grades submitted! Check the console for details.');
  };

  return (
    <div className="container">
      <h1>Grade Entry Form</h1>
      <form onSubmit={handleSubmit}>
        {modules.map((module) => (
          <div className="module" key={module.id}>
            <label htmlFor={module.id}>{module.name}:</label>
            <input
              type="text"
              id={module.id}
              name={module.id}
              value={grades[module.id] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit Grades</button>
      </form>
    </div>
  );
}

export default App;
