import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);


  const addToWishlist = (product) => {

    setWishlist((prev) => {

      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev;
      }

      return [...prev, product];

    });

  };


  const removeFromWishlist = (id) => {

    setWishlist((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };


  const isInWishlist = (id) => {

    return wishlist.some(
      (item) => item.id === id
    );

  };


  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}