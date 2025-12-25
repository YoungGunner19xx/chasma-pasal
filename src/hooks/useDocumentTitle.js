import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Manish - Glasses Store";
    }
  }, [title]);
};

export default useDocumentTitle;
