import styles from './button.module.css';

function Btn({ props, link, pagina, addStyle }){
    return(
        <a className={`${styles.btnStyle} ${addStyle}`} href={link} target={pagina}>{props}</a>
    )
}

export default Btn;