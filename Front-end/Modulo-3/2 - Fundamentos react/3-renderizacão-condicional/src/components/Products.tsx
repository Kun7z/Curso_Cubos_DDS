interface ProductProp {
    children: JSX.Element[]
}

export const Product = (props: ProductProp): JSX.Element => {
    return <div>
        {props.children}
    </div>
}