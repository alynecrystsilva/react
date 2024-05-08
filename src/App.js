// import Header from "./Header"
// import Content from "./Content"
// import Footer from "./Footer"

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]
  const Header = (course) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  const Content = (parts) => {    
    return (
      <div>
        <p>
            {parts[0].name} {parts[0].exercises}
        </p>
        <p>
            {parts[1].name} {parts[1].exercises}
        </p>
        <p>
            {parts[2].name} {parts[2].exercises}
        </p>
      </div>
    )
  }
  const Footer = (parts) => {
    return (
      <div>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
