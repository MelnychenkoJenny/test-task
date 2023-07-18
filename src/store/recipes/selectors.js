export const selectFetchRecipes = state => state.fetchRecipes;
export const selectRecipes = state => state.recipes;
export const selectSelectRecipe = state => state.selectRecipe;
export const selectSelectedRecipes = state => state.selectedRecipes;
export const selectCurrentPage = state => state.currentPage;
export const selectNextPage = state => state.nextPage;
export const selectPrevPage = state => state.prevPage;
export const selectVisibleRecipes = state => state.visibleRecipes;
export const selectGetVisibleRecipes = state => state.getVisibleRecipes;
export const selectPageForVisible = state => state.pageForVisible;
export const selectGetRecipeById = state => state.getRecipeById;
export const selectRecipeDetails = state => state.recipeDetails;
export const selectDeleteButtonVisible = state => state.deleteButtonVisible;
export const selectDeleteSelectedRecipes = state => state.deleteSelectedRecipes;

export const selectIsPageLoaded = state => state.isPageLoaded;
export const selectLoading = state => state.loading;
export const selectError = state => state.error;
