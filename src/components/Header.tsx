import { FileText, Download } from "lucide-react";

type Props = {
  reactToPrintFn: () => void;
};

export default function Header({ reactToPrintFn }: Props) {
  return (
    <header className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-700">
      <div className="flex max-sm:flex-col gap-3 items-center justify-between px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
            <FileText size={20} strokeWidth={2} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Resume Builder
            </h1>
            <p className="text-[11px] font-normal text-white/55">
              Craft your perfect resume
            </p>
          </div>
        </div>

        {/* Download Button */}
        <button onClick={reactToPrintFn} className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-150 hover:bg-white/25">
          <Download size={16} strokeWidth={2} />
          Download PDF
        </button>
      </div>
    </header>
  );
}
