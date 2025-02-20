import { useState } from "react";
import { MessageSquare } from 'lucide-react';

interface FiledCase {
  id: string;
  title: string;
  type: string;
  description: string;
  filingDate: string;
  documents: { name: string; date: string }[];
  hearings: { date: string; details: string }[];
}

export default function UserDashboard() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const [filing, setFiling] = useState({
    title: '',
    type: '',
    description: '',
  });
  const [filedCases, setFiledCases] = useState<FiledCase[]>([]);
  const [selectedCase, setSelectedCase] = useState<FiledCase | null>(null);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { role: 'user', content: message }]);

    // Simulate AI response
    setTimeout(() => {
      let response = "I apologize, but I need more specific information to assist you properly.";
      
      if (message.toLowerCase().includes('property dispute')) {
        response = "For a property dispute case, you'll need:\n1. Property Deed\n2. Survey Records\n3. Tax Records\n4. Any correspondence with the other party\n5. Photographs or videos of the disputed area";
      } else if (message.toLowerCase().includes('documents')) {
        response = "Generally required documents include:\n1. Government ID\n2. Proof of Address\n3. Any relevant contracts or agreements\n4. Evidence supporting your claim\n5. Timeline of events";
      } else if (message.toLowerCase().includes('hi')) {
        response = "Hi";
      }

      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);

    setMessage('');
  };

  const handleFilingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCase: FiledCase = {
      id: `CASE-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      title: filing.title,
      type: filing.type,
      description: filing.description,
      filingDate: new Date().toISOString().split('T')[0],
      documents: [],
      hearings: []
    };
    setTimeout(() => {
      setFiledCases(prev => [...prev, newCase]);
      setFiling({ title: '', type: '', description: '' });
      alert(`Case filed successfully!\nCase ID: ${newCase.id}`);
    }, 5000); // 5-second delay
  };

  if (selectedCase) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Case Status</h2>
            <button
              onClick={() => setSelectedCase(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Back to Dashboard
            </button>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Case Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Case ID</p>
                  <p className="font-medium">{selectedCase.id}</p>
                </div>
                <div>
                  <p className="text-gray-600">Filing Date</p>
                  <p className="font-medium">{selectedCase.filingDate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Case Type</p>
                  <p className="font-medium">{selectedCase.type}</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-medium">Under Review</p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Case Description</h3>
              <p className="text-gray-700">{selectedCase.description}</p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Hearings</h3>
              {selectedCase.hearings.length === 0 ? (
                <p className="text-gray-600">No hearings scheduled yet</p>
              ) : (
                <div className="space-y-2">
                  {selectedCase.hearings.map((hearing, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <p className="font-medium">{hearing.date}</p>
                      <p className="text-gray-600">{hearing.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Documents</h3>
              {selectedCase.documents.length === 0 ? (
                <p className="text-gray-600">No documents uploaded yet</p>
              ) : (
                <div className="space-y-2">
                  {selectedCase.documents.map((doc, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-gray-600">Uploaded on {doc.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">File New Case</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleFilingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Title
                </label>
                <input
                  type="text"
                  value={filing.title}
                  onChange={(e) => setFiling({ ...filing, title: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Type
                </label>
                <select
                  value={filing.type}
                  onChange={(e) => setFiling({ ...filing, type: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select type...</option>
                  <option value="Civil">Civil</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Family">Family</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Description
                </label>
                <textarea
                  value={filing.description}
                  onChange={(e) => setFiling({ ...filing, description: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                File Case
              </button>
            </form>
          </div>
        </div>

        {filedCases.length > 0 && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold">Filed Cases</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Case Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Case Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filedCases.map((case_, index) => (
                    <tr key={case_.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {case_.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                       {case_.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedCase(case_)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Check Status
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Legal Assistant</h2>
        <div className="bg-white rounded-lg shadow-md p-6 h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about legal procedures..."
              className="flex-1 p-2 border rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <MessageSquare size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}