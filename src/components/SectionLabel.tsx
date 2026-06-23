export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-600 whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}
