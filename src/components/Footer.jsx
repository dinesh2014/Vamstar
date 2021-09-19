import FooterStyle  from '../styles/Header.module.css'
function Footer(){
    return(
        <footer className={FooterStyle.Footer}>
            <p className={FooterStyle.copyrights}>© Copyright reserved</p>
        </footer>
    )
}

export default Footer;