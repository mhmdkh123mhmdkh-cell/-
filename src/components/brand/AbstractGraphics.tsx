export function HeroGraphicComposition({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-[4/3] max-w-[500px] mx-auto select-none ${className}`}
      aria-hidden="true"
    >
      {/* Background warm tinted paper plane */}
      <div className="absolute inset-x-8 top-6 bottom-4 bg-[#F2EEE6] rounded-2xl transform -rotate-2 transition-transform duration-700 hover:-rotate-1" />

      {/* Primary Crisp White Layer with warm border */}
      <div className="absolute inset-x-4 top-2 bottom-6 bg-white rounded-2xl border border-[#E8E2D5] shadow-sm transform rotate-1 transition-transform duration-700 hover:rotate-0 flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
        {/* Top bar with subtle accent pill */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E25822]" />
            <span className="w-2 h-2 rounded-full bg-[#14283E]/30" />
            <span className="w-2 h-2 rounded-full bg-[#14283E]/15" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-[#5A6572] uppercase">
            Curated Discipline
          </span>
        </div>

        {/* Center architectural graphic balance */}
        <div className="my-auto py-4">
          <div className="grid grid-cols-12 gap-3 items-end">
            <div className="col-span-4 bg-[#14283E] text-white p-4 rounded-xl flex flex-col justify-between h-32">
              <span className="text-2xl font-bold tracking-tight text-[#E25822]">01</span>
              <div className="space-y-1">
                <div className="w-8 h-0.5 bg-[#E25822]" />
                <span className="text-[11px] font-medium tracking-wide block">Rigor</span>
              </div>
            </div>

            <div className="col-span-5 bg-[#FAF8F5] border border-[#E8E2D5] p-4 rounded-xl flex flex-col justify-between h-40">
              <span className="text-xs font-semibold text-[#14283E]">Clinical & Research</span>
              <div className="space-y-2">
                <div className="w-full h-1.5 bg-[#14283E]/10 rounded-full" />
                <div className="w-3/4 h-1.5 bg-[#E25822]/60 rounded-full" />
                <div className="w-1/2 h-1.5 bg-[#14283E]/10 rounded-full" />
              </div>
            </div>

            <div className="col-span-3 bg-[#E25822] text-white p-3 rounded-xl flex flex-col justify-between h-24">
              <span className="text-[10px] uppercase font-bold tracking-wider">Output</span>
              <span className="text-sm font-bold leading-tight">100% Tangible</span>
            </div>
          </div>
        </div>

        {/* Bottom composition footer */}
        <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#5A6572]">
          <span className="font-medium text-[#14283E]">Damascus · Multi-Discipline</span>
          <span className="font-mono text-[11px] text-[#E25822]">Medicine + Execution</span>
        </div>
      </div>

      {/* Floating accent architectural tag */}
      <div className="absolute -bottom-3 right-8 sm:right-12 bg-[#14283E] text-white text-xs font-medium px-4 py-2 rounded-full shadow-md border border-white/20 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] animate-pulse" />
        <span>Action · Not just talk</span>
      </div>
    </div>
  );
}

export function EditorialAccentLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="w-8 h-1 bg-[#E25822] rounded-full" />
      <div className="w-2 h-1 bg-[#14283E] rounded-full" />
      <div className="h-[1px] flex-1 bg-[#E8E2D5]" />
    </div>
  );
}
