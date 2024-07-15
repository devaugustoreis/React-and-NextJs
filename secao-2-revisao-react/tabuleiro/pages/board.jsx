import BoardHouse from "../components/BoardHouse"
import styles from '../styles/Board.module.css'

export default function board() {
    return (
        <div className={styles.main}>
            { generateBoard() }
        </div>
    )
}

function generateBoard() {
    let allLines = []

    for (let l = 0; l < 8; l++) {
        let lineArray = []

        for (let c = 0; c < 8; c++) {
            lineArray.push(<BoardHouse line={l} column={c}/>)
        }

        allLines.push(<div className={styles.boardLine}>{lineArray}</div>)
    }

    const board = <div>{allLines}</div>

    return board
}