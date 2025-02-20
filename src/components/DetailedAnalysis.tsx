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
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Description</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Status</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judgement Issued By</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 122</td>
      <td className="px-6 py-4 whitespace-nowrap">A legal dispute over the ownership of a piece of property, involving multiple claimants and complex historical records.</td>
      <td className="px-6 py-4 whitespace-nowrap">Pending</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 219</td>
      <td className="px-6 py-4 whitespace-nowrap">A breach of contract case where one party failed to fulfill their obligations as per the agreement, leading to financial losses for the other party.</td>
      <td className="px-6 py-4 whitespace-nowrap">Resolved</td>
      <td className="px-6 py-4 whitespace-nowrap">Supreme Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 139</td>
      <td className="px-6 py-4 whitespace-nowrap">A custody battle between divorced parents over the legal and physical custody of their minor children.</td>
      <td className="px-6 py-4 whitespace-nowrap">Ongoing</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 34</td>
      <td className="px-6 py-4 whitespace-nowrap">An employment dispute involving allegations of wrongful termination and claims for compensation and reinstatement.</td>
      <td className="px-6 py-4 whitespace-nowrap">Closed</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 156</td>
      <td className="px-6 py-4 whitespace-nowrap">A personal injury claim where the plaintiff seeks damages for injuries sustained due to the defendant's negligence.</td>
      <td className="px-6 py-4 whitespace-nowrap">Pending</td>
      <td className="px-6 py-4 whitespace-nowrap">Supreme Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 263</td>
      <td className="px-6 py-4 whitespace-nowrap">An intellectual property dispute involving the unauthorized use of copyrighted material, leading to a claim for damages and injunction.</td>
      <td className="px-6 py-4 whitespace-nowrap">Resolved</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 147</td>
      <td className="px-6 py-4 whitespace-nowrap">A fraud investigation case where the defendant is accused of financial fraud and embezzlement, leading to criminal charges.</td>
      <td className="px-6 py-4 whitespace-nowrap">Ongoing</td>
      <td className="px-6 py-4 whitespace-nowrap">Supreme Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 281</td>
      <td className="px-6 py-4 whitespace-nowrap">A defamation suit where the plaintiff claims that false statements made by the defendant have damaged their reputation.</td>
      <td className="px-6 py-4 whitespace-nowrap">Closed</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 149</td>
      <td className="px-6 py-4 whitespace-nowrap">A land dispute involving conflicting claims over the ownership and use of a piece of land, requiring detailed examination of land records.</td>
      <td className="px-6 py-4 whitespace-nowrap">Pending</td>
      <td className="px-6 py-4 whitespace-nowrap">High Court</td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">Case 113</td>
      <td className="px-6 py-4 whitespace-nowrap">A tax evasion case where the defendant is accused of deliberately avoiding paying taxes, leading to legal action and penalties.</td>
      <td className="px-6 py-4 whitespace-nowrap">Resolved</td>
      <td className="px-6 py-4 whitespace-nowrap">Supreme Court</td>
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
            <h2 className="text-2xl font-bold">Relevant Statutes</h2>
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
                <td className="px-6 py-4 whitespace-nowrap">This statute outlines the procedures and conditions under which judges and public servants can be prosecuted for offenses committed during their tenure.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S128</td>
                <td className="px-6 py-4 whitespace-nowrap">RProtection of Tenant against eviction </td>
                <td className="px-6 py-4 whitespace-nowrap">This statute provides legal protection to tenants against unlawful eviction by landlords, ensuring their rights to continue occupying the rented premises under certain conditions.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S170</td>
                <td className="px-6 py-4 whitespace-nowrap">Order for maintainence of wives,children and parents</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute mandates the provision of financial support for wives, children, and parents, ensuring their well-being and maintenance.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S104</td>
                <td className="px-6 py-4 whitespace-nowrap">Report of police officer on completion of investigation</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute requires police officers to submit a detailed report upon the completion of an investigation, summarizing their findings and actions taken.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S179</td>
                <td className="px-6 py-4 whitespace-nowrap">Prosecution of Judges and public servants</td>
                <td className="px-6 py-4 whitespace-nowrap">Similar to S144, this statute also deals with the prosecution of judges and public servants, detailing the legal framework for such actions.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S057</td>
                <td className="px-6 py-4 whitespace-nowrap">Revision</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute allows for the revision of legal decisions and orders, providing a mechanism for correcting errors or reconsidering judgments.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S109</td>
                <td className="px-6 py-4 whitespace-nowrap">Condition of services, etc, to remain unchanged</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute ensures that the conditions of service for employees remain unchanged during certain periods, protecting their employment rights.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S140</td>
                <td className="px-6 py-4 whitespace-nowrap">Notice</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute outlines the requirements for giving notice in various legal contexts, ensuring proper communication and procedural fairness.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S164</td>
                <td className="px-6 py-4 whitespace-nowrap">Evasion of Duty or prohibhitions</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute addresses the evasion of duties or prohibitions, setting penalties for individuals who attempt to circumvent legal obligations.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">S146</td>
                <td className="px-6 py-4 whitespace-nowrap">Incharge of the expenses within the transit</td>
                <td className="px-6 py-4 whitespace-nowrap">This statute specifies who is responsible for covering expenses incurred during transit, ensuring clarity and accountability.</td>
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
              Show Similar Cases
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Predicted Timeline</h3>
              <Hourglass size={40} className="text-gray-400 mb-2" />
              <p className="text-2xl font-bold">{Math.floor(Math.random() * 100) + 1} days</p>
            </div>
            <button onClick={handleButtonClick2} className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition-colors">
              Show Relevant Statutes
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