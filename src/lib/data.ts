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
    "The Nebula Astronaut Projector transforms any room into a breathtaking galaxy experience. Place it on your desk, turn off the lights, and watch as your ceiling and walls come alive with thousands of stars, nebula clouds, and deep space colours. It's not just a light — it's an experience.",
  price: 39.99,
  compareAtPrice: 79.99,
  images: ["/products/astronaut-projector-1.png"],
  features: [
    {
      title: "360° Projection",
      description:
        "Fully adjustable projection angle lets you paint any wall or ceiling with stars, putting the entire galaxy at your fingertips.",
    },
    {
      title: "12 Galaxy Colour Modes",
      description:
        "Cycle through 12 stunning colour combinations — from deep ocean nebula to warm sunset cosmos — to match any mood or moment.",
    },
    {
      title: "Remote Controlled",
      description:
        "Control brightness, colour mode, rotation speed and timer from the comfort of your bed with the included wireless remote.",
    },
    {
      title: "Whisper Quiet",
      description:
        "Ultra-silent motor ensures the only thing filling your room is light — never noise. Perfect for sleep and relaxation.",
    },
    {
      title: "Timed Shutdown",
      description:
        "Built-in timer lets you fall asleep under the stars without worrying about turning it off. Set it and drift away.",
    },
  ],
  specs: [
    "360° adjustable projection angle",
    "12 galaxy colour modes",
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
        title: "8 Colour Modes",
        description: "Eight carefully curated colour modes for every mood.",
      },
      {
        title: "USB-C Powered",
        description: "Modern USB-C charging. Power it from any laptop, bank, or adapter.",
      },
    ],
    specs: [
      "8 galaxy colour modes",
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
        title: "Ceiling Optimised",
        description: "Engineered lens designed specifically for ceiling projection.",
      },
      {
        title: "Star Density Control",
        description: "Adjust how many stars fill your sky — from a few constellations to the entire Milky Way.",
      },
    ],
    specs: [
      "Ceiling-optimised lens",
      "Adjustable star density",
      "16 colour modes",
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
      "You can email us at support@luxen.com where our customer service team will be happy to help you with whatever you need!",
  },
  {
    question: "Do you ship worldwide?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "Where do you ship from?",
    answer: "We ship from Hong Kong.",
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
    answer: "Due to high demand, orders may take between 2-4 weeks to arrive.",
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
    answer: "Please contact us at support@luxen.com to initiate a return.",
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
