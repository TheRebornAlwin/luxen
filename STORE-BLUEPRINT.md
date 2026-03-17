# Store Blueprint: Complete Architecture & Build Guide

> This document is a **complete blueprint** for building a premium e-commerce single-product store. It was reverse-engineered from a fully working production store and documents every single detail needed to replicate the exact structure, design system, integrations, and deployment pipeline. The builder should treat this as the source of truth for "what to build and how to build it."

---

## TABLE OF CONTENTS

1. [Tech Stack & Project Setup](#1-tech-stack--project-setup)
2. [Project Structure](#2-project-structure)
3. [Design System & Theming](#3-design-system--theming)
4. [Animations & Effects Library](#4-animations--effects-library)
5. [Layout System](#5-layout-system)
6. [All Pages & Routes](#6-all-pages--routes)
7. [Component Architecture](#7-component-architecture)
8. [Cart System & Checkout Flow](#8-cart-system--checkout-flow)
9. [Shopify Integration](#9-shopify-integration)
10. [Meta Pixel (Facebook) Integration](#10-meta-pixel-facebook-integration)
11. [Email Marketing Automations](#11-email-marketing-automations)
12. [Deployment & Hosting](#12-deployment--hosting)
13. [Domain & DNS Setup](#13-domain--dns-setup)
14. [Mobile Responsiveness](#14-mobile-responsiveness)
15. [Performance Optimizations](#15-performance-optimizations)
16. [Data Architecture](#16-data-architecture)
17. [SEO & Meta Tags](#17-seo--meta-tags)
18. [Checklist: Everything That Needs To Be Done](#18-checklist-everything-that-needs-to-be-done)

---

## 1. TECH STACK & PROJECT SETUP

### Core Dependencies

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.35.2",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### Next.js Configuration

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",       // Static site generation (SSG) - NO server needed
  trailingSlash: true,    // URLs end with / for Cloudflare Pages compatibility
  images: {
    unoptimized: true,    // Required for static export (no Next.js image optimizer)
  },
};
```

**Key point:** The entire site is a **static export**. No server-side rendering. This means it deploys to any static hosting (Cloudflare Pages, Netlify, Vercel, etc.) as plain HTML/CSS/JS files.

### Utility: cn() helper

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

This is used everywhere for conditional/merged Tailwind classes.

### TypeScript Path Aliases

```json
// tsconfig.json paths
"@/*": ["./src/*"]
```

So `@/components/ui/button` resolves to `src/components/ui/button`.

### PostCSS Config

```js
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Tailwind v4 uses `@tailwindcss/postcss` instead of the old `tailwindcss` plugin.

---

## 2. PROJECT STRUCTURE

```
src/
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                    # Root layout (fonts, meta pixel, favicon)
│   ├── client-layout.tsx             # Client wrapper (cart provider, header, footer, effects)
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles, Tailwind theme, animations
│   ├── not-found.tsx                 # Custom 404 page
│   ├── shop/page.tsx                 # Product listing / collection page
│   ├── cart/page.tsx                 # Full cart page
│   ├── about/page.tsx                # Brand story page
│   ├── contact/page.tsx              # Contact form page
│   ├── faq/page.tsx                  # FAQ accordion page
│   ├── shipping/page.tsx             # Shipping info page
│   ├── track-order/page.tsx          # Order tracking page
│   ├── privacy-policy/page.tsx       # Privacy policy (legal)
│   ├── refund-policy/page.tsx        # Refund policy (legal)
│   ├── terms-of-service/page.tsx     # Terms of service (legal)
│   └── products/[handle]/           # Dynamic product pages
│       ├── page.tsx                  # generateStaticParams + metadata
│       └── product-page-client.tsx   # Full product page UI ("use client")
│
├── components/
│   ├── layout/                       # Structural layout components
│   │   ├── header.tsx                # Fixed navbar with mobile hamburger
│   │   ├── footer.tsx                # Footer with link columns
│   │   ├── announcement-bar.tsx      # Top banner ("Free Shipping")
│   │   ├── cart-drawer.tsx           # Slide-out cart panel
│   │   └── loading-screen.tsx        # Animated intro screen
│   │
│   ├── sections/                     # Homepage section components
│   │   ├── hero-section.tsx          # Hero with aurora background, floating product
│   │   ├── product-showcase.tsx      # Featured product details section
│   │   ├── brand-story.tsx           # Brand narrative with stats
│   │   ├── testimonials.tsx          # Customer testimonials grid
│   │   └── why-luxen.tsx             # Trust badges / value props (4 cards)
│   │
│   ├── ui/                           # Reusable UI primitives
│   │   ├── aurora-background.tsx     # Animated gradient background
│   │   ├── magnetic-button.tsx       # CTA button (primary/secondary/ghost)
│   │   ├── scroll-reveal.tsx         # Fade-in on scroll (up/down/left/right)
│   │   ├── glassmorphism-card.tsx    # Frosted glass card
│   │   ├── particle-field.tsx        # Canvas star field background
│   │   ├── scroll-progress.tsx       # Horizontal progress bar at top
│   │   ├── floating-element.tsx      # Infinite Y-axis float animation
│   │   ├── text-gradient.tsx         # Gradient text (gold/violet/aurora)
│   │   ├── animated-counter.tsx      # Count-up number animation
│   │   ├── section-divider.tsx       # Animated divider lines between sections
│   │   ├── tilt-card.tsx             # 3D mouse-follow tilt effect
│   │   ├── custom-cursor.tsx         # Custom cursor (desktop only)
│   │   └── parallax-section.tsx      # Scroll-based parallax wrapper
│   │
│   └── product/                      # Product-specific components
│       ├── product-card.tsx          # Product card for shop grid
│       ├── product-tabs.tsx          # Details/Shipping/Guarantee tabs
│       ├── volume-discounts.tsx      # "Buy More Save More" tier selector
│       ├── product-reviews.tsx       # Reviews section with ratings
│       └── currency-converter.tsx    # Auto-detect + convert currency (hook)
│
├── contexts/
│   └── cart-context.tsx              # Cart state (React Context + localStorage)
│
├── lib/
│   ├── data.ts                       # Product data, FAQ data (static)
│   ├── shopify.ts                    # Shopify Storefront API (createCheckout)
│   └── utils.ts                      # cn() helper
│
└── types/
    └── globals.d.ts                  # Window.fbq type declaration for Meta Pixel
```

---

## 3. DESIGN SYSTEM & THEMING

### Color Palette

The store owner will provide their brand colors. Here's the structure to follow:

```css
/* globals.css */
@import "tailwindcss";

:root {
  --background: #0a0a0f;        /* Deep dark background */
  --foreground: #ffffff;
  --space-black: #0a0a0f;       /* Main BG color */
  --midnight-navy: #0d1b2a;     /* Secondary dark for gradients */
  --gold: #F5C542;              /* PRIMARY ACCENT - replace with brand color */
  --electric-violet: #7b2fff;   /* SECONDARY ACCENT - replace with brand color */
  --white: #ffffff;
  --transparent: transparent;
  --black: #0a0a0f;

  /* Aurora gradient vars (used by aurora-background component) */
  --blue-500: #7b2fff;
  --indigo-300: #9b6dff;
  --blue-300: #1a2744;
  --violet-200: #F5C542;        /* Maps to primary accent */
  --blue-400: #4a1d96;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-space-black: #0a0a0f;
  --color-midnight-navy: #0d1b2a;
  --color-gold: #F5C542;              /* Use brand primary */
  --color-electric-violet: #7b2fff;   /* Use brand secondary */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Animation definitions */
  --animate-aurora: aurora 60s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-glow-pulse: glow-pulse 4s ease-in-out infinite;
  --animate-shimmer: shimmer 2s linear infinite;
  --animate-star-drift: star-drift 120s linear infinite;
  --animate-fade-in: fade-in 0.8s ease-out forwards;
  --animate-logo-reveal: logo-reveal 2s ease-out forwards;
  --animate-spin-slow: spin 20s linear infinite;
}
```

### Key Design Patterns

| Pattern | Implementation |
|---------|---------------|
| **Glassmorphism** | `bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]` |
| **God Ray** | `radial-gradient(ellipse at center bottom, rgba(accent1) 0%, rgba(accent2) 30%, transparent 70%)` |
| **Section Gradient Navy** | `linear-gradient(180deg, #0a0a0f 0%, #0d1b2a 50%, #0a0a0f 100%)` |
| **Section Gradient Violet** | `linear-gradient(180deg, #0a0a0f 0%, #0d0a1a 50%, #0a0a0f 100%)` |
| **Hover Glow** | `hover:shadow-[0_4px_24px_rgba(accent, 0.35)]` |
| **Text Gradient** | `bg-gradient-to-r bg-clip-text text-transparent` |

### Typography

- **Font:** Inter (loaded via `next/font/google`)
- **Headings:** Bold, tight tracking (`tracking-tight` or `tracking-[-0.02em]`)
- **Small Labels:** `text-xs tracking-[0.2em] uppercase text-white/50`
- **Body:** `text-sm text-white/50 leading-relaxed`

### Spacing Convention

- Page padding: `px-6`
- Max container: `max-w-7xl mx-auto`
- Section spacing: `py-24 md:py-36`
- Consistent use of Tailwind spacing scale

---

## 4. ANIMATIONS & EFFECTS LIBRARY

### CSS Keyframe Animations (defined in globals.css)

```css
@keyframes aurora { /* 60s background-position sweep for gradient bg */ }
@keyframes float { /* 6s translateY(0 -> -20px -> 0) */ }
@keyframes glow-pulse { /* 4s opacity 0.4->0.8, scale 1->1.05 */ }
@keyframes shimmer { /* 2s background-position sweep for shine effect */ }
@keyframes star-drift { /* 120s slow diagonal drift */ }
@keyframes fade-in { /* 0.8s opacity 0->1, translateY 20px->0 */ }
@keyframes logo-reveal { /* 2s scale+blur entrance for loading screen */ }
```

### Framer Motion Components

1. **ScrollReveal** - Fade in on scroll with directional offset. `viewport: { once: true }` so it only plays once. Directions: up (default), down, left, right.
2. **FloatingElement** - Infinite Y-axis oscillation. Used on hero product image.
3. **TiltCard** - 3D mouse-follow tilt with dynamic radial glow. Used on product cards.
4. **AnimatedCounter** - Count-up from 0 to target number. Triggers on scroll into view. Used in brand stats.

### Canvas Effects

1. **ParticleField** - Full-screen fixed star field. 80 stars max, 20fps cap, sine-wave twinkle. GPU-efficient (uses fillRect not arc).

### Other Effects

1. **CustomCursor** - Dual-layer cursor (gold dot + violet glow). Uses raw requestAnimationFrame for smooth interpolation. Hidden on mobile/touch devices.
2. **ScrollProgress** - Thin gradient bar at top of page showing scroll position.
3. **LoadingScreen** - Plays once per session (uses sessionStorage). Animated glow + rotating ring + logo reveal + loading bar.

---

## 5. LAYOUT SYSTEM

### Root Layout (`layout.tsx`)

This is the server component that wraps everything:
- Loads the font
- Sets viewport meta (width=device-width, initialScale=1, maximumScale=1)
- Injects Meta Pixel base code in `<head>`
- Preloads hero image and CDN connection
- Sets favicon

### Client Layout (`client-layout.tsx`)

This wraps all page content with:
```
CartProvider (React Context)
  ├── LoadingScreen (fixed overlay, shows once)
  ├── ScrollProgress (fixed top bar)
  ├── ParticleField (fixed canvas background, z-0)
  ├── div.relative.z-10
  │   ├── AnnouncementBar (fixed top, dismissible)
  │   ├── Header (fixed, scroll-aware)
  │   ├── <main>{page content}</main>
  │   └── Footer
  └── CartDrawer (fixed right slide-out)
```

### Header

- Fixed position with `top-[30px]` (below announcement bar)
- Transparent initially, gets `bg-space-black/80 backdrop-blur-sm` on scroll
- Desktop: Logo + nav links (Home, Shop, About, FAQ, Contact) + cart icon
- Mobile: Logo + cart icon + hamburger menu
- Cart icon shows animated badge with item count
- Mobile menu: Full-screen overlay with centered links + spring animation

### Footer

- 4-column grid on desktop, 2-column on mobile
- Columns: Brand (logo + tagline), Shop links, Support links, Legal links
- Bottom bar: Copyright + payment method text icons (Visa, Mastercard, Amex, PayPal)

### Announcement Bar

- Fixed top banner: "{accent}Free Shipping{/accent} | Limited Time Only"
- Dismissible with X button (state-based, reappears on new session)

---

## 6. ALL PAGES & ROUTES

### Homepage (`/`)

```
HeroSection
SectionDivider (aurora)
WhyLuxen (trust badges)
SectionDivider (ray)
ProductShowcase (hero product feature breakdown)
SectionDivider (ray)
Testimonials
SectionDivider (aurora)
BrandStory (with animated stats)
```

**HeroSection structure:**
- AuroraBackground wrapper
- God-ray CSS glow effect
- Floating product image (with glow shadow)
- Headline with TextGradient accent
- Subheadline
- CTA buttons (primary: product page, secondary: shop)
- Social proof stars + customer count
- Scroll indicator animation

### Product Page (`/products/[handle]`)

```
Breadcrumb (Home / Shop / Product Name)
Grid (2 cols on desktop, stacked on mobile):
  Left:
    - Main product image (aspect-square, rounded)
    - Discount badge overlay (-X% OFF)
    - Thumbnail gallery (horizontal scroll)
  Right:
    - Category label (small uppercase gold)
    - Product title (h1)
    - Tagline (italic)
    - Price + compare-at price + SAVE % badge
    - Currency note (if non-USD)
    - Description paragraph
    - VolumeDiscounts (Buy More Save More tiers)
    - Quantity selector + Add to Cart button
    - Trust badges (3-col: Free Shipping, 30-Day Guarantee, Secure Checkout)
    - ProductTabs (Details, Shipping, Our Guarantee)
SectionDivider
"Why You'll Love It" features grid (numbered cards)
SectionDivider
Customer Reviews section (summary + rating bars + review cards + show more)
```

**Mobile centering:** On mobile, text and flex elements use `text-center md:text-left` and `justify-center md:justify-start`.

**Grid children need `min-w-0`** to prevent CSS Grid overflow on mobile.

### Shop Page (`/shop`)

- Header: "Our Collection" with subtext
- Product grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- Each product renders a ProductCard (with TiltCard wrapper)
- ProductCard shows: image, discount badge, category, title, tagline, price

### Cart Page (`/cart`)

- Shows all cart items with images, titles, prices, quantity controls
- Subtotal calculation
- "Proceed to Checkout" button (calls createCheckout)
- Empty state with "Continue Shopping" link

### About Page (`/about`)

- Hero: "We bring the cosmos to your home" (adapt tagline to brand)
- Brand story: 2-column (image placeholder + narrative text)
- Values: 3-column grid (Premium Quality, Designed with Purpose, Customer First)
- Uses GlassmorphismCards

### FAQ Page (`/faq`)

- "Help Center" label
- Accordion: Each question is a collapsible card (AnimatePresence)
- Plus icon rotates 45deg when open
- Questions cover: contact, shipping, orders, payment, returns, refunds, customs

### Contact Page (`/contact`)

- Contact form (name, email, message)
- Info cards: Email, Hours, Location
- Note: Form doesn't actually submit anywhere in the static build (add a service like Formspree or Shopify form endpoint)

### Shipping Page (`/shipping`)

- 4-card grid: Processing Time, Delivery, Free Shipping, Issues
- Standard shipping info

### Track Order Page (`/track-order`)

- Input form for order number + email
- Links to Shopify order tracking
- "Recommended products" section below

### Legal Pages

**Privacy Policy (`/privacy-policy`):**
- Sections: Info Collected, How We Use It, Data Security, Cookies, Contact
- Standard e-commerce privacy disclosure

**Terms of Service (`/terms-of-service`):**
- Sections: Products & Pricing, Orders & Payment, Shipping & Delivery, Limitation of Liability, Contact

**Refund Policy (`/refund-policy`):**
- 30-day return policy
- Conditions for returns
- Refund processing timeline

### 404 Page

- Big "404" text (very faint)
- "Lost in deep space" (adapt to brand theme)
- "Back to Mission Control" button (adapt CTA text)

---

## 7. COMPONENT ARCHITECTURE

### UI Components (Reusable Primitives)

**MagneticButton** - The main CTA button used everywhere.
- Variants: `primary` (solid accent bg), `secondary` (border with accent hover), `ghost` (text only)
- Sizes: `sm`, `md`, `lg`
- Can be a link (pass `href`) or button (pass `onClick`)
- Rounded-full, hover lifts up slightly (-translate-y-0.5)

**GlassmorphismCard** - Frosted glass container used for feature cards, testimonials, info cards.
- Semi-transparent bg with backdrop blur
- Subtle inner shadow + outer glow
- Hover: slightly brighter border

**ScrollReveal** - Wraps any content for scroll-triggered entrance animation.
- Direction-based initial offset (currently all use vertical Y offset)
- `viewport: { once: true, margin: "-80px" }`

**SectionDivider** - Animated line between homepage sections.
- `aurora`: 1px shimmer gradient line
- `ray`: 1px gold gradient (for inline dividers)
- `gradient`: 24px subtle vertical gradient (for section transitions)

**TextGradient** - Apply gradient color to text.
- Variants: gold, violet, aurora (each with different gradient stops)

### Product Components

**ProductReviews** - Full reviews section.
- Hardcoded array of realistic reviews (write 30-36 reviews)
- Summary: total review count, average rating, rating distribution bars
- Show 6 at a time, "Show More" button, max 36 displayed
- After max: show "+ X more reviews" text in accent color

**VolumeDiscounts** - "Buy More Save More" selector.
- 3 tiers: Buy 1 (no discount), Buy 2 (10% off), Buy 3 (20% off)
- Shows per-unit price and total savings
- Radio button style selection

**CurrencyConverter** - useCurrency() hook.
- 15+ currencies with hardcoded approximate rates
- Auto-detects from browser locale
- Stores selection in sessionStorage
- Smart rounding (JPY/KRW round to nearest 100)

---

## 8. CART SYSTEM & CHECKOUT FLOW

### Cart Context (React Context + localStorage)

```typescript
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// Methods:
addItem(item)          // Add or increment quantity
removeItem(id)         // Remove from cart
updateQuantity(id, qty) // Update quantity (removes if <= 0)
clearCart()            // Empty cart

// State:
items: CartItem[]
isOpen: boolean        // Controls CartDrawer visibility
totalItems: number     // Computed
subtotal: number       // Computed
```

**Persistence:** Cart saves to `localStorage` on every change, loads on mount.

### Cart Drawer

- Slide-in panel from the right side
- Backdrop overlay (click to close)
- Lists all items with image, title, price, quantity +/- controls
- Subtotal at bottom
- "Checkout" button triggers Shopify checkout flow

### Checkout Flow

1. User clicks "Checkout" (in cart drawer or cart page)
2. `createCheckout(items)` is called from `src/lib/shopify.ts`
3. This sends a GraphQL mutation (`cartCreate`) to Shopify Storefront API
4. Shopify returns a `checkoutUrl`
5. User is redirected to `checkoutUrl` via `window.location.href`
6. Shopify handles payment, shipping, etc. on their hosted checkout

---

## 9. SHOPIFY INTEGRATION

### Setup Requirements

1. **Shopify Store** - Create a Shopify store (e.g., `brandname.myshopify.com`)
2. **Storefront API Access** - Go to Settings > Apps > Develop Apps > Create App > Configure Storefront API access
3. **Permissions needed:** `unauthenticated_read_product_listings`, `unauthenticated_write_checkouts`, `unauthenticated_read_checkouts`
4. **Get Storefront Access Token** from the app

### Code Structure

```typescript
// src/lib/shopify.ts
const SHOPIFY_DOMAIN = "your-store.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = "your-token-here";
const API_VERSION = "2026-01"; // Use latest stable

// Map local product IDs to Shopify variant GIDs
const VARIANT_MAP: Record<string, string> = {
  "product-handle": "gid://shopify/ProductVariant/XXXXXXXXXX",
};

// createCheckout function:
// 1. Maps local item IDs to Shopify variant GIDs
// 2. Sends cartCreate mutation to Storefront API
// 3. Returns checkoutUrl
```

### GraphQL Mutation

```graphql
mutation cartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      checkoutUrl
    }
    userErrors {
      field
      message
    }
  }
}
```

### Getting Variant GIDs

To find the variant GID for your product:
1. Go to Shopify Admin > Products > Click product
2. Look at the URL: the product ID is in it
3. Or use the Storefront API to query products
4. The variant GID format: `gid://shopify/ProductVariant/XXXXXXXXXX`

---

## 10. META PIXEL (FACEBOOK) INTEGRATION

### Setup

1. Create a Meta Pixel in Meta Events Manager
2. Get the Pixel ID

### Implementation

**Base Code (in root layout.tsx `<head>`):**
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
</noscript>
```

**TypeScript Declaration:**
```typescript
// src/types/globals.d.ts
interface Window {
  fbq: (...args: unknown[]) => void;
}
```

### Event Tracking Split

**Our site tracks:**
- `PageView` - On every page load (via base code)
- `AddToCart` - When user adds item to cart (in cart-context.tsx)

```typescript
// In addItem callback:
if (typeof window !== "undefined" && typeof window.fbq === "function") {
  window.fbq("track", "AddToCart", {
    content_name: item.title,
    content_ids: [item.id],
    content_type: "product",
    value: item.price,
    currency: "USD",
  });
}
```

**Shopify tracks (via Facebook & Instagram sales channel):**
- `InitiateCheckout` - When customer reaches Shopify checkout page
- `Purchase` - When customer completes purchase

**IMPORTANT:** Do NOT track InitiateCheckout or Purchase from your site. Shopify's Facebook & Instagram sales channel handles these. If you track them too, you get **duplicate events** which ruins your ad data.

### Setup Steps for Shopify Facebook Channel

1. In Shopify Admin > Sales Channels > Add "Facebook & Instagram"
2. Connect your Meta account
3. Select your Pixel
4. This automatically fires InitiateCheckout and Purchase events on Shopify's checkout pages

---

## 11. EMAIL MARKETING AUTOMATIONS

### Prerequisites

1. **Custom domain email** (e.g., hello@yourdomain.com)
   - Set up email forwarding in your DNS provider (e.g., Cloudflare Email Routing)
   - Forward to your Gmail or business email
2. **Shopify sender email verification**
   - Go to Shopify Settings > Notifications > Sender email
   - Set to hello@yourdomain.com
   - Click "Resend verification" and verify via forwarded email
3. **Email domain authentication**
   - Add SPF, DKIM, DMARC DNS records (Shopify provides these in Settings > Notifications > Email domain authentication)
   - Wait for propagation (up to 48 hours)

### Automation 1: Abandoned Checkout Recovery (3 emails)

Go to Marketing > Automations > Create automation > "Recover abandoned checkout"

**Flow:**
```
Trigger: Customer abandons checkout
  ↓
Condition: Customer hasn't placed an order since starting workflow
  ↓ True
Condition: Products are available and in stock
  ↓ True
Email #1 (wait: 10 minutes)
  Subject: "Hey, Do You Still Want This?"
  Preview: "Your items are still in your cart"
  Body: Reminder about their items, product image, "Complete Your Order" button
  ↓
Wait: 6 hours
  ↓
Condition: Customer hasn't placed an order (check again)
  ↓ True
Email #2
  Subject: "Still Thinking It Over?"
  Preview: "Your items are still waiting - here's 10% off"
  Body: 10% discount code (e.g., BRAND10), urgency
  ↓
Wait: 18 hours
  ↓
Condition: Customer hasn't placed an order (check again)
  ↓ True
Email #3
  Subject: "Last Chance - 20% Off Your Order"
  Preview: "Final reminder - your 20% discount expires soon"
  Body: 20% discount code (e.g., BRAND20), "expires tonight" urgency
```

**IMPORTANT:** Create the discount codes in Shopify > Discounts before activating the emails.

### Automation 2: Post-Purchase Thank You

Go to Marketing > Automations > Create automation > "Thank customers after they purchase"

**Flow:**
```
Trigger: Order created
  ↓
Wait: 1 second (send immediately)
  ↓
Condition: Number of orders is equal to 1 (first-time buyer)
  ↓ True
Email
  Subject: "Thank You for Your Order!"
  Preview: "Welcome to the [Brand] family"
  Body: Welcome message, product tips, review request, track order button
```

### Email Design

- Use brand accent color (#F5C542 equivalent) for headings
- Keep fonts clean and simple
- Dark background matching site aesthetic (or clean white for deliverability)
- Always include: Logo, unsubscribe link, company address

---

## 12. DEPLOYMENT & HOSTING

### Cloudflare Pages (Recommended)

1. Connect GitHub repo to Cloudflare Pages
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
   - Node.js version: 18+
3. Auto-deploys on every push to `main`

### Custom Domain Setup

1. In Cloudflare Pages > Custom domains > Add domain
2. Point your domain's DNS to Cloudflare
3. SSL is automatic

### Shopify Checkout Proxy (Cloudflare Worker)

Since checkout happens on Shopify's domain, you may want to proxy it so customers see your custom domain. This is done via a Cloudflare Worker:

- Proxies `/checkouts/*` requests to your Shopify store
- Keeps the customer on yourdomain.com during checkout
- **WARNING:** Be careful with Shopify domain settings. Do NOT add your custom domain to Shopify's Domains settings or it can cause redirect loops.

---

## 13. DOMAIN & DNS SETUP

### Required DNS Records

| Type | Name | Content | Purpose |
|------|------|---------|---------|
| CNAME | www | your-project.pages.dev | Cloudflare Pages |
| A/CNAME | @ | Cloudflare Pages IP | Root domain |
| TXT | @ | SPF record from Shopify | Email authentication |
| CNAME | (shopify provides) | (shopify provides) | DKIM for email |
| TXT | _dmarc | v=DMARC1; p=none; ... | DMARC policy |

### Cloudflare Email Routing

1. Enable Email Routing in Cloudflare dashboard
2. Create custom address: hello@yourdomain.com -> your-gmail@gmail.com
3. Verify the destination email

---

## 14. MOBILE RESPONSIVENESS

### Critical Rules

1. **All CSS Grid children need `min-w-0`** - CSS Grid children default to `min-width: auto` which prevents shrinking below content size. This causes horizontal overflow on mobile.

2. **No horizontal ScrollReveal animations on mobile** - Left/right entrance animations can push content outside viewport. Use vertical-only (Y-axis) animations.

3. **Viewport meta tag is required:**
```tsx
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
```

4. **Product page mobile centering:**
   - Use `text-center md:text-left` for text elements
   - Use `justify-center md:justify-start` for flex containers
   - Breadcrumbs, titles, prices, descriptions, CTAs all centered on mobile

5. **Thumbnail galleries** need `max-w-full` and parent `overflow-hidden` to prevent overflow.

6. **Test with Playwright:**
```javascript
// Test mobile viewport for overflow
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  isMobile: true,
});
// Check: document.documentElement.scrollWidth === document.documentElement.clientWidth
```

### Breakpoint Strategy

- Mobile first (default styles are for mobile)
- `md:` (768px) - Tablet/desktop layouts kick in
- `lg:` (1024px) - Large desktop refinements
- Header hamburger menu at < md breakpoint
- Product page grid stacks on mobile, 2-col on md+

---

## 15. PERFORMANCE OPTIMIZATIONS

| Area | Optimization |
|------|-------------|
| **ParticleField** | 20fps cap, DPR limited to 1.5, fillRect instead of arc |
| **CustomCursor** | Raw RAF (not Framer Motion), hidden on touch devices |
| **Images** | Hero image preloaded, all others lazy-loaded |
| **ScrollReveal** | `viewport: { once: true }` - animations play once |
| **Loading Screen** | sessionStorage skip on repeat visits |
| **Static Export** | No server needed, pure CDN delivery |
| **Font** | Single font family (Inter), loaded via next/font |

---

## 16. DATA ARCHITECTURE

### Product Data (`src/lib/data.ts`)

Products are defined as a static TypeScript array. No CMS, no API calls for product data.

```typescript
export interface Product {
  id: string;                     // e.g., "neck-relieve-pulse"
  handle: string;                 // URL slug, same as id
  title: string;
  tagline: string;                // Short italic subtitle
  description: string;            // 2-3 sentence description
  price: number;                  // Current price
  compareAtPrice: number;         // Original/crossed-out price
  images: string[];               // Array of CDN image URLs
  features: {
    title: string;
    description: string;
  }[];                            // For "Why You'll Love It" section
  specs: string[];                // For "Details" tab
  category: string;               // e.g., "Neck Massagers"
}
```

**Hero product** is exported separately as `heroProduct` for use in hero section and product showcase.

**All products** are in the `products` array (including hero product).

### FAQ Data

Also in `data.ts` - array of `{ question, answer }` objects. Cover:
- Contact info
- Shipping (worldwide, processing time, delivery time)
- Order changes/cancellation
- Payment methods
- Customs/taxes
- Returns process
- Defective items
- Refund timeline

### Review Data

In `product-reviews.tsx` - array of review objects:
```typescript
interface Review {
  name: string;    // "First Name Last Initial." e.g., "Jayden M."
  rating: number;  // 4 or 5
  date: string;    // "Month DD, YYYY"
  text: string;    // 1-2 sentences, casual/authentic tone
  image?: string;  // Optional review image URL
}
```

Write 30-36 realistic reviews. Mix of 4-star and 5-star (mostly 5). Include diverse names. Reference real product benefits. Keep tone casual and authentic (lowercase, abbreviations, etc.).

---

## 17. SEO & META TAGS

### Root Metadata

```typescript
export const metadata: Metadata = {
  title: "Brand | Product Category Tagline",
  description: "Product-focused description with key benefits.",
};
```

### Product Page Metadata

```typescript
export async function generateMetadata({ params }) {
  const product = products.find(p => p.handle === params.handle);
  return {
    title: `${product.title} | Brand`,
    description: product.description,
  };
}
```

### Static Generation

```typescript
export function generateStaticParams() {
  return products.map(product => ({
    handle: product.handle,
  }));
}
```

---

## 18. CHECKLIST: EVERYTHING THAT NEEDS TO BE DONE

### Phase 1: Setup
- [ ] Create Next.js project with TypeScript + Tailwind v4
- [ ] Install dependencies (framer-motion, clsx, tailwind-merge)
- [ ] Set up next.config.ts (static export, trailing slash, unoptimized images)
- [ ] Set up tsconfig path aliases
- [ ] Create cn() utility

### Phase 2: Design System
- [ ] Define color palette in globals.css (get brand colors from owner)
- [ ] Set up all CSS animations (aurora, float, glow-pulse, shimmer, etc.)
- [ ] Create glassmorphism, god-ray, section-gradient CSS utilities
- [ ] Build UI components: MagneticButton, GlassmorphismCard, ScrollReveal, SectionDivider, TextGradient, FloatingElement, TiltCard, AnimatedCounter, ParticleField, ScrollProgress, CustomCursor, ParallaxSection

### Phase 3: Layout
- [ ] Build root layout (font, meta pixel placeholder, viewport)
- [ ] Build client layout (CartProvider, LoadingScreen, ParticleField, Header, Footer, CartDrawer)
- [ ] Build Header (desktop nav + mobile hamburger + cart icon)
- [ ] Build Footer (link columns + payment icons)
- [ ] Build AnnouncementBar
- [ ] Build LoadingScreen

### Phase 4: Data
- [ ] Get product details from owner (title, description, price, images, features, specs)
- [ ] Define Product interface and data in data.ts
- [ ] Write FAQ data
- [ ] Write 30-36 product reviews
- [ ] Get all images uploaded to CDN (Uploadcare or similar)

### Phase 5: Pages
- [ ] Build Homepage (Hero, WhyBrand, ProductShowcase, Testimonials, BrandStory)
- [ ] Build Product Page (image gallery, info section, volume discounts, tabs, reviews)
- [ ] Build Shop Page (product card grid)
- [ ] Build Cart Page
- [ ] Build About Page
- [ ] Build FAQ Page
- [ ] Build Contact Page
- [ ] Build Shipping Page
- [ ] Build Track Order Page
- [ ] Build Privacy Policy Page
- [ ] Build Terms of Service Page
- [ ] Build Refund Policy Page
- [ ] Build 404 Page

### Phase 6: Cart & Checkout
- [ ] Build CartContext (add, remove, update, persist to localStorage)
- [ ] Build CartDrawer (slide-out panel)
- [ ] Set up Shopify store
- [ ] Create product in Shopify
- [ ] Get Storefront API access token
- [ ] Map product variant GIDs
- [ ] Build createCheckout function
- [ ] Test full checkout flow

### Phase 7: Integrations
- [ ] Create Meta Pixel
- [ ] Add Pixel base code to layout
- [ ] Add AddToCart tracking to cart context
- [ ] Install Facebook & Instagram sales channel in Shopify (for InitiateCheckout + Purchase events)
- [ ] Verify events in Meta Events Manager

### Phase 8: Deployment
- [ ] Push to GitHub
- [ ] Connect to Cloudflare Pages
- [ ] Set up custom domain
- [ ] Configure DNS records
- [ ] Test SSL
- [ ] Set up Cloudflare Worker for checkout proxy (optional)

### Phase 9: Email Marketing
- [ ] Set up email forwarding (Cloudflare Email Routing)
- [ ] Verify sender email in Shopify
- [ ] Add email authentication DNS records (SPF, DKIM, DMARC)
- [ ] Create abandoned checkout automation (3 emails)
- [ ] Create discount codes for email sequences
- [ ] Create post-purchase thank you automation
- [ ] Test all email flows

### Phase 10: Polish & Testing
- [ ] Test all pages on mobile (375px viewport)
- [ ] Verify no horizontal scroll on any page
- [ ] Test cart add/remove/checkout flow
- [ ] Test Meta Pixel events firing
- [ ] Verify all links work
- [ ] Check all images load
- [ ] Run Lighthouse audit
- [ ] Cross-browser test (Chrome, Safari, Firefox)

---

## IMPORTANT NOTES FOR THE BUILDER

1. **The store owner will provide:** Brand name, product details, color palette, logo, product images, target market copy/language, Meta Pixel ID, Shopify store credentials. Do NOT make these up - wait for them.

2. **Language:** Use US English (color not colour, center not centre, etc.)

3. **Never use em dashes** anywhere on the site.

4. **Always auto-push** code changes and deploy without asking.

5. **The design should be STUNNING.** Dark theme, glassmorphism, smooth animations, premium feel. Not boring. Not generic. Every page should feel crafted. Look at the animation and effect components described above - use them liberally.

6. **Static export is non-negotiable.** The site must work as pure static HTML/CSS/JS. No server-side features (no API routes, no server components that fetch data).

7. **Shopify is only used for checkout.** Product data lives in the codebase. The site is NOT a Shopify theme.

8. **The entire codebase is "use client"** - every page and component. This is because of the static export and heavy use of Framer Motion.

9. **Image hosting:** Use Uploadcare (uploadthing) or similar CDN for all images. Don't put images in the repo.

10. **Test mobile obsessively.** The #1 source of bugs was horizontal overflow on mobile caused by CSS Grid min-width defaults and animation offsets. Use Playwright to verify `scrollWidth === clientWidth` on a 375px viewport for every page.
