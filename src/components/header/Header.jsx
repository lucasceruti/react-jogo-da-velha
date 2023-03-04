import styles from './Header.module.css'

import Title from "../title/Title"
import SubTitle from "../subTitle/SubTitle"
import Icon from '../icon/Icon'

function Header () {
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <SubTitle>Criado por Lucas Ceruti</SubTitle>
            <div className={styles.iconContent}>
                <Icon 
                    iconName="github"
                    link="https://github.com/lucasceruti"/>
            </div>
        </div>
    )
}


export default Header