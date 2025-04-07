import comics from "../data/comics";

// Creazione della Funzione Main
function Main() {
    // Creazione di frecce direzionali
    const arrowLeft = "-->";
    const arrowRight = "<--";
    return (
        <>
            <main>
                <div className="container-h1">
                    <h1>{arrowLeft}Content goes here{arrowRight}</h1>
                </div>
            </main>
        </>
    )
}

// Esportazione di Main
export default Main;