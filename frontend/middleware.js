import { NextResponse } from "next/server";

export function middleware(request) {
  // На Vercel (или Cloudflare) работает geo
  const country = request.geo?.country || "US"; // локально почти всегда "US"
  const lang = country === "RU" ? "ru" : "en";
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", lang, { path: "/" }); // кладём язык в куку
  return response;
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"], // на все страницы, кроме api/_next/static и файлов
};
