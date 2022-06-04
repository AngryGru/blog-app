import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../common/types";

export type PostState = {
  selectedPost: CardType | null;
  selectedImage: string;
  cardsList: CardType[];
  postsTab: string;

  isAllPostsLoading: boolean;
  isSinglePostLoading: boolean;
};

const initialState: PostState = {
  selectedPost: null,
  selectedImage: "",
  cardsList: [],
  postsTab: "allPosts",
  isAllPostsLoading: false,
  isSinglePostLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setPosts: (state, action) => {
      state.cardsList = action.payload.map((card: CardType) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    loadData: (state, action) => {},
    setPost: (state, action: PayloadAction<CardType>) => {
      state.selectedPost = action.payload;
    },
    loadPost: (state, action) => {},

    setLikePost: (state: any, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.likeStatus = action.payload.action;
      }
    },
    setSavedPost: (state: any, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.saved = action.payload.action === "save";
      }
    },
    setPostsTab: (state, action) => {
      state.postsTab = action.payload;
    },
    setAllPostsLoading: (state, action) => {
      state.isAllPostsLoading = action.payload;
    },
    setSinglePostLoading: (state, action) => {
      state.isSinglePostLoading = action.payload;
    },
  },
});

export const {
  setSelectedImage,
  setPosts,
  loadData,
  setPost,
  loadPost,
  setLikePost,
  setSavedPost,
  setPostsTab,
  setAllPostsLoading,
  setSinglePostLoading,
} = postsSlice.actions;

export default postsSlice.reducer;

export const PostsSelectors = {
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getSelectedImage: (state: any) => state.posts.selectedImage,
  getPostsTab: (state: any) => state.posts.postsTab,
  getCards: (state: any, filter: any) => {
    const cards = state.posts.cardsList;
    switch (filter) {
      case "likedPosts":
        return cards.filter((item: CardType) => item.likeStatus === "like");
      case "dislikedPosts":
        return cards.filter((item: CardType) => item.likeStatus === "dislike");
      case "savedPosts":
        return cards.filter((item: CardType) => item.saved);
      case "allPosts":
        return cards;
      default:
        return cards;
    }
  },
  getAllPostsLoading: (state: any) => state.posts.isAllPostsLoading,
  getSinglePostLoading: (state: any) => state.posts.isSinglePostLoading,
};
