export type Content = {
  heading: string;
  subheading: string;
  resourceUrl: string;
  date: {
    start: string;
    end?: string;
  };
  body: string | null;
  highlights: string[];
  location: string;
};
