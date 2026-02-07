import { useGameStore } from '@/store/gameStore';
import { useEffect } from 'react';

export default function Notifications() {
  const { notifications, clearNotifications } = useGameStore();

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => clearNotifications(), 3000);
      return () => clearTimeout(timer);
    }
  }, [notifications, clearNotifications]);

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-xs">
      {notifications.map((msg, idx) => (
        <div
          key={`${msg}-${idx}`}
          className="notification-enter bg-gray-900/95 border border-gold/30 text-gold px-4 py-3 rounded-xl shadow-xl shadow-gold/10 text-sm font-medium backdrop-blur-sm"
        >
          {msg}
        </div>
      ))}
    </div>
  );
}
