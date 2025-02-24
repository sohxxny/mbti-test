import { create } from 'zustand';

// * 유저 정보 및 로그인 여부에 관한 store 객체
export const authStore = create((set) => ({
  user: null,
  isLogin: false,

  /**
   * * 로그인 상태를 set
   * @param {boolean} isLogin - 로그인 여부
   */
  setLogin: (isLogin) => set({ isLogin }),

  /**
   * * 유저 정보 상태를 set
   * @param {Object} user - 유저 정보 객체 { avatar, nickname }
   */
  setUser: (user) => set({ user }),
}));
