import { constructionConfig } from '@/data/construction';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldAlert,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
} from 'lucide-react';

export default function FooterSection() {
  const { brand, contact, socialLinks } = constructionConfig;

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="bg-structural-blue text-white"
    >
      {/* Main Footer Content */}
      <div className="container-site py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-accent" aria-hidden="true" />
              <span className="text-lg font-display font-bold">{brand.name}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {brand.shortDescription.slice(0, 120)}...
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-accent transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-accent transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-accent transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#services"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px] flex items-center"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px] flex items-center"
              >
                Portfolio
              </a>
              <a
                href="#estimate"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px] flex items-center"
              >
                Get an Estimate
              </a>
              <a
                href="#faq"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px] flex items-center"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-150 min-h-[48px]"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {contact.headquartersAddress.street}
                  <br />
                  {contact.headquartersAddress.city}, {contact.headquartersAddress.state}{' '}
                  {contact.headquartersAddress.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Legal & Emergency */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal &amp; Licensing
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-gray-300 font-medium">NHBRC:</span>{' '}
                {brand.licenseNumber}
              </p>
              <p>
                <span className="text-gray-300 font-medium">Insurance:</span>{' '}
                {brand.insuranceCoverValue}
              </p>
              <p>
                <span className="text-gray-300 font-medium">Policy:</span>{' '}
                {brand.insuranceProvider}
              </p>
            </div>

            {/* Emergency Dispatch */}
            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-red-400" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                  Emergency Dispatch
                </span>
              </div>
              <a
                href={`tel:${contact.emergencyDispatch.replace(/\s/g, '')}`}
                className="text-base font-bold text-white hover:text-accent transition-colors duration-150 min-h-[48px] flex items-center"
              >
                {contact.emergencyDispatch}
              </a>
              <p className="text-[10px] text-red-300/70 mt-1">
                24/7 structural emergency response
              </p>
            </div>

            {/* Sub-contractor Portal */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors duration-150 min-h-[48px]"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Sub-contractor Portal
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>CIDB Grade 9GB / 9CE</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>NHBRC BG-100527-2021</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
