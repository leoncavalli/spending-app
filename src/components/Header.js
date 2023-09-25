import { useState } from "react";

function Header({budget,total})
{
    return (
        <> 
            <div>
                You have ${budget-total} to spend !
            </div>
        </>
    )
}

export default Header