export type Content = {
  heading: string;
  subheading: string;
  resourceUrl: string;
  date: {
    start: string;
    end?: string;
    excludeMonth?: boolean;
  };
  body: string | null;
  highlights: string[];
  location: string;
};
