import { InsightResult } from "@/src/types/insight";

interface InsightCardProps {
  insight: InsightResult;
}

export default function InsightCard({ insight }: InsightCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200";
      case "Medium":
        return "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200";
      case "High":
        return "bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border border-red-200";
      default:
        return "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border border-slate-200";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "Medium":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "High":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        {insight.title}
      </h2>

      {insight.laceIndex !== undefined && (
        <div className="mb-6 flex items-center gap-4 p-4 bg-linear-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">
              LACE Index
            </span>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <span className="text-2xl font-bold text-blue-600">
                {insight.laceIndex}
              </span>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-300"></div>
          <span
            className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wide flex items-center gap-2 ${getRiskColor(
              insight.riskLevel
            )}`}
          >
            {getRiskIcon(insight.riskLevel)}
            {insight.riskLevel} risk
          </span>
        </div>
      )}

      {!insight.laceIndex && (
        <div className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wide ${getRiskColor(
              insight.riskLevel
            )}`}
          >
            {getRiskIcon(insight.riskLevel)}
            {insight.riskLevel} Risk
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
          Key Factors
        </h3>
        <ul className="space-y-3">
          {insight.factors.map((factor, index) => (
            <li
              key={index}
              className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">
                  {index + 1}
                </span>
              </div>
              <span className="text-sm text-slate-700 leading-relaxed flex-1">
                {factor}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3 flex items-center gap-2">
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
          Clinical Explanation
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {insight.explanation}
        </p>
      </div>
    </div>
  );
}
