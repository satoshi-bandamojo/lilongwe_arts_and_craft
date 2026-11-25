import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { CONTACT_PLACEHOLDERS, INSTITUTIONAL_IDENTITY } from '../data/site';
import { ContactForm } from '../components/ContactForm';
import { HeroSection } from '../components/HeroSection';

export function ContactPage() {
  return (
    <div>
      <HeroSection
        kicker="Connect With LCAC"
        title="Get in Touch."
        description="Express interest in LCAC’s establishment in Mtandire Township, explore strategic partnerships, or enquire about future creative training pathways."
        note={INSTITUTIONAL_IDENTITY.statusNotice}
      />

      <section className="py-14 sm:py-18 bg-[#F2EBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Location & Placeholders Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#F7F2E8] border border-[#272522]/12 space-y-5">
              <h2 className="font-serif text-2xl font-semibold text-[#272522]">
                Institutional Location &amp; Placeholders
              </h2>

              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#963F2D] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#272522]">Proposed Location</dt>
                    <dd className="text-[#272522]/80 mt-0.5">
                      {CONTACT_PLACEHOLDERS.addressLine1}
                      <br />
                      {CONTACT_PLACEHOLDERS.addressLine2}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#963F2D] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#272522]">Email Address</dt>
                    <dd className="text-[#272522]/75 mt-0.5">
                      {CONTACT_PLACEHOLDERS.emailPlaceholder}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#963F2D] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#272522]">Telephone</dt>
                    <dd className="text-[#272522]/75 mt-0.5">
                      {CONTACT_PLACEHOLDERS.phonePlaceholder}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#963F2D] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-[#272522]">Social Media Channels</dt>
                    <dd className="mt-1 space-y-1 text-xs text-[#272522]/75">
                      {CONTACT_PLACEHOLDERS.socialPlaceholders.map((item) => (
                        <div key={item.platform}>
                          <span className="font-medium text-[#272522]">{item.platform}:</span>{' '}
                          {item.handle}
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Clean Stylized Architectural Location Context Card */}
            <div className="p-6 rounded-lg bg-[#30483C] text-[#F2EBDD] space-y-4">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#D6A15C]">
                  Proposed Site Context
                </p>
                <span className="text-xs text-[#F2EBDD]/75">Lilongwe, Malawi</span>
              </div>

              <div
                aria-label="Schematic location card identifying Mtandire Township in Lilongwe, Malawi"
                className="relative rounded-md bg-[#23362C] border border-[#F2EBDD]/15 p-5 overflow-hidden"
              >
                <svg
                  viewBox="0 0 360 150"
                  className="w-full h-36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M15 110 C 90 95, 160 120, 240 85 C 290 65, 330 70, 350 60"
                    stroke="#D6A15C"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M35 35 L 145 78 L 310 130"
                    stroke="#F2EBDD"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M145 20 L 145 135"
                    stroke="#F2EBDD"
                    strokeOpacity="0.18"
                    strokeWidth="1.5"
                  />
                  <circle cx="178" cy="78" r="24" fill="#963F2D" fillOpacity="0.28" />
                  <circle cx="178" cy="78" r="7" fill="#D6A15C" />
                  <text
                    x="192"
                    y="75"
                    fill="#F2EBDD"
                    fontSize="11"
                    fontFamily="Georgia, serif"
                  >
                    Mtandire Township
                  </text>
                  <text
                    x="192"
                    y="91"
                    fill="#F2EBDD"
                    fillOpacity="0.7"
                    fontSize="9"
                    fontFamily="sans-serif"
                  >
                    Proposed LCAC Site · Lilongwe
                  </text>
                </svg>
              </div>

              <p className="text-xs text-[#F2EBDD]/80 leading-relaxed">
                Mtandire Township is a vibrant, densely populated residential community in
                Lilongwe, Malawi. Exact street address and campus coordinates will be published
                once site acquisition and facility establishment are finalised.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
