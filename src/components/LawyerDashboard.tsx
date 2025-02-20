import { useState } from "react";
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sampleCases } from '../data';

interface AnalyzedDocument {
  id: string;
  caseName: string;
  fileName: string;
  classification: string;
  detailedAnalysis?: {
    similarCases: string[];
    relevantStatutes: string[];
  };
}

const initialDocument: AnalyzedDocument = {
  id: 'initial-doc',
  caseName: "Smith vs Johnson Property Dispute",
  fileName: "initial_document.pdf",
  classification: "Property Law",
  detailedAnalysis: {
    similarCases: [
      "Thompson vs State (2023)",
      "Williams vs Davis (2022)"
    ],
    relevantStatutes: [
      "Civil Code Section 1542",
      "Property Rights Act Section 23"
    ]
  }
};

export default function LawyerDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caseName, setCaseName] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzedDocuments, setAnalyzedDocuments] = useState<AnalyzedDocument[]>([initialDocument]);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAnalyzing(true);
      // Simulate initial classification
      setTimeout(() => {
        const newDoc: AnalyzedDocument = {
          id: Math.random().toString(36).substr(2, 9),
          caseName: caseName || "Unnamed Case",
          fileName: file.name,
          classification: "Property Law"
        };
        setAnalyzedDocuments(prev => [...prev, newDoc]);
        setAnalyzing(false);
        setSelectedFile(null);
        setCaseName(''); // Clear the case name input
      }, 2000);
    }
  };

  const performDetailedAnalysis = (docId: string) => {
    setAnalyzedDocuments(prev => prev.map(doc => {
      if (doc.id === docId) {
        return {
          ...doc,
          detailedAnalysis: {
            similarCases: [
              "Thompson vs State (2023)",
              "Williams vs Davis (2022)"
            ],
            relevantStatutes: [
              "Civil Code Section 1542",
              "Property Rights Act Section 23"
            ]
          }
        };
      }
      return doc;
    }));
    setSelectedDocumentId(docId);
    navigate(`/detailed-analysis/${docId}`);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Grid Layout for Cases and Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Active Cases</h2>
          <div className="space-y-4">
            {sampleCases.map((case_) => (
              <div
                key={case_.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="font-semibold">{case_.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Next Hearing: {case_.nextHearing || 'Not Scheduled'}
                </p>
                <div className="mt-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      case_.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {case_.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Document Analysis</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Case Name
              </label>
              <input
                type="text"
                value={caseName}
                onChange={(e) => setCaseName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter case name"
              />
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload size={40} className="text-gray-400 mb-2" />
                <span className="text-gray-600">
                  {selectedFile
                    ? selectedFile.name
                    : 'Drop files here or click to upload'}
                </span>
              </label>
            </div>

            {analyzing && (
              <div className="mt-4 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Analyzing document...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Analyzed Documents Table Section */}
      {analyzedDocuments.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Analyzed Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Case Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Classification
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analyzedDocuments.map((doc) => (
                  <tr key={doc.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {doc.caseName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {doc.fileName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {doc.classification}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {!doc.detailedAnalysis ? (
                        <button
                          onClick={() => performDetailedAnalysis(doc.id)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Perform AI Analysis
                        </button>
                      ) : (
                        <button
                          onClick={() => setSelectedDocumentId(doc.id)}
                          className="text-green-600 hover:text-green-800 font-medium"
                        >
                          View Analysis
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedDocumentId && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">Detailed Analysis</h3>
                <button
                  onClick={() => setSelectedDocumentId(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {analyzedDocuments.find(d => d.id === selectedDocumentId)?.detailedAnalysis && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Similar Cases</h4>
                    <ul className="list-disc pl-4 text-gray-600 space-y-1">
                      {analyzedDocuments
                        .find(d => d.id === selectedDocumentId)
                        ?.detailedAnalysis?.similarCases.map((case_, index) => (
                          <li key={index}>{case_}</li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Relevant Statutes</h4>
                    <ul className="list-disc pl-4 text-gray-600 space-y-1">
                      {analyzedDocuments
                        .find(d => d.id === selectedDocumentId)
                        ?.detailedAnalysis?.relevantStatutes.map((statute, index) => (
                          <li key={index}>{statute}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}