type TitleProps = {
    name: string,
    type: "bold" | "normal",
}

const Title = ({name, type}: TitleProps) => {
    return (
    <h1 style={{fontWeight: type}}>{name}</h1>
    )
}

export default Title;