import { useSearchParams } from "react-router"

export const useProductFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category") ?? "";

    const setCategory = (value: string) => {
        setSearchParams(value ? { category: value } : {});
    };

    return { category, setCategory};
};