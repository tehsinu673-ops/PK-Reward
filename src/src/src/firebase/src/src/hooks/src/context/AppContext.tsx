import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { format } from 'date-fns';
import { registerWithEmail, loginWithEmail, logoutUser } from '../firebase/config';

// Types (User, Wallet, PackageType, etc.)
// ... (from previous messages)

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ... (full code from previous messages)
};
