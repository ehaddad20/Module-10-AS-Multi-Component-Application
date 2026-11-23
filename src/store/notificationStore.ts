import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotificationStore {
  notifications: string[];
  addNotification: (message: string) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      notifications: [],

      addNotification: (message) =>
        set((state) => ({
          notifications: [...state.notifications, message],
        })),

      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: "notifications",
    }
  )
);
