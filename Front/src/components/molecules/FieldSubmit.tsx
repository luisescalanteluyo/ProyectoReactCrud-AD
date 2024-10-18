import Button from "../atoms/button/Button"

export default function FieldSubmit(props: any) {
  return (
    // <p className="my-8"></p>
    <Button onClick={props.onClick} text={props.text} />
  )
}