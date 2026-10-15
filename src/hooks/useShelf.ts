import { useState, useEffect } from 'react';
import { ShelfItem } from '../types';

const SHELF_STORAGE_KEY = 'beyond_the_patch_shelf_v1';

export function useShelf() {
  const [items, setItems] = useState<ShelfItem[]>(() => {
    try {
      const stored = localStorage.getItem(SHELF_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(SHELF_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save to shelf:', e);
    }
  }, [items]);

  const toggleBookmark = (item: Omit<ShelfItem, 'dateSaved'>) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        const newItem: ShelfItem = {
          ...item,
          dateSaved: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })
        };
        return [newItem, ...prev];
      }
    });
  };

  const isBookmarked = (id: string) => {
    return items.some((i) => i.id === id);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearShelf = () => {
    setItems([]);
  };

  return {
    items,
    toggleBookmark,
    isBookmarked,
    removeItem,
    clearShelf,
    count: items.length
  };
}
