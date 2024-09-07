import { changeLanguage } from "@/components/context/languageSlice";
import { useSelector, useDispatch } from "react-redux";

function useLanguage() {
  const dispatch = useDispatch();

  // Access the language state from the Redux store
  const { language } = useSelector((state) => state.language);
  // Function to update the language in both Redux state and localStorage
  const setLanguage = (newLanguage) => {
    dispatch(changeLanguage({ language: newLanguage }));
  };

  return { language, setLanguage };
}

export default useLanguage;
