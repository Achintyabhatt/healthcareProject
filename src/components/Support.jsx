import React, { useState } from "react";
import { Phone, Mail, MessageCircle, HelpCircle, FileText, Clock, User } from "lucide-react";
import "../styles/Support.css";

const Support = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const supportContacts = [
    {
      id: 1,
      name: "Technical Support",
      phone: "+1 (555) 123-4567",
      email: "tech.support@healthcare.com",
      hours: "24/7",
      description: "For system issues and technical problems",
    },
    {
      id: 2,
      name: "Medical Support",
      phone: "+1 (555) 234-5678",
      email: "medical.support@healthcare.com",
      hours: "Mon-Fri 8AM-6PM",
      description: "For medical record and patient care issues",
    },
    {
      id: 3,
      name: "Administrative Support",
      phone: "+1 (555) 345-6789",
      email: "admin.support@healthcare.com",
      hours: "Mon-Fri 9AM-5PM",
      description: "For billing, insurance, and administrative questions",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You'll receive a reset link via email.",
    },
    {
      id: 2,
      question: "How do I add a new patient?",
      answer: "Navigate to the Patients section and click the 'Add Patient' button. Fill in the required information and save the record.",
    },
    {
      id: 3,
      question: "Can I export patient data?",
      answer: "Yes, you can export patient data in various formats (PDF, CSV) from the patient details page using the export options.",
    },
    {
      id: 4,
      question: "How do I schedule an appointment?",
      answer: "Go to the Calendar section and click on the desired time slot. Fill in the appointment details and save.",
    },
    {
      id: 5,
      question: "What should I do if the system is slow?",
      answer: "Try refreshing the page first. If the issue persists, contact technical support with details about your browser and the specific issue.",
    },
  ];

  const supportTickets = [
    {
      id: 1,
      title: "System Login Issue",
      status: "Open",
      priority: "High",
      created: "2024-01-15",
      assigned: "Tech Support",
    },
    {
      id: 2,
      title: "Patient Record Update Error",
      status: "In Progress",
      priority: "Medium",
      created: "2024-01-14",
      assigned: "Medical Support",
    },
    {
      id: 3,
      title: "Report Generation Problem",
      status: "Resolved",
      priority: "Low",
      created: "2024-01-13",
      assigned: "Tech Support",
    },
  ];

  return (
    <div className="support-container">
      <div className="support-header">
        <div className="header-content">
          <h1>Support & Help</h1>
          <p>Get help with system issues and find answers to common questions</p>
        </div>
      </div>

      <div className="support-tabs">
        <button
          className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          <Phone size={20} />
          Contact Support
        </button>
        <button
          className={`tab-btn ${activeTab === "faq" ? "active" : ""}`}
          onClick={() => setActiveTab("faq")}
        >
          <HelpCircle size={20} />
          FAQ
        </button>
        <button
          className={`tab-btn ${activeTab === "tickets" ? "active" : ""}`}
          onClick={() => setActiveTab("tickets")}
        >
          <MessageCircle size={20} />
          Support Tickets
        </button>
      </div>

      {activeTab === "contact" && (
        <div className="contact-section">
          <div className="contact-grid">
            {supportContacts.map((contact) => (
              <div key={contact.id} className="contact-card">
                <div className="contact-header">
                  <h3>{contact.name}</h3>
                  <span className="hours">{contact.hours}</span>
                </div>
                <p className="contact-description">{contact.description}</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{contact.email}</span>
                  </div>
                </div>
                <button className="contact-btn">Contact Now</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "faq" && (
        <div className="faq-section">
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <HelpCircle size={20} />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "tickets" && (
        <div className="tickets-section">
          <div className="tickets-header">
            <h2>Support Tickets</h2>
            <button className="new-ticket-btn">
              <MessageCircle size={20} />
              New Ticket
            </button>
          </div>
          <div className="tickets-table">
            <div className="table-header">
              <div className="header-cell">Ticket</div>
              <div className="header-cell">Status</div>
              <div className="header-cell">Priority</div>
              <div className="header-cell">Created</div>
              <div className="header-cell">Assigned</div>
            </div>
            <div className="table-body">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="table-row">
                  <div className="cell ticket-title">{ticket.title}</div>
                  <div className="cell">
                    <span className={`status-badge ${ticket.status.toLowerCase()}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="cell">
                    <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <div className="cell">{ticket.created}</div>
                  <div className="cell">{ticket.assigned}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="quick-help">
        <h2>Quick Help</h2>
        <div className="help-grid">
          <div className="help-card">
            <FileText size={24} />
            <h3>User Manual</h3>
            <p>Download the complete user manual</p>
            <button className="help-btn">Download</button>
          </div>
          <div className="help-card">
            <Clock size={24} />
            <h3>System Status</h3>
            <p>Check current system status</p>
            <button className="help-btn">Check Status</button>
          </div>
          <div className="help-card">
            <User size={24} />
            <h3>Training Videos</h3>
            <p>Watch training videos and tutorials</p>
            <button className="help-btn">Watch Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 