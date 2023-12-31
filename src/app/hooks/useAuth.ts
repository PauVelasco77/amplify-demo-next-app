import {Auth} from "aws-amplify";
import {useCallback} from "react";

export default function useAuth() {
  const signIn = useCallback(async (email, password) => {
    try {
      const user = await Auth.signIn({
        username: email,
        password,
      });

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }, []);

  const isAuthenticated = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (!user.username) {
        return false;
      }
      return true;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  return {
    signIn,
    isAuthenticated,
    signOut,
  };
}
