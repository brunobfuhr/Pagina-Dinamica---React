import styles from "./index.module.css"

export function Sidebar() {
    return (

        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/brunobfuhr.png" />


                <div className={styles.description}>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>
                </div>
            </div>
        </aside>
    )
}
