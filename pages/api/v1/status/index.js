function status(request, response) {
  response.status(200).json({ chave: "moçada do curso.dev é boa de código !" });
}

export default status;
