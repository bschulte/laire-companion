interface IDescription {
  type: string;
  headers?: string[];
  rows?: string[][];
  footers?: string[];
  content?: string; 
  items?: string[];
}

export type Description = string | IDescription[]

export interface Rule {
  name: string;
  content: Description;
  section: string;
  subsection?: string;
  tags: string[];
}
