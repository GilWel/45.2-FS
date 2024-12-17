// ! Как создать React компонент?
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
//1. с большой буквы
//2. расширение .jsx
//3. внутри есть функция, у которой в return верстка
//4. функция называется именем файла, с большой буквы
//5. функция экспортируется из файла.

function Lesson01() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Hello React </h1>

      <p className="read-the-docs">
        Этот React проект собран на сборщике Vite
      </p>
    </>


  )
}
export default Lesson01
