export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Clear communication, dependable delivery, and the ability to understand product needs beyond tickets. Exactly what founders need from a mobile developer.",
    name: "Placeholder Client",
    role: "Founder",
    company: "Startup Client",
  },
  {
    quote:
      "He worked independently, handled API coordination well, and supported app-store release details with a calm, practical approach.",
    name: "Placeholder Manager",
    role: "Product Lead",
    company: "International Team",
  },
  {
    quote:
      "The strongest part was reliability. Bugs were investigated carefully, fixes were communicated clearly, and the app kept moving toward launch.",
    name: "Placeholder Partner",
    role: "Agency Partner",
    company: "Digital Agency",
  },
];
