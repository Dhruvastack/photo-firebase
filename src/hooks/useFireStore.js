//retrieve the docs that have been added to the

import React, { useState, useEffect } from "react";

import { store } from "../firebase";
export const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub =store
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
      return ()=>unsub();
  }, [collection]);
  return <div></div>;
};
export default useFireStore;