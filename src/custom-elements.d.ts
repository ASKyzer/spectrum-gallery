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
    "comet-feedback-message": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      theme?: string;
      title?: string;
      primaryButtonText?: string;
      secondaryButtonText?: string;
    };
  }
}
