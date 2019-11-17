// ローディングフラグの状態管理

export const state = () => ({
  isLoading: false
});

export const getters = {
  isLoading: (state: { isLoading: boolean }) => {
    return state.isLoading;
  }
};

export const mutations = {
  CHANGE_IS_LOADING: (state: { isLoading: boolean }, newIsLoading: boolean) =>
    (state.isLoading = newIsLoading)
};
