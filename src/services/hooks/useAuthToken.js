import useLocalStorage from "./useLocalStorage";

export default function useAuthToken() {
  return useLocalStorage("authToken");
}
