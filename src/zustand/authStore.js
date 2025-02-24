import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// * 유저 정보 및 로그인 여부에 관한 store 객체
export const authStore = create(
  persist((set) => ({
    id: null,
    user: null,
    isLogin: false,

    /**
     * * 유저 id를 set
     * @param {string} id - 유저 id
     */
    setId: (id) => set({ id }),

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
  }))
);
