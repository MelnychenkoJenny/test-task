import axios from 'axios';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const API_URL = 'https://api.punkapi.com/v2/beers';
const RECIPES_PER_PAGE = 30;
const RECIPES_PER_VISIBLE_ON_PAGE = 15;

const useStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      loading: false,
      error: null,
      currentPage: 1,
      isPageLoaded: false,
      pageForVisible: 1,
      lastIndexRecipe: null,
      visibleRecipes: [],
      selectedRecipes: [],
      recipeDetails: [],
      deleteButtonVisible: false,

      fetchRecipes: async page => {
        set({ loading: true });
        try {
          const response = await axios.get(
            `${API_URL}?page=${page}&per_page=${RECIPES_PER_PAGE}`
          );
          const dataRecipes = await response.data;
          if (dataRecipes.length === 0) {
            return;
          }

          set(state => ({
            ...state,
            recipes: [...state.recipes, ...dataRecipes],
            loading: false,
            isPageLoaded: true,
            deleteButtonVisible: false,
          }));
          get().getVisibleRecipes(page);
        } catch (e) {
          let error = e;
          if (e.statusCode === 400) {
            error = await e.json();
          }
          set({ error });
        } finally {
          set({ loading: false });
        }
      },
      nextPage: () => {
        set(state => {
          if (state.currentPage > state.pageForVisible) {
            return {
              pageForVisible: state.pageForVisible + 1,
            };
          }
          const nextPage = state.currentPage + 1;
          const nextPageForVisible = state.pageForVisible + 1;

          return {
            currentPage: nextPage,
            pageForVisible: nextPageForVisible,
            isPageLoaded: false,
          };
        });
      },

      prevPage: () => {
        set({ loading: true });
        set(state => {
          const prevPageforVisible = state.pageForVisible - 1;
          return {
            pageForVisible: prevPageforVisible,
            loading: false,
          };
        });
      },
      getVisibleRecipes: pageForVisible => {
        set({ loading: true });
        set(state => {
          const start = (pageForVisible - 1) * RECIPES_PER_VISIBLE_ON_PAGE;
          const end = pageForVisible * RECIPES_PER_VISIBLE_ON_PAGE;
          const visibleRecipes = [...state.recipes].slice(start, end);
          return {
            visibleRecipes,
            loading: false,
          };
        });
      },
      selectRecipe: recipe => {
        set(state => ({
          selectedRecipes: state.selectedRecipes.includes(recipe)
            ? state.selectedRecipes.filter(r => r !== recipe)
            : [...state.selectedRecipes, recipe],
          deleteButtonVisible: true,
        }));
      },
      setlastIndexRecipe: id => {
        set({ lastIndexRecipe: id });
      },

      deleteSelectedRecipes: () => {
        set(state => {
          const updatedRecipes = state.recipes.filter(
            recipe => !state.selectedRecipes.includes(recipe)
          );
          return {
            ...state,
            recipes: updatedRecipes,
            loading: false,
            error: null,
            selectedRecipes: [],
            deleteButtonVisible: false,
          };
        });
      },
      getRecipeById: async id => {
        set(() => ({ loading: true }));
        try {
          const response = await axios.get(`${API_URL}/${id}`);
          const recipeDetails = await response.data[0];
          set({ recipeDetails, isLoading: false });
        } catch (e) {
          let error = e;
          if (e.statusCode === 400) {
            error = await e.json();
          }
          set({ error });
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: 'recipes-storage', // Унікальне ім'я для збереження
      getStorage: () => createJSONStorage(() => localStorage), // Використовуємо localStorage
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key !== 'selectedRecipes')
        ),
    }
  )
);

export default useStore;
