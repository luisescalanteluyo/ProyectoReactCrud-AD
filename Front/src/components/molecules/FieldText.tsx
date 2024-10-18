import InputText from "../atoms/input/InputText";

export default function FieldText(props: any) {
  return (
    <p className="my-8"><InputText placeholder={props.placeholder} /></p>
  )
}