import React, { useState } from "react";

interface Props {
    onChange: (term: string) => void;
  }

const SearchBox = ({onChange}: Props) => {
    const [term, setTerm] = useState<string>("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let trm = e.target.value;
        setTerm(trm);
        onChange(trm);
    }
    return (
        <div>
            <input type="text" value={term} placeholder="search a hotel" onChange={(e) => onInputChange(e)} />
        </div>
    )
}

export default SearchBox;