declare module "@splidejs/react-splide" {
  import { ReactNode } from "react";

  export const Splide: (
    props: SplideProps & { children?: ReactNode }
  ) => JSX.Element;
  export const SplideSlide: (props: { children?: ReactNode }) => JSX.Element;
  export const SplideTrack: (props: { children?: ReactNode }) => JSX.Element;
}

