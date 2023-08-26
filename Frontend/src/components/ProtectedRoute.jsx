import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default function ProtectedRoute() {

    const getUser = async () => {
        try {
            const res = await axios.post('/api/v1/user/getUserData',
                { token: localStorage.getItem('token') },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (res.data.success) {
                console.log("success");
            } else {
                <Navigate to="/login" />;
                localStorage.clear();
            };
        } catch (error) {
            localStorage.clear();
            console.log(error);
        };
    };

    useEffect(() => {
            getUser();
    }, []);

    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    };
};