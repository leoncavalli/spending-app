import { useState } from "react";

function Header({budget})
{
    return (
        <>
            <div>
                You have ${budget} to spend !
            </div>
        </>
    )
}

export default Header