export function camelize(text: string) {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}
