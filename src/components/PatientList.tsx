import Link from "next/link";
import { Patient } from "@/src/types/patient";

interface PatientListProps {
  patients: Patient[];
}

export default function PatientList({ patients }: PatientListProps) {
  if (patients.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-slate-400"
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
        </div>
        <p className="text-slate-600 font-medium">No patients found</p>
        <p className="text-sm text-slate-500 mt-1">
          Try adjusting your search criteria
        </p>
      </div>
    );
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="space-y-4">
      {patients.map((patient, index) => (
        <Link
          key={patient.id}
          href={`/patients/${patient.id}`}
          className="block bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-slate-200/50 hover:border-blue-300 hover:-translate-y-1 group"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {patient.name}
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-x-4 gap-y-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      MRN
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {patient.mrn}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      DOB
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {formatDate(patient.dob)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Unit
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      {patient.unit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
              <svg
                className="w-6 h-6"
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
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
