export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const lastSegment = url.pathname.slice(url.pathname.lastIndexOf('/') + 1);

  if (!lastSegment.includes('.')) {
    let normalized = url.pathname.toLowerCase();
    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    if (normalized !== url.pathname) {
      url.pathname = normalized;
      return Response.redirect(url.toString(), 301);
    }
  }

  return next();
}
