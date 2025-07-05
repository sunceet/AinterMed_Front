import { NextResponse } from "next/server";

export function middleware(request) {
  // На Vercel (на проде) определяет страну реально, локально — почти всегда "US"
  const country = request.geo?.country || "US";
  const lang = country === "RU" ? "ru" : "en";

  // Кука с языком — всегда перезаписывается!
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", lang, { path: "/" });

  return response;
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"], // на все страницы, кроме api, _next и статических файлов
};
