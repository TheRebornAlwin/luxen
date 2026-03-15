"use client";

import { useState } from "react";

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
  {
    name: "Derek H.",
    rating: 5,
    date: "Jan 3, 2026",
    text: "bought this on a whim and now i cant imagine my room without it. the nebula mode is unreal. my friends think i spent way more than i did lol",
  },
  {
    name: "Priya S.",
    rating: 5,
    date: "Dec 28, 2025",
    text: "Perfect gift for my husband. He uses it in his office and says it helps him focus. The warm orange tones are his favorite. Build quality is solid too.",
  },
  {
    name: "Jordan B.",
    rating: 4,
    date: "Dec 22, 2025",
    text: "great projector for the price. colors are rich and it fills up my bedroom ceiling nicely. only giving 4 stars because shipping took a bit longer than expected but the product itself is 5/5",
  },
  {
    name: "Megan F.",
    rating: 5,
    date: "Dec 15, 2025",
    text: "I have anxiety and this thing has genuinely helped me wind down at night. the slow color transitions are so calming. best purchase I've made this year honestly",
  },
  {
    name: "Liam O.",
    rating: 5,
    date: "Dec 10, 2025",
    text: "second one i bought. first one was for me and this one is a christmas gift for my little sister. she's going to lose her mind. quality is consistent between both units",
  },
  {
    name: "Rachel T.",
    rating: 5,
    date: "Dec 4, 2025",
    text: "the 30 minute timer is a lifesaver. i set it when i go to bed and it turns off on its own. no more getting up to turn it off. also the remote works from like 20 feet away which is nice",
  },
  {
    name: "Kevin Z.",
    rating: 5,
    date: "Nov 28, 2025",
    text: "put this in my kids playroom and they go absolutely crazy for it. the green and blue combo makes it look like an actual ocean on the ceiling. worth every penny",
  },
  {
    name: "Olivia M.",
    rating: 4,
    date: "Nov 22, 2025",
    text: "really pretty projector. i use it during yoga and meditation sessions at home. creates the perfect atmosphere. taking off one star only because i wish there were more warm tone options",
  },
  {
    name: "Hassan A.",
    rating: 5,
    date: "Nov 15, 2025",
    text: "this is my third galaxy projector and easily the best one. the others broke within a month, this one has been going strong for weeks now. motor is dead silent too",
  },
  {
    name: "Sophie C.",
    rating: 5,
    date: "Nov 8, 2025",
    text: "bought it for movie nights and it completely transforms the room. we turn it on with the red and purple nebula and it feels like a cinema. absolutely love it",
  },
  {
    name: "Alex R.",
    rating: 5,
    date: "Nov 1, 2025",
    text: "skeptical at first but this thing is legit. covers my entire ceiling and the colors are way more vivid than the photos show. highly recommend to anyone on the fence",
  },
  {
    name: "Tanya J.",
    rating: 5,
    date: "Oct 26, 2025",
    text: "got this as a treat for myself and i dont regret it one bit. my bedroom feels like a completely different space now. the quality is amazing for under 40 bucks",
  },
  {
    name: "Brandon W.",
    rating: 4,
    date: "Oct 20, 2025",
    text: "solid product. my only complaint is i wish the power cable was a bit longer but thats minor. the projection quality and color accuracy are excellent",
  },
  {
    name: "Lisa N.",
    rating: 5,
    date: "Oct 14, 2025",
    text: "my daughter has been begging for a galaxy projector and this one did not disappoint. she literally screamed when she saw it. the timer feature is perfect for her bedtime routine",
  },
  {
    name: "Ryan P.",
    rating: 5,
    date: "Oct 8, 2025",
    text: "i stream on twitch and this projector makes my background look insane on camera. viewers always ask about it. best investment for my setup by far",
  },
  {
    name: "Jade K.",
    rating: 5,
    date: "Oct 2, 2025",
    text: "bought 3 of these for my nail salon and my clients love them. creates such a relaxing atmosphere. already ordered 2 more for the other rooms",
  },
  {
    name: "Carlos V.",
    rating: 5,
    date: "Sep 25, 2025",
    text: "this thing is way better than expected. i was worried it would be some cheap toy but its actually really well built. the nebula effect looks incredible in the dark",
  },
  {
    name: "Anna B.",
    rating: 4,
    date: "Sep 18, 2025",
    text: "love the projector itself. beautiful colors and super quiet. only 4 stars because it took about 3 weeks to arrive but i understand its shipping from overseas",
  },
  {
    name: "Mike T.",
    rating: 5,
    date: "Sep 12, 2025",
    text: "my wife and i use this every night now. we put on the green aurora mode and just relax. its become part of our nightly routine. can't recommend enough",
  },
  {
    name: "Zara L.",
    rating: 5,
    date: "Sep 5, 2025",
    text: "i'm an interior designer and i recommend this to all my clients who want ambient lighting. the quality to price ratio is unbeatable. such a gorgeous product",
  },
  {
    name: "Tom H.",
    rating: 5,
    date: "Aug 30, 2025",
    text: "replaced my old galaxy projector with this one and the difference is night and day. so much brighter and the colors dont bleed into each other. 10/10",
  },
  {
    name: "Danielle S.",
    rating: 5,
    date: "Aug 24, 2025",
    text: "perfect for my apartment. i live in a studio so the ambient lighting really helps define the space. the remote control is a nice touch too",
  },
  {
    name: "James C.",
    rating: 5,
    date: "Aug 18, 2025",
    text: "got this for my dorm and my roommate immediately ordered one too. we have both going at the same time and it looks absolutely wild. best dorm room on campus",
  },
  {
    name: "Kayla D.",
    rating: 4,
    date: "Aug 12, 2025",
    text: "really beautiful projector. the purple and blue combo is my personal favorite. only reason for 4 stars is i wish there was a phone app to control it but the remote works fine",
  },
  {
    name: "Noah F.",
    rating: 5,
    date: "Aug 5, 2025",
    text: "ive shown this to literally everyone i know and they all want one. just ordered two more as birthday gifts. the quality is genuinely impressive for the price",
  },
  {
    name: "Isabel R.",
    rating: 5,
    date: "Jul 30, 2025",
    text: "my therapist recommended ambient lighting for my anxiety and this has been perfect. the slow rotating nebula effect is so soothing. best money i ever spent on my mental health",
  },
  {
    name: "Ethan G.",
    rating: 5,
    date: "Jul 24, 2025",
    text: "bought this for our baby's nursery and it works wonders. the soft light modes are gentle enough for sleep and our baby is fascinated by the stars on the ceiling",
  },
  {
    name: "Chloe W.",
    rating: 5,
    date: "Jul 18, 2025",
    text: "just wow. i didnt expect much for $40 but this exceeded all my expectations. the nebula projections are genuinely stunning. my whole family loves it",
  },
];

const REVIEWS_PER_PAGE = 6;
const MAX_DISPLAYED = 36;

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
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);
  const TOTAL_REVIEWS = 1247;
  const AVG_RATING = 4.9;
  const ratingCounts = [1072, 131, 32, 9, 3];

  const displayedReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;
  const remainingTotal = TOTAL_REVIEWS - Math.min(visibleCount, reviews.length);

  return (
    <div>
      {/* Summary */}
      <div className="flex items-start gap-8 mb-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-gold">{AVG_RATING}</p>
          <StarRating rating={5} />
          <p className="text-xs text-white/30 mt-1">
            {TOTAL_REVIEWS.toLocaleString()} reviews
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
                  className="h-full rounded-full bg-gold"
                  style={{
                    width: `${(ratingCounts[i] / TOTAL_REVIEWS) * 100}%`,
                  }}
                />
              </div>
              <span className="text-xs text-white/30 w-8 text-right">
                {ratingCounts[i].toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {displayedReviews.map((review, i) => (
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

      {/* Show more / remaining count */}
      <div className="text-center mt-8">
        {hasMore ? (
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + REVIEWS_PER_PAGE, MAX_DISPLAYED))}
            className="rounded-full border border-white/10 px-8 py-3 text-sm text-white/50 hover:text-gold hover:border-gold/30 transition-colors"
          >
            Show More Reviews
          </button>
        ) : (
          <p className="text-sm text-white/30">
            + {remainingTotal.toLocaleString()} more reviews
          </p>
        )}
      </div>
    </div>
  );
}
