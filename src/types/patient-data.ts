export interface PatientData {
  vitals: {
    hr: number[];
    bp: string[];
    temp: number[];
  };
  labs: {
    wbc: number;
    creatinine: number;
    hgb: number;
    [key: string]: number;
  };
  notes: string[];
  medications: string[];
}
