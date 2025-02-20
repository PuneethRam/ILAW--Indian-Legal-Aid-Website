export interface Case {
  id: string;
  title: string;
  status: 'Pending' | 'Active' | 'Resolved';
  type: 'Civil' | 'Criminal' | 'Business';
  filingDate: string;
  nextHearing?: string;
  description: string;
  parties: {
    plaintiff: string;
    defendant: string;
  };
  hearings: Hearing[];
  documents: Document[];
}

export interface Hearing {
  id: string;
  date: string;
  judge: string;
  outcome: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: string;
  uploadedBy: string;
  status: 'Pending' | 'Analyzed';
  aiAnalysis?: {
    classification: string;
    similarCases: string[];
    relevantStatutes: string[];
  };
}