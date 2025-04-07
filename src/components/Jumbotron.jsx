// Importazione di Jumbotron image
import jumbotronImg from "../assets/img/jumbotron.jpg"

// Creazione della funzione Jumbotron
function Jumbotron() {
    return (
        <div className="jumbotron">
            <img src={jumbotronImg} alt="Jumbotron" className="jumbo-img" />

        </div>
    )
}

// Esportazione di Jumbotron
export default Jumbotron;