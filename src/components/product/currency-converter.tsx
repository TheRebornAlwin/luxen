"use client";

import { useState, useEffect } from "react";

// Approximate exchange rates (USD base)
const RATES: Record<string, { rate: number; symbol: string; name: string }> = {
  USD: { rate: 1, symbol: "$", name: "USD" },
  EUR: { rate: 0.92, symbol: "€", name: "EUR" },
  GBP: { rate: 0.79, symbol: "£", name: "GBP" },
  CAD: { rate: 1.37, symbol: "CA$", name: "CAD" },
  AUD: { rate: 1.54, symbol: "A$", name: "AUD" },
  JPY: { rate: 149.5, symbol: "¥", name: "JPY" },
  INR: { rate: 83.1, symbol: "₹", name: "INR" },
  BRL: { rate: 4.97, symbol: "R$", name: "BRL" },
  MXN: { rate: 17.15, symbol: "MX$", name: "MXN" },
  SEK: { rate: 10.42, symbol: "kr", name: "SEK" },
  NZD: { rate: 1.67, symbol: "NZ$", name: "NZD" },
  CHF: { rate: 0.88, symbol: "CHF", name: "CHF" },
  SGD: { rate: 1.34, symbol: "S$", name: "SGD" },
  AED: { rate: 3.67, symbol: "AED", name: "AED" },
  KRW: { rate: 1330, symbol: "₩", name: "KRW" },
};

// Map country codes to currencies
const COUNTRY_CURRENCY: Record<string, string> = {
  US: "USD", GB: "GBP", CA: "CAD", AU: "AUD", JP: "JPY",
  IN: "INR", BR: "BRL", MX: "MXN", SE: "SEK", NZ: "NZD",
  CH: "CHF", SG: "SGD", AE: "AED", KR: "KRW",
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR",
  BE: "EUR", AT: "EUR", PT: "EUR", IE: "EUR", FI: "EUR",
};

function roundPrice(price: number, currency: string): string {
  if (currency === "JPY" || currency === "KRW") {
    const rounded = Math.floor(price / 100) * 100 - 1;
    return rounded.toLocaleString();
  }
  const whole = Math.floor(price);
  return (whole - 0.01).toFixed(2);
}

export function useCurrency() {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const saved = sessionStorage.getItem("luxen-currency");
    if (saved && RATES[saved]) {
      setCurrency(saved);
      return;
    }

    // Try to detect from timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const region = new Intl.Locale(navigator.language).region;
      if (region && COUNTRY_CURRENCY[region]) {
        const detected = COUNTRY_CURRENCY[region];
        setCurrency(detected);
        sessionStorage.setItem("luxen-currency", detected);
      }
    } catch {
      // fallback to USD
    }
  }, []);

  const convert = (usdPrice: number): string => {
    const info = RATES[currency] || RATES.USD;
    const converted = usdPrice * info.rate;
    return `${info.symbol}${roundPrice(converted, currency)}`;
  };

  return { currency, convert, currencyName: RATES[currency]?.name || "USD" };
}
