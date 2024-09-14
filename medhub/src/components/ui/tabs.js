// src/components/ui/tabs.js
import React, { useState } from 'react';
import './Tabs.css'; // Assuming you will add some styling for Tabs

export const Tabs = ({ children, className = '', ...props }) => {
    return (
        <div className={`tabs ${className}`} {...props}>
            {children}
        </div>
    );
};

export const TabsList = ({ children, className = '', ...props }) => {
    return (
        <div className={`tabs-list ${className}`} {...props}>
            {children}
        </div>
    );
};

export const TabsTrigger = ({ children, className = '', onClick, active, ...props }) => {
    return (
        <button
            className={`tabs-trigger ${className} ${active ? 'active' : ''}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ children, className = '', active, ...props }) => {
    return active ? (
        <div className={`tabs-content ${className}`} {...props}>
            {children}
        </div>
    ) : null;
};
