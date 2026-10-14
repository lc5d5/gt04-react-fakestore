const Header = () => {
  return (
    <header className="flex items-center justify-between px-15 py-4 bg-[#060608]">
      <div>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          className="w-120 h-10 rounded bg-white pl-4"
        />
      </div>
      <div>
        <select 
        className="h-10 rounded bg-white pl-4">
          <option selected disabled>Filtrar produtos</option>
          <option>All</option>
          <option>Men's clothing</option>
          <option>Women's clothing</option>
          <option>Electronics</option>
          <option>Jewelery</option>
        </select>
        <select 
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