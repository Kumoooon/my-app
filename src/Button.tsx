interface ButtonProps {
    item: string
}
interface RealButtonProps{
    item : string
}
function RealButton({item}: RealButtonProps) {
    return (<div>{item}</div>)
}
function Button({item}: ButtonProps) {

    return (<div><RealButton item={item} /></div>)
}

export default Button