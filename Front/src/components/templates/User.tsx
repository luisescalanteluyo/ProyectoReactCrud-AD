import Title from "../atoms/title/Title";
import UserForm from "../organisms/UserForm";

export default function User(props: any) {
  return (
    <section className="wrapper">
      <Title content={props.title} />
      {props.content}
      <div className="content">
      <UserForm />
      </div>      
    </section>
  )
}