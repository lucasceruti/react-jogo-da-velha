import styles from './Header.module.css'

import Title from "../title/Title"
import SubTitle from "../subTitle/SubTitle"

function Header () {
    return (
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <SubTitle>Criado por Lucas Ceruti</SubTitle>
        </div>
    )
}

export default Header