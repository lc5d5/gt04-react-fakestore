const Header = ({ filtrarPorCategoria, ordenarProdutos, pesquisarProdutos }) => {
  return (
    <header className="flex items-center justify-between px-15 py-4 bg-[#060608]">
      <div classNameName="mb-4 md:mb-0">
        <input onChange = {(event) => pesquisarProdutos(event.target.value)}
          type="text"
          placeholder="Digite o nome do produto"
          className="w-full lg:w-120 h-10 rounded bg-white pl-4"
        />
      </div>
      <div classNameName="flex gap-4 *:w-full lg:*:w-auto">
        <select onChange = {(event) => filtrarPorCategoria(event.target.value)} 
        className="h-10 rounded bg-white pl-4">
          <option selected disabled>Filtrar produtos</option>
          <option>All</option>
          <option>Men's clothing</option>
          <option>Women's clothing</option>
          <option>Electronics</option>
          <option>Jewelery</option>
        </select>
        <select onChange={(event) => ordenarProdutos(event.target.value)}
        className="h-10 rounded bg-white pl-4">
          <option selected disabled>Ordenar produtos</option>
          <option value="maiorPreco">Ordenar por maior preço</option>
          <option value="menorPreco">Ordenar por menor preço</option>
          <option value="nota">Ordenar por Avaliação</option>
        </select>
      </div>
    </header>
  )
}

export default Header;