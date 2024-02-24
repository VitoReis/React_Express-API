import styles from './Search.module.css'

export default function Search( props ) {
    return(
        <div className={ styles.Search }>
            <h1>{ props.title }</h1>
            <div className={ styles.Field }>
                <input type={ props.type } placeholder={ props.placeholder } value={ props.value } onChange={(e) => props.state(e.target.value)} />
                <button onClick={ props.action }>{ props.icon }</button>
            </div>
        </div>
    )
}