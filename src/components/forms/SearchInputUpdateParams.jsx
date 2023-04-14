import { useState, useEffect } from "react";
import { useLocation, Navigate, useSearchParams } from "react-router-dom";

export default function SearchInputUpdateParams() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {

        if (searchValue) {
            setSearchParams({
              ...searchParams,
              search: searchValue
            });
        }
        else{
            handleRemoveParam()
        }



      }, [searchValue]);

      function handleRemoveParam() {
        const params = new URLSearchParams(searchParams);
        params.delete("search"); // replace "myParam" with the name of the parameter you want to remove
        setSearchParams(params.toString());
      }

    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={(e)=>{
                setSearchValue(e.target.value)
            }}
        />
    );
}
