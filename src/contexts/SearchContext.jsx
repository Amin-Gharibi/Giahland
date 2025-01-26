import { createContext } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { control, handleSubmit } = useForm({
		defaultValues: {
			searchText: searchParams.get("q"),
			minPrice: 0,
			maxPrice: 10_000_000
		},
	});

	const searchHandler = (data) => {
		console.log(data);
	};

	return <SearchContext.Provider value={{ control, handleSubmit, searchHandler }}>{children}</SearchContext.Provider>;
};

export { SearchContextProvider, SearchContext };
