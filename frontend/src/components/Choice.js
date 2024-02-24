import styles from './Choice.module.css'

export default function Choice( props ){
    return (
        <div className= {styles.Choice}>
            <button onClick={ () => props.action(props.v1) }>{ props.t1 }</button>
            <button onClick={ () => props.action(props.v2) }>{ props.t2 }</button>
            <button onClick={ () => props.action(props.v3) }>{ props.t3 }</button>
            <button onClick={ () => props.action(props.v4) }>{ props.t4 }</button>
        </div>
    )
}