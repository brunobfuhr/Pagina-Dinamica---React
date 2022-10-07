import styles from "./index.module.css"

export function Conteudo() {
    return (
        <aside className={styles.conteudo}>

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhgfhfhfhfhr.png" />


                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>
                </div>
            </div>
            <div className={styles.text}>
            <p>Oii pessoal!! 

Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀

 https://github.com/camisbrussi

#novoprojeto #git #frontend </p>
            </div>
        </aside>
    )
}