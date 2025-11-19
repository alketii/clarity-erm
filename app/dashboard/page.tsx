"use client";

import { useState } from "react";
import PatientSearchBar from "@/src/components/PatientSearchBar";
import PatientList from "@/src/components/PatientList";
import patientsData from "@/src/mock/patients.json";
import { Patient } from "@/src/types/patient";

export default function DashboardPage() {
  const [query, setQuery] = useState("");
  const patients = patientsData as Patient[];

  const filteredPatients = patients.filter((patient) => {
    const searchTerm = query.toLowerCase();
    return (
      patient.name.toLowerCase().includes(searchTerm) ||
      patient.mrn.includes(searchTerm) ||
      patient.dob.includes(searchTerm)
    );
  });

  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200/50">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Patient Search
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Find and evaluate patient clinical data
            </p>
          </div>
        </div>
      </div>
      <PatientSearchBar query={query} onChange={setQuery} />
      <PatientList patients={filteredPatients} />
    </div>
  );
}
