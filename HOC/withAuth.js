"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const [token, setToken] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);

      if (!storedToken) {
        router.push("/login");
      }
    }, [router]);

    return token ? <WrappedComponent {...props} /> : <p>Загрузка...</p>;
  };
};

export default withAdminAuth;
