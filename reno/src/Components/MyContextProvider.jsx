import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const move = useNavigate();
    const [currentBlogId, setCurrentBlogId] = useState(null);
    const [active, setActiveTab] = useState(localStorage.getItem('activeTab') || '/');

    const navigateToBlogDetail = (blogId) => {
        setCurrentBlogId(blogId);
        move("/blogsdetail");
    };

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue);
        localStorage.setItem('activeTab', tabValue);
    };

    return (
        <NavigationContext.Provider value={{ currentBlogId, navigateToBlogDetail, active, handleTabChange }}>
            {children}
        </NavigationContext.Provider>
    );
};
