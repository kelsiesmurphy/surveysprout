interface FooterItem {
  title: string;
  link: string;
}

export interface FooterColumn {
  title: string;
  items: FooterItem[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "SurveySprout",
    items: [
      {
        title: "Features",
        link: "#features",
      },
      {
        title: "Pricing",
        link: "#pricing",
      },
      {
        title: "FAQ",
        link: "#faq",
      },
      {
        title: "Terms and Conditions",
        link: "/terms",
      },
      {
        title: "Privacy Policy",
        link: "/privacy",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Preview",
        link: "/preview",
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "Twitter (X)",
        link: "",
      },
      {
        title: "Instagram",
        link: "",
      },
    ],
  },
];
