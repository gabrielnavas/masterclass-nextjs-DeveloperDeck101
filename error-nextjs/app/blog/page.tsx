import Content from "../components/content/Content";

export default function BlogPage() {
  throw new Error("erro na pagina")
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