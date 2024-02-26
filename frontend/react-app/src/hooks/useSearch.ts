import { useEffect, useState } from 'react';

export const useSearch = <T>(
  searchTerm: string,
  searchInputRef: React.RefObject<HTMLInputElement>,
  searchKey: keyof T,
  items?: T[]
) => {
  const [filteredItems, setFilteredItems] = useState<T[]>([]);

  useEffect(() => {
    console.log('EFFECT', items);

    if (items && !searchTerm) {
      //   console.log('UPDATE', items);
      setFilteredItems([...items]);
    } else {
      SearchByTerm();
    }

    function SearchByTerm() {
      setTimeout(() => {
        if (searchTerm.length > 0 && searchTerm === searchInputRef?.current?.value) {
          //   console.log('items', items);
          const filtered = items?.filter((item) =>
            (item[searchKey as keyof typeof item] as string).includes(searchTerm)
          );
          //   console.log('UPDATE2 ', filtered || []);

          setFilteredItems(filtered || []);
        }
      }, 500);
    }
  }, [items, searchTerm, searchInputRef, searchKey]);

  return { availableItems: filteredItems };
};
