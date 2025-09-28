db = db.getSiblingDB('devopsstudy');
db.createCollection('studies');
db.studies.insertMany([
  { title: "Docker Basics", content: "Learn how to build, run, and manage containers." },
  { title: "Kubernetes Basics", content: "Understand pods, deployments, and services." },
  { title: "CI/CD with Jenkins", content: "Automate builds and deployments." }
]);
