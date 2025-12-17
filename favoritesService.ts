import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from './firebase';

// Obtener favoritos del usuario
export const getUserFavorites = async (userId: string): Promise<number[]> => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data().favorites || [];
    }
    return [];
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return [];
  }
};

// Agregar un favorito
export const addFavorite = async (userId: string, productId: number): Promise<void> => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        favorites: arrayUnion(productId)
      });
    } else {
      await setDoc(docRef, {
        favorites: [productId],
        createdAt: new Date()
      });
    }
  } catch (error) {
    console.error('Error al agregar favorito:', error);
    throw error;
  }
};

// Quitar un favorito
export const removeFavorite = async (userId: string, productId: number): Promise<void> => {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, {
      favorites: arrayRemove(productId)
    });
  } catch (error) {
    console.error('Error al quitar favorito:', error);
    throw error;
  }
};

// Sincronizar favoritos locales con la nube
export const syncFavorites = async (userId: string, localFavorites: number[]): Promise<void> => {
  try {
    const docRef = doc(db, 'users', userId);
    await setDoc(docRef, {
      favorites: localFavorites,
      updatedAt: new Date()
    }, { merge: true });
  } catch (error) {
    console.error('Error al sincronizar favoritos:', error);
    throw error;
  }
};
