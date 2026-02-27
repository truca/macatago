/* ============================================
   MACATA GO — Configuración del sitio
   ============================================
   EDITA AQUÍ tus datos reales antes de deploy.
*/

/** Base path del sitio (coincide con next.config.ts) */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Número WhatsApp en formato E.164 (sin espacios ni guiones) */
export const WHATSAPP_E164 = "+56912345678"; // TODO: reemplaza con el número real de Nati

/** Mensaje prellenado para WhatsApp */
export const WHATSAPP_MESSAGE = "Hola Nati, vengo por recomendación y me gustaría cotizar un viaje 🌎";

/** URL completa de WhatsApp */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** URL de Calendly para agendar reuniones */
export const CALENDLY_URL = "https://calendly.com/nexahrchile/30min";

/** URL del formulario Tally para detalles del viaje */
export const TALLY_FORM_URL = "https://tally.so/r/vGyeav";

/** Email de contacto */
export const CONTACT_EMAIL = "hola@macatago.com"; // TODO: reemplaza con el email real

/** URL base del sitio (para OG y links absolutos) */
export const SITE_URL = "https://macatago.com"; // TODO: reemplaza con el dominio real

/** Datos de la persona */
export const PERSONA = {
  nombre: "Nati",
  nombreCompleto: "Natalia", // TODO: nombre completo real
  apellido: "Ureta", // TODO: apellido real
  cargo: "Asesora de Viajes",
  marca: "Macata Go",
};
