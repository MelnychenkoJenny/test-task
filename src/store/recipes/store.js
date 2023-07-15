import axios from 'axios';
import { create } from 'zustand';

const API_URL = 'https://api.punkapi.com/v2/beers';
const RECIPES_PER_PAGE = 30;
const RECIPES_PER_VISIBLE_ON_PAGE = 15;

const useStore = create((set, get) => ({
  recipes: [],
  loading: false,
  error: null,
  currentPage: 1,
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
      set(state => ({
        ...state,
        recipes: [...state.recipes, ...dataRecipes],
        loading: false,
      }));

      set(state => {
        const start = (page - 1) * RECIPES_PER_VISIBLE_ON_PAGE;
        const end = page * RECIPES_PER_VISIBLE_ON_PAGE;
        const visibleRecipes = state.recipes.slice(start, end);

        return {
          ...state,
          visibleRecipes,
          loading: false,
        };
      });
    } catch (e) {
      let error = e
      // custom error
      if (e.statusCode === 400) {
        error = await e.json()
      }
      set({ error })
    } finally {
      set({ loading: false });
    }
  },
  nextPage: () => {
    set(state => {
      const nextPage = state.currentPage + 1;

      return {
        currentPage: nextPage,
      };
    });
  },

  prevPage: () => {
    set(state => {
      const prevPage = state.currentPage - 1;

      return {
        currentPage: prevPage,
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
    set(state => {
      const start = (state.currentPage - 1) * RECIPES_PER_VISIBLE_ON_PAGE;
      const end = state.currentPage * RECIPES_PER_VISIBLE_ON_PAGE;
      const visibleRecipes = state.recipes.slice(start, end);

      return {
        visibleRecipes,
        loading: false,
      };
    });
  },
  getRecipeById: async (id) => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      set({ recipeDetails: await response.data[0], isLoading: false });
    } catch (e) {
      let error = e
      // custom error
      if (e.statusCode === 400) {
        error = await e.json()
      }
      set({ error })
    }}
    
}));

export default useStore;
