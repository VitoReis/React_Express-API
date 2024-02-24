import styles from './Result.module.css'

export default function Result ( props ) {
    return (
        <section className={ styles.Result }>
            <p>Nome: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Telefone: {props.phone}</p>
            <p>Endereço: {props.address}</p>
        </section>
    )
}