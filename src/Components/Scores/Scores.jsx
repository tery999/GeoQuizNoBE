import { useContext } from "react"
import { ScoreContext } from "../../App"
import * as styles from "./Scores.module.css"
import filterScoreGrouping from "./filterScoreGrouping";
import ScoreGroup from "./ScoreGroup/ScoreGroup";

export default function Scores() {
    const { score } = useContext(ScoreContext)
    const flagScores = filterScoreGrouping(score, "Flag");
    const capitalScores = filterScoreGrouping(score, "Capital");
    const outlineScores = filterScoreGrouping(score, "Outline");

    //ScoreGroup - reusable component, which also uses children props.
    //First time doing it like this, looks cool.
    return (
        <div className={styles.container}>
            <h2>Your scores</h2>
            <div className={styles.groupings}>
                <div className={styles.flagGroup}>
                    <ScoreGroup scoreGroup={flagScores}>
                        <h2>Flags</h2>
                    </ScoreGroup>
                </div>
                <div className={styles.flagGroup}>
                    <ScoreGroup scoreGroup={capitalScores}>
                        <h2>Capitals</h2>
                    </ScoreGroup>
                </div>
                <div className={styles.flagGroup}>
                    <ScoreGroup scoreGroup={outlineScores}>
                        <h2>Outlines</h2>
                    </ScoreGroup>
                </div>
            </div>
        </div>
    )
}