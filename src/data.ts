import { Case } from './types';

export const sampleCases: Case[] = [
  {
    id: "0x1a2b3c4d",
    title: "Smith vs Johnson Property Dispute",
    status: "Active",
    type: "Civil",
    filingDate: "2024-02-15",
    nextHearing: "2024-03-25",
    description: "Dispute over property boundaries and easement rights",
    parties: {
      plaintiff: "John Smith",
      defendant: "Robert Johnson"
    },
    hearings: [
      {
        id: "h1",
        date: "2024-02-20",
        judge: "Hon. Sarah Williams",
        outcome: "Initial hearing completed. Evidence submission deadline set."
      }
    ],
    documents: [
      {
        id: "d1",
        name: "Property Deed.pdf",
        type: "PDF",
        uploadedAt: "2024-02-15",
        uploadedBy: "John Smith",
        status: "Analyzed",
        aiAnalysis: {
          classification: "Property Law",
          similarCases: [
            "Davis vs Wilson (2023)",
            "Thompson vs Brown (2022)"
          ],
          relevantStatutes: [
            "Property Law Act Section 45",
            "Easement Rights Regulation 12"
          ]
        }
      }
    ]
  },
  {
    id: "0x4e5f6g7h",
    title: "State vs Anderson",
    status: "Pending",
    type: "Criminal",
    filingDate: "2024-03-01",
    description: "Criminal case regarding cyber fraud allegations",
    parties: {
      plaintiff: "State",
      defendant: "James Anderson"
    },
    hearings: [],
    documents: [
      {
        id: "d2",
        name: "Investigation Report.pdf",
        type: "PDF",
        uploadedAt: "2024-03-01",
        uploadedBy: "Prosecutor Office",
        status: "Pending"
      }
    ]
  }
];