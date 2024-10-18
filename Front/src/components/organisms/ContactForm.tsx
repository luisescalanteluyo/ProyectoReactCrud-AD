import FieldSubmit from "../molecules/FieldSubmit";
import FieldEmail from "../molecules/FieldEmail";
import FieldText from "../molecules/FieldText";
import FieldLabelInput from "../molecules/FieldLabelInput";

function EventCounts(){
  console.log("test buttonClick")
  alert("hola");
}

export default function ContactForm() {
  return (
    // <form method="post" className="max-w-md mx-auto">
    //   <FieldText placeholder="Name..." />
    //   <FieldEmail />
    //   {/* <FieldTextarea /> */}
    //   <FieldSubmit  buttonClick={EventCounts()} />
    // </form>
       <div className="max-w-md mx-auto">
         <FieldLabelInput
        label="Email"
        value={"email"}
        placeholder={"email"}
       // onChange={(e) => setEmail(e.target.value)}
      />
       <FieldText placeholder="Name..." />
       <FieldEmail />
       {/* <FieldTextarea /> */}
       <FieldSubmit  onClick={()=>EventCounts() } text="Ingresar" />
     </div>
  )
}