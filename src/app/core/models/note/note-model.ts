
export interface Note {
  id: number;
  title: string;
  content: string;
  priority: Priority;
  createdAt: Date;
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}