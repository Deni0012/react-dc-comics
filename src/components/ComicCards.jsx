// Creazione della funzione ComicCards 
function ComicCards({ comics }) {
    return (
        <>
            {comics.map((comic) => (
                <div key={comic.id} className="card-container">
                    <img src={comic.thumb} alt={comic.title} className="comic-img" />
                    <h4 className="comic-production">{comic.series}</h4>

                </div>
            ))}
            <div className="load-more">LOAD MORE</div>

        </>
    );
}

// Esportazione delle comics card
export default ComicCards;