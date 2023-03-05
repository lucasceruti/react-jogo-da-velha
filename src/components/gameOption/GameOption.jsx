import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25pc"/>

function GameOption ({ status }) {
    return (
        <div className={styles.gameOption}>
            {
                status == 1 && <GameIcon iconName = "circle" size="25px"/>
            }
            {
                status == -1 && <GameIcon iconName = "x" size="25px"/>
            }

        </div>
    )
}

export default GameOption