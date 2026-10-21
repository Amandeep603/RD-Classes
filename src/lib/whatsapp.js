import { SITE_CONFIG } from "@/constants/site";

/**
 * Returns a wa.me WhatsApp URL using the phone number configured in site.js.
 * @param {string} [customMessage] - Optional custom enquiry message.
 * @returns {string} Fully encoded WhatsApp URL.
 */
export function getWhatsAppUrl(customMessage) {
  const phone = SITE_CONFIG.contact.phone;
  const message = customMessage || SITE_CONFIG.contact.enquiryMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
