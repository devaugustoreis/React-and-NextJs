export default function Lista(props) {
    return (
        <div>
            <h1>Minha Lista</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}