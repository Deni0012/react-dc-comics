const LinkFooter = (props) => {
    return (
        <div className="footer-props">
            <h3 className="footer-title">{props.title}</h3>
            <ul className="footer-url">
                {props.links.map((link, index) => (
                    <li key={index} className="footer-link">
                        <a href={link.url} className="footer-link-url">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LinkFooter;