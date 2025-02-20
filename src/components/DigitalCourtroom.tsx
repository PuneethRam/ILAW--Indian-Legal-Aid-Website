import { useState} from "react";
import { Calendar, FileText, Clock } from 'lucide-react';
import { Case } from '../types';
import { sampleCases } from '../data';

export default function DigitalCourtroom() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Case Registry</h2>
        <div className="grid gap-4">
          {sampleCases.map((case_) => (
            <div
              key={case_.id}
              onClick={() => setSelectedCase(case_)}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{case_.title}</h3>
                  <p className="text-gray-600">ID: {case_.id}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    case_.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : case_.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {case_.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedCase.title}</h2>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Calendar className="mr-2" size={20} /> Case Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Filing Date</p>
                      <p>{selectedCase.filingDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Type</p>
                      <p>{selectedCase.type}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="mr-2" size={20} /> Hearings
                  </h3>
                  {selectedCase.hearings.map((hearing) => (
                    <div
                      key={hearing.id}
                      className="bg-gray-50 p-3 rounded-lg mb-2"
                    >
                      <p className="font-medium">{hearing.date}</p>
                      <p className="text-gray-600">{hearing.judge}</p>
                      <p className="text-sm mt-1">{hearing.outcome}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <FileText className="mr-2" size={20} /> Documents
                  </h3>
                  {selectedCase.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-gray-50 p-3 rounded-lg mb-2"
                    >
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-600">
                        Uploaded by {doc.uploadedBy} on {doc.uploadedAt}
                      </p>
                      {doc.aiAnalysis && (
                        <div className="mt-2 text-sm">
                          <p className="text-blue-600">AI Analysis Available</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}