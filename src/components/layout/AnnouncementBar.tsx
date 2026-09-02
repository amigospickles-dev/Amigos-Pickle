import { ANNOUNCEMENTS } from "@/lib/site";

export function AnnouncementBar() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <div
      className="overflow-hidden bg-chili py-2 text-xs font-medium tracking-wide text-cream sm:text-sm"
      aria-label="Promotional announcements"
    >
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={`${text}-${i}`} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
