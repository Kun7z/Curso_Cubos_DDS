type listaProps = {
    title?: string
    items: string[]
}
export const Lista = ({ title, items }: listaProps): JSX.Element => {
    return (
        <>
            <h1>{title}</h1>
            <ul>
                {items.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </>

    )
}