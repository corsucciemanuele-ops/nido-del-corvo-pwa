export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{4})\s?(\d{5})/, "$1 $2");
};

export const toTelHref = (phone: string): string => {
  return `tel:+39${phone.replace(/\s/g, "")}`;
};
