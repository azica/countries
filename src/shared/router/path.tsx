import Counties from "pages/Countries"
import Country from "pages/Country"

export const basicPaths = [
    {
        path: "/",
        id: 1,
        element: <Counties />,
    },
    {
        path: "/:name",
        id: 1,
        element: <Country />,
    },
]