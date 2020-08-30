* **Para iniciar o npm:** `npm init -y`
* **Para instalar um pacote em dependencies:** `npm install $PACOTE$`
* **Para instalar um pacote em dev dependencies:** `npm install $PACOTE$ --save-dev`
* **Para atualizar os pacotes:** `npm update`
  
  No caso atualiza apenas o minor e o path
  Ex:
  ```
  v. 4.5.3
  4 -> major -> novas funcionalidades com quebra da versão atual.
  5 -> minor -> novas funcionalidades sem quebrar a versão atual.
  3 -> path -> atualização de bug.
  ```
  E para isso é preciso estar na forma: "^4.5..3" (com o ^ na frente).

* **Para desinstalar um pacote:** `npm uninstall $PACOTE$`
* **Para listar os pacotes com suas dependências:** `npm ls`
* **Para listar apenas os pacotes instalados:** `npm ls --depth=0`

* **Para ver quais pacotes estão desatualizados:** `npm outdated`
