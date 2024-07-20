export const useFormatQueryData = (data: Queries.IndexPageQuery) => {
  const HERO_DATA = data.wpPage?.pageHomepage?.pageTitle

  return {
    HERO_DATA,
  }
}
