// Props from ComponentBaseProps and LayoutProps that only drive styling and must never reach the DOM
export const STYLE_ONLY_PROPS = [
  "overflow",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "autofocus",
  "size",
] as const;

export function omitProps(...keys: string[]) {
  const blocked = new Set<string>(keys);
  return { shouldForwardProp: (prop: string) => !blocked.has(prop) };
}
