import React, { useState } from "react";
import { FileText, Download, Eye, Search, Filter, Plus } from "lucide-react";
import "../styles/Documents.css";

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "Patient Medical Record - John Doe",
      type: "Medical Record",
      date: "2024-01-15",
      size: "2.4 MB",
      status: "Active",
    },
    {
      id: 2,
      name: "Lab Results - Blood Test",
      type: "Lab Report",
      date: "2024-01-14",
      size: "1.8 MB",
      status: "Active",
    },
    {
      id: 3,
      name: "Prescription - Antibiotics",
      type: "Prescription",
      date: "2024-01-13",
      size: "0.5 MB",
      status: "Active",
    },
    {
      id: 4,
      name: "Insurance Claim Form",
      type: "Insurance",
      date: "2024-01-12",
      size: "3.2 MB",
      status: "Pending",
    },
    {
      id: 5,
      name: "X-Ray Report - Chest",
      type: "Imaging",
      date: "2024-01-11",
      size: "5.1 MB",
      status: "Active",
    },
    {
      id: 6,
      name: "Consent Form - Surgery",
      type: "Consent",
      date: "2024-01-10",
      size: "1.2 MB",
      status: "Signed",
    },
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="documents-container">
      <div className="documents-header">
        <div className="header-content">
          <h1>Documents</h1>
          <p>Manage and organize patient documents and medical records</p>
        </div>
        <button className="add-document-btn">
          <Plus size={20} />
          Add Document
        </button>
      </div>

      <div className="documents-controls">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="filter-btn">
          <Filter size={20} />
          Filter
        </button>
      </div>

      <div className="documents-stats">
        <div className="stat-card">
          <h3>Total Documents</h3>
          <p className="stat-number">{documents.length}</p>
        </div>
        <div className="stat-card">
          <h3>Active Records</h3>
          <p className="stat-number">
            {documents.filter((doc) => doc.status === "Active").length}
          </p>
        </div>
        <div className="stat-card">
          <h3>Pending Review</h3>
          <p className="stat-number">
            {documents.filter((doc) => doc.status === "Pending").length}
          </p>
        </div>
      </div>

      <div className="documents-table">
        <div className="table-header">
          <div className="header-cell">Document Name</div>
          <div className="header-cell">Type</div>
          <div className="header-cell">Date</div>
          <div className="header-cell">Size</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Actions</div>
        </div>
        <div className="table-body">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="table-row">
              <div className="cell document-name">
                <FileText size={16} />
                {doc.name}
              </div>
              <div className="cell">{doc.type}</div>
              <div className="cell">{doc.date}</div>
              <div className="cell">{doc.size}</div>
              <div className="cell">
                <span className={`status-badge ${doc.status.toLowerCase()}`}>
                  {doc.status}
                </span>
              </div>
              <div className="cell actions">
                <button className="action-btn" title="View">
                  <Eye size={16} />
                </button>
                <button className="action-btn" title="Download">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents; 