import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Website",
      technology: "React + Tailwind",
      status: "Completed",
    },
    {
      id: 2,
      name: "Portfolio Website",
      technology: "React",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Weather App",
      technology: "JavaScript API",
      status: "Completed",
    },
    {
      id: 4,
      name: "Dashboard UI",
      technology: "React + Bootstrap",
      status: "Completed",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        My Portfolio
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Project Name</th>
              <th className="px-4 py-3 border">Technology</th>
              <th className="px-4 py-3 border">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="text-center hover:bg-gray-100"
              >
                <td className="px-4 py-3 border">{project.id}</td>
                <td className="px-4 py-3 border">{project.name}</td>
                <td className="px-4 py-3 border">{project.technology}</td>
                <td className="px-4 py-3 border">{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;