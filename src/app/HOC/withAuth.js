import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import checkAuthStatus from "../utils/checkAuthStatus";


const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const getStatus = async () => {
        const authStatus = await checkAuthStatus();
        setIsAuthenticated(authStatus);
        if (!authStatus) {
          router.push("/login");
        }
      };

      getStatus();
    }, []); // Убран router из зависимостей

    if (isAuthenticated === null) {
      // Можно отобразить индикатор загрузки
      return <div>Loading...</div>;
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
