"use client";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Jayden M.",
    rating: 5,
    date: "Feb 28, 2026",
    text: "my girlfriend got this for my birthday and honestly its way better than i expected. the colors are super vivid and it covers my whole ceiling. we leave it on every night now",
    image: "https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4",
  },
  {
    name: "Samantha R.",
    rating: 5,
    date: "Feb 22, 2026",
    text: "Bought two of these, one for my room and one for my son's room. He's absolutely obsessed with it. The timer feature is perfect for bedtime. Great quality for the price.",
  },
  {
    name: "Tyler K.",
    rating: 4,
    date: "Feb 15, 2026",
    text: "looks amazing in my gaming setup. the remote is clutch so i dont have to get up to change colors. only wish it had bluetooth speaker built in but for 40 bucks cant complain",
  },
  {
    name: "Aisha P.",
    rating: 5,
    date: "Feb 8, 2026",
    text: "I've bought galaxy projectors before and they were all kinda dim and cheap looking. This one actually surprised me. The nebula effect is genuinely beautiful and it's really quiet.",
  },
  {
    name: "Marcus D.",
    rating: 5,
    date: "Jan 30, 2026",
    text: "shipped fast, packaged well, works perfectly. the 12 color modes are all different enough to actually matter. purple + blue combo is insane",
  },
  {
    name: "Emily W.",
    rating: 5,
    date: "Jan 22, 2026",
    text: "Got this for my dorm room and literally everyone who comes in asks about it. Such a vibe. The auto shutoff timer is really nice too since I always fall asleep with it on",
  },
  {
    name: "Chris L.",
    rating: 4,
    date: "Jan 15, 2026",
    text: "really solid little projector. projection covers about 80% of my ceiling in a medium sized bedroom. would recommend for sure",
  },
  {
    name: "Nina G.",
    rating: 5,
    date: "Jan 8, 2026",
    text: "My apartment feels like a completely different place with this thing on. I use the warm tones for relaxing and the cool blues for working. Love it so much I bought one for my sister too.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#F5C542" : "none"}
          stroke="#F5C542"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function ProductReviews() {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(
    (r) => reviews.filter((rev) => rev.rating === r).length
  );

  return (
    <div>
      {/* Summary */}
      <div className="flex items-start gap-8 mb-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-gold">{avgRating.toFixed(1)}</p>
          <StarRating rating={Math.round(avgRating)} />
          <p className="text-xs text-white/30 mt-1">
            {reviews.length} reviews
          </p>
        </div>

        {/* Rating bars */}
        <div className="flex-1 space-y-1.5">
          {[5, 4, 3, 2, 1].map((rating, i) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-xs text-white/40 w-3">{rating}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#F5C542" stroke="#F5C542" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gold/70"
                  style={{
                    width: `${
                      reviews.length > 0
                        ? (ratingCounts[i] / reviews.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
              <span className="text-xs text-white/30 w-5 text-right">
                {ratingCounts[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-gold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium">{review.name}</span>
                <span className="text-[10px] text-green-400/60 border border-green-400/20 px-1.5 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <span className="text-[10px] text-white/25">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-sm text-white/50 mt-2 leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
