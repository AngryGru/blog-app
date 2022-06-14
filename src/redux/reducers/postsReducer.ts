import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../common/types";

export type PostState = {
  selectedPost: CardType | null;
  selectedImage: string;
  cardsList: CardType[];
  myCardsList: CardType[];
  postsTab: string;

  isAllPostsLoading: boolean;
  isSinglePostLoading: boolean;
  totalAllPostsCount: number;
};

const initialState: PostState = {
  selectedPost: null,
  selectedImage: "",
  cardsList: [],
  myCardsList: [],
  postsTab: "allPosts",
  isAllPostsLoading: false,
  isSinglePostLoading: false,
  totalAllPostsCount: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.cardsList = action.payload.map((card: CardType) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    loadAllPosts: (state, action: any) => {},
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardType>) => {
      state.selectedPost = action.payload;
    },
    loadPost: (state, action) => {},
    setMyPosts: (state, action) => {
      state.myCardsList = action.payload.map((card: CardType) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    loadMyPosts: (state, action: any) => {},
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
    setTotalAllPostsCount: (state, action) => {
      state.totalAllPostsCount = action.payload;
    },
  },
});

export const {
  setSelectedImage,
  setAllPosts,
  loadAllPosts,
  setSelectedPost,
  loadPost,
  setLikePost,
  setSavedPost,
  setPostsTab,
  setAllPostsLoading,
  setSinglePostLoading,
  loadMyPosts,
  setMyPosts,
  setTotalAllPostsCount,
} = postsSlice.actions;

export default postsSlice.reducer;

export const PostsSelectors = {
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getSelectedImage: (state: any) => state.posts.selectedImage,
  getPostsTab: (state: any) => state.posts.postsTab,
  getCards: (state: any, filter: any, isPersonal: boolean) => {
    const cards = isPersonal ? state.posts.myCardsList : state.posts.cardsList;
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
  getTotalAllPostsCount: (state: any) => state.posts.totalAllPostsCount,
};
