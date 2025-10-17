import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ShareButtons = ({ shareUrl, title, t, lang }) => (
  <div className="mt-8 flex items-center gap-3">
    <span className="text-sm text-black/60">{t.share}:</span>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
      <FaLinkedin className="text-black/70" size={16} />
    </a>
    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp">
      <FaWhatsapp className="text-black/70" size={16} />
    </a>
  </div>
);

export default ShareButtons;