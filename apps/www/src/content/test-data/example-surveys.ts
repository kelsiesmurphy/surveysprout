export type Survey = {
  id: string;
  name: string;
  description: string;
  theme: {
    color: string;
    radius: number;
  };
};

export const surveys = [
  {
    id: "2UBIIU22424UBIURB",
    name: "Survey 1",
    description: "Example Survey 1",
    theme: {
      color: "red",
      radius: 0.5,
    },
  },
  {
    id: "87658N6ION5ION6IO",
    name: "Survey 2",
    description: "Example Survey 2",
    theme: {
      color: "green",
      radius: 0.5,
    },
  },
];
