import { useContext } from "react"
import { ScoreContext } from "../../App"
import * as styles from "./Scores.module.css"
import filterScoreGrouping from "./filterScoreGrouping";

export default function Scores() {
    debugger;
    const { score } = useContext(ScoreContext)
    const flagScores = filterScoreGrouping(score, "Flag");

    return (
        <div className={styles.container}>
            <h2>Your scores</h2>
            <div className={styles.flagGroup}>
                <h2>Flags</h2>
                {flagScores.map(([key, value], i) => <div key={i}>
                  <div>{key}</div>   <div>{value}</div> 
                </div>)
                }
            </div>
        </div>
    )
}