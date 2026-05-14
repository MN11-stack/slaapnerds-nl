// Vercel Edge Function: liefert aktuelle Google-Places-Werte (rating + userRatingCount).
// Cache: 24h auf Vercel-Edge. Bei API-Fehler oder fehlender Env-Var: Fallback.

export const config = { runtime: "edge" };

const PLACE_ID = "ChIJU_xNmvV9uEcRN3g7v_UiYr4";
const FALLBACK = { rating: 4.9, userRatingCount: 10 };

export default async function handler() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return jsonResponse(FALLBACK, 300);
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount&key=${apiKey}`,
    );
    if (!res.ok) return jsonResponse(FALLBACK, 300);
    const data = await res.json();
    return jsonResponse(
      {
        rating: typeof data.rating === "number" ? data.rating : FALLBACK.rating,
        userRatingCount:
          typeof data.userRatingCount === "number"
            ? data.userRatingCount
            : FALLBACK.userRatingCount,
      },
      86400,
    );
  } catch {
    return jsonResponse(FALLBACK, 300);
  }
}

function jsonResponse(data, maxAge) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge}`,
    },
  });
}
