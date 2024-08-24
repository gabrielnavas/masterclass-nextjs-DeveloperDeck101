import Content from "../components/content/Content";

export default function BlogPage() {
  return (
    <div>
      <Content 
        phrase="Página de BLOG"
        button={{
          title: "Voltar para a HOME",
          url: "/"
        }} />
    </div>
  )
}