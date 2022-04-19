import { useState } from "react";

function Page() {
    const [page, setPage] = useState(0);

    const changePageProfile = () => {
        setPage(page = "profile");
    }
    const changePageMatch = () => {
        setPage(page = "match")
    }

    return (
        <div>
            {page}
        </div>
    )
}

export default Page;