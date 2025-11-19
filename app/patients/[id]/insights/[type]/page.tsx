"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import InsightCard from "@/src/components/InsightCard";
import PatientDataPanel from "@/src/components/PatientDataPanel";
import patientsData from "@/src/mock/patients.json";
import { Patient } from "@/src/types/patient";
import { PatientData } from "@/src/types/patient-data";
import { InsightResult, InsightType } from "@/src/types/insight";

// Import all insights and patient data statically
import p1Discharge from "@/src/mock/insights/p1.discharge.json";
import p1Deterioration from "@/src/mock/insights/p1.deterioration.json";
import p1Medication from "@/src/mock/insights/p1.medication.json";
import p2Discharge from "@/src/mock/insights/p2.discharge.json";
import p2Deterioration from "@/src/mock/insights/p2.deterioration.json";
import p1Data from "@/src/mock/patient-data/p1.json";
import p2Data from "@/src/mock/patient-data/p2.json";

const insightsMap: Record<string, Record<string, InsightResult>> = {
  p1: {
    discharge: p1Discharge as InsightResult,
    deterioration: p1Deterioration as InsightResult,
    medication: p1Medication as InsightResult,
  },
  p2: {
    discharge: p2Discharge as InsightResult,
    deterioration: p2Deterioration as InsightResult,
  },
};

const patientDataMap: Record<string, PatientData> = {
  p1: p1Data as PatientData,
  p2: p2Data as PatientData,
};

export default function InsightPage() {
  const params = useParams();
  const id = params.id as string;
  const type = params.type as InsightType;

  const [showData, setShowData] = useState(false);

  const patients = patientsData as Patient[];
  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    notFound();
  }

  const insight = insightsMap[id]?.[type];
  const patientData = patientDataMap[id];

  if (!insight) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-slate-200/50 max-w-md mx-auto">
          <div className="w-16 h-16 bg-linear-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Insight Not Available
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            This insight is not configured for this patient.
          </p>
          <Link
            href={`/patients/${id}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Patient Overview
          </Link>
        </div>
      </div>
    );
  }

  const getTypeLabel = (type: InsightType) => {
    switch (type) {
      case "discharge":
        return "Discharge & Readmission";
      case "deterioration":
        return "Clinical Trajectory";
      case "medication":
        return "Medication & Safety";
      case "readmission":
        return "Readmission Risk";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-4">
          <Link
            href="/dashboard"
            className="hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Patients
          </Link>
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <Link
            href={`/patients/${id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {patient.name}
          </Link>
          <svg
            className="w-4 h-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-slate-900">{getTypeLabel(type)}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
            <svg
              className="w-7 h-7 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {patient.name}
            </h1>
            <p className="text-base text-slate-600 mt-1 font-semibold">
              {getTypeLabel(type)}
            </p>
          </div>
        </div>
      </div>

      {/* Insight Card */}
      <InsightCard insight={insight} />

      {/* Toggle Data View */}
      <div>
        <button
          onClick={() => setShowData(!showData)}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              showData ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>{showData ? "Hide" : "View"} data used</span>
          {showData && (
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
              {insight.usedDataKeys.length}
            </span>
          )}
        </button>
      </div>

      {/* Patient Data Panel */}
      {showData && patientData && (
        <PatientDataPanel data={patientData} usedKeys={insight.usedDataKeys} />
      )}

      {/* Back Button */}
      <div className="pt-4">
        <Link
          href={`/patients/${id}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-blue-600 hover:text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Patient Overview
        </Link>
      </div>
    </div>
  );
}
