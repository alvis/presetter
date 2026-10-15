/**
 * demonstrates an exported function handler with an uppercase HTTP method name
 * @returns a JSON response identifying the method
 */
export function GET(): Response {
  return Response.json({ method: 'GET' });
}

/**
 * demonstrates an exported variable handler with an uppercase HTTP method name
 * @returns a JSON response identifying the method
 */
export const POST = (): Response => Response.json({ method: 'POST' });

/**
 * handles an example PUT request
 * @returns a JSON response identifying the method
 */
export function PUT(): Response {
  return Response.json({ method: 'PUT' });
}

/**
 * handles an example PATCH request
 * @returns a JSON response identifying the method
 */
export const PATCH = (): Response => Response.json({ method: 'PATCH' });

/**
 * handles an example DELETE request
 * @returns a JSON response identifying the method
 */
export function DELETE(): Response {
  return Response.json({ method: 'DELETE' });
}

/**
 * handles an example HEAD request without a response body
 * @returns an empty successful response
 */
export const HEAD = (): Response => new Response(null, { status: 200 });

/**
 * lists the HTTP methods supported by this example route
 * @returns an empty response with the Allow header
 */
export function OPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: { Allow: 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS' },
  });
}
