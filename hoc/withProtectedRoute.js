import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export const withProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};
