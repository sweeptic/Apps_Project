import { useEffect, useState } from 'react';

export const useSearch = <T>(
  searchTerm: string,
  searchInputRef: React.RefObject<HTMLInputElement>,
  searchKey: string,
  items?: T[]
) => {
  const [filteredItems, setFilteredItems] = useState<T[]>([]);

  useEffect(() => {
    if (items && !searchTerm) {
      setFilteredItems([...items]);
    } else {
      SearchByTerm();
    }

    function SearchByTerm() {
      setTimeout(() => {
        if (searchTerm === searchInputRef?.current?.value) {
          const filtered = items?.filter((item) =>
            (item[searchKey as keyof typeof item] as string).includes(searchTerm)
          );
          setFilteredItems(filtered || []);
        }
      }, 500);
    }
  }, [items, searchTerm]);

  return { availableItems: filteredItems };
};
