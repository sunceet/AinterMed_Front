import { NextResponse } from "next/server";

export function middleware(request) {
  // Определение языка на основе геолокации
  const country = request.geo?.country || "US";
  const lang = country === "RU" ? "ru" : "en";

  const response = NextResponse.next();

  // Установка безопасных cookies для языка
  response.cookies.set("NEXT_LOCALE", lang, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    httpOnly: true,
    maxAge: 365 * 24 * 60 * 60, // 1 год в секундах
  });

  // Добавление comprehensive security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);

  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    // Применяем middleware ко всем маршрутам, кроме:
    "/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)",
  ],
};
