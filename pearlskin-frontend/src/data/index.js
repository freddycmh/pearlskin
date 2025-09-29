// PearlSkin Website Data

// Services Menu (Actual Services with Pricing)
export const servicesMenu = {
  eyelashes: [
    { name: "Keratin Lash Lift", price: "$90" },
    { name: "Just Lash Removal", price: "$20" },
    { name: "Natural Lash Extension", price: "$100" },
    { name: "Classic Lash Extension", price: "$130" },
    { name: "Volume Lash Extension", price: "$150" },
    { name: "Refilling within 2 Weeks", price: "Half Price" }
  ],
  skinTreatment: [
    { name: "Pearl Restore Signature (90 mins)", price: "$135" },
    { name: "Pearl Anti-Pollution (90 mins)", price: "$165" },
    { name: "Pearl Aqua Peel Fusion (70 mins)", price: "$148" },
    { name: "Pearl O2 Treatment (70 mins)", price: "$139" },
    { name: "Pearl Nano Infusion (70 mins)", price: "$250" },
    { name: "Pearl Lummi LED (90 mins)", price: "$139" },
    { name: "Pearl Detoxifying (90 mins)", price: "$149" },
    { name: "Pearl Refine (60 mins)", price: "$75" },
    { name: "Pearl Mini (60 mins)", price: "$139" },
    { name: "Ear Candling (30 mins)", price: "$45" },
    { name: "Cupping Therapy (30 mins)", price: "$45" }
  ]
};

// Treatment Benefits (Detailed service information for website)
export const servicesData = [
  {
    id: 1,
    category: "Anti-Aging",
    title: "Anti-Aging Treatment",
    duration: "60 min",
    price: "$95",
    imageUrl: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Advanced treatment targeting fine lines and wrinkles. Includes deep cleansing, exfoliation, targeted serums, and firming mask for visibly younger, more radiant skin.",
    benefits: ["Reduces fine lines", "Stimulates collagen", "Improves elasticity", "Enhances texture", "Immediate lifting effect"],
    popular: false,
  },
  {
    id: 2,
    category: "Hydration",
    title: "HydraFacial Treatment",
    duration: "45 min",
    price: "$150",
    imageUrl: "https://images.pexels.com/photos/5240447/pexels-photo-5240447.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Latest vortex-fusion technology that cleanses, extracts, and hydrates simultaneously. Provides lasting results with no downtime.",
    benefits: ["Instant hydration", "Deep pore cleansing", "Improves tone", "Reduces pigmentation", "Zero downtime"],
    popular: true,
  },
  {
    id: 3,
    category: "Traditional Therapy",
    title: "Facial Gua Sha Treatment",
    duration: "75 min",
    price: "$120",
    imageUrl: "https://images.pexels.com/photos/7755477/pexels-photo-7755477.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Ancient Chinese technique that enhances circulation, reduces puffiness, and promotes lymphatic drainage for a natural glow.",
    benefits: ["Enhanced circulation", "Reduces puffiness", "Lymphatic drainage", "Relieves tension", "Improves elasticity"],
    popular: false,
  },
  {
    id: 4,
    category: "Wellness",
    title: "Cupping Therapy",
    duration: "30 min",
    price: "$45",
    imageUrl: "https://images.pexels.com/photos/7755448/pexels-photo-7755448.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Traditional cupping therapy to improve circulation and promote healing.",
    benefits: ["Improves circulation", "Promotes healing", "Reduces tension", "Traditional therapy", "Wellness treatment"],
    popular: false,
  },
  {
    id: 5,
    category: "Light Therapy",
    title: "LED Light Therapy",
    duration: "30 min",
    price: "$80",
    imageUrl: "https://images.pexels.com/photos/7755452/pexels-photo-7755452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Non-invasive light therapy that stimulates cellular activity, reduces inflammation, and boosts collagen production.",
    benefits: ["Stimulates collagen", "Reduces inflammation", "Accelerates healing", "Treats acne", "No downtime"],
    popular: false,
  },
  {
    id: 6,
    category: "Organic Care",
    title: "Organic Botanical Facial",
    duration: "60 min",
    price: "$90",
    imageUrl: "https://images.pexels.com/photos/3985331/pexels-photo-3985331.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Gentle treatment using 100% organic ingredients, plant extracts, and natural masks. Perfect for sensitive skin.",
    benefits: ["100% organic", "Sensitive skin friendly", "Natural detox", "Deeply nourishing", "Eco-conscious"],
    popular: false,
  },
];

export const galleryData = [
  {
    id: 1,
    title: "Serene Treatment Room",
    imageUrl: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegant spa treatment room",
  },
  {
    id: 2,
    title: "Professional Facial Treatment",
    imageUrl: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Woman receiving facial treatment",
  },
];

export const companyInfo = {
  name: "PearlSkin",
  tagline: "Aesthetic Studio",
  description: "Your journey to radiant, healthy skin begins here. Experience luxury, science, and personalized care in our serene wellness sanctuary.",

  contact: {
    phone: "+19172370270",
    email: "lindazhen628@gmail.com",
    address: "214 Grand St, 2 FL, New York NY 10013",
  },

  hours: {
    weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 4:00 PM",
    sunday: "Sun: Closed",
  },

  stats: {
    happyClients: "500+",
    experience: "3+",
    certifications: "15+",
    rating: "4.9",
  },

  socialMedia: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export const heroData = {
  badge: "Premium Skincare Experience",
  title: "Reveal Your",
  titleAccent: " Natural Radiance",
  description:
    "Transform your skin with our luxurious facial treatments and personalized skincare solutions. Experience the art of beauty in our serene, spa-like environment.",

  stats: [
    {
      icon: "Star",
      number: "4.9/5",
      label: "Client Rating",
    },
    {
      icon: "Sparkles",
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: "Calendar",
      number: "3+",
      label: "Years Experience",
    },
  ],

  buttons: {
    primary: "Book Consultation",
    secondary: "View Services",
  },
};

export const aboutData = {
  title: "About PearlSkin",
  lead: "Welcome to PearlSkin Aesthetic Studio, where beauty meets science in a sanctuary of tranquility and wellness.",

  description: "We specialize in advanced facial treatments combining traditional techniques with modern skincare technology. Our expert aestheticians develop personalized treatment plans for long-term skin health and vitality.",

  founderQuote: {
    text: "Beauty is about feeling confident in your own skin, and we're here to help you achieve that.",
    author: "Sarah Johnson",
    title: "Founder & Lead Aesthetician",
  },

  values: [
    {
      icon: "Heart",
      title: "Personalized Care",
      description:
        "Every treatment is tailored to your unique skin type and individual needs for optimal results.",
    },
    {
      icon: "Sparkles",
      title: "Premium Products",
      description:
        "We use only the finest, clinically-proven skincare products and cutting-edge technology.",
    },
    {
      icon: "Award",
      title: "Expert Techniques",
      description:
        "Our certified aestheticians bring years of experience and continuous education to every service.",
    },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const contactData = {
  title: "Book Your Appointment",
  description:
    "Ready to begin your skincare journey? Contact us to schedule your personalized treatment or consultation. We can't wait to help you achieve your beauty goals.",

  formTitle: "Schedule Your Visit",

  services: [
    "Keratin Lash Lift",
    "Classic Lash Extension",
    "Volume Lash Extension",
    "Pearl Restore Signature",
    "Pearl Aqua Peel Fusion",
    "Pearl Refine",
    "Cupping Therapy",
    "Consultation"
  ],

  timeSlots: [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ],

  contactInfo: [
    {
      icon: "MapPin",
      title: "Visit Us",
      details: ["214 Grand St, 2 FL", "New York NY 10013"],
    },
    {
      icon: "Phone",
      title: "Call Us",
      details: ["+19172370270", "Text us for quick questions"],
    },
    {
      icon: "Mail",
      title: "Email Us",
      details: ["lindazhen628@gmail.com", "We respond within 24 hours"],
    },
    {
      icon: "Clock",
      title: "Hours",
      details: ["Mon - Fri: 9 AM - 6 PM", "Sat: 9 AM - 4 PM", "Sun: Closed"],
    },
  ],
};

