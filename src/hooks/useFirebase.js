import { useReducer, useState, useEffect } from 'react';
import { db } from '../firebase/config';

//firebase imports
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

let initState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, error: null, success: false };
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, error: null, success: true };
    case 'ERROR':
      return { isPending: false, document: null, error: action.payload, success: false };
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: action.payload, error: null, success: true };

    default:
      return state;
  }
};

export const Firebase = (col) => {
  const [response, dispatch] = useReducer(firebaseReducer, initState);
  const [isCancelled, setIsCancelled] = useState(false);

  // function check for is it isCancelled or not and then dispatch the action
  const dispatchCanlled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  let ref = collection(db, col);

  // add document
  const addDocument = async (mdoc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDoc = await addDoc(ref, mdoc);
      dispatchCanlled({ type: 'ADDED_DOCUMENT', payload: addedDoc });
    } catch (error) {
      console.log(error.message);
      dispatchCanlled({ type: 'ERROR', payload: error.message });
    }
    console.log(mdoc);
  };

  // remove document

  const removeDoc = async (id) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const deleteddoc = await deleteDoc(doc(db, col, id));
      dispatchCanlled({ type: 'DELETED_DOCUMENT', payload: deleteddoc });
    } catch (error) {
      console.log(error.message);
      dispatchCanlled({ type: 'ERROR', payload: error.message });
    }
  };

  return { addDocument, removeDoc, response };
};
