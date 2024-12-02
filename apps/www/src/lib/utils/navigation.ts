export const generateSurveyUrl = (slug: string, page?: string) => {
  return page ? `/dashboard/${slug}/${page}` : `/dashboard/${slug}`;
};
