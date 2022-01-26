export const routeCategoryToString = route => (
  (route?.kind === 'boulder' ? (
    route?.category?.toString()?.toUpperCase()
  ) : (
    route?.category?.toString()?.toLowerCase()
  ))
);
