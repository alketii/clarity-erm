import Link from "next/link";
import { notFound } from "next/navigation";
import patientsData from "@/src/mock/patients.json";
import { Patient } from "@/src/types/patient";
import { PatientData } from "@/src/types/patient-data";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PatientOverviewPage({ params }: Props) {
  const { id } = await params;
  const patients = patientsData as Patient[];
  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    notFound();
  }

  // Load patient data
  let patientData: PatientData | null = null;
  try {
    patientData = await import(`@/src/mock/patient-data/${id}.json`).then(
      (m) => m.default
    );
  } catch (error) {
    console.error("Patient data not found", error);
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Get last values for snapshot
  const lastHR = patientData?.vitals.hr[patientData.vitals.hr.length - 1];
  const lastBP = patientData?.vitals.bp[patientData.vitals.bp.length - 1];
  const lastTemp = patientData?.vitals.temp[patientData.vitals.temp.length - 1];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Patient Header Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
            <svg
              className="w-8 h-8 text-blue-600"
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
            <h2 className="text-3xl font-bold text-slate-900">
              Patient Overview
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Complete clinical profile and evaluation options
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              Name
            </p>
            <p className="text-xl font-bold text-slate-900">{patient.name}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              MRN
            </p>
            <p className="text-xl font-bold text-slate-900">{patient.mrn}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              Date of Birth
            </p>
            <p className="text-xl font-bold text-slate-900">
              {formatDate(patient.dob)}
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              Unit
            </p>
            <p className="text-xl font-bold text-slate-900">{patient.unit}</p>
          </div>
        </div>
      </div>

      {/* Vitals Snapshot */}
      {patientData && (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            Vitals Snapshot
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-bold text-red-700 uppercase tracking-wide">
                  Heart Rate
                </p>
              </div>
              <p className="text-4xl font-bold text-red-900">{lastHR}</p>
              <p className="text-sm text-red-600 font-semibold mt-1">bpm</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <p className="text-sm font-bold text-purple-700 uppercase tracking-wide">
                  Blood Pressure
                </p>
              </div>
              <p className="text-4xl font-bold text-purple-900">{lastBP}</p>
              <p className="text-sm text-purple-600 font-semibold mt-1">mmHg</p>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-bold text-amber-700 uppercase tracking-wide">
                  Temperature
                </p>
              </div>
              <p className="text-4xl font-bold text-amber-900">{lastTemp}</p>
              <p className="text-sm text-amber-600 font-semibold mt-1">°C</p>
            </div>
          </div>
        </div>
      )}

      {/* Insight Selection */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/50">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          What do you want to evaluate?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href={`/patients/${id}/insights/discharge`}
            className="bg-linear-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-200 rounded-2xl p-8 text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-14 h-14 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
              Discharge & Readmission
            </h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Assess discharge readiness and readmission risk
            </p>
          </Link>

          <Link
            href={`/patients/${id}/insights/deterioration`}
            className="bg-linear-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-200 rounded-2xl p-8 text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-14 h-14 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
              Clinical Trajectory
            </h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Evaluate risk of clinical deterioration
            </p>
          </Link>

          <Link
            href={`/patients/${id}/insights/medication`}
            className="bg-linear-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 rounded-2xl p-8 text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-14 h-14 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h4 className="font-bold text-lg text-slate-900 group-hover:text-green-600 transition-colors">
              Medication & Safety
            </h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Review medication safety and interactions
            </p>
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <div>
        <Link
          href="/dashboard"
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
          Back to Patient Search
        </Link>
      </div>
    </div>
  );
}
