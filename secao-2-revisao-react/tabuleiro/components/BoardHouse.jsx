import styles from '../styles/Board.module.css'

export default function BoardHouse(props) {
    let houseColor
    if (props.line % 2 == 0) {
        houseColor = props.column % 2 == 0 ? styles.white : styles.black
    } else {
        houseColor = props.column % 2 == 0 ? styles.black : styles.white
    }

    return (
        <div className={`${styles.house} ${houseColor}`}>
            {props.position}
        </div>
    )
}