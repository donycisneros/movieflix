/**
 * Hook for scrolling the header
 * @param {String} elementTag  Selector for the element
 * @param {Node} scrollClass  Name of the class that will appear when scrolling
 */

import { useEffect } from "react";

let counter = 0;

export const useScroll = (elementTag, scrollClass) => {
  useEffect(() => {
    const scrollElement = document.querySelectorAll(elementTag)[counter];
    window.addEventListener("scroll", () => {
      window.scrollY !== 0
        ? scrollElement.classList.add(scrollClass)
        : scrollElement.classList.remove(scrollClass);
    });
    counter++;
  }, [elementTag, scrollClass]);
};
