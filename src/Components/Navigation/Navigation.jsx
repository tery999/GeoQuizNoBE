import { Link } from "react-router-dom"
import * as styles from "./Navigation.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay, faL , faChevronUp , faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Navigation() {
    const [minimize, setMinimize] = useState(false);

    const minimizeFunc = () => {
        setMinimize( (prev) => setMinimize(!prev));
    }

    return (
        <div className={styles.parentNav}>
            { !minimize &&  <div className={styles.NavContainer}>
                <Link to="/"><div>Home</div></Link>
                <div className={styles.BothVersions}>
                    <Link to="Flags"><div className={styles.DivLinks}>Flags</div></Link>
                    <Link to="Flags/Plus"><div className={styles.DivLinksPlus}>+</div></Link>
                </div>
                <div className={styles.BothVersions}>
                    <Link to="Outlines"><div className={styles.DivLinks}>Outlines</div></Link>
                    <Link to="Outlines/Plus"><div className={styles.DivLinksPlus}>+</div></Link>
                </div>
                <div className={styles.BothVersions}>
                    <Link to="Capitals"><div className={styles.DivLinks}>Capitals</div></Link>
                    <Link to="Capitals/Plus"><div className={styles.DivLinksPlus}>+</div></Link>
                </div>
                <Link to="Scores"><div> <FontAwesomeIcon icon={faDisplay} /> </div></Link>
            </div> }
            { !minimize &&  <div onClick={minimizeFunc} className={styles.minimize}> <FontAwesomeIcon icon={faChevronUp} /> </div> }
            { minimize &&  <div onClick={minimizeFunc} className={styles.minimize}> <FontAwesomeIcon icon={faChevronDown} /> </div> }
        </div>
    )
}