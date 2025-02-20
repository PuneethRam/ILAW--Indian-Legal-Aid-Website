import { Gavel, UserCircle, Scale } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const tabs = [
    { id: 'courtroom', name: 'Digital Courtroom', icon: Gavel },
    { id: 'lawyer', name: 'Lawyer Dashboard', icon: Scale },
    { id: 'user', name: 'User Dashboard', icon: UserCircle },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-white text-xl font-bold mb-8">ILAW </h1>
        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}