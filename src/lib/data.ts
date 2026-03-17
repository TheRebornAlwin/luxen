export interface Product {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice: number;
  images: string[];
  features: { title: string; description: string }[];
  specs: string[];
  category: string;
}

export const heroProduct: Product = {
  id: "nebula-astronaut-projector",
  handle: "nebula-astronaut-projector",
  title: "Nebula Astronaut Projector",
  tagline: "Your room. Your galaxy.",
  description:
    "The Nebula Astronaut Projector fills your ceiling and walls with thousands of stars, swirling nebula clouds, and deep space colors. Just place it on your desk, turn off the lights, and your entire room transforms into a breathtaking galaxy experience.",
  price: 39.99,
  compareAtPrice: 79.99,
  images: [
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4",
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78crUw7XOw7nvOLUi6PsWqcXKbSRpB8hrTl19m",
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78zKSliRY3wOJ7IdTqFLQDsfgb1eEyKNh0BRVY",
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78AnbKlJtNcT7fU4iwVJSthuZ2sOaRklEmHxqQ",
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78Pscp4CALcfPswktIg8YAhoDlQH5ziOpUW6yS",
    "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa786z80oPp0KwR2MNrOLcTkd9mUIHz1yZFioxtS",
  ],
  features: [
    {
      title: "12 Galaxy Color Modes",
      description:
        "Match the mood to the moment, from calm deep blue to vibrant aurora.",
    },
    {
      title: "360° Adjustable Projection",
      description:
        "Point the stars exactly where you want them, ceiling, walls, or both.",
    },
    {
      title: "Whisper-Quiet Motor",
      description:
        "Fall asleep under the stars without a sound disturbing you.",
    },
    {
      title: "Built-In Timer",
      description:
        "Set it and forget it; it shuts off on its own so you sleep worry-free.",
    },
    {
      title: "Remote Control Included",
      description:
        "Change colors and brightness from your bed, couch, or anywhere in the room.",
    },
  ],
  specs: [
    "360° adjustable projection angle",
    "12 galaxy color modes",
    "Remote control included",
    "USB powered",
    "Timed shutdown function",
    "Whisper quiet motor",
    "Suitable for bedroom, gaming room, or living room",
  ],
  category: "Galaxy Projectors",
};

export const products: Product[] = [
  heroProduct,
  {
    id: "lunar-mini-projector",
    handle: "lunar-mini-projector",
    title: "Lunar Mini Projector",
    tagline: "Pocket-sized cosmos.",
    description:
      "The Lunar Mini brings the galaxy experience to any space. Compact, portable, and just as stunning.",
    price: 24.99,
    compareAtPrice: 49.99,
    images: ["/products/lunar-mini-1.png"],
    features: [
      {
        title: "Ultra Portable",
        description: "Small enough to fit in your palm, powerful enough to fill a room.",
      },
      {
        title: "8 Color Modes",
        description: "Eight carefully curated color modes for every mood.",
      },
      {
        title: "USB-C Powered",
        description: "Modern USB-C charging. Power it from any laptop, bank, or adapter.",
      },
    ],
    specs: [
      "8 galaxy color modes",
      "USB-C powered",
      "Compact & portable",
      "Auto-off timer",
    ],
    category: "Galaxy Projectors",
  },
  {
    id: "aurora-wave-lamp",
    handle: "aurora-wave-lamp",
    title: "Aurora Wave Lamp",
    tagline: "Northern lights on your desk.",
    description:
      "Bring the aurora borealis indoors. The Wave Lamp projects rippling northern light patterns that dance across your walls.",
    price: 34.99,
    compareAtPrice: 69.99,
    images: ["/products/aurora-wave-1.png"],
    features: [
      {
        title: "Dynamic Wave Patterns",
        description: "Realistic aurora patterns that constantly shift and flow.",
      },
      {
        title: "Adjustable Speed",
        description: "Control the wave speed from gentle drift to vibrant dance.",
      },
    ],
    specs: [
      "Dynamic aurora patterns",
      "Adjustable wave speed",
      "Remote control included",
      "USB powered",
    ],
    category: "Ambient Lamps",
  },
  {
    id: "cosmos-ceiling-projector",
    handle: "cosmos-ceiling-projector",
    title: "Cosmos Ceiling Projector",
    tagline: "Sleep under the stars.",
    description:
      "Designed specifically for ceilings, the Cosmos projects a hyper-realistic star field that makes every night feel like camping under a clear sky.",
    price: 44.99,
    compareAtPrice: 89.99,
    images: ["/products/cosmos-ceiling-1.png"],
    features: [
      {
        title: "Ceiling Optimized",
        description: "Engineered lens designed specifically for ceiling projection.",
      },
      {
        title: "Star Density Control",
        description: "Adjust how many stars fill your sky, from a few constellations to the entire Milky Way.",
      },
    ],
    specs: [
      "Ceiling-optimized lens",
      "Adjustable star density",
      "16 color modes",
      "Bluetooth speaker built-in",
      "Remote control included",
    ],
    category: "Galaxy Projectors",
  },
];

export const faqData = [
  {
    question: "How can I contact Luxen?",
    answer:
      "You can email us at shoptheluxen@gmail.com where our customer service team will be happy to help you with whatever you need!",
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "Where do you ship from?",
    answer: "We ship from the USA.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "As we aim to process orders as fast as possible, you must request any changes or cancellations within 12 hours of ordering. All requests after this time will be denied. Your order can be returned for a full refund after it is received.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (VISA, Mastercard, AMEX) and PayPal payments.",
  },
  {
    question: "When will my order be processed?",
    answer:
      "All orders are handled and shipped out from our warehouse. Please allow extra time for your order to be processed during holidays and sale seasons. We process orders between Monday and Friday. Orders will be processed within 1-3 business days from the order date and shipped the next day after the processing day. Please note that we don't ship on weekends.",
  },
  {
    question: "How long will it take to receive my order?",
    answer: "Due to high demand, orders may take between 1-2 weeks to arrive.",
  },
  {
    question: "What if I don't receive my order?",
    answer:
      "If you don't receive your order within 30 days after shipping, you are eligible for a full refund.",
  },
  {
    question: "Will I be charged with customs and taxes?",
    answer:
      "The prices displayed on our site are tax-free in US Dollars, which means you may be liable to pay for duties and taxes once you receive your order. Import taxes, duties and related customs fees may be charged once your order arrives to its final destination, which are determined by your local customs office. Payment of these charges and taxes are your responsibility and will not be covered by us. We are not responsible for delays caused by the customs department in your country. For further details of charges, please contact your local customs office.",
  },
  {
    question: "How do I return an item?",
    answer: "Please contact us at shoptheluxen@gmail.com to initiate a return.",
  },
  {
    question: "What if the item(s) I received are defective, incorrect, or damaged?",
    answer:
      "Please contact us if you have received merchandise that is incorrect, missing, or defective. Please include your order number, photographs of the item(s) and all related references upon receiving your package. We will do our very best to resolve your case as soon as possible.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "All refunds will be credited to your original form of payment. If you paid by credit or debit card, refunds will be sent to the card-issuing bank within 7-10 business days of receipt of the returned item or cancellation request. Please contact the card-issuing bank with questions about when the credit will be posted to your account.",
  },
];
