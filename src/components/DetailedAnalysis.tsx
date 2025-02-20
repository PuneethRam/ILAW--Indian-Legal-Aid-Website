import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hammer, Hourglass } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import Sidebar from './Sidebar';
import 'chart.js/auto';

const DetailedAnalysis: React.FC = () => {
  const { docId } = useParams<{ docId: string }>();
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [activeTab, setActiveTab] = useState('detailed-analysis');

  const barData = {
    labels: ['Case 1', 'Case 2', 'Case 3', 'Case 4', 'Case 5', 'Case 6', 'Case 7', 'Case 8', 'Case 9', 'Case 10'],
    datasets: [{
      label: 'Similarity',
      data: [85, 90, 95, 80, 88, 92, 87, 93, 89, 91],
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
      ],
      barThickness: 2, // Set bar thickness to make it appear like a line
    }]
  };

  const barOptions = {
    indexAxis: 'y' as const, // Make the bars horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
    maintainAspectRatio: false, // Allow the chart to take the full width of its container
    plugins: {
      legend: {
        display: false, // Remove the legend
      },
    },
  };

  const handleButtonClick1 = () => {
    setShowModal1(true);
  };

  const handleButtonClick2 = () => {
    setShowModal2(true);
  };

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const renderTable1 = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Show Similar Cases</h2>
            <button onClick={closeModal1} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statute Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statute Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statutes Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTable2 = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Show Relevant Statutes</h2>
            <button onClick={closeModal2} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statute Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statute Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statutes Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S144</td>
                <td className="px-6 py-4 whitespace-nowrap">Prosecution of Judges and Public servants</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S128</td>
                <td className="px-6 py-4 whitespace-nowrap">RProtection of Tenant against eviction </td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S170</td>
                <td className="px-6 py-4 whitespace-nowrap">Order for maintainence of wives,children and parents</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S104</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S179</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S057</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S109</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S140</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S164</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S146</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-6 space-y-8 ml-64">
        <h2 className="text-2xl font-bold mb-4">Detailed Analysis for Document ID: {docId}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Petition Acceptance Rate</h3>
              <Hammer size={40} className="text-gray-400 mb-2" />
              <p className="text-2xl font-bold">{Math.floor(Math.random() * 100) + 1}%</p>
            </div>
            <button onClick={handleButtonClick1} className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-colors">
              Show Table 1
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Predicted Timeline</h3>
              <Hourglass size={40} className="text-gray-400 mb-2" />
              <p className="text-2xl font-bold">{Math.floor(Math.random() * 100) + 1} days</p>
            </div>
            <button onClick={handleButtonClick2} className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-colors">
              Show Table 2
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md h-72 w-full">
          <h3 className="text-xl font-semibold mb-2">Case Similarity</h3>
          <div style={{ width: '100%', height: '100%' }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        {showModal1 && renderTable1()}
        {showModal2 && renderTable2()}
      </main>
    </div>
  );
};

export default DetailedAnalysis;