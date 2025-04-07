import jumbotronImg from "../assets/img/jumbotron.jpg"

function Jumbotron() {
    return (
        <div className="jumbotron">
            <img src={jumbotronImg} alt="Jumbotron" className="jumbo-img" />

        </div>
    )
}

export default Jumbotron;