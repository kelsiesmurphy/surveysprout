export type Survey = {
  id: string;
  name: string;
  description: string;
  style: {
    color: string;
    rounded: number;
  };
};

export const surveys = [
  {
    id: "2UBIIU22424UBIURB",
    name: "Survey 1",
    description: "Example Survey 1",
    style: {
      color: "blue",
      rounded: 0.5,
    },
  },
  {
    id: "87658N6ION5ION6IO",
    name: "Survey 2",
    description: "Example Survey 2",
    style: {
      color: "green",
      rounded: 0.5,
    },
  },
];
