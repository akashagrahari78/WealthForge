import React from "react";

const ContactInfo = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center gap-3">
      <span className="text-gray-400">{icon}</span>
      <p className="text-gray-400 text-base">{text}</p>
    </div>
  );
  return href ? <a href={href} className="block hover:text-white">{content}</a> : content;
};

export default ContactInfo;
