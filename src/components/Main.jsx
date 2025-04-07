import comics from "../data/comics"
import Jumbotron from "./Jumbotron";
import ComicCards from "./ComicCards";
// Creazione della Funzione Main
function Main() {
    return (
        <>
            <main>
                < Jumbotron />
                <div className="container-main">
                    <ComicCards comics={comics} />
                    <div className="current-series">CURRENT SERIES</div>

                </div>
            </main>
        </>
    )
}

// Esportazione di Main
export default Main;