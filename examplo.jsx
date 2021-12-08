import React, { useState, useEffect, useContext } from "react";
import Conecta from "./Conecta";
import ItemLista from "./ItemLista";
import { ClienteContext } from "./ClienteContext";

import {
  useLocation
} from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Listagem = () => {
  const [livros, setLivros] = useState([]);
  const cliente = useContext(ClienteContext);
  
  const location = useLocation();
  const getLivros = async ({search}) => {
    let query = (search)? `pesquisa/${search}` : 'livros'
    const lista = await Conecta.get(query);
    
    //    console.log(lista);
    setLivros(lista.data);
  };
 
  // define o método que será executado após renderizar o componente
  useEffect(() => {
    console.log(location)
    getLivros(location);
  }, [location]);

  const jaAvaliou = async (livroId) => {
    const like = await Conecta.get(`likes/pesq/${cliente.dados.id}/${livroId}`);
    return like.data.length;
  };

  const clienteLike = async (id, index) => {
    if (await jaAvaliou(id)) {
      alert("Ops... você já avaliou esse Livro");
      return;
    }

    let voto = {
      usuario_id: cliente.dados.id,
      livro_id: id,
      gostou: 1,
    };

    const config = {
      headers: { Authorization: `Bearer ${cliente.dados.token}` },
    };

    await Conecta.post("likes", voto, config);

    // Obtém o registro (para saber a quantidade de likes da tabela carros)
    const reg = await Conecta.get("livros/" + id);
    //console.log(reg)

    let likes = Number(reg.data.likes) + 1;

    // altera a quantidade de likes no WebServices
    await Conecta.put("livros/like/" + id);

    // atualiza o array
    let newLivros = [...livros];
    newLivros[index].likes = likes;
    setLivros(newLivros);

    alert("Ok! Obrigado pela sua participação");
  };

  const clienteDislike = async (id) => {
    if (await jaAvaliou(id)) {
      alert("Ops... você já avaliou esse Livro");
      return;
    }

    let voto = {
      usuario_id: cliente.dados.id,
      livro_id: id,
      gostou: 0,
    };

    await Conecta.post("likes", voto);

    // altera a quantidade de likes no WebServices
    await Conecta.put("livros/dislike/" + id);

    // atualiza o array, a partir da consulta que obtém todos os dados (já atualizados)
    await getLivros();

    alert("Ok! Obrigado pela sua participação");
  };

  return (
    <div className="container">
      <div className="row">
        {livros.map((livro, index) => (
          <ItemLista
            foto={livro.url}
            titulo={livro.titulo}
            genero={livro.genero}
            ano={livro.ano}
            autor={livro.autor}
            paginas={livro.paginas}
            notas={livro.notas}
            key={livro.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Listagem;
