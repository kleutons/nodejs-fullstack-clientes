import { FiTrash } from "react-icons/fi";

export default function App(){
  return(
    <div className="w-full min-h-screen bg-gray-950 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
          <h1 className="text-4xl font-medium text-white">Clientes</h1>

          <form className="flex flex-col my-6">
            <label className="font-medium text-white">Nome:</label>
            <input 
            type="text"
            placeholder="Digite seu nome completo..."
            className="w-full mb-5 p-2 rounded"/>

            <label className="font-medium text-white">Email:</label>
            <input 
            type="text"
            placeholder="Digite seu email..."
            className="w-full mb-5 p-2 rounded"/>

           <input 
           type="submit"
           value="Cadastrar"
           className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium" />
          </form>

          <section className="flex flex-col">
            <article
            className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
            >
              <p><span>Name:</span> Mateus</p>
              <p><span>Email:</span> teste@testecom</p>
              <p><span>Status:</span> ATIVO</p>
          
            <button className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute -top-2 right-0">
              <FiTrash size={18} color="#fff" />
            </button>

            </article>
          </section>


      </main>
    </div>
  )
}