import { LayoutDashboard, ClipboardList, Folder, FileText } from "lucide-react";

export const navLinks = {
  general: [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Reports", icon: ClipboardList },
    { name: "Documents", icon: FileText },
  ],
  tools: [
    { name: "Resources", icon: Folder },
    { name: "Patients", icon: ClipboardList },
  ],
};
