import { createContext } from "react";
import { useForm } from "react-hook-form";

const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const searchHandler = (data) => {
		console.log(data);
	};

	return <SearchContext.Provider value={{ register, handleSubmit, errors, getValues, searchHandler }}>{children}</SearchContext.Provider>;
};

export { SearchContextProvider, SearchContext };
