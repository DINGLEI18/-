export type SignalLevel = 'red' | 'yellow' | 'green';

export interface EnterpriseUpdate {
  id: string;
  companyName: string;
  level: SignalLevel;
  category: string;
  content: string;
  analysis: string;
  actionSuggestion: string;
  tags: string[];
}
