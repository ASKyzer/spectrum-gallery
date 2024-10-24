declare namespace JSX {
  interface IntrinsicElements {
    [elemName: `comet-${string}`]: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { [key: string]: unknown },
      HTMLElement
    >;
    [elemName: `vaadin-${string}`]: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { [key: string]: unknown },
      HTMLElement
    >;
  }
}
