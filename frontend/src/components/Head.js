import styles from './Head.module.css'

export default function Head ( props ) {
    return (
        <div className={ styles.Head }>
            {props.choice !== '0' && (
                <button className={ styles.BackButton } onClick={() => {
                    props.option('0')
                    props.name('')
                    props.email('')
                    props.phone('')
                    props.address('')
                    props.contact('')
                }}>{ props.icon }</button>
            )}
            <h1 className={ styles.title }>{ props.title }</h1>
        </div>
    )
}