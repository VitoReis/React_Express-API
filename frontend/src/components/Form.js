import styles from './Form.module.css'

export default function Form ( props ) {
    return(
        <div className={ styles.Form }>
            <h1>{ props.title }</h1>
            <input type="text" placeholder="Digite o nome..." value={ props.v1 } onChange={(e) => props.s1(e.target.v1)} />
            <input type="email" placeholder="Digite o email..." value={ props.v2 } onChange={(e) => props.s2(e.target.v2)} />
            <input type="text" placeholder="Digite o telefone..." value={ props.v3 } onChange={(e) => props.s3(e.target.v3)} />
            <input type="text" placeholder="Digite o endereço..." value={ props.v4 } onChange={(e) => props.s4(e.target.v4)} />
            <button className="btn" onClick={ props.action }>{ props.icon }</button>
        </div>
    )
}
