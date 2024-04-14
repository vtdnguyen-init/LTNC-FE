// withAuth.tsx
import React from "react";
import { useRouter } from "next/router";
import { UserContext } from "./Context/UserInfo";
export default function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const isLoggedIn = React.useContext(UserContext).info;
    React.useEffect(() => {
      if (!isLoggedIn) {
        router.push("/auth/signin/page");
      }
    }, [isLoggedIn]);

    return isLoggedIn ? <Component {...props} /> : null;
  };
}
