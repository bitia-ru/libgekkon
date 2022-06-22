const singleCategoryToString = (category, kind) => (
  kind === 'boulder' ? (
    category?.toString()?.toUpperCase()
  ) : (
    category?.toString()?.toLowerCase()
  )
);

const categoryRangeToString = (categoryFrom, categoryTo, kind) => (
  singleCategoryToString(categoryFrom, kind) + '-' + singleCategoryToString(categoryTo, kind)
);

export const routeCategoryToString = route => (
  (Array.isArray(route?.category)) ? (
    categoryRangeToString(route?.category[0], route?.category[1], route?.kind)
  ) : (
    singleCategoryToString(route?.category, route?.kind)
  )
);
