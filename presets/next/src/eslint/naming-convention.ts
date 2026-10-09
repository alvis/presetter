/** permits the HTTP method export names required by Next.js route handlers */
export const ROUTE_HANDLER_NAMING_EXCEPTION = {
  selector: ['function', 'variable'],
  modifiers: ['exported'],
  format: null,
  filter: {
    regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$',
    match: true,
  },
};
