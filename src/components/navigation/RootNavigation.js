
import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";

export default function RootNavigation() {
  const user = "1";
  return user ? <AppNavigation /> : <AuthScreen />;
}