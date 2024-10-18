import Title from "../atoms/title/Title";
import ContactForm from "../organisms/ContactForm";

export default function Contact(props: any) {
  return (
    <section className="max-w-lg mx-auto">
      <Title content={props.title} />
      {props.content}
      <ContactForm />
    </section>
  )
}