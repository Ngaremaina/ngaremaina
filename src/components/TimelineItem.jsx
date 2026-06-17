const TimelineItem = ({ children }) => (
  <div className="relative border-l-2 border-[#1f5297] pb-6 pl-6">
    <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-[#1f5297] bg-white" />
    {children}
  </div>
);

export default TimelineItem;