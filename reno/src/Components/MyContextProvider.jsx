import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const move = useNavigate();
    const [currentBlogId, setCurrentBlogId] = useState(null);

    const navigateToBlogDetail = (blogId) => {
        setCurrentBlogId(blogId);
        move("/blogsdetail")
    };

    return (
        <NavigationContext.Provider value={{ currentBlogId, navigateToBlogDetail }}>
            {children}
        </NavigationContext.Provider>
    );
};
