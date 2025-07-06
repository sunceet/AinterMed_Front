/**
 * @param {string} name
 * @param {string} value
 * @param {object} options
 * @param {number} options.days
 * @param {string} options.path
 * @param {boolean} options.secure - Требовать HTTPS (по умолчанию: true)
 * @param {boolean} options.httpOnly - Запретить доступ к JS (по умолчанию: true)
 * @param {'Strict' | 'Lax' | 'None'} options.sameSite - Атрибут SameSite (по умолчанию: 'Strict')
 */
export function setCookie(name, value, options = {}) {
  if (typeof document === "undefined") return;

  const {
    days = 365,
    path = "/",
    secure = true,
    sameSite = "Strict",
  } = options;

  // Дезинфекция входов
  const sanitizedName = encodeURIComponent(name);
  const sanitizedValue = encodeURIComponent(value);

  // Рассчитать срок действия
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  // Создаём строку cookie (без HttpOnly)
  const cookieParts = [
    `${sanitizedName}=${sanitizedValue}`,
    `expires=${date.toUTCString()}`,
    `path=${path}`,
    `SameSite=${sameSite}`,
  ];

  if (secure) cookieParts.push("Secure");

  document.cookie = cookieParts.join("; ");
}

/**
 * Получение значения cookie по имени
 * @param {string} name - Cookie name
 * @returns {string|null} Значение cookie или null, если оно не найдено
 */
export function getCookie(name) {
  if (typeof document === "undefined") return null;

  const sanitizedName = encodeURIComponent(name);
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(sanitizedName + "="));

  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

/**
 * Удалить куки по имени
 * @param {string} name - название куки
 * @param {string} path - Путь к файлам cookie (по умолчанию: '/')
 */
export function deleteCookie(name, path = "/") {
  if (typeof document === "undefined") return;

  const sanitizedName = encodeURIComponent(name);
  document.cookie = `${sanitizedName}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
