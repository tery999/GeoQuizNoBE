import { useContext } from "react"
import { ScoreContext } from "../../App"
import * as styles from "./Scores.module.css"

export default function Scores() {
    debugger;
    const {score} = useContext(ScoreContext)

    return (
        <div className={styles.container}>
        Scores Page
        {Object.entries(score).map( ([ key, value ], i) => <div key={i}>
            {key} {value}
        </div>)
        }
    </div>
    )
}