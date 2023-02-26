import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';

import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import useProvider from './useProvider';

const useCollection = (col, order, filter) => {
  const [docs, setDocuments] = useState('');
  const [error, setError] = useState('');
  const { user } = useProvider();

  useEffect(() => {
    let docRef = collection(db, col);

    console.log();
    docRef = query(docRef, where(...filter), orderBy(...order));

    const unsub = onSnapshot(docRef, (snt) => {
      let reses = [];
      snt.docs.forEach((doc) => {
        reses.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(reses);
    });
    return () => unsub;
  }, [collection, order, filter]);

  return { docs, error };
};

export default useCollection;
