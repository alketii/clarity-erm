export type InsightType =
  | "discharge"
  | "readmission"
  | "deterioration"
  | "medication";

export interface InsightResult {
  type: InsightType;
  title: string;
  laceIndex?: number | null;
  riskLevel: "Low" | "Medium" | "High" | "Unknown";
  factors: string[];
  explanation: string;
  usedDataKeys: string[]; // e.g. ["vitals", "labs", "notes", "medications"]
}
