interface PatientSearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

export default function PatientSearchBar({
  query,
  onChange,
}: PatientSearchBarProps) {
  return (
    <div className="mb-8">
      <label
        htmlFor="patient-search"
        className="block text-sm font-semibold text-slate-700 mb-3"
      >
        Search Patients
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-slate-400"
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
        <input
          type="text"
          id="patient-search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, MRN, or date of birth..."
          className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-slate-900 placeholder-slate-400 shadow-sm hover:border-slate-300"
        />
      </div>
    </div>
  );
}
