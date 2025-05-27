import {
  LayoutDashboard,
  ClipboardList,
  Folder,
  FileText,
  PhoneCall,
  History,
} from "lucide-react";

export const navLinks = {
  general: [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Reports", icon: ClipboardList },
    { name: "Documents", icon: FileText },
    { name: "Resources", icon: Folder },
    { name: "Patients", icon: ClipboardList },
  ],
  tools: [
    { name: "History", icon: History },
    { name: "Support", icon: PhoneCall },
  ],
};
