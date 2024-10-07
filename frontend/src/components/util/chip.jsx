import React from "react";

const Chip = ({children}) => {

    return (
        <span className="text-xs px-2 py-1 rounded bg-zinc-700">{children}</span>
    )
}

export default Chip;