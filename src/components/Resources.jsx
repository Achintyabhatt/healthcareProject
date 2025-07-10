import React, { useState } from "react";
import { BookOpen, Video, FileText, ExternalLink, Search, Filter } from "lucide-react";
import "../styles/Resources.css";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Guidelines", "Educational", "Videos", "Forms", "Policies"];

  const resources = [
    {
      id: 1,
      title: "COVID-19 Treatment Guidelines",
      category: "Guidelines",
      type: "PDF",
      size: "2.1 MB",
      date: "2024-01-15",
      description: "Latest treatment protocols for COVID-19 patients",
      icon: FileText,
    },
    {
      id: 2,
      title: "Patient Care Best Practices",
      category: "Educational",
      type: "Video",
      duration: "15:30",
      date: "2024-01-14",
      description: "Comprehensive guide to patient care procedures",
      icon: Video,
    },
    {
      id: 3,
      title: "Medical Equipment Manual",
      category: "Educational",
      type: "PDF",
      size: "4.5 MB",
      date: "2024-01-13",
      description: "Complete guide to medical equipment operation",
      icon: BookOpen,
    },
    {
      id: 4,
      title: "Emergency Response Protocol",
      category: "Guidelines",
      type: "PDF",
      size: "1.8 MB",
      date: "2024-01-12",
      description: "Emergency procedures and response guidelines",
      icon: FileText,
    },
    {
      id: 5,
      title: "Patient Consent Forms",
      category: "Forms",
      type: "PDF",
      size: "0.8 MB",
      date: "2024-01-11",
      description: "Standard patient consent form templates",
      icon: FileText,
    },
    {
      id: 6,
      title: "Healthcare Policy Updates",
      category: "Policies",
      type: "PDF",
      size: "3.2 MB",
      date: "2024-01-10",
      description: "Updated healthcare policies and procedures",
      icon: FileText,
    },
    {
      id: 7,
      title: "Surgical Procedures Training",
      category: "Educational",
      type: "Video",
      duration: "45:20",
      date: "2024-01-09",
      description: "Training video for common surgical procedures",
      icon: Video,
    },
    {
      id: 8,
      title: "Medication Safety Guidelines",
      category: "Guidelines",
      type: "PDF",
      size: "1.5 MB",
      date: "2024-01-08",
      description: "Safety protocols for medication administration",
      icon: FileText,
    },
  ];

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="resources-container">
      <div className="resources-header">
        <div className="header-content">
          <h1>Resources</h1>
          <p>Access healthcare guidelines, educational materials, and important documents</p>
        </div>
      </div>

      <div className="resources-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search resources..."
            className="search-input"
          />
        </div>
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="resources-stats">
        <div className="stat-card">
          <h3>Total Resources</h3>
          <p className="stat-number">{resources.length}</p>
        </div>
        <div className="stat-card">
          <h3>Guidelines</h3>
          <p className="stat-number">
            {resources.filter((r) => r.category === "Guidelines").length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Educational</h3>
          <p className="stat-number">
            {resources.filter((r) => r.category === "Educational").length}
          </p>
        </div>
      </div>

      <div className="resources-grid">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">
              <resource.icon size={24} />
            </div>
            <div className="resource-content">
              <div className="resource-header">
                <h3>{resource.title}</h3>
                <span className={`category-badge ${resource.category.toLowerCase()}`}>
                  {resource.category}
                </span>
              </div>
              <p className="resource-description">{resource.description}</p>
              <div className="resource-meta">
                <span className="resource-type">{resource.type}</span>
                {resource.size && <span className="resource-size">{resource.size}</span>}
                {resource.duration && <span className="resource-duration">{resource.duration}</span>}
                <span className="resource-date">{resource.date}</span>
              </div>
            </div>
            <div className="resource-actions">
              <button className="action-btn" title="View">
                <ExternalLink size={16} />
              </button>
              <button className="action-btn" title="Download">
                <FileText size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources; 