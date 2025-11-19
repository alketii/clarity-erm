import { PatientData } from "@/src/types/patient-data";

interface PatientDataPanelProps {
  data: PatientData;
  usedKeys: string[];
}

export default function PatientDataPanel({
  data,
  usedKeys,
}: PatientDataPanelProps) {
  return (
    <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 space-y-6 animate-slide-up">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        Data Used for Analysis
      </h3>

      {usedKeys.includes("vitals") && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Vitals
          </h4>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-xs font-bold text-red-700 mb-2 uppercase tracking-wide">
                Heart Rate
              </p>
              <div className="flex flex-wrap gap-2">
                {data.vitals.hr.map((hr, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-red-900 text-sm font-semibold rounded-lg border border-red-200"
                  >
                    {hr}
                  </span>
                ))}
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg">
                  bpm
                </span>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-xs font-bold text-purple-700 mb-2 uppercase tracking-wide">
                Blood Pressure
              </p>
              <div className="flex flex-wrap gap-2">
                {data.vitals.bp.map((bp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-purple-900 text-sm font-semibold rounded-lg border border-purple-200"
                  >
                    {bp}
                  </span>
                ))}
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-lg">
                  mmHg
                </span>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-700 mb-2 uppercase tracking-wide">
                Temperature
              </p>
              <div className="flex flex-wrap gap-2">
                {data.vitals.temp.map((temp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-amber-900 text-sm font-semibold rounded-lg border border-amber-200"
                  >
                    {temp}
                  </span>
                ))}
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-lg">
                  °C
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {usedKeys.includes("labs") && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            Lab Results
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">
                WBC
              </p>
              <p className="text-2xl font-bold text-blue-900">
                {data.labs.wbc}
              </p>
              <p className="text-xs text-blue-600 font-semibold mt-1">
                × 10⁹/L
              </p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-xs font-bold text-emerald-700 mb-2 uppercase tracking-wide">
                Creatinine
              </p>
              <p className="text-2xl font-bold text-emerald-900">
                {data.labs.creatinine}
              </p>
              <p className="text-xs text-emerald-600 font-semibold mt-1">
                mg/dL
              </p>
            </div>
            <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
              <p className="text-xs font-bold text-rose-700 mb-2 uppercase tracking-wide">
                Hemoglobin
              </p>
              <p className="text-2xl font-bold text-rose-900">
                {data.labs.hgb}
              </p>
              <p className="text-xs text-rose-600 font-semibold mt-1">g/dL</p>
            </div>
          </div>
        </div>
      )}

      {usedKeys.includes("notes") && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            Clinical Notes
          </h4>
          <div className="space-y-3">
            {data.notes.map((note, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-slate-600">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed flex-1">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {usedKeys.includes("medications") && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
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
            Medications
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {data.medications.map((med, index) => (
              <div
                key={index}
                className="p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-200 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-green-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-green-900 flex-1">
                    {med}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
