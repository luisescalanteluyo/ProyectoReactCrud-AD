
export default function InputText(props: any) {
    return (
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className="form-control"
      />
    )
  }