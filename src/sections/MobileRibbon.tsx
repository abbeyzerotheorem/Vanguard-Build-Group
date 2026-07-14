'use client';

import { Phone, Calculator, Image as ImageIcon } from 'lucide-react';
import { constructionConfig } from '@/data/construction';
import { cn } from '@/lib/utils';

export default function MobileRibbon() {
  const { contact } = constructionConfig;

  return (
    <div className="mobile-ribbon" role="navigation" aria-label="Quick actions">
      <div className="mobile-ribbon-inner">
        {/* Call Office */}
        <a
          href={`tel:${contact.phone.replace(/\s/g, '')}`}
          className="mobile-ribbon-btn"
          aria-label="Call our office"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Call Office</span>
        </a>

        {/* Request Quote */}
        <a
          href="#estimate"
          className="mobile-ribbon-btn"
          aria-label="Request a quote"
        >
          <Calculator className="w-5 h-5" aria-hidden="true" />
          <span>Get Quote</span>
        </a>

        {/* View Portfolio */}
        <a
          href="#portfolio"
          className="mobile-ribbon-btn"
          aria-label="View our portfolio"
        >
          <ImageIcon className="w-5 h-5" aria-hidden="true" />
          <span>Portfolio</span>
        </a>
      </div>
    </div>
  );
}
