"use client";

interface VolumeDiscountsProps {
  price: number;
  quantity: number;
  onQuantityChange: (qty: number) => void;
}

const tiers = [
  { qty: 1, discount: 0, label: "" },
  { qty: 2, discount: 10, label: "10% OFF" },
  { qty: 3, discount: 20, label: "20% OFF" },
];

export function VolumeDiscounts({
  price,
  quantity,
  onQuantityChange,
}: VolumeDiscountsProps) {
  const activeTier =
    tiers.findLast((t) => quantity >= t.qty) || tiers[0];

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
      <div className="px-4 py-2.5 border-b border-white/[0.06]">
        <p className="text-xs font-semibold tracking-wider uppercase text-gold/80">
          Buy More, Save More
        </p>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {tiers.map((tier) => {
          const tierPrice = price * (1 - tier.discount / 100);
          const totalSave = price * tier.qty - tierPrice * tier.qty;
          const isActive = quantity >= tier.qty && (tiers.find((t) => t.qty > tier.qty && quantity >= t.qty) === undefined || tier.qty === activeTier.qty);
          const isSelected = tier.qty === activeTier.qty;

          return (
            <button
              key={tier.qty}
              onClick={() => onQuantityChange(tier.qty)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "bg-gold/[0.06]"
                  : "hover:bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-gold bg-gold"
                      : "border-white/20"
                  }`}
                >
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-space-black" />
                  )}
                </div>
                <div>
                  <span className="text-sm font-medium">
                    Buy {tier.qty}
                  </span>
                  {tier.label && (
                    <span className="ml-2 text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-semibold">
                      {tier.label}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold">
                  ${tierPrice.toFixed(2)}
                </span>
                <span className="text-[10px] text-white/30 ml-1">each</span>
                {totalSave > 0 && (
                  <p className="text-[10px] text-green-400/70">
                    Save ${totalSave.toFixed(2)}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
