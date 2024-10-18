import Title from "../atoms/title/Title";
import LoginForm from "../organisms/LoginForm";

export default function Login(props: any) {
  return (
    <section className="wrapper">
      <Title content={props.title} />
      {props.content}
      <div className="content">
      <LoginForm />
      </div>      
    </section>
  )
}