import { Link } from "react-router-dom";

const ImpressumPage = () => {
    return (
        <div className="p-10 w-full text-center">
            <h1 className="font-bold">Impressum</h1>
            <Link to="https://www.hs-hannover.de/impressum/" className="text-blue-400">
                <br />
                Impressum
                <br />
            </Link>
            <Link to="https://www.hs-hannover.de/ueber-uns/organisation/datenschutz" className="text-blue-400">
                Datenschutz
            </Link>
        </div>
    );
};

export default ImpressumPage;