import { CONTACT_PLACEHOLDERS, INSTITUTIONAL_IDENTITY, NAV_ITEMS } from '../data/site';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-[#272522] text-[#F2EBDD] border-t border-[#D6A15C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Institutional Identity Column */}
          <div className="lg:col-span-5 space-y-5">
            <BrandMark variant="light" />
            <p className="font-serif text-xl text-[#F2EBDD] leading-snug max-w-md">
              {INSTITUTIONAL_IDENTITY.name}
            </p>
            <p className="text-sm text-[#F2EBDD]/80 leading-relaxed max-w-md">
              A proposed community-based creative skills development centre in{' '}
              {INSTITUTIONAL_IDENTITY.location}, empowering vulnerable youth aged 15–35 through
              creative arts, craftsmanship, entrepreneurship, and cultural preservation.
            </p>
            <p className="text-xs text-[#D6A15C] leading-relaxed max-w-md">
              {INSTITUTIONAL_IDENTITY.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-[#F2EBDD] mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLink(e, item.path)}
                    className="text-sm text-[#F2EBDD]/75 hover:text-[#D6A15C] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Channels Placeholders Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h3 className="font-serif text-base font-semibold text-[#F2EBDD] mb-4">
                Location & Contact
              </h3>
              <dl className="space-y-3 text-sm text-[#F2EBDD]/80">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#D6A15C]">
                    Proposed Site
                  </dt>
                  <dd className="mt-0.5">
                    {CONTACT_PLACEHOLDERS.addressLine1}, {CONTACT_PLACEHOLDERS.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#D6A15C]">
                    Email
                  </dt>
                  <dd className="mt-0.5">{CONTACT_PLACEHOLDERS.emailPlaceholder}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-[#D6A15C]">
                    Telephone
                  </dt>
                  <dd className="mt-0.5">{CONTACT_PLACEHOLDERS.phonePlaceholder}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#D6A15C] mb-2">
                Social Channels
              </h4>
              <p className="text-xs text-[#F2EBDD]/70 leading-relaxed">
                Instagram · Facebook · LinkedIn · YouTube — Official institutional handles to be announced upon establishment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F2EBDD]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#F2EBDD]/65">
          <p>
            © {new Date().getFullYear()} Lilongwe Centre for Arts and Craft (LCAC). Proposed Institution — Mtandire Township, Lilongwe, Malawi.
          </p>
          <p>
            Provisional institutional concept prototype.
          </p>
        </div>
      </div>
    </footer>
  );
}
