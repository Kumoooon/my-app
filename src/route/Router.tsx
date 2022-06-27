import {BrowserRouter, Route, Routes} from "react-router-dom";
import Coins from "./Coins";
import Notfound from "./Notfound";
function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router