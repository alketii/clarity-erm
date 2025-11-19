export type InsightType =
  | "discharge"
  | "readmission"
  | "deterioration"
  | "medication";

export interface InsightResult {
  type: InsightType;
  title: string;
  laceIndex?: number;
  riskLevel: "Low" | "Medium" | "High";
  factors: string[];
  explanation: string;
  usedDataKeys: string[]; // e.g. ["vitals", "labs", "notes", "medications"]
}
