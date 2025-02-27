# tabnews

Clone do projeto TabNews, do treinamento de programação do Filipe Deschamps.

\***\*\*\*\*\*\*\*** C H A V E S S H G I T HUB **\*\*\*\***\*\***\*\*\*\***
criar uma chave SSH, para utilizar no GitHub

avaliar se o ssh-agent está em execução:
eval "$(ssh-agent -s)"

gerar chave:
ssh-keygen -t ed25519 -b 4096 -C "cledson.spfc@gmail.com"

adicionar chave:
ssh-add ~/.ssh/id_ed25519
Identity added: /home/p590589/.ssh/id_ed25519 (cledson.spfc@gmail.com)

verificar se esta funcionando:
ssh -T git@github.com

**\*\***\***\*\*** N O D E J S **\*\***\*\*\*\***\*\***\***\*\***\*\*\*\***\*\***

node -v
nvm ls
nvm install lts/hydrogen
nvm alias default lts/hydrogen
ou inserir .nvmrc com o conteudo abaixo:
lts/hydrogen

---

npm init
Depois de criado o package.json
npm install next@13.1.6
npm install react@18.2.0
