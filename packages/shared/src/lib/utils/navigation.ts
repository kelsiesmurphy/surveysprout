export const generateSurveyUrl = (slug: string, page?: string) => {
  return page ? `/${slug}/${page}` : `/${slug}`;
};
