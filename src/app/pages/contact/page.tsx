import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";

export const metadata = { title: "Contact" };

const SOCIAL = [
  { href: SITE.social.youtube, label: "YouTube" },
  { href: SITE.social.instagram, label: "Instagram" },
  { href: SITE.social.facebook, label: "Facebook" },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src="/images/brand/amigos-logo.png"
          alt={SITE.name}
          width={252}
          height={115}
          className="h-16 w-auto object-contain sm:h-20"
        />
        <div>
          <h1 className="font-serif text-5xl">Contact</h1>
          <p className="mt-1 text-muted">{SITE.name}</p>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-muted">
        Questions about an order, bulk gifting, or our fish pickles? Message us on WhatsApp —
        we reply personally during business hours ({SITE.hours}).
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6">
          <h2 className="font-serif text-2xl">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {SITE.phones.map((p) => (
              <li key={p.raw} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-chili" />
                <a className="hover:underline" href={`tel:+${p.raw}`}>
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-chili" />
              <a className="hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            <strong>Hours:</strong> {SITE.hours}
          </p>
          <h3 className="mt-6 font-serif text-xl">Visit / ship from</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {SITE.company}
            <br />
            {SITE.address.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm text-muted">FSSAI: {SITE.fssai}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SOCIAL.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-line px-3 py-1.5 text-xs font-semibold hover:bg-cream"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-chili p-6 text-cream">
          <h2 className="font-serif text-2xl">WhatsApp orders</h2>
          <p className="mt-3 text-sm text-cream/85">
            Add items to your cart, then tap Order on WhatsApp — or start a chat now.
          </p>
          <a
            href={waUrl(`Hi ${SITE.name}, I have a question.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <p className="mt-4 text-xs text-cream/70">
            WhatsApp: {SITE.phones[0].display}
          </p>
        </div>
      </div>
    </div>
  );
}
