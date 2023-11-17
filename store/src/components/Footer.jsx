

const Footer = () => {
    return (

        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()}
                    <a className="grey-text text-lighten-4" href="#">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer