A interface File provê informações sobre arquivos e permite ao JavaScript acessar seu conteúdo.

São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FilesList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozzila.org.pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozzila.org.pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API 'mozGetAsFile()' em um [HTMLCanvasElement](https://developer.mozzila.org.pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com priviégios podem criar objetos File representando qualquer arquivo local sem a interação do usutário (veja [Implementation notes](https://developer.mozzila.org.pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)