## BC-KB-001 — Acesso ao BC (Business Central) ?
**Categoria:** Acesso / Business Central
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O utilizador não consegue aceder ao Business Central.

**Diagnóstico**
O utilizador não tem o link de acesso ao Business Central ou não sabe qual o ambiente/empresa que deve utilizar.

**Causa provável**
A situação pode estar relacionada com uma das seguintes causas:

* o utilizador não tem o link correto de acesso;
* o utilizador está a tentar aceder ao ambiente ou empresa errada;
* o utilizador ainda não tem uma licença atribuída;
* o utilizador não tem permissões configuradas para aceder ao Business Central;
* o acesso ainda não foi validado pela equipa responsável.

**Solução**
O utilizador deve aceder ao Business Central através do link correspondente à empresa pretendida:

* **Quilaban:**
  https://businesscentral.dynamics.com/e2c4a3c4-be46-4566-84d4-fd8050c577a3/Production?company=Quilaban

* **Australpharma:**
  https://businesscentral.dynamics.com/e2c4a3c4-be46-4566-84d4-fd8050c577a3/ProductionAO?company=AUSTRALPHARMA

Se o problema persistir, deve contactar um agente de apoio para validar se existe licença atribuída e se as permissões de acesso estão corretamente configuradas.

**Como proceder**

### 1. Identificar a empresa a que pretende aceder

1. Confirmar qual é a empresa pretendida:

   * Quilaban;
   * Australpharma.
2. Usar o link correspondente à empresa correta.

### 2. Aceder ao Business Central

1. Abrir o browser.
2. Colar o link de acesso correspondente à empresa pretendida.
3. Iniciar sessão com a conta empresarial Microsoft.
4. Aguardar o carregamento do Business Central.

### 3. Validar se o acesso foi efetuado com sucesso

1. Confirmar se o Business Central abriu corretamente.
2. Confirmar se está na empresa correta:

   * Quilaban;
   * Australpharma.
3. Confirmar se consegue visualizar o Centro de Perfil ou a página inicial do Business Central.

### 4. Contactar o apoio se o acesso não funcionar

Se não conseguir aceder, contactar um agente de apoio e indicar:

1. Qual o link utilizado.
2. Qual a empresa a que pretende aceder.
3. Qual a mensagem de erro apresentada, se existir.
4. Se o erro ocorre antes ou depois do início de sessão.
5. Se já conseguiu aceder anteriormente ao Business Central.

O agente deverá validar:

1. Se o utilizador tem licença atribuída.
2. Se o utilizador existe no Business Central.
3. Se o utilizador tem permissões configuradas.
4. Se o acesso está configurado para a empresa correta.

**Validação final**
O processo está correto quando:

1. O utilizador consegue abrir o Business Central através do link correto.
2. O utilizador consegue iniciar sessão com a sua conta empresarial.
3. A empresa correta é apresentada.
4. O utilizador consegue aceder ao Centro de Perfil ou à página inicial do Business Central.

**Notas**

* Deve ser utilizado o link correspondente à empresa pretendida.
* Se o utilizador não tiver licença ou permissões, o acesso poderá falhar mesmo usando o link correto.
* Em caso de erro, deve ser enviada uma captura de ecrã ao agente de apoio para facilitar o diagnóstico.
* Pode ser consultado o artigo sobre instalação da aplicação do Business Central no PC, caso o utilizador pretenda aceder através da aplicação em vez do browser.


## BC-KB-002 — Criação e configuração de novos utilizadores no Business Central
**Categoria:** Utilizadores / Permissões  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
A criação de novos utilizadores no Business Central pode resultar em falhas de acesso, permissões incorretas, ausência de ligação ao Microsoft 365 ou configurações incompletas quando o pedido inicial não inclui toda a informação necessária.

**Diagnóstico**  
O utilizador pode estar criado no Microsoft 365, mas não sincronizado corretamente no Business Central, ou pode estar sem perfil, permissões, empresa, datas de registo, vendedor/comprador, aprovação, armazém ou mobilidade configurados.

**Causa provável**  
Falta de recolha prévia de informação funcional e falta de configuração completa após sincronização com o Office 365.

**Solução**  
Garantir que o pedido inclui licença, perfil funcional e utilizador de referência. Depois, atribuir licença no Microsoft 365, sincronizar o utilizador no Business Central e configurar todas as páginas necessárias.

**Como proceder**

### 1. Recolher informação do pedido
O pedido de novo utilizador deve incluir:
1. Tipo de licença a atribuir:
   - Essentials
   - Team Member
2. Nome de um utilizador de referência com configuração semelhante; ou
3. Descrição detalhada das funções e responsabilidades do novo colaborador.

### 2. Atribuir licença no Microsoft 365
1. Aceder à página de administração do Microsoft 365.
2. Localizar o utilizador.
3. Atribuir a licença do Business Central correspondente à função do colaborador.

### 3. Sincronizar utilizador no Business Central
1. No Business Central, pesquisar por "Utilizadores".
2. Aceder à página de utilizadores.
3. Ir a "Base" → "Atualizar utilizador a partir do Office 365".
4. Clicar em "Seguinte".
5. Rever as alterações apresentadas.
6. Aceitar a atualização.

### 4. Validar a página "Utilizador"
1. Confirmar que o utilizador aparece na lista.
2. Verificar se a licença está correta.
3. Confirmar se os grupos de permissões base foram atribuídos corretamente.

### 5. Configurar "Configurações Utilizador"
1. Definir o perfil/função do utilizador.
2. Definir idioma e região.
3. Definir a empresa a que o utilizador terá acesso.

### 6. Configurar "Configuração Utilizador"
1. Definir datas de registo permitidas.
2. Preencher o código de comprador/vendedor, quando aplicável:
   - Compradores: usar apenas sigla do nome, por exemplo "AM".
   - Vendedores: usar prefixo "GC-" + sigla, por exemplo "GC-PO".
3. Definir o departamento associado.

### 7. Criar dimensão de Gestor Comercial, quando aplicável
1. Ir a "Dimensões".
2. Aceder à dimensão "Gestor Comercial".
3. Abrir "Valores Dimensão".
4. Criar o novo valor de dimensão conforme o código do vendedor.
5. Voltar à ficha do vendedor/comprador.
6. Ir a "Vendedor" → "Dimensões".
7. Adicionar a nova dimensão de Gestor Comercial.

### 8. Configurar aprovação, quando aplicável
1. Pesquisar por "Configuração Utilizador Aprovação".
2. Criar uma linha para o utilizador.
3. Preencher o "ID Aprovador".
4. Definir limite de aprovação de vendas e/ou compras, conforme aplicável.
5. Usar como referência outros utilizadores com funções equivalentes.

### 9. Configurar empregado de armazém, quando aplicável
1. Pesquisar por "Configuração Empregado Armazém".
2. Adicionar o utilizador.
3. Definir as localizações onde pode operar.
4. Confirmar se tem acesso a recolhas, envios ou outras operações logísticas aplicáveis.

### 10. Configurar acesso à mobilidade, quando aplicável
1. Aceder à configuração de acesso da mobilidade.
2. Adicionar o utilizador.
3. Atribuir funcionalidades e localizações relevantes.

**Validação final**
O utilizador consegue aceder ao Business Central, entra na empresa correta, tem o perfil adequado e consegue executar as funções esperadas sem erros de permissão ou configuração.

**Notas**
Sempre que possível, usar um utilizador de referência com funções equivalentes. Isto reduz o risco de falhas de permissões e configurações esquecidas.


## BC-KB-003 — Eliminação de e-mails automáticos enviados para utilizadores inativos
**Categoria:** Utilizadores / Grupos de Tarefas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Continuam a ser enviados e-mails automáticos do Business Central para colegas que já não trabalham na empresa.

**Diagnóstico**  
Os endereços de e-mail pertencem a utilizadores ainda associados a Grupos de Tarefas de Utilizador.

**Causa provável**  
Os utilizadores foram desativados ou deixaram a empresa, mas não foram removidos dos grupos de tarefas que disparam notificações automáticas.

**Solução**  
Rever os Grupos de Tarefas de Utilizador e remover os utilizadores inativos.

**Como proceder**
1. No Business Central, pesquisar por "Grupos Tarefas Utilizador".
2. Abrir a lista de grupos existentes.
3. Rever os grupos onde possam existir utilizadores inativos.
4. Dar especial atenção aos grupos das empresas internacionais, por exemplo grupos com "export" no nome.
5. Abrir cada grupo relevante.
6. Verificar a lista de utilizadores associados.
7. Selecionar o utilizador inativo.
8. Clicar em "Eliminar Linha".
9. Repetir a validação em todos os grupos aplicáveis.

**Validação final**
Os utilizadores inativos deixam de constar nos Grupos de Tarefas de Utilizador e os e-mails automáticos deixam de ser enviados para esses endereços.

**Notas**
Sempre que um colaborador sai da empresa, deve ser validado se continua associado a grupos de tarefas, aprovações ou notificações automáticas.


## BC-KB-004 — Criar novo produto
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador precisa de criar um novo produto no Business Central, mas não conhece o processo completo de criação, preenchimento da ficha e envio para aprovação.

**Diagnóstico**  
O produto ainda não existe na lista de produtos e é necessário criar uma nova ficha, preencher os campos obrigatórios e submeter o produto para aprovação antes de este poder ser utilizado nos processos do Business Central.

**Causa provável**  
Falta de conhecimento do processo de criação de produtos, nomeadamente:
- onde criar a ficha;
- que campos devem ser preenchidos;
- como usar a opção "Aplicar Modelo";
- como validar os campos obrigatórios;
- como enviar o pedido de aprovação.

**Solução**  
Criar uma nova ficha de produto a partir da lista de "Produtos", preencher o número do produto e todos os campos obrigatórios indicados na área "eInfo Obrigatória", podendo utilizar a opção "Aplicar Modelo" para acelerar o preenchimento de alguns campos. Depois de validada a informação obrigatória, deve ser enviado o pedido de aprovação.

**Como proceder**

### 1. Aceder à lista de produtos
1. No Business Central, utilizar a pesquisa ou o menu de navegação.
2. Aceder à página "Produtos".
3. Confirmar se o produto ainda não existe, pesquisando pelo número, descrição ou outra referência conhecida.
4. Se o produto não existir, clicar em "Novo".

### 2. Criar a nova ficha de produto
1. Será aberta uma nova "Ficha de Produto".
2. Começar por preencher o campo "Nº" com o número/código do produto.
3. Confirmar se o número atribuído respeita a codificação interna definida para produtos.

### 3. Preencher os campos obrigatórios
1. Na ficha do produto, consultar a lista lateral "eInfo Obrigatória".
2. Verificar os campos assinalados como obrigatórios.
3. Dar especial atenção aos campos com indicação:
   - "Validado Em: Pedido de Aprovação"
4. Estes campos devem estar preenchidos antes de enviar o pedido de aprovação.
5. Preencher todos os campos obrigatórios apresentados na lista.

### 4. Aplicar modelo, se aplicável
1. Na ficha de produto, selecionar a opção "Aplicar Modelo".
2. Escolher o modelo adequado ao tipo de produto que está a ser criado.
3. Confirmar a aplicação do modelo.
4. Rever os campos preenchidos automaticamente.
5. Completar manualmente os campos que continuem em falta.

**Nota:**  
A opção "Aplicar Modelo" ajuda a preencher automaticamente alguns campos da ficha de produto, mas não substitui a validação manual dos campos obrigatórios.

### 5. Rever a ficha antes de enviar para aprovação
Antes de enviar o pedido de aprovação, confirmar:
1. O campo "Nº" está preenchido.
2. Os campos obrigatórios indicados na "eInfo Obrigatória" estão preenchidos.
3. Os campos assinalados com "Validado Em: Pedido de Aprovação" estão completos.
4. O modelo correto foi aplicado, quando aplicável.
5. A descrição e restantes dados principais do produto estão corretos.
6. Não existem campos obrigatórios em falta.

### 6. Enviar pedido de aprovação
1. Na ficha de produto, aceder ao separador/menu "Pedido".
2. Selecionar "Enviar Pedido Aprovação".
3. Confirmar o envio do pedido, se o sistema apresentar uma mensagem de confirmação.
4. Após o envio, o produto ficará em processo de aprovação.

### 7. Acompanhar o estado da aprovação
1. Para verificar o estado, abrir novamente a ficha do produto.
2. Consultar a informação de aprovação disponível na ficha.
3. Em alternativa, aceder a "Produto" → "Aprovações".
4. Também é possível pesquisar por "Solicitações para Aprovar" para consultar pedidos pendentes, quando aplicável.

**Validação final**  
O processo está correto quando:
1. O produto aparece na lista de "Produtos".
2. A ficha de produto está criada e acessível.
3. Os campos obrigatórios da "eInfo Obrigatória" estão preenchidos.
4. O pedido de aprovação foi enviado com sucesso.
5. O produto fica em processo de aprovação ou aprovado, conforme o estado do workflow.
6. Após aprovação, o produto pode ser utilizado nos documentos e processos aplicáveis.

**Notas**
- Confirmar sempre se o produto já existe antes de criar uma nova ficha, para evitar duplicação.
- A opção "Aplicar Modelo" deve ser usada sempre que exista um modelo adequado ao tipo de produto.
- O facto de aplicar um modelo não garante que todos os campos obrigatórios fiquem preenchidos.
- A lista "eInfo Obrigatória" deve ser sempre validada antes do envio do pedido de aprovação.
- O pedido de aprovação só deve ser enviado depois de todos os campos obrigatórios estarem completos.
- Se existirem campos obrigatórios em falta, o sistema poderá impedir o envio do pedido de aprovação.
- Apenas o utilizador que enviou o pedido e/ou os aprovadores conseguem acompanhar determinados detalhes do estado da aprovação.


## BC-KB-005 — Verificar estado de criação de produtos
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Pretende saber quais os produtos que ainda estão em processo de criação.

**Diagnóstico**
O utilizador não sabe como filtrar a lista de produtos para identificar os que aguardam aprovação.

**Causa provável**
Desconhecimento dos filtros de estado de workflow.

**Solução**
Aplicar um filtro na lista de produtos para ver apenas os produtos com estado de workflow em progresso.

**Como proceder**
1. Abrir a lista de "Produtos".
2. No cabeçalho da lista, selecionar o filtro e escolher o filtro: "Workflowstatus".
3. Definir o valor do filtro como "Em Progresso" para listar apenas os produtos ainda em aprovação.

**Validação final**
A lista mostra apenas os produtos cujo estado de workflow é "Em Progresso".

**Notas**
Útil para acompanhar pedidos de aprovação pendentes e evitar duplicação de produtos.


## BC-KB-006 — Aprovação de novos produtos
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O produto foi criado mas ainda não está aprovado para utilização.

**Diagnóstico**
O pedido de aprovação não foi enviado ou ainda não foi tratado pelos aprovadores.

**Causa provável**
Esquecimento de enviar o pedido de aprovação ou atraso no processo de aprovação.

**Solução**
Verificar se foi solicitada aprovação do produto e enviar o pedido de aprovação e acompanhar o estado nas aprovações pendentes.

**Como proceder**
1. Abrir a ficha do produto.
2. Selecionar o separador "Pedido Aprovação" e clicar em "Enviar Pedido Aprovação".
3. Para acompanhar o estado de aprovação, aceder a "Produto -> Aprovações" na ficha do produto ou pesquisar "Solicitações para Aprovar" para ver os pedidos pendentes.
4. Contactar o aprovador se necessário para agilizar o processo.

**Validação final**
O estado do produto muda para aprovado e já é possível utilizá-lo em documentos.

**Notas**
Confirme sempre que todos os campos obrigatórios estão preenchidos antes de enviar o pedido. Atenção, só quem solicita o pedido de aprovação e ou os elementos aprovadores é que conseguem ver o estado da aprovação.


## BC-KB-007 — Criar produto a partir do catálogo
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O utilizador quer criar um produto que já existe no "Produtos Catálogo" normalmente nos casos de medicamento.

**Diagnóstico**
Produto existe no catálogo mas ainda não foi criado para ficha de produto.

**Causa provável**
Produto nunca foi requisitado e não existe no nossos produtos.

**Solução**
Criar o produto a partir do catálogo de produtos para reutilizar a informação existente.

**Como proceder**
1. Aceder a "Produtos Catálogo".
2. Selecionar o produto pretendido no catálogo.
3. Preencher o campo "Nº Fornecedor" se necessário.
4. Clicar em "Criar Produto" para gerar uma nova ficha.
5. Completar a ficha de produto com as informações adicionais como processo normal de criação de produto.

**Validação final**
O produto é criado com base na informação do catálogo e surge como bloqueado até completar a configuração e aprovação.

**Notas**
A criação a partir do catálogo evita duplicar dados e assegura consistência dos dados.


## BC-KB-008 — Adicionar atributos ao produto
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Necessita acrescentar características (atributos) a um produto existente.

**Diagnóstico**
A ficha de produto está criada e é necessário adicionar um atributo ou atualizar a informação.

**Causa provável**
Falta ou atualização de configuração de atributos na ficha de produto.

**Solução**
Adicionar ou atualizar atributos na ficha do produto.

**Como proceder**
1. Abrir a ficha do produto.
2. No menu, selecionar "Produto" → "Atributos".
3. Escolher o atributo pretendido e inserir o valor correspondente.
4. Repetir para todos os atributos necessários.

**Validação final**
Os atributos são visíveis na ficha e podem ser usados em pesquisas e análises.

**Notas**
Os atributos permitem filtrar produtos e apresentar informação adicional em propostas ou relatórios.


## BC-KB-009 — Filtrar produtos por atributos
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O utilizador precisa de encontrar produtos com determinados atributos.

**Diagnóstico**
Como aplicadar filtros de atributos na lista de produtos.

**Causa provável**
Desconhecimento da funcionalidade de filtragem por atributos.

**Solução**
Usar o filtro por atributos na lista de produtos.

**Como proceder**
1. Abrir a lista de produtos.
2. No menu superior, selecionar "Atributos" → "Filtrar por Atributos".
3. Escolher o atributo pretendido e definir o valor a filtrar.
4. Aplicar o filtro para ver apenas os produtos que cumprem o critério.

**Validação final**
A lista apresenta unicamente os produtos que correspondem aos atributos selecionados.

**Notas**
É possível combinar vários atributos para refinar a pesquisa.


## BC-KB-010 — Importar Dicionário ANF
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário atualizar o catálogo de produtos com o dicionário ANF nos primeiros dias de cada mês.

**Diagnóstico**
O catálogo não contém as classificações mais recentes da ANF.

**Causa provável**
Ainda não foi importado o ficheiro de dicionário ANF.

**Solução**
Importar o dicionário através da funcionalidade eDicoANF.

**Como proceder**
1. Aceder à área "eMasterFiles -> eDicoANF".
2. No menu "Ações", selecionar "Ações -> Importar dico ANF".
3. Escolher o ficheiro de dicionário tratado e confirmar a importação.
4. Aguardar que os dados sejam atualizados no catálogo de produtos na área eANF Dico.

**Validação final**
Os dados importados ficam visíveis na ficha de produto e na área eANF Dico.

**Notas**
Certifique-se de que o ficheiro a importar está no formato correto fornecido pela ANF.


## BC-KB-011 — Importar dados PVA, PIC, PMA, PVFD, PVAD
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Pretende importar dados de preços ou margens (PVA, PIC, PMA, PVFD, PVAD) para os produtos.

**Diagnóstico**
Estes dados ainda não foram importados ou estão desatualizados.

**Causa provável**
Ficheiros de PVA/PIC/PMA/PVFD/PVAD não foram carregados.

**Solução**
Importar os ficheiros através da ação específica.

**Como proceder**
1. No módulo eMasterFiles, eHist. PVA.PIC.PMA.PVFD.PVAD, aceder a "Ações".
2. Selecionar "eImp.PVA,PIC,PMA,PVFD,PVAD".
3. Clicar em "Importar" e escolher o ficheiro de dados.
4. Confirmar a importação; os valores serão apresentados na ficha de produto nos separadores ePVA, PMA, PIC, PVF.

**Validação final**
Os campos de preços e margens são atualizados na ficha de produto.

**Notas**
Mantenha estes ficheiros atualizados para garantir preços corretos nas propostas.


## BC-KB-012 — Criar novo cliente
**Categoria:** Clientes
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Um novo cliente deve ser registado no Business Central.

**Diagnóstico**
O utilizador não sabe como criar a ficha de cliente.

**Causa provável**
Falta de formação na criação de clientes.

**Solução**
Criar o cliente através da ficha de cliente e enviar para aprovação.

**Como proceder**
1. Ir a "Clientes" e clicar em "Novo".
2. Selecionar um modelo de cliente, Preencher os campos obrigatórios indicados à direita em eInfo Obrigatória, estão divididos por informação obrigatória para o pedido de aprovação e para o aprovador.
3. Selecionar "Pedido" → "Enviar Pedido Aprovação" para submeter o pedido de aprovação.

**Validação final**
O cliente aparece na lista de clientes e o pedido de aprovação é criado.

**Notas**
Garanta que todos os campos obrigatórios estão preenchidos antes de enviar a aprovação.


## BC-KB-013 — Verificar estado de criação de clientes
**Categoria:** Clientes
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Deseja verificar quais os clientes que ainda se encontram em processo de criação.

**Diagnóstico**
O utilizador não sabe identificar os clientes com workflow pendente.

**Causa provável**
Desconhecimento dos filtros de workflow na lista de clientes.

**Solução**
Aplicar um filtro para mostrar clientes com estado "Em Progresso".

**Como proceder**
1. Abrir a lista de "Clientes".
2. Clicar no filtro e selecionar o campo "Workflowstatus".
3. Definir o valor do filtro como "Em Progresso" para listar os clientes pendentes.

**Validação final**
São listados apenas os clientes em processo de aprovação.

**Notas**
Útil para controlar pedidos de aprovação pendentes e assegurar acompanhamento.


## BC-KB-014 — Aprovação de novos clientes
**Categoria:** Clientes
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Um cliente foi criado mas ainda necessita de aprovação.

**Diagnóstico**
O pedido de aprovação pode não ter sido enviado ou está pendente.

**Causa provável**
Esquecimento ou desconhecimento do processo de aprovação.

**Solução**
Enviar o pedido de aprovação e acompanhar o estado nas solicitações.

**Como proceder**
1. Abrir a ficha do cliente recém criado.
2. Ir ao separador "Pedido" e selecionar "Enviar Pedido Aprovação".
3. Para acompanhar o estado, consultar "Aprovações" na ficha do cliente ou procurar "Solicitações para Aprovar" no menu de pesquisa.
4. Nas solicitações pendentes, poderá aprovar, rejeitar, abrir o registo ou adicionar um comentário.

**Validação final**
O cliente torna-se ativo após a aprovação e pode ser utilizado nas operações.

**Notas**
Verifique que os campos obrigatórios estão preenchidos no grupo de fluxo de aprovação correspondente.


## BC-KB-015 — Configurar diferentes endereços de envio
**Categoria:** Clientes
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário adicionar ou gerir vários endereços de envio para um cliente.

**Diagnóstico**
O utilizador não encontrou onde gerir os endereços de envio.

**Causa provável**
Falta de conhecimento da funcionalidade de endereços adicionais.

**Solução**
Criar endereços de envio na ficha de cliente.

**Como proceder**
1. Abrir a ficha do cliente pretendido.
2. No menu superior, selecionar "Cliente" → "Endereços Envio".
3. Clicar em "+ Novo" para adicionar um novo endereço.
4. Preencher os dados de envio (morada, código postal, localidade, etc.).

**Validação final**
Os novos endereços ficam disponíveis para seleção em documentos de venda e logística.

**Notas**
É possível definir um endereço predefinido ou selecionar diferentes moradas conforme o tipo de documento.


## BC-KB-016 — Criar novos contactos para o cliente
**Categoria:** Clientes
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Pretende adicionar contactos associados a um cliente.

**Diagnóstico**
O utilizador não sabe como criar contactos a partir do Outlook ou da ficha de cliente.

**Causa provável**
Desconhecimento dos métodos de criação de contactos.

**Solução**
Criar contactos através do add-in de Outlook ou diretamente na ficha de cliente.

**Como proceder**
1. Método 1 – Outlook: selecione o email do contacto pretendido e utilize o suplemento do Business Central no Outlook para adicionar o contacto. Confirme o nome.
2. Método 2 – Ficha de Cliente: aceder a "Clientes", selecionar a ficha do cliente, ir a "Base" → "Contacto".
3. Se não existir nenhum contacto associado, responder "Sim" quando questionado e preencher a ficha do novo contacto.

**Validação final**
Os contactos ficam associados ao cliente e são visíveis na lista de contactos.

**Notas**
Os contactos podem ser editados ou eliminados através da opção de menu (três pontos) na lista de contactos.


## BC-KB-017 — Criar novo fornecedor
**Categoria:** Fornecedores
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário registar um novo fornecedor no sistema.

**Diagnóstico**
O utilizador não iniciou o processo ou não sabe como fazê-lo.

**Causa provável**
Falta de conhecimento do processo de criação de fornecedores.

**Solução**
Criar o fornecedor através da ficha de fornecedor e enviar pedido de aprovação.

**Como proceder**
1. Ir a "Fornecedores" e clicar em "Novo".
2. É gerado automaticamente o número de fornecedor.
3. Preencher os campos obrigatórios identificados em eInfo Obrigatória.
4. Selecionar "Pedido" → "Enviar Pedido Aprovação" para submeter o pedido.

**Validação final**
O fornecedor surge na lista e o pedido de aprovação é registado.

**Notas**
Assegure-se de que todas as informações estão corretas antes de enviar para aprovação.


## BC-KB-018 — Verificar estado de criação de fornecedores
**Categoria:** Fornecedores
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Necessita saber quais os fornecedores que ainda estão em processo de aprovação.

**Diagnóstico**
O utilizador não sabe como filtrar a lista de fornecedores para ver os que têm o workflow em progresso.

**Causa provável**
Desconhecimento dos filtros de workflow.

**Solução**
Aplicar o filtro de estado na lista de fornecedores.

**Como proceder**
1. Aceder à lista de "Fornecedores".
2. Selecionar o filtro "Workflowstatus".
3. Definir o valor para "Em Progresso" para visualizar os fornecedores pendentes.

**Validação final**
A lista apresenta apenas os fornecedores cujo estado de workflow está "Em Progresso".

**Notas**
Permite monitorizar pedidos de aprovação pendentes e evitar atrasos.


## BC-KB-019 — Aprovação de novos fornecedores
**Categoria:** Fornecedores
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Um fornecedor criado está pendente de aprovação.

**Diagnóstico**
O pedido de aprovação pode não ter sido enviado ou ainda não foi tratado.

**Causa provável**
Esquecimento ou atraso no processo de aprovação.

**Solução**
Enviar o pedido de aprovação e acompanhar nas solicitações pendentes.

**Como proceder**
1. Abrir a ficha do fornecedor.
2. Selecionar "Pedido" → "Enviar Pedido Aprovação" para enviar o pedido.
3. Para verificar o estado, aceder a "Aprovações" na ficha do fornecedor ou pesquisar "Solicitações para Aprovar".
4. Nas solicitações pendentes pode aprovar, rejeitar, abrir registo ou adicionar comentários.

**Validação final**
Após a aprovação, o fornecedor torna-se ativo e pode ser utilizado.

**Notas**
Considere configurar um alerta para identificar fornecedores que requerem aprovação pré-encomenda.


## BC-KB-020 — Criar nova oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Necessidade de registar uma nova oportunidade (concurso, ajuste direto ou proposta simples).

**Diagnóstico**
O utilizador não iniciou o processo de criação da oportunidade.

**Causa provável**
Desconhecimento do caminho para criar oportunidades.

**Solução**
Criar uma nova oportunidade na lista de oportunidades.

**Como proceder**
1. Aceder à lista de "Oportunidades".
2. Clicar em "Novo" para criar uma nova oportunidade.
3. Será aberta uma ficha de oportunidade em branco para preenchimento.

**Validação final**
A oportunidade fica registada e visível na lista.

**Notas**
As oportunidades podem representar concursos, ajustes diretos ou propostas simples.


## BC-KB-021 — Caracterizar a oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Uma nova oportunidade precisa de ser caracterizada com informação básica.

**Diagnóstico**
A ficha de oportunidade está vazia ou incompleta.

**Causa provável**
Necessidade de preencher campos obrigatórios na tab Geral.

**Solução**
Preencher os campos principais da oportunidade.

**Como proceder**
1. Na ficha de oportunidade, preencher o campo "Nº" (utilize a numeração automática, basta clicar "ok").
2. Inserir a "Descrição" do procedimento ou oportunidade.
3. Selecionar o "Nº Contacto" associado à oportunidade.
4. Definir a "Prioridade" da oportunidade.
5. Indicar o "Cód. Ciclo de Vendas" adequado e o "Cód. Vendedor" que é a pessoa responsável pelo acompanhamento desta oportunidade.

**Validação final**
A ficha da oportunidade contém todos os campos obrigatórios preenchidos.

**Notas**
Podem ser adicionados anexos, ligações e notas para documentar requisitos ou informações adicionais.


## BC-KB-022 — Identificar requisitos de concurso
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Uma oportunidade envolve um concurso público e requer informação adicional.

**Diagnóstico**
Os campos específicos do concurso não foram preenchidos.

**Causa provável**
Falta de registo dos requisitos necessários à proposta.

**Solução**
Preencher os campos de procedimento e requisitos na ficha de oportunidade.

**Como proceder**
1. Na ficha da oportunidade, identificar se se trata de um concurso.
2. No separador de requisitos, preencher o campo "Procedimento" com o número do concurso.
3. Indicar o "Título do procedimento" a imprimir na proposta de venda.
4. Preencher a "Data/Hora Limite de Entrega da Proposta".
5. Ativar e preencher outros campos solicitados pelo cliente para que apareçam na proposta de venda como por exemplo o País de origem, a marca ou a necessidade de visibilidade do CDM.

**Validação final**
Todos os requisitos do concurso estão registados e prontos para constar na proposta.

**Notas**
Ignorar este passo se a oportunidade não for um concurso.


## BC-KB-023 — Gerir o ciclo de vendas da oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
A oportunidade deve seguir um ciclo de vendas com etapas e ações pré-definidas.

**Diagnóstico**
O ciclo de vendas não foi selecionado ou não está a avançar.

**Causa provável**
Falta de seleção ou ativação das etapas do ciclo.

**Solução**
Selecionar e ativar etapas do ciclo de vendas.

**Como proceder**
1. Na ficha da oportunidade, selecionar o "Cód. Ciclo de Vendas" que melhor se adapta (por exemplo, Concursos Públicos).
2. Para iniciar o ciclo, clicar em "Processar" → "Ativar Primeira Etapa"; o estado muda para "Em curso".
3. Após concluir as ações da etapa atual, ativar a etapa seguinte em "Base" → "Atualizar" e inserir as informações solicitadas.
4. Repetir até que todas as etapas estejam concluídas.

**Validação final**
O estado da oportunidade reflete a etapa atual e as tarefas geradas são executadas.

**Notas**
O ciclo de vendas define as tarefas e responsabilidades associadas à oportunidade.


## BC-KB-024 — Aceder à lista de ações a efetuar
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O utilizador quer ver as tarefas pendentes relacionadas com a oportunidade.

**Diagnóstico**
Não sabe como listar as ações a efetuar.

**Causa provável**
Desconhecimento dos menus de ações.

**Solução**
Aceder à lista de ações a efetuar através da oportunidade ou do centro de perfil.

**Como proceder**
1. Método 1 – Pela oportunidade: na ficha da oportunidade, selecionar "Ações a Efetuar" para visualizar todas as ações e o seu estado.
2. Método 2 – Pelo Centro de Perfil: no centro de perfil, consultar a secção de ações pendentes para ver as suas ações e as da equipa.
3. Utilizar os filtros disponíveis para organizar as ações por estado ou responsável.

**Validação final**
As listas mostram as ações pendentes e o respetivo responsável.

**Notas**
Consultar regularmente para garantir que as tarefas são cumpridas dentro dos prazos.


## BC-KB-025 — Associar proposta de venda à oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Precisa de gerar uma proposta de venda baseada numa oportunidade.

**Diagnóstico**
A proposta de venda não está associada à oportunidade.

**Causa provável**
O procedimento de associação ainda não foi executado.

**Solução**
Gerar a proposta de venda através da opção de associação.

**Como proceder**
1. Na ficha da oportunidade, selecionar "Processar" → "Associar Proposta Venda".
2. O Business Central criará uma nova proposta de venda preenchida com os dados da oportunidade.
3. Confirmar que os produtos e condições comerciais estão corretos na proposta.

**Validação final**
A proposta de venda aparece associada à oportunidade com a informação correta.

**Notas**
Após associar, é possível ajustar linhas de produto ou condições antes de enviar ao cliente.


## BC-KB-026 — Retirar associação da proposta de venda
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
A proposta de venda associada contém erros e precisa ser corrigida.

**Diagnóstico**
Foram encontradas informações incorretas (produtos, preços, condições).

**Causa provável**
A proposta de venda foi criada com dados errados.

**Solução**
Remover a associação, corrigir e criar nova proposta de venda.

**Como proceder**
1. Na oportunidade, eliminar o número do documento de venda associado (campo "Nº Documento de Venda").
2. Corrigir os dados necessários no separador eProdutos da oportunidade.
3. Voltar a associar uma nova proposta de venda usando "Processar" → "Associar Proposta Venda".

**Validação final**
A nova proposta de venda está correta e associada à oportunidade.

**Notas**
Se preferir, pode eliminar completamente a proposta de venda e recriá-la do zero.


## BC-KB-027 — Eliminar uma proposta de venda
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Uma proposta de venda já não é necessária ou contém erros irreversíveis.

**Diagnóstico**
Decidiu-se eliminar a proposta em vez de alterar.

**Causa provável**
A informação da proposta está desatualizada ou incorreta.

**Solução**
Eliminar a proposta de venda através do ícone de eliminar.

**Como proceder**
1. Abrir a proposta de venda que pretende eliminar.
2. Clicar no ícone de "Eliminar representado por um caixore de lixo no topo" para remover a proposta.
3. Confirmar a eliminação quando solicitado.

**Validação final**
A proposta de venda é removida e a associação com a oportunidade desaparece automaticamente.

**Notas**
Depois de eliminada, é necessário criar uma nova proposta se o cliente ainda estiver interessado.


## BC-KB-028 — Adicionar comentários de produto à proposta de venda
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário incluir notas específicas em cada linha de produto de uma proposta de venda.

**Diagnóstico**
A funcionalidade de comentários de linha não foi utilizada.

**Causa provável**
Desconhecimento da opção de inserir comentários em linhas de produto.

**Solução**
Usar a opção de comentário na linha de produto.

**Como proceder**
1. Na proposta de venda, selecionar a linha de produto onde pretende adicionar o comentário.
2. No menu de linhas, escolher "Linha" → "Comentário".
3. Inserir o comentário desejado e fechar a janela.
4. O comentário será impresso por baixo da linha de produto na proposta.

**Validação final**
Os comentários aparecem na impressão da proposta de venda.

**Notas**
Utilize comentários para especificações técnicas, condições especiais ou qualquer informação adicional relevante.


## BC-KB-029 — Imprimir uma proposta de venda para concurso
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Necessita de imprimir a proposta de venda para apresentar num concurso.

**Diagnóstico**
O utilizador não sabe qual a opção de impressão correta.

**Causa provável**
Desconhecimento das opções de impressão específicas para concursos.

**Solução**
Usar a opção de impressão/ envio apropriada na proposta de venda.

**Como proceder**
1. Abrir a proposta de venda desejada.
2. Selecionar "Imprimir/Enviar".
3. Escolher a opção "Imprimir Proposta Concursos" para gerar o documento.
4. Imprimir ou descarregar o ficheiro conforme necessário.

**Validação final**
É gerado um documento formatado para concursos, pronto a ser entregue ao cliente.

**Notas**
Verifique se os anexos e requisitos do concurso estão completos antes de imprimir.


## BC-KB-030 — Solicitar envio de amostras
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário enviar amostras ao cliente no âmbito de uma oportunidade.

**Diagnóstico**
A funcionalidade de pedidos de amostras não foi utilizada.

**Causa provável**
Desconhecimento de como criar um pedido de amostras.

**Solução**
Criar e libertar um pedido de amostras a partir da oportunidade.

**Como proceder**
1. Na ficha da oportunidade ou proposta de venda, selecionar "Base" → "eSolicitar Envio de Amostras".
2. Será criado um novo pedido de amostras; verificar o ID do utilizador e o endereço de envio no separador "Transferir-para".
3. Se a morada não estiver correta, aceder à ficha do cliente através de "Nº Entidade Externa" e criar um código de envio específico ou preencher manualmente a morada no pedido.
4. Atualizar a data de envio nas linhas do pedido.
5. Para libertar o pedido para a logística, alterar o estado de "Aberto" para "Liberto" através de "Base" → "Libertar" → "Libertar".

**Validação final**
O pedido de amostras está liberto e pronto para expedição pela logística.

**Notas**
Certifique-se de que as quantidades e os códigos de produto estão corretos no pedido.


## BC-KB-031 — Associar informação da concorrência
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Deseja adicionar informação da concorrência a uma oportunidade para análise.

**Diagnóstico**
Não foi associada informação de concorrência.

**Causa provável**
Desconhecimento da funcionalidade de concor­rência.

**Solução**
Associar e preencher informação da concorrência na oportunidade.

**Como proceder**
1. Abrir a oportunidade desejada.
2. Selecionar "Relacionado" → "Concorrência" → "Informação da Concorrência".
3. Preencher a informação diretamente na tabela ou importar a partir de Excel (copiar e colar dados).

**Validação final**
A ficha da oportunidade contém as linhas de concorrência preenchidas.

**Notas**
Pode colar dados a partir de uma folha Excel para facilitar a inserção massiva.


## BC-KB-032 — Fechar uma oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
A oportunidade chegou ao fim e deve ser encerrada (ganha ou perdida).

**Diagnóstico**
O estado da oportunidade não foi atualizado para encerrada.

**Causa provável**
O utilizador ainda não executou o fecho na ficha.

**Solução**
Fechar a oportunidade indicando o estado e motivos.

**Como proceder**
1. Na ficha da oportunidade, selecionar "Base" → "Fechar".
2. Preencher o campo "Estado Oportunidade" escolhendo "Ganho" ou "Perdido".
3. Selecionar um "Cód. Fecho Oportunidade" conforme o motivo (podem existir códigos diferentes para ganhas e perdidas).
4. Indicar a "Data Encerramento".

**Validação final**
A oportunidade fica com estado encerrado e deixa de aparecer na lista de oportunidades ativas.

**Notas**
Pode criar códigos de fecho personalizados para melhor análise de motivos de perda ou ganho.


## BC-KB-033 — Aceder à folha de requisição
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Precisa de utilizar a folha de requisição para gerar sugestões de compra.

**Diagnóstico**
O utilizador não encontra a folha de requisição ou não tem uma folha associada.

**Causa provável**
Não criada ou não selecionada a folha de requisição do utilizador.

**Solução**
Aceder à folha de requisição e garantir que existe uma folha própria.

**Como proceder**
1. No campo de pesquisa, escrever "Folhas de Requisição" e selecionar a opção.
2. Ao entrar na folha, verificar o "Nome da Folha de Requisição"; cada utilizador deve usar a sua folha específica.
3. Se a folha não existir, solicitar a criação à equipa de suporte do Business Central.
4. Para trocar de folha, clicar nos três pontinhos e selecionar a folha desejada.

**Validação final**
A folha correta está aberta e pronta para receber sugestões de compra.

**Notas**
Uma configuração adequada evita conflitos entre utilizadores ao gerar sugestões.


## BC-KB-034 — Sugerir requisição de produtos
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Deseja gerar sugestões de reaprovisionamento na folha de requisição.

**Diagnóstico**
Ainda não foram executados os parâmetros de planeamento para gerar sugestões.

**Causa provável**
O utilizador não selecionou a opção de sugerir requisições de produtos.

**Solução**
Utilizar a opção "Sugerir Requisição Produtos".

**Como proceder**
1. Na folha de requisição, selecionar o menu "Processar" → "Sugerir Requisição Produtos".
2. Definir os parâmetros de planeamento (datas, utilização de previsão, exclusões) conforme necessário.
3. Clicar em OK para que o Business Central crie as linhas de sugestão.

**Validação final**
As linhas de sugestão são geradas na folha de requisição.

**Notas**
É importante que o planeamento esteja corretamente configurado nas fichas de produto antes de gerar as sugestões.


## BC-KB-035 — Definir parâmetros da sugestão na folha de requisição
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário configurar os parâmetros que controlam as sugestões de compra.

**Diagnóstico**
Os parâmetros de data, previsão e planeamento não foram definidos.

**Causa provável**
Desconhecimento das opções disponíveis ao sugerir requisições.

**Solução**
Preencher os campos de data e selecionar as opções de previsão e planeamento.

**Como proceder**
1. Na janela de parâmetros da sugestão, introduzir a "Data Inicial" e a "Data Final" para o período de planeamento.
2. Ativar "Utilizar Previsão" para incluir a previsão de vendas previamente introduzida.
3. Se aplicável, definir "Excluir Previsão Anterior a" uma determinada data para ignorar dados antigos.
4. Ativar "Respeitar Parâmetros Planeamento" para considerar pontos de encomenda, quantidades mínimas e inventário máximo.
5. Aplicar filtros adicionais como "Nº" (produto específico) ou "Nº Fornecedor" conforme necessário.

**Validação final**
A sugestão gerada reflete corretamente os parâmetros definidos e as necessidades de compra.

**Notas**
Escolher um período adequado é crucial para uma sugestão assertiva, especialmente para produtos com lead time longo.


## BC-KB-036 — Aplicar filtros na sugestão da folha de requisição
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Pretende filtrar a sugestão por produto ou fornecedor específico.

**Diagnóstico**
Sugestão gerada contém muitos produtos não relevantes.

**Causa provável**
Filtros de produto ou fornecedor não foram aplicados.

**Solução**
Utilizar os filtros disponíveis antes de gerar a sugestão.

**Como proceder**
1. Na janela de parâmetros da sugestão, localizar os filtros disponíveis.
2. Introduzir o número do produto em "Nº" para restringir a análise a um produto específico.
3. Introduzir o número do fornecedor em "Nº Fornecedor" para restringir aos produtos de um fornecedor.
4. Confirmar e gerar a sugestão.

**Validação final**
A folha de requisição apresenta apenas as linhas relativas aos filtros aplicados.

**Notas**
Os filtros são úteis para análises focadas, como reaprovisionar apenas de determinados fornecedores.


## BC-KB-037 — Editar linhas de sugestão na folha de requisição
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
As linhas de sugestão precisam de ser revistas antes de gerar encomendas de compra.

**Diagnóstico**
Sugestão automática pode necessitar de ajustes manuais.

**Causa provável**
Parâmetros iniciais podem não refletir totalmente as necessidades ou podem existir exceções.

**Solução**
Rever, editar ou eliminar linhas de sugestão.

**Como proceder**
1. Após gerar a sugestão, analisar cada linha proposta.
2. Eliminar linhas desnecessárias ou criar linhas adicionais manualmente.
3. Verificar os campos: "Nº" (produto), "Mensagem de Ação" (Novo, Alterar Quantidade, Reagendar, Reagendar & Mudar Qtde., Cancelar), "Código Localização", "Quantidade Original" e "Quantidade" sugerida.
4. Confirmar ou alterar o "Nº Fornecedor"; selecionar fornecedores alternativos se necessário.
5. Verificar e ajustar a "Data Vencimento" nas linhas conforme planeamento.

**Validação final**
As linhas editadas refletem as quantidades e ações corretas antes de executar a mensagem de ação.

**Notas**
Aceitar ou rejeitar a "Mensagem de Ação" define se a linha será processada na encomenda de compra.


## BC-KB-038 — Verificar origem da sugestão
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário rastrear a origem de uma linha de sugestão na folha de requisição.

**Diagnóstico**
Não é claro de onde surgiu a necessidade (encomenda de venda, previsão, stock de segurança).

**Causa provável**
Necessidade de análise de origem da sugestão.

**Solução**
Usar a funcionalidade de rastreio de encomenda.

**Como proceder**
1. Selecionar a linha de sugestão que pretende analisar.
2. Ir a "Linha" → "Rastreio Encomenda" para ver a origem da sugestão.
3. Analisar a cadeia de origem (pedido de venda, previsão, ponto de encomenda, etc.).

**Validação final**
A origem da sugestão é identificada e justificada.

**Notas**
Conhecer a origem ajuda a tomar decisões mais informadas sobre aceitar ou rejeitar a sugestão.


## BC-KB-039 — Selecionar fornecedores alternativos
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Deseja alterar o fornecedor sugerido numa linha de requisição.

**Diagnóstico**
O fornecedor principal pode não ser o mais adequado no momento.

**Causa provável**
Pode haver fornecedores alternativos configurados na ficha de produto.

**Solução**
Escolher fornecedor alternativo diretamente na linha de sugestão.

**Como proceder**
1. Na linha de sugestão, clicar no campo "Nº Fornecedor".
2. Verificar se existem fornecedores alternativos disponíveis.
3. Selecionar o fornecedor alternativo pretendido.
4. Rever as restantes condições (quantidade, data, mensagem de ação).

**Validação final**
A linha reflete o fornecedor alternativo escolhido.

**Notas**
É importante que os fornecedores alternativos estejam previamente configurados na ficha de produto.


## BC-KB-040 — Executar mensagens de ação
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Depois de rever as linhas de sugestão, é necessário gerar encomendas de compra.

**Diagnóstico**
As linhas de sugestão ainda não foram processadas.

**Causa provável**
Falta executar as mensagens de ação definidas em cada linha.

**Solução**
Executar as ações a partir da folha de requisição.

**Como proceder**
1. Na folha de requisição, após rever todas as linhas, selecionar "Processar" → "Executar Mensagem de Ação".
2. O Business Central processa as linhas conforme a mensagem de ação (criar nova encomenda, alterar quantidade, reagendar, cancelar, etc.).
3. Verificar as encomendas de compra geradas e proceder ao envio para aprovação se necessário.

**Validação final**
As encomendas de compra são geradas conforme as linhas e mensagens de ação.

**Notas**
Certifique-se de que todas as linhas estão corretas antes de executar, pois o processamento é automático.


## BC-KB-041 — Valor mínimo de compra por encomenda
**Categoria:** Compras
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Deseja assegurar que uma encomenda de compra cumpre o valor mínimo estipulado pelo fornecedor.

**Diagnóstico**
Foi emitido um alerta de valor mínimo de compra.

**Causa provável**
O valor total da encomenda está abaixo do mínimo definido na ficha do fornecedor.

**Solução**
Rever o valor total da encomenda e ajustá-la para cumprir o mínimo.

**Como proceder**
1. Configurar o valor mínimo de compra na ficha do fornecedor.
2. No momento de libertar a encomenda de compra, o sistema verifica se o valor total cumpre o mínimo.
3. Se o alerta surgir, adicionar mais linhas ou quantidades até atingir o valor mínimo.
4. libertar novamente a encomenda.

**Validação final**
A encomenda cumpre o valor mínimo e é libertada sem alertas.

**Notas**
Esta configuração ajuda a cumprir acordos comerciais e a minimizar custos logísticos.


## BC-KB-042 — Erro ao registar recibo em diário de cobranças
**Categoria:** Financeiro / Cobranças  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar registar um recibo no diário de cobranças, surge a mensagem:

"Nºs Recibo tem de ter um valor em Configuração Vendas & Cobranças: Chave Primária. Não pode ser igual a zero nem estar vazio."

**Diagnóstico**  
O sistema não consegue atribuir automaticamente um número ao recibo.

**Causa provável**  
O cliente não tem a opção "Emitir Recibo" ativa na respetiva ficha. Esta configuração é necessária para que o Business Central consiga gerar o número de recibo automaticamente.

**Solução**  
Verificar a ficha do cliente e confirmar se a opção "Emitir Recibo" está marcada.

**Como proceder**
1. Abrir a ficha do cliente em questão.
2. Ir ao separador "Pagamentos".
3. Confirmar se a opção "Emitir Recibo" está marcada.
4. Se não estiver marcada, ativar essa opção.
5. Regressar ao diário de cobranças.
6. Voltar a tentar registar o recibo.

**Validação final**
O recibo é registado sem apresentar erro relacionado com a numeração de recibos.

**Notas**
Sempre que este erro surgir no registo de recibos, validar primeiro a configuração do cliente antes de analisar a configuração geral de numeração.


## BC-KB-043 — Suplemento do Excel do Business Central deixou de funcionar
**Categoria:** Excel / Integrações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O suplemento do Excel utilizado para ligação ao Business Central deixou de funcionar, impedindo a atualização ou exportação de dados diretamente entre o Excel e o sistema.

**Diagnóstico**  
O suplemento pode estar desativado, mal instalado ou com a ligação ao Business Central inválida.

**Causa provável**  
O suplemento "Microsoft Dynamics Office Add-in" deixou de estar corretamente associado ao Excel ou ficou com uma configuração inválida.

**Solução**  
Reativar ou reinstalar o suplemento do Business Central no Excel e configurar novamente o servidor de ligação.

**Como proceder**
1. Abrir o Excel.
2. Ir a "Base" → "Suplementos" → "Mais Suplementos...".
3. Procurar se o suplemento "Microsoft Dynamics Office Add-in" já está instalado.
4. Se já estiver instalado:
   - Remover/desinstalar o suplemento.
   - Fechar o Excel.
   - Abrir novamente o Excel.
5. Na caixa de pesquisa dos suplementos, escrever:
   - "Microsoft Dynamics Office Add-in"
6. Selecionar o suplemento.
7. Clicar em "Adicionar".
8. Quando for solicitado o servidor, inserir o seguinte URL:
   - https://exceladdinprovider.smb.dynamics.com
9. Confirmar com "Sim".
10. Aguardar que o suplemento restabeleça a ligação ao Business Central.

**Validação final**
O painel do Business Central volta a abrir no Excel e permite atualizar, publicar ou exportar dados.

**Notas**
Caso o problema seja apenas de autenticação, pode ser suficiente terminar sessão e iniciar sessão novamente no painel do suplemento.


## BC-KB-044 — Erro nas etiquetas de envio por código postal não reconhecido na delegação
**Categoria:** Logística Externa / Parcel  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Durante a emissão de etiquetas de envio, surge um erro relacionado com código postal não reconhecido no sistema de delegações.

**Diagnóstico**  
O sistema tenta identificar a delegação com base no código postal completo e, quando não encontra correspondência, procura pelo código postal parcial. Se o código parcial também não estiver configurado, a etiqueta não é emitida corretamente.

**Causa provável**  
O código postal parcial não está configurado nas delegações do operador logístico.

**Solução**  
Adicionar manualmente o código postal em falta na lista de delegações do operador, tanto no Parcel 1 como no Parcel 2.

**Como proceder**
1. Aceder a "eLogística Externa".
2. Selecionar o operador.
3. Ir a "Relacionado" → "eLogista Delegations".
4. Verificar se existem linhas para:
   - Código postal completo, por exemplo "4754-503".
   - Código postal parcial, por exemplo "4754".
5. Se o código parcial não existir, criar uma nova linha.
6. Inserir o código postal parcial em falta.
7. Atribuir a mesma delegação usada em códigos semelhantes ou já existentes.
8. Na descrição, adicionar um asterisco "*" para identificar que o código foi criado manualmente.
9. Repetir o processo nos dois operadores:
   - Parcel 1
   - Parcel 2
10. Voltar ao documento/envio.
11. Gerar novamente a etiqueta.

**Validação final**
A etiqueta é gerada corretamente e a delegação é associada sem erro.

**Notas**
Em caso de dúvida sobre a delegação correta, validar o código postal junto das Operações ou com o responsável de Logística Externa.


## BC-KB-045 — Erro na aprovação de encomenda por cliente sem gestor comercial para produtos de Diagnóstico
**Categoria:** Vendas / Aprovações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar aprovar uma encomenda de produtos de Diagnóstico, o sistema apresenta erro indicando gestor indefinido.

**Diagnóstico**  
Na ficha do cliente, o código de vendedor está limitado a uma área de gestão que não corresponde à área dos produtos da encomenda.

**Causa provável**  
O cliente tem gestor comercial configurado apenas para a área Farma-Amb, mas a encomenda contém produtos de Diagnóstico. Como não existe gestor comercial válido para essa área, o sistema não consegue encaminhar corretamente a aprovação.

**Solução**  
Corrigir a alocação de gestores comerciais na ficha do cliente, adicionando a área de Diagnóstico ou removendo o filtro da área de gestão quando o gestor for transversal.

**Como proceder**
1. Aceder à ficha do cliente.
2. Ir ao separador "eSegmentação".
3. Clicar no campo "Cód. Vendedor".
4. Verificar as linhas de alocação de gestor comercial.
5. Se o gestor for responsável apenas por uma área específica:
   - Criar nova linha para a área de Diagnóstico.
6. Se o gestor for responsável por todas as áreas:
   - Remover o filtro da área de gestão.
7. Confirmar que o código de vendedor está corretamente atribuído.
8. Voltar à encomenda de venda.
9. Reenviar a encomenda para aprovação.

**Validação final**
A encomenda é reenviada para aprovação sem erro de gestor indefinido.

**Notas**
Quando o erro ocorrer noutros clientes, validar se também têm apenas o filtro Farma-Amb ativo na alocação de gestores comerciais.


## BC-KB-046 — Erro ao enviar pedido de amostras por Código Departamento em falta
**Categoria:** Oportunidades / Amostras  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar enviar um pedido de amostras, surge o erro:

"Código Departamento tem de ter um valor em Linha Transferência... Não pode ser igual a zero nem estar vazio."

**Diagnóstico**  
Existem linhas do pedido de amostras sem o campo "Código Departamento" preenchido.

**Causa provável**  
O campo obrigatório "Código Departamento" não foi preenchido automaticamente em todas as linhas do documento.

**Solução**  
Preencher o campo "Código Departamento" em todas as linhas onde esteja vazio.

**Como proceder**
1. Abrir o pedido de amostras com erro.
2. Rever as linhas do documento.
3. Identificar as linhas onde o campo "Código Departamento" está vazio.
4. Preencher o campo com o valor correto, por exemplo:
   - FARMA-AMB
   - DIAGNÓSTICO
5. Repetir o envio do pedido de amostras.

**Validação final**
O pedido de amostras é enviado sem apresentar erro de Código Departamento.

**Notas**
Se existirem várias linhas, validar todas antes de repetir o envio. Basta uma linha sem Código Departamento para o erro persistir.


## BC-KB-047 — Erro ao criar Ordem de Transferência por falta de associação de Gestor Comercial no cliente
**Categoria:** Transferências / Dimensões  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao criar uma Ordem de Transferência, o sistema apresenta a mensagem:

"O campo Cód. Valor Dimensão da tabela Mov. Combinação Dimensão contém um valor (INDEFINIDO) que não é possível encontrar na tabela relacionada (Valor Dimensão)."

**Diagnóstico**  
Os campos "Código Departamento" e "Área de Gestão de Produto" não são preenchidos automaticamente.

**Causa provável**  
O cliente não tem um Gestor Comercial válido definido na ficha. Em alguns casos, o cliente está configurado com o código genérico "GC-INDEFIN", o que impede a atribuição correta das dimensões comerciais.

**Solução**  
Atribuir o Gestor Comercial correto na ficha do cliente e confirmar se o vendedor tem as dimensões necessárias configuradas.

**Como proceder**
1. Aceder à ficha do cliente.
2. Verificar o campo "Cód. Vendedor".
3. Se o campo estiver preenchido com "GC-INDEFIN", substituir pelo gestor correto.
4. Confirmar que o vendedor está configurado na página "Vendedores/Compradores".
5. Validar se o vendedor tem as dimensões associadas:
   - Departamento
   - Área de Gestão de Produto
6. Voltar à Ordem de Transferência.
7. Atualizar a página/documento.
8. Confirmar se os campos de dimensão passaram a ser preenchidos corretamente.

**Validação final**
A Ordem de Transferência deixa de apresentar erro de valor dimensão "INDEFINIDO" e as dimensões comerciais ficam preenchidas.

**Notas**
Este erro é recorrente em clientes configurados com gestor comercial genérico. Sempre que um cliente passa a ter gestor atribuído, deve ser atualizada a ficha para evitar erros em documentos futuros.


## BC-KB-048 — Configurar dimensões numa Ordem de Transferência
**Categoria:** Transferências / Dimensões  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A Ordem de Transferência apresenta dimensões em falta ou valores inválidos, podendo gerar erros como "Valor Dimensão INDEFINIDO".

**Diagnóstico**  
As dimensões necessárias não estão corretamente definidas no cabeçalho ou nas linhas da Ordem de Transferência.

**Causa provável**  
O documento foi criado sem herdar corretamente as dimensões ou existe conflito entre dimensões do cabeçalho e das linhas.

**Solução**  
Configurar as dimensões no cabeçalho da Ordem de Transferência, garantindo que são aplicadas corretamente às linhas.

**Como proceder**
1. Abrir a Ordem de Transferência.
2. Ir ao menu "Encomenda".
3. Clicar em "Dimensões".
4. Será aberta a página "Cabeçalho Transferência – Movs. Combinação Dimensões".
5. Criar ou rever as linhas de dimensão.
6. Preencher o campo "Código Dimensão", por exemplo:
   - DEPARTAMENTO
   - AREA.GEST.PRODUTO
7. Preencher o campo "Cód. Valor Dimensão" com o valor correto, por exemplo:
   - FARMA-AMB
   - DIAGNÓSTICO
   - RETALHO
8. Fechar.
9. Rever as linhas da Ordem de Transferência.
10. Confirmar se as dimensões foram aplicadas corretamente.

**Validação final**
A Ordem de Transferência fica com as dimensões corretas no cabeçalho e nas linhas, permitindo prosseguir sem erro de dimensão.

**Notas**
Sempre que possível, configurar dimensões no cabeçalho para garantir consistência em todas as linhas. Se existirem dimensões manuais nas linhas, validar se não entram em conflito com o cabeçalho.


## BC-KB-049 — Atualização mensal de preços e margens com ficheiro da Glintt
**Categoria:** Produtos / Preços  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
A atualização mensal de preços só pode ser carregada no Business Central se o ficheiro enviado pela Glintt for convertido corretamente para o formato exigido pelo sistema.

**Diagnóstico**  
O Business Central rejeita a importação quando o ficheiro não está no formato correto.

**Causa provável**  
O ficheiro contém cabeçalhos, colunas a mais, formato incorreto ou separador diferente do esperado.

**Solução**  
Preparar o ficheiro de Preços e Margens em formato CSV, separado por vírgulas, sem cabeçalhos e apenas com as primeiras 11 colunas, antes de importar no Business Central.

**Como proceder**

### 1. Obter o ficheiro
1. Solicitar o ficheiro mensal de preços e margens à Glintt.
2. Contacto de referência:
   - Tiago Valadas
   - tiago.valadas@glintt.com
3. O pedido deve ser feito no início de cada mês.

### 2. Exportar o ficheiro
1. Copiar o ficheiro recebido para a pasta local:
   - C:\Users\baraujo\Quilaban\TIC - TIC\Preços ANF (periodicidade mensal)

### 3. Preparar o ficheiro para importação
1. Abrir o ficheiro original no Excel.
2. Selecionar apenas as primeiras 11 colunas:
   - A até K
3. Remover todas as linhas de cabeçalho.
4. Exportar o ficheiro em formato:
   - CSV (Comma delimited) (.csv)
5. Confirmar que o separador utilizado é a vírgula.

### 4. Importar no Business Central
1. Entrar no Business Central com o perfil:
   - Administração de utilizadores, grupos utilizador e permissões
2. Pesquisar por "eMasterFiles".
3. Selecionar "eHist. PVA, PIC, PMA, PVFD, PVAD", conforme o ficheiro a atualizar.
4. Ir a "Ações".
5. Selecionar "eIMP. PVA/PIC/PMA/PVFS/PVAD".
6. Clicar em "Importar".
7. Selecionar o ficheiro CSV preparado.
8. Confirmar a importação.

**Validação final**
O sistema aceita o ficheiro sem erros e os preços/margens ficam atualizados no Business Central.

**Notas**
Este caso complementa o procedimento genérico de importação PVA/PIC/PMA/PVFD/PVAD, acrescentando a preparação mensal do ficheiro e os requisitos de formato.


## BC-KB-050 — Erro ao registar Fatura Antecipada por percentagem de pré-pagamento em falta
**Categoria:** Vendas / Pré-pagamentos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar registar uma fatura antecipada, o sistema apresenta erro indicando que não existem quantidades para faturar.

**Diagnóstico**  
A encomenda de venda não está a ser reconhecida corretamente como documento com pré-pagamento.

**Causa provável**  
O campo "% Pré-pagamento" não está preenchido na encomenda de venda.

**Solução**  
Reabrir a encomenda de venda e preencher manualmente o campo "% Pré-pagamento" com o valor pretendido.

**Como proceder**
1. Abrir a Encomenda de Venda.
2. Verificar se a encomenda está libertada.
3. Se estiver libertada, reabrir a encomenda.
4. No cabeçalho da encomenda, localizar o campo "% Pré-pagamento".
5. Preencher o valor pretendido, por exemplo "100%".
6. Libertar ou aprovar novamente a encomenda, se aplicável.
7. Registar a Fatura Antecipada.

**Validação final**
A fatura antecipada é registada sem erro de quantidades para faturar.

**Notas**
Quando surgir erro de quantidades em faturas antecipadas, confirmar primeiro se o campo "% Pré-pagamento" está preenchido no documento.


## BC-KB-051 — Erro na atualização automática do estado das encomendas Parcel / Order Status
**Categoria:** Logística Externa / Parcel  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Em algumas situações, os estados das encomendas não são atualizados automaticamente na integração com Parcel / Logística Externa.

Pode surgir a mensagem:

"The job Update Order Status scheduled by ELISIOSOUSA"

**Diagnóstico**  
A tarefa automática responsável por atualizar os estados das encomendas não executou corretamente.

**Causa provável**  
Falha ocasional na fila de tarefas associada à atualização dos estados de encomenda.

**Solução**  
Executar manualmente a tarefa responsável pela atualização dos estados através da página "Movimentos Filas Tarefas".

**Como proceder**
1. No Business Central, ir à pesquisa.
2. Procurar por "Movimentos Filas Tarefas".
3. Localizar a tarefa relacionada com a atualização de estados:
   - "Get Status Ws"
   - "Estados Parcel"
4. Selecionar a tarefa.
5. Ir a "Ações".
6. Clicar em "Correr uma vez (em primeiro plano)".
7. Aguardar alguns segundos pela execução.
8. Voltar ao ecrã onde os estados estavam em falta.
9. Atualizar a página.
10. Confirmar se os estados foram atualizados.

**Validação final**
Os estados das encomendas ficam atualizados e deixam de aparecer como pendentes ou em falta.

**Notas**
A execução manual força a atualização imediata. Algumas tarefas podem processar apenas um período limitado de dias, por exemplo os últimos 10 dias.


## BC-KB-052 — Comunicação de documentos à AGT
**Categoria:** AGT / Angola  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário comunicar documentos à AGT e garantir que o estado é atualizado corretamente no Business Central.

**Diagnóstico**  
Os documentos podem encontrar-se em diferentes estados:
- Estado AGT vazio: documentos ainda não comunicados.
- Estado AGT pendente: documentos comunicados, mas sem resposta final.
- Tarefa prévia não executada: pode bloquear ou impedir a comunicação correta.

**Causa provável**  
A comunicação à AGT exige uma sequência correta de passos: preparação da fila de tarefas, comunicação dos documentos e obtenção do estado.

**Solução**  
Executar o processo completo de comunicação à AGT para Faturas de Venda, Notas de Crédito de Venda e Recibos.

**Como proceder**

### 1. Preparação obrigatória
1. Pesquisar por "Movs. Fila Tarefas".
2. Localizar a tarefa:
   - AP_Send_FE / Altera e repõe o tipo de linha
3. Confirmar a descrição:
   - "executar antes da PTSSFEFE 31023050"
4. Selecionar a tarefa.
5. Ir a "Ações" → "Correr uma vez (em primeiro plano)".
6. Aguardar a conclusão da execução.

### 2. Comunicar Faturas de Venda
1. Aceder a "Faturas de Venda Registadas".
2. Aplicar os filtros:
   - Estado AGT = vazio
   - PTSS FE Document = Sim
3. Selecionar todos os documentos filtrados.
4. Ir a "Ações" → "Fatura" → "Comunicar Documento AGT".
5. Aguardar a conclusão do processo.

### 3. Obter estado das Faturas de Venda
1. Ainda em "Faturas de Venda Registadas", aplicar os filtros:
   - Estado AGT = Pendente
   - PTSS FE Document = Sim
2. Selecionar todos os documentos filtrados.
3. Ir a "Ações" → "Fatura" → "Obter Estado AGT".
4. Aguardar a atualização.

### 4. Comunicar Notas de Crédito de Venda
1. Aceder a "Notas Crédito Venda Registadas".
2. Aplicar os filtros:
   - Estado AGT = vazio
   - PTSS FE Document = Sim
3. Selecionar todos os documentos filtrados.
4. Ir a "Ações" → "Nota Crédito" → "Comunicar Documento AGT".
5. Aguardar a conclusão do processo.

### 5. Obter estado das Notas de Crédito de Venda
1. Ainda em "Notas Crédito Venda Registadas", aplicar os filtros:
   - Estado AGT = Pendente
   - PTSS FE Document = Sim
2. Selecionar todos os documentos filtrados.
3. Ir a "Ações" → "Nota Crédito" → "Obter Estado AGT".
4. Aguardar a atualização.

### 6. Comunicar Recibos
1. Aceder a "Recibos".
2. Aplicar os filtros:
   - Estado AGT = vazio
   - PTSS FE Document = Sim
3. Selecionar todos os documentos filtrados.
4. Ir a "Ações" → "Novo Documento" → "Comunicar Documento AGT".
5. Aguardar a conclusão do processo.

### 7. Obter estado dos Recibos
1. Ainda em "Recibos", aplicar os filtros:
   - Estado AGT = Pendente
   - PTSS FE Document = Sim
2. Selecionar todos os documentos filtrados.
3. Ir a "Ações" → "Novo Documento" → "Obter Estado AGT".
4. Aguardar a atualização.

**Validação final**
Os documentos deixam de estar com Estado AGT vazio ou pendente e passam a apresentar o estado atualizado corretamente.

**Notas**
A ordem correta é crítica:
1. Executar tarefa de preparação.
2. Comunicar documento.
3. Obter estado AGT.

Recomenda-se criar vistas personalizadas para os filtros usados com maior frequência.


## BC-KB-053 — Erro no plugin Business Central no Excel com msal.js timed_out
**Categoria:** Excel / Integrações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao utilizar o plugin do Business Central no Excel, surge o erro:

"See https://aka.ms/msal.js.errors#timed_out for details"

O erro impede o acesso aos dados do Business Central através do suplemento do Excel.

**Diagnóstico**  
O suplemento está instalado, mas a sessão de autenticação deixou de estar válida ou ficou presa.

**Causa provável**  
Expiração de sessão, alteração de credenciais, atualização Microsoft ou falha temporária na autenticação do plugin.

**Solução**  
Terminar sessão diretamente no painel do Business Central no Excel e iniciar sessão novamente.

**Como proceder**
1. Abrir o ficheiro Excel onde está a ligação ao Business Central.
2. No painel lateral do Business Central / Microsoft Dynamics Office Add-in, localizar a opção de conta ou sessão.
3. Clicar em "Terminar Sessão".
4. Aguardar alguns segundos até o suplemento concluir o logout.
5. Clicar novamente em "Iniciar Sessão".
6. Autenticar com o utilizador Microsoft 365 / Business Central.
7. Confirmar o ambiente e a empresa, se solicitado.
8. Atualizar os dados ou repetir a ação que estava a dar erro.

**Validação final**
O plugin volta a comunicar corretamente com o Business Central e deixa de apresentar o erro msal.js timed_out.

**Notas**
Antes de reinstalar o suplemento, testar sempre primeiro:
Terminar Sessão → Iniciar Sessão.


## BC-KB-054 — Erro na Logística Externa após faturação via Mobilidade com guia refletida em vez da fatura
**Categoria:** Mobilidade / Logística Externa  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Após faturação via Mobilidade, a Logística Externa ficou com o número da Guia de Remessa de Venda em vez do número da Fatura.

**Diagnóstico**  
A fatura foi registada, mas a informação refletida na Logística Externa ficou associada ao documento errado.

Existe divergência entre:
- Documento faturado.
- Registo da Mobilidade.
- Registo da Logística Externa.
- Documento associado ao envio/etiqueta.

**Causa provável**  
Erro no momento da faturação via Mobilidade, fazendo com que a Logística Externa assumisse a guia em vez da primeira fatura de venda gerada.

**Solução**  
Corrigir o registo da Mobilidade, remover ou cancelar a entrada incorreta na Logística Externa, forçar novamente o processamento e gerar nova etiqueta, se aplicável.

**Como proceder**

### 1. Identificar o processo
1. Identificar o processo de faturação via Mobilidade onde ocorreu o erro.
2. Confirmar que o problema surgiu no momento da faturação.
3. Validar que houve impacto na informação enviada/refletida na Logística Externa.

### 2. Confirmar a fatura correta
1. Validar qual foi a primeira Fatura de Venda gerada no processo.
2. Confirmar que essa é a fatura que deve ficar associada ao processo da Mobilidade.

### 3. Validar a Logística Externa
1. Aceder à Logística Externa.
2. Confirmar se o envio ficou associado à Guia de Remessa de Venda.
3. Comparar com a Fatura de Venda correta.
4. Se estiver refletida a guia em vez da fatura, confirma-se a divergência.

### 4. Remover ou cancelar a entrada incorreta
1. Se já existir uma entrada incorreta na Logística Externa, esta deve ser removida ou cancelada antes de forçar novo processamento.
2. A correção da entrada incorreta deve ser feita através da retificação do ID do movimento.
3. Esta correção apenas deve ser feita através de:
   - RapidStart
   - Data Editor

### 5. Corrigir o registo da Mobilidade
1. Validar a linha referente ao processo na Mobilidade.
2. Na linha do "Nº do Documento" da Mobilidade, introduzir o número da primeira Fatura de Venda gerada.
3. Confirmar que o processo fica associado à fatura correta e não à guia.

### 6. Forçar novo processamento na Logística Externa
1. Depois de corrigida a informação da Mobilidade e removida/cancelada a entrada incorreta, voltar à Logística Externa.
2. Executar:
   - "General" → "Force Processing"
3. Aguardar o processamento.

### 7. Gerar novamente a etiqueta, se aplicável
1. Se existir etiqueta/barcode associado ao envio, gerar novamente através da reimpressão da etiqueta.
2. Confirmar se a etiqueta passa a refletir o documento correto.

**Validação final**
Confirmar que:
1. A Mobilidade tem o número da primeira Fatura de Venda corretamente preenchido.
2. A Logística Externa deixou de refletir a Guia de Remessa de Venda.
3. A Logística Externa passou a refletir a Fatura correta.
4. A entrada incorreta foi removida ou cancelada.
5. O processamento foi forçado com sucesso.
6. A etiqueta foi reimpressa corretamente, se aplicável.

**Notas**
Sempre que, após faturação via Mobilidade, a Logística Externa apresentar a Guia de Remessa de Venda em vez da Fatura, deve ser validado o registo da Mobilidade e a primeira Fatura de Venda gerada no processo.


## BC-KB-055 — Delegar aprovação temporária de encomenda urgente
**Categoria:** Aprovações / Vendas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Uma colaboradora ficou sem acesso às ferramentas necessárias para aprovar uma encomenda urgente, devido a bloqueio do computador e ausência de rede no telemóvel.

Esta situação impediu a aprovação em tempo útil e gerou atraso num processo sensível, dependente de validação rápida.

**Diagnóstico**  
A aprovação estava atribuída a uma utilizadora que, naquele momento, não conseguia aceder ao Business Central para concluir a tarefa.

**Causa provável**  
Ausência de delegação/substituição previamente definida para o aprovador na configuração de utilizador de aprovação.

**Solução**  
Delegar temporariamente a aprovação para outro utilizador, permitindo que este assuma a tarefa no Business Central.

**Como proceder**
1. Aceder à encomenda no Business Central.
2. Ir ao separador "Aprovações".
3. Selecionar a linha de aprovação pendente.
4. Clicar em "Delegar".
5. Indicar o utilizador que irá assumir a aprovação.
6. Confirmar a delegação.
7. Verificar se foi criada uma nova linha de aprovação para o utilizador delegado.
8. Fazer F5 ou voltar à encomenda para confirmar que a delegação ficou ativa.

**Validação final**
A aprovação fica atribuída ao novo utilizador e o processo pode avançar sem depender do aprovador original.

**Notas**
Em períodos de ausência planeada, como férias, deve estar definido um substituto na configuração do utilizador de aprovação.  
Se existirem conflitos, aprovações duplicadas ou funções sobrepostas, considerar passar a tarefa para outro colega direto.


## BC-KB-056 — Erro ao criar lista de preços para instituições com tipo Preços e Descontos
**Categoria:** Vendas / Preços  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao criar uma nova lista de preços para instituições, por exemplo Cruz Vermelha ou ASP, surge erro ao introduzir valores.

A mensagem indica que o tipo de lista "Preços e Descontos" não pode ser utilizado.

**Diagnóstico**  
A lista foi criada com a configuração "Preço e Desconto", quando o pretendido era criar uma lista apenas de "Preço".

**Causa provável**  
A configuração da visualização/tipo da lista foi definida incorretamente antes da criação das linhas.

**Solução**  
Criar uma nova lista de preços corretamente configurada como apenas "Preço", antes de inserir linhas de produtos e valores.

**Como proceder**
1. Criar uma nova lista de preços.
2. Antes de inserir qualquer linha, definir "Ver coluna para" apenas com preços, sem desconto.
3. Não alterar esta configuração depois de inserir dados.
4. Se for usada importação por Excel, manter apenas as colunas necessárias:
   - Nº do Produto
   - Quantidade Mínima
   - Preço
5. Garantir que os preços estão corretamente formatados com vírgula decimal.
6. Importar os dados para o Business Central.
7. Validar as linhas importadas.
8. Ativar a lista de preços.
9. Apagar listas antigas ou incorretas para evitar duplicação.

**Validação final**
A lista de preços fica ativa, com tipo correto, e permite inserir/importar preços sem erro.

**Notas**
A configuração do tipo da lista deve ser definida antes de inserir linhas. Alterar a estrutura depois de existirem dados pode gerar erros ou inconsistências.


## BC-KB-057 — Erro ao faturar encomenda de venda por Data de Registo desatualizada
**Categoria:** Vendas / Faturação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar faturar uma encomenda de venda, o sistema bloqueia o registo devido à Data de Registo do utilizador não estar definida para o dia corrente.

**Diagnóstico**  
A configuração do utilizador tem uma Data de Registo diferente da data atual.

**Causa provável**  
A Data de Registo do utilizador ficou definida com uma data anterior, impedindo o registo correto do documento.

**Solução**  
Atualizar a Data de Registo na Configuração Utilizador para a data atual antes de prosseguir com a faturação.

**Como proceder**
1. No Business Central, pesquisar por "Configuração Utilizador".
2. Localizar o utilizador que está a tentar faturar.
3. Verificar o campo "Data de Registo".
4. Se a data estiver diferente do dia atual, atualizar para a data correta.
5. Voltar à encomenda de venda.
6. Repetir a tentativa de faturação.

**Validação final**
A encomenda de venda é faturada sem bloqueio relacionado com a Data de Registo.

**Notas**
Este erro pode surgir quando o utilizador ficou com uma data de trabalho anterior configurada. Validar sempre a Data de Registo antes de investigar outros bloqueios de faturação.


## BC-KB-058 — Erro ao faturar encomenda de venda por envio direto sem associação à encomenda de compra
**Categoria:** Vendas / Envio Direto  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar faturar uma encomenda de venda, surge a mensagem:

"A linha está marcada como envio direto e ainda não está associada a uma encomenda de compra."

**Diagnóstico**  
A linha da encomenda de venda está marcada como envio direto, mas os campos que fazem a ligação à encomenda de compra estão vazios.

**Causa provável**  
A associação entre a encomenda de venda e a encomenda de compra não foi criada ou perdeu-se durante o processo.

**Solução**  
Preencher manualmente, na linha da encomenda de venda, os campos de ligação à encomenda de compra.

**Como proceder**
1. Abrir a encomenda de venda indicada no erro.
2. Localizar a linha marcada como envio direto.
3. Preencher o campo "Nº Encomenda Compra" com o número da encomenda de compra associada.
4. Preencher o campo "Nº Linha Enc. Compra" com o número da linha correspondente da encomenda de compra.
5. Pedir ao utilizador para voltar a tentar faturar.

**Validação final**
A encomenda de venda é faturada sem erro de envio direto por falta de associação à encomenda de compra.

**Notas**
Este erro deve ser tratado linha a linha. Confirmar sempre se a encomenda de compra indicada corresponde ao produto e à linha correta.


## BC-KB-059 — Configurar Team Approval em aprovações de venda
**Categoria:** Aprovações / Workflow  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Existe necessidade de permitir que qualquer elemento de um grupo aprove um pedido de aprovação, sem obrigar a uma hierarquia entre aprovadores.

**Diagnóstico**  
Quando existem vários utilizadores no mesmo passo do workflow, o processo pode ficar dependente de configurações incorretas ou de aprovações sequenciais desnecessárias.

**Causa provável**  
O grupo de utilizadores de workflow não está configurado para permitir aprovação em equipa com igual importância entre aprovadores.

**Solução**  
Configurar o grupo de utilizadores de workflow com o mesmo número de sequência para todos os aprovadores e ativar o Team Approval.

**Como proceder**
1. Aceder aos grupos de utilizador de workflow.
2. Abrir o grupo utilizado no fluxo de aprovação.
3. Confirmar que todos os utilizadores do grupo têm o mesmo número de sequência, por exemplo "1".
4. Ativar a opção de Team Approval no grupo de utilizadores de workflow.
5. Confirmar que o workflow está ativo e associado ao grupo correto.
6. Testar o envio de um pedido de aprovação.

**Validação final**
Quando um elemento do grupo aprova, o pedido fica aprovado, as restantes aprovações pendentes são canceladas automaticamente e o documento é libertado.

**Notas**
Utilizar a mesma sequência significa que os aprovadores têm igual importância. Basta uma aprovação para concluir o passo do workflow.


## BC-KB-060 — Configurar substituto para delegações de aprovação em caso de ausência
**Categoria:** Aprovações / Delegações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Quando um aprovador está ausente, por exemplo em férias, os pedidos de aprovação podem ficar bloqueados se não existir substituto definido.

**Diagnóstico**  
A configuração do utilizador de aprovação não tem o campo de substituição preenchido ou a delegação não foi efetuada.

**Causa provável**  
Ausência de configuração prévia do substituto do aprovador.

**Solução**  
Definir o substituto na configuração do utilizador de aprovação e, quando necessário, delegar manualmente a aprovação.

**Como proceder**
1. Pesquisar por "Configuração Utilizador Aprovação".
2. Localizar o utilizador aprovador ausente.
3. Verificar o campo "Substituir".
4. Caso esteja vazio, preencher com o utilizador substituto.
5. Aceder ao pedido/documento pendente de aprovação.
6. Ir ao separador "Aprovações".
7. Delegar a aprovação para o substituto, se necessário.
8. Confirmar que a nova linha de aprovação foi criada corretamente.

**Validação final**
A aprovação passa a estar disponível para o substituto e o processo deixa de ficar bloqueado pela ausência do aprovador titular.

**Notas**
A delegação pode ser efetuada pelo utilizador que submete o pedido, pelo aprovador ou pelo gestor de aprovações, conforme permissões existentes.


## BC-KB-061 — Consultar vendas por cliente e produto
**Categoria:** Vendas / Análise  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário consultar as vendas já realizadas de uma determinada referência para um cliente específico, num determinado período.

**Diagnóstico**  
A informação deve ser analisada com base nas linhas de faturas de venda registadas e nas linhas de notas de crédito registadas.

**Causa provável**  
A consulta direta por cliente e produto não está imediatamente visível num único ecrã de resumo.

**Solução**  
Consultar as linhas registadas de faturas e notas de crédito, aplicando filtros por cliente, produto e período. O resultado líquido corresponde a faturas menos notas de crédito.

**Como proceder**
1. Na pesquisa, abrir "Linhas Fatura Venda Registadas".
2. Aplicar os filtros:
   - "Venda-a Nº Cliente" = cliente pretendido.
   - "Nº" = referência/produto pretendido.
   - "Data de Registo" = período pretendido, se aplicável.
3. Consultar as quantidades e valores faturados.
4. Na pesquisa, abrir "Linhas Nota de Crédito Registadas".
5. Aplicar os mesmos filtros:
   - "Venda-a Nº Cliente"
   - "Nº"
   - "Data de Registo"
6. Consultar se existem devoluções/créditos para o mesmo produto e cliente.
7. Consolidar a informação:
   - Vendas líquidas = Faturas - Notas de Crédito.

**Validação final**
É possível apurar a venda líquida do produto para o cliente no período pretendido.

**Notas**
Este procedimento é útil para responder a pedidos comerciais sobre histórico de vendas por cliente e produto.


## BC-KB-062 — Erro ao puxar envio na Mobilidade por e-mail em falta no Vendedor/Comprador
**Categoria:** Mobilidade / Vendedores  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar puxar dados dos envios na mobilidade, surge o erro:

"E-mail tem que ter um valor em Vendedor. Código igual a GC-HC não pode ser igual a zero nem estar vazio."

**Diagnóstico**  
O vendedor/comprador indicado na mensagem de erro não tem o campo "E-mail" preenchido.

**Causa provável**  
A ficha de Vendedor/Comprador está incompleta.

**Solução**  
Preencher o campo "E-mail" na ficha do Vendedor/Comprador indicado no erro.

**Como proceder**
1. No Business Central, pesquisar por "Vendedores/Compradores".
2. Abrir o registo com o código indicado no erro, por exemplo "GC-HC".
3. Localizar o campo "E-mail".
4. Introduzir o endereço de e-mail correto.
5. Voltar ao processo da mobilidade.
6. Puxar novamente os dados/envios.

**Validação final**
Os dados dos envios são carregados sem erro de e-mail em falta no Vendedor/Comprador.

**Notas**
Sempre que o erro indicar um código de vendedor específico, validar primeiro a respetiva ficha em Vendedores/Compradores.


## BC-KB-063 — Erro ao criar pedido de amostra por dimensão AREA.GEST.PRODUTO em falta
**Categoria:** Oportunidades / Amostras  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar criar ou avançar com um pedido de amostra, surge a mensagem:

"Dimensão Padrão não existe. Campos e valores de identificação: ID Tabela = '27', Nº = 'AMOSTRA – 540051', Código Dimensão = 'AREA.GEST.PRODUTO'"

**Diagnóstico**  
A dimensão padrão "Área de Gestão do Produto" não está definida para o produto indicado na mensagem de erro.

**Causa provável**  
A ficha do produto está sem a dimensão obrigatória "AREA.GEST.PRODUTO".

**Solução**  
Preencher a dimensão padrão "Área de Gestão do Produto" na ficha do produto.

**Como proceder**
1. No Business Central, pesquisar por "Produtos".
2. Abrir a ficha do produto indicado na mensagem de erro.
3. Aceder às "Dimensões" ou "Dimensões Padrão" do produto.
4. Preencher a dimensão "AREA.GEST.PRODUTO" com o valor correto.
5. Repetir a tentativa de criação ou envio do pedido de amostra.

**Validação final**
O pedido de amostra avança sem erro de dimensão padrão em falta.

**Notas**
Este erro está relacionado com configuração base do produto. Deve ser corrigido na ficha do produto e não apenas no documento.


## BC-KB-064 — Produto não incluído na recolha por lotes bloqueados
**Categoria:** Logística / Recolhas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Uma referência de produto não é incluída nas recolhas ao gerar os envios de uma encomenda.

**Diagnóstico**  
O produto tem stock disponível, mas todos os lotes disponíveis estão bloqueados, impedindo a seleção automática no processo de envio.

**Causa provável**  
Os lotes existentes para a referência estão marcados como bloqueados.

**Solução**  
Validar disponibilidade, reservas, validade e bloqueio dos lotes. Se todos os lotes estiverem bloqueados, encaminhar para validação da equipa responsável antes de desbloquear ou avançar com o envio.

**Como proceder**
1. Abrir a encomenda afetada.
2. Identificar a referência que não está a ser incluída na recolha.
3. Consultar o conteúdo de posição para verificar se existe quantidade disponível.
4. Confirmar se as quantidades estão disponíveis ou alocadas.
5. Verificar a validade dos lotes.
6. Confirmar se existem reservas ativas.
7. Aceder à lista de lotes disponíveis para a referência.
8. Verificar a coluna "Bloqueado".
9. Se todos os lotes estiverem bloqueados, encaminhar para validação da equipa responsável antes de qualquer alteração.

**Validação final**
É identificada a razão pela qual o produto não entra na recolha. Após desbloqueio ou decisão da equipa responsável, o produto poderá ser incluído no processo de envio.

**Notas**
Não desbloquear lotes sem validação da área responsável. O bloqueio pode estar relacionado com qualidade, validade, reserva operacional ou restrição interna.


## BC-KB-065 — Erro de dimensões por qualificação de fornecedor e produto em encomenda de compra
**Categoria:** Compras / Qualidade  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar receber produtos numa encomenda de compra, surge erro de combinação de dimensões bloqueada.

Exemplo de mensagem:

"A combinação de dimensões utilizada está bloqueada. Combinação de dimensão QUALIF PROD - DM.DM e QUALIF FORN - D-DM"

**Diagnóstico**  
A qualificação do fornecedor não permite a aquisição ou receção do produto em causa.

**Causa provável**  
O fornecedor ainda não está devidamente qualificado para fornecer aquele produto.

**Solução**  
Reencaminhar o caso para a Qualidade, para validação da documentação e qualificação do fornecedor/produto.

**Como proceder**
1. Identificar a encomenda de compra e a linha afetada.
2. Confirmar a mensagem de erro apresentada.
3. Validar que o erro está relacionado com dimensões de qualificação de fornecedor/produto.
4. Informar o utilizador de que a Logística não consegue resolver diretamente este bloqueio.
5. Reencaminhar o pedido para a Qualidade.
6. A Qualidade deve validar junto do comprador e do fornecedor se existe documentação válida para o fornecimento.
7. Se a documentação estiver correta, a Qualidade deve proceder à qualificação do fornecedor para o produto.
8. Após a qualificação, repetir a receção.

**Validação final**
Depois de o fornecedor ficar qualificado para o produto, a receção pode avançar sem erro de combinação de dimensões bloqueada.

**Notas**
Enquanto a qualificação não for concluída, a encomenda ficará bloqueada à receção.


## BC-KB-066 — Erro de múltiplos de venda por produto com restrição de quantidade
**Categoria:** Vendas / Produtos  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao registar um documento de venda, surge erro indicando que o produto só permite quantidades em múltiplos específicos.

Exemplo de mensagem:

"Permitido apenas múltiplos de venda de 32 unidades para o produto 1.719788"

**Diagnóstico**  
O produto tem configurado na ficha um múltiplo de venda obrigatório.

**Causa provável**  
A quantidade registada no documento não é múltiplo exato do valor definido na ficha do produto.

**Solução**  
Validar com a Gestão de Produto se é possível alterar temporariamente o múltiplo de venda ou, em alternativa, ajustar a quantidade do documento para respeitar o múltiplo definido.

**Como proceder**
1. Identificar o produto indicado na mensagem de erro.
2. Confirmar na ficha do produto o múltiplo de venda configurado.
3. Pedir ao utilizador afetado que valide com o Gestor de Produto se é possível alterar temporariamente o múltiplo de venda para "1".
4. Se o Gestor de Produto aprovar:
   - Alterar temporariamente o múltiplo de venda para "1".
   - Registar o documento.
   - Repor o múltiplo original após o registo.
5. Se o Gestor de Produto não aprovar:
   - Reabrir a encomenda ou documento em causa.
   - Ajustar a quantidade para um múltiplo válido, por exemplo 32, 64 ou 96.
6. Voltar a registar o documento.

**Validação final**
O documento é registado com sucesso, respeitando a configuração aprovada para o produto.

**Notas**
Alterações a múltiplos de venda devem ser sempre validadas com a Gestão de Produto, porque podem impactar condições comerciais, embalagem, logística e faturação.


## BC-KB-067 — Configurar impressora no Business Central com PrintNode
**Categoria:** Impressoras / PrintNode  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário configurar uma nova impressora online no Business Central para utilização por alguns utilizadores e para mapas específicos, como faturas de venda ou guias de remessa.

**Diagnóstico**  
A impressora precisa de estar atualizada no Business Central, associada aos mapas/utilizadores corretos e com dimensões de impressão validadas.

**Causa provável**  
A impressora ainda não foi sincronizada, atribuída ou afinada nas configurações do PrintNode/Seleções de Impressora.

**Solução**  
Atualizar as impressoras PrintNode, atribuir a impressora aos mapas/utilizadores necessários e validar a impressão localmente.

**Como proceder**
1. Pesquisar por "Insight Works PrintNode Printers".
2. Clicar em "Atualizar impressoras PrintNode".
3. Confirmar que a nova impressora aparece na lista.
4. Pesquisar por "Seleções Impressora".
5. Definir a impressora para o mapa/documento pretendido.
6. Se necessário, associar a impressora a um utilizador específico.
7. Pedir a um utilizador para efetuar um teste de impressão.
8. Validar se as dimensões de saída estão corretas.
9. Se necessário, voltar a "Insight Works PrintNode Printers".
10. Ajustar as dimensões de impressão, nomeadamente:
    - Largura
    - Altura
11. Repetir o teste de impressão.

**Validação final**
Os documentos são impressos na impressora correta, para os utilizadores/mapas definidos, com dimensões adequadas.

**Notas**
Validar sempre com uma impressão real/local. A impressora pode estar corretamente atribuída, mas ainda assim necessitar de afinação de largura e altura.


## BC-KB-068 — Fornecedor bloqueado por aprovação rejeitada
**Categoria:** Fornecedores / Aprovações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
O utilizador não consegue lançar ou registar documentos para um fornecedor, porque o sistema indica que o fornecedor está bloqueado.

**Diagnóstico**  
Na ficha de aprovações do fornecedor existem registos de aprovação rejeitados. Como o fornecedor não tem aprovação concluída, permanece bloqueado para utilização.

**Causa provável**  
O pedido de aprovação do fornecedor foi rejeitado pelos aprovadores responsáveis.

**Solução**  
Consultar o histórico de aprovações do fornecedor, identificar se existem rejeições ou pendências e solicitar novo pedido de aprovação quando necessário.

**Como proceder**
1. Abrir a ficha do fornecedor.
2. Verificar se existe alguma nota ou informação que justifique o bloqueio.
3. Se necessário, aceder a "Configuração Utilizador Aprovação".
4. Marcar o utilizador de suporte como "Administrador de Aprovações", caso seja necessário ter visibilidade total sobre os registos.
5. Voltar à ficha do fornecedor.
6. Ir a "Fornecedor" → "Aprovações".
7. Consultar o histórico das linhas de aprovação.
8. Se existirem linhas rejeitadas:
   - Informar o utilizador de que deve solicitar novo pedido de aprovação.
9. Se existirem linhas pendentes:
   - Informar quem é o aprovador responsável.
10. Aguardar nova aprovação concluída.

**Validação final**
Após novo pedido de aprovação aceite, o fornecedor fica desbloqueado e passa a ser possível registar documentos relacionados.

**Notas**
Todos os novos fornecedores necessitam de aprovação concluída para estarem desbloqueados. Aprovações rejeitadas mantêm o fornecedor bloqueado.


## BC-KB-069 — Erro na ficha de produto ao preencher Prazo de Entrega
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao preencher o campo "Prazo Entrega (Dias)" na ficha do produto apenas com um valor numérico, surge erro e o sistema não permite gravar corretamente.

**Diagnóstico**  
O campo não aceita apenas números. É obrigatório indicar a unidade de tempo associada ao valor.

**Causa provável**  
Foi inserido apenas o número de dias, por exemplo "56", em vez de usar o formato de fórmula de data, por exemplo "56D".

**Solução**  
Inserir sempre o número acompanhado da unidade de tempo pretendida.

**Como proceder**
1. Abrir a ficha do produto.
2. Localizar o campo "Prazo Entrega (Dias)".
3. Inserir o valor com a unidade de tempo.
4. Exemplos:
   - 56D = 56 dias
   - 8S = 8 semanas
   - 2M = 2 meses

**Validação final**
O campo é validado sem erro e a ficha do produto é gravada corretamente.

**Notas**
Unidades válidas:
- D = Dias
- S = Semanas
- M = Meses
- T = Trimestres
- U = Anos
- A, C = Unidade atual baseada na data


## BC-KB-070 — Erro na aprovação de proposta de venda por falta de gestor comercial FARMA-AMB
**Categoria:** Vendas / Aprovações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao enviar uma proposta de venda para aprovação, surge erro relacionado com a inexistência de configuração de gestor comercial para produtos da linha FARMA-AMB.

**Diagnóstico**  
A proposta contém produtos de uma área de negócio que não tem gestor comercial devidamente caracterizado/configurado no cliente.

**Causa provável**  
A alocação do gestor comercial para os produtos FARMA-AMB não está corretamente configurada.

**Solução**  
Solicitar à área responsável a correta caracterização da alocação do gestor comercial para os produtos FARMA-AMB no cliente.

**Como proceder**
1. Identificar a proposta de venda afetada.
2. Confirmar que os produtos pertencem à linha FARMA-AMB.
3. Validar se existe gestor comercial configurado para essa área no cliente.
4. Caso não exista, pedir à área responsável a caracterização da alocação do gestor comercial.
5. Aguardar a correção da configuração.
6. Após a alteração, pedir ao utilizador para voltar a enviar a proposta para aprovação.

**Validação final**
A proposta de venda é enviada para aprovação sem erro relacionado com gestor comercial.

**Notas**
Este caso é semelhante a erros de aprovação por ausência de gestor comercial, mas aplica-se especificamente a propostas de venda com produtos FARMA-AMB.


## BC-KB-071 — Expandir Kit
**Categoria:** Transferências / Kits  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário expandir ou explodir um Kit dentro de uma Ordem de Transferência, para visualizar e movimentar os artigos que compõem o kit.

**Diagnóstico**  
A Ordem de Transferência contém uma linha com um kit, mas é necessário movimentar os componentes individuais.

**Causa provável**  
O kit está inserido como uma linha agregada e ainda não foi expandido através da funcionalidade "Explode BOM".

**Solução**  
Utilizar a funcionalidade "Explode BOM" disponível na linha do produto dentro da Ordem de Transferência.

**Como proceder**
1. Abrir a Ordem de Transferência associada ao evento.
2. Localizar a linha correspondente ao kit, por exemplo "KIT EXPOSITOR TATTOO".
3. Selecionar a linha do produto.
4. No menu da linha, aceder a "Funções".
5. Clicar em "Explode BOM".
6. Confirmar que o sistema expandiu o kit e listou os artigos que o compõem.
7. Validar as quantidades dos componentes.
8. Prosseguir com o processo normal de transferência/envio.

**Validação final**
O kit é expandido e os artigos componentes ficam visíveis na Ordem de Transferência.

**Notas**
Validar sempre as quantidades após a explosão do kit, antes de avançar com o envio ou movimentação.


## BC-KB-072 — Corrigir Nº Documento Externo em fatura de venda já emitida
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Foi registada uma fatura de venda com o campo "Documento Externo" incorreto ou incompleto.

Isto poderia levar à anulação e reemissão da fatura, caso não fosse possível corrigir a informação no documento registado.

**Diagnóstico**  
O erro está limitado ao campo "Documento Externo" da fatura de venda já registada.

**Causa provável**  
O campo foi preenchido incorretamente no momento da criação ou registo da fatura.

**Solução**  
Abrir a fatura registada e utilizar a função "Atualizar Documento" para corrigir o campo "Documento Externo".

**Como proceder**
1. Aceder à fatura de venda já registada.
2. No separador "Base", selecionar a opção "Atualizar Documento".
3. Introduzir o número correto da encomenda do cliente no campo "Documento Externo".
4. Confirmar que o número atualizado aparece na vista da fatura.

**Validação final**
A fatura registada passa a apresentar o Nº Documento Externo correto.

**Notas**
A atualização será comunicada apenas no envio eletrónico diário, normalmente ao fim da tarde.


## BC-KB-073 — Erro ao criar arrumação de produto em folha de armazém
**Categoria:** Armazém / Arrumação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar criar uma nova arrumação para um produto, surge uma mensagem de erro. O produto desaparece do processo de arrumação quando são processados os restantes artigos.

**Diagnóstico**  
O produto pode não ter uma posição de armazém corretamente configurada como fixa e padrão.

**Causa provável**  
Na ficha do produto, em conteúdo de posição, não existe uma posição marcada com os campos "Fixo" e "Padrão".

**Solução**  
Configurar uma posição de armazém para o produto, marcando-a como "Fixo" e "Padrão". Depois, gerar novamente o documento de arrumação.

**Como proceder**
1. Aceder à ficha do produto identificado no documento.
2. Ir a "Relacionado" → "Armazém" → "Conteúdo de Posição".
3. Confirmar se existe uma posição associada ao produto.
4. Verificar se os campos "Fixo" e "Padrão" estão marcados.
5. Se não estiverem, selecionar a posição correta.
6. Ativar os campos "Fixo" e "Padrão".
7. Voltar à Folha de Arrumação.
8. Ir a "Base" → "Criar Doc. Arrumação".
9. Clicar em "OK" para gerar o documento de arrumação atualizado.

**Validação final**
O documento de arrumação é criado corretamente e o produto deixa de desaparecer do processo.

**Notas**
Validar sempre a posição correta antes de marcar como Fixo e Padrão, para evitar impacto em processos de armazém futuros.


## BC-KB-074 — Como crio um novo produto no Business Central?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador pretende criar um produto novo mas não conhece o processo completo nem quais os campos obrigatórios.

**Diagnóstico**
Não existe ficha para o produto e o utilizador nunca fez este processo.

**Causa provável**
Desconhecimento da funcionalidade de criação de produtos, da lista de campos obrigatórios e do envio para aprovação.

**Solução**
Criar uma nova ficha na lista "Produtos", preencher todos os campos obrigatórios, usar um modelo se existir e enviar o pedido de aprovação.

**Como proceder**
1. Aceder à lista de Produtos através da pesquisa ou menu.
2. Selecionar Novo para abrir uma Ficha de Produto em branco.
3. Preencher o campo Nº com o código interno e validar a codificação.
4. Na área eInfo Obrigatória, preencher todos os campos assinalados, incluindo os validados em "Pedido de Aprovação".
5. Se existir um modelo apropriado, clicar em Aplicar Modelo, escolher o modelo e confirmar; rever os dados preenchidos automaticamente.
6. Verificar que todos os campos obrigatórios estão completos e que a informação é coerente.
7. Navegar até ao separador Pedido e selecionar Enviar Pedido Aprovação; confirmar o envio.
8. Acompanhar o estado do pedido na ficha do produto ou em Solicitações para Aprovar.

**Validação final**
O produto aparece na lista de produtos, a ficha está preenchida e o pedido de aprovação encontra se em curso ou concluído captura de imagem.

**Notas**
- Confirme sempre se o produto já existe antes de o criar para evitar duplicação.
- A aplicação de modelos acelera o preenchimento mas não dispensa a verificação manual dos campos obrigatórios.
- Acompanhe o estado da aprovação para saber quando o produto fica disponível.


## BC-KB-075 — Que campos obrigatórios devo preencher numa nova Ficha de Produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Ao abrir uma nova ficha de produto, o utilizador não sabe quais os campos que deve obrigatoriamente preencher.

**Diagnóstico**
Existe uma área lateral intitulada eInfo Obrigatória que indica os campos necessários, mas o utilizador desconhece a sua utilização.

**Causa provável**
Falta de formação na leitura dos campos obrigatórios e na distinção entre campos validados na aprovação ou na ficha.

**Solução**
Consultar a área eInfo Obrigatória da ficha para identificar os campos obrigatórios e preencher todos eles antes de enviar o pedido de aprovação.

**Como proceder**
1. Criar ou abrir a ficha do produto.
2. Na barra lateral direita, identificar a secção eInfo Obrigatória.
3. Preencher todos os campos listados; normalmente incluem: Tipo, Descrição, Unidade Medida Base, Categoria, Grupo Regist. Produto, Grupo Regist. VAT Produto e parâmetros de planeamento.
4. Distinguir os campos marcados com Validado Em: Pedido de Aprovação (estes devem ser preenchidos antes do envio) e os restantes.
5. Caso utilize um modelo, verificar se algum campo obrigatório ficou em falta e completar manualmente.
6. Rever a ficha para garantir que não restam campos obrigatórios por preencher.

**Validação final**
Todos os campos assinalados na eInfo Obrigatória estão completos, permitindo o envio do pedido de aprovação captura de imagem.

**Notas**
- Os campos obrigatórios podem variar consoante o tipo de produto e o modelo aplicado.
- Utilize a função de filtro na lista de produtos para identificar produtos com campos em falta.


## BC-KB-076 — Para que serve a opção “Aplicar Modelo” na criação de um produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador vê a opção Aplicar Modelo mas não sabe quando a deve utilizar nem o seu efeito.

**Diagnóstico**
A aplicação de modelos permite pré preencher campos com dados padrão para determinados tipos de produtos.

**Causa provável**
Desconhecimento das vantagens dos modelos existentes e do impacto no preenchimento da ficha.

**Solução**
Usar Aplicar Modelo para carregar um conjunto de valores predefinidos quando o produto se enquadra num tipo existente; isto reduz erros e acelera o processo.

**Como proceder**
1. Durante a criação da ficha de produto, clicar em Aplicar Modelo.
2. Selecionar o modelo que melhor corresponde ao tipo de produto (por exemplo, medicamento, dispositivo médico, consumível, etc.).
3. Confirmar a aplicação; os campos relacionados com planeamento, contabilidade e logística serão preenchidos com valores padrão.
4. Rever todos os campos que foram preenchidos automaticamente e corrigir/ajustar valores quando necessário.
5. Preencher manualmente os campos obrigatórios que não foram abrangidos pelo modelo.

**Validação final**
Os campos da ficha exibem os valores do modelo e o utilizador ajustou eventuais diferenças antes do pedido de aprovação.

**Notas**
- O modelo é um atalho para preencher campos estruturais; não substitui a validação manual dos dados.
- Caso não exista um modelo adequado, é preferível deixar a opção em branco e preencher tudo manualmente.


## BC-KB-077 — Como envio um novo produto para aprovação?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O produto foi criado mas ainda não está ativo porque falta enviar o pedido de aprovação.

**Diagnóstico**
O utilizador não encontra a funcionalidade de pedido de aprovação na ficha do produto.

**Causa provável**
Falta de conhecimento sobre workflows de aprovação no Business Central.

**Solução**
Utilizar o menu Pedido da ficha para submeter o produto para aprovação.

**Como proceder**
1. Abrir a ficha do produto criado.
2. Verificar que todos os campos obrigatórios estão preenchidos.
3. Aceder ao separador ou menu Pedido.
4. Selecionar Enviar Pedido Aprovação.
5. Confirmar a submissão caso seja apresentada uma mensagem de confirmação.
6. O sistema altera o estado de workflow para "Em Progresso" e envia uma notificação aos aprovadores.

**Validação final**
O pedido surge na lista de solicitações para aprovar e o produto fica bloqueado até à aprovação. captura de imagem

**Notas**
- Se surgirem erros de campos em falta, completar esses campos antes de reenviar.
- Apenas os utilizadores com permissões adequadas podem enviar pedidos de aprovação.


## BC-KB-078 — Onde posso consultar o estado de aprovação de um produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Depois de enviar o pedido, o utilizador quer acompanhar se o produto já foi aprovado.

**Diagnóstico**
O estado da aprovação não é apresentado de forma clara na lista de produtos.

**Causa provável**
Desconhecimento das páginas de consulta de solicitações e aprovações.

**Solução**
Verificar o estado na ficha do produto ou através da página Solicitações para Aprovar.

**Como proceder**
1. Abrir a ficha do produto em causa.
2. No topo da ficha, procurar a área de Aprovações que indica se o pedido foi enviado e qual o seu estado.
3. Em alternativa, usar a pesquisa do Business Central para procurar Solicitações para Aprovar.
4. Na lista, aplicar um filtro pelo Tipo Documento = Produto ou pelo número do produto.
5. A coluna Estado indica se o pedido está pendente, aprovado ou rejeitado, e a coluna Aprovador identifica quem é responsável.

**Validação final**
O estado de aprovação e o aprovador são visíveis e atualizados em tempo real.

**Notas**
- Pode receber notificações de aprovação por email caso o workflow esteja configurado para tal.
- Utilize filtros na lista de produtos com estado de workflow "Em Progresso" para visualizar rapidamente os produtos pendentes de aprovação.


## BC-KB-079 — Como vejo quem são os responsáveis pela aprovação de um produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador precisa de saber a quem deve contactar sobre a aprovação de um produto.

**Diagnóstico**
A informação de aprovadores nem sempre está visível na ficha.

**Causa provável**
O utilizador desconhece como consultar a cadeia de aprovação.

**Solução**
Consultar a página de Solicitações para Aprovar ou a ficha de workflow para identificar o aprovador.

**Como proceder**
1. A partir da ficha do produto, aceder a Pedido → Fluxo de Trabalho (ou workflow) para visualizar a configuração do workflow associado.
2. Na lista de etapas do workflow, identificar o grupo ou utilizador responsável pela aprovação do produto.
3. Para ver o pedido específico, abrir a página Solicitações para Aprovar, filtrar pelo produto e verificar a coluna Aprovador.
4. Se necessário, contactar o aprovador por email ou via Teams com referência ao número do produto e ao pedido.

**Validação final**
O utilizador conhece o(s) aprovador(es) atribuídos ao pedido de aprovação do produto.

**Notas**
- Os aprovadores podem ser definidos por grupo ou por função.
- Em workflows complexos, podem existir múltiplos aprovadores sequenciais; acompanhe as diferentes etapas.


## BC-KB-080 — Como filtro produtos que ainda estão em criação ou aprovação?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador deseja listar apenas os produtos cujo workflow está em progresso (em criação ou aprovação).

**Diagnóstico**
Sem aplicar o filtro adequado, a lista apresenta todos os produtos ativos e finalizados.

**Causa provável**
Desconhecimento do campo Workflowstatus e dos seus valores.

**Solução**
Aplicar um filtro no campo Workflowstatus da lista de produtos com o valor Em Progresso.

**Como proceder**
1. Abrir a lista de Produtos.
2. No cabeçalho, clicar em Filtrar e procurar o campo Workflowstatus.
3. Definir o valor para Em Progresso; isso irá mostrar apenas os produtos em criação ou aprovação.
4. Se desejar ver produtos aprovados ou rejeitados, altere o filtro para o valor correspondente.

**Validação final**
A lista exibe exclusivamente produtos cujo estado de workflow é "Em Progresso", facilitando o acompanhamento das criações em curso

**Notas**
- Pode criar uma vista personalizada com esse filtro para uso futuro.
- Utilize filtros adicionais (por exemplo, Data de Criação) para refinar a pesquisa.


## BC-KB-081 — Como aprovo ou rejeito um novo produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Um produto pendente precisa de ser aprovado ou rejeitado por um utilizador com permissões de aprovador.

**Diagnóstico**
O pedido encontra se na lista de solicitações pendentes e aguarda decisão.

**Causa provável**
O workflow exige que um aprovador analise a ficha antes de a tornar ativa.

**Solução**
Abrir o pedido pendente, rever os dados do produto e escolher Aprovar ou Rejeitar.

**Como proceder**
1. Aceder a Solicitações para Aprovar no menu ou via pesquisa.
2. Filtrar por Tipo Documento = Produto e localizar o pedido pendente.
3. Selecionar a linha pretendida e clicar em Abrir Registo para consultar a ficha do produto.
4. Rever os campos obrigatórios, dados técnicos e comerciais.
5. Se estiver tudo correto, voltar à lista de solicitações e escolher Aprovar; caso existam erros ou lacunas, escolher Rejeitar e adicionar um comentário explicativo.
6. O sistema notifica o requisitante sobre a decisão.

**Validação final**
O pedido desaparece da lista de pendentes e o produto passa para o estado de aprovado ou rejeitado.

**Notas**
- Apenas aprovadores designados podem realizar esta operação.
- Ao rejeitar, indique sempre o motivo para que o autor possa corrigir a ficha e reenviar.


## BC-KB-082 — Como abro o registo de um produto pendente de aprovação?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um utilizador precisa de consultar os detalhes de um produto que ainda não está aprovado.

**Diagnóstico**
O pedido de aprovação está pendente, mas a ficha pode ser aberta para revisão.

**Causa provável**
Necessidade de corrigir ou consultar informação antes da aprovação.

**Solução**
Aceder à lista de solicitações e utilizar a opção Abrir Registo para visualizar a ficha.

**Como proceder**
1. Navegar até Solicitações para Aprovar.
2. Localizar o pedido de aprovação do produto em questão.
3. Na linha do pedido, clicar em Abrir Registo; a ficha do produto será aberta em modo de consulta.
4. Verificar ou editar os campos consoante as permissões (alguns campos podem estar bloqueados se já houver pedido enviado).
5. Fechar a ficha ou proceder a correções e reenviar o pedido se necessário.

**Validação final**
O utilizador consegue aceder à ficha para análise e correção antes da decisão final.

**Notas**
- A opção Abrir Registo é útil para avaliar rapidamente o conteúdo do pedido sem navegar pela lista de produtos.
- Utilize esta funcionalidade para corrigir erros e evitar rejeições desnecessárias.


## BC-KB-083 — Como adiciono comentários a uma aprovação de produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário comunicar observações ou correções ao aprovador no âmbito de um pedido de produto.

**Diagnóstico**
A área de aprovações permite adicionar comentários, mas o utilizador não sabe onde fazê lo.

**Causa provável**
Desconhecimento da funcionalidade de comentários nas solicitações de aprovação.

**Solução**
Usar o campo de comentário na solicitação para registar notas e instruções.

**Como proceder**
1. Aceder à página Solicitações para Aprovar e localizar o pedido.
2. Selecionar a linha e escolher Comentários ou Adicionar Comentário (dependendo da versão).
3. Escrever o comentário indicando as justificações, observações ou instruções para o aprovador.
4. O aprovador poderá ler o comentário antes de tomar a decisão.

**Validação final**
O comentário é visível na solicitação e pode ser lido pelo aprovador antes de aprovar ou rejeitar o produto.

**Notas**
- Utilize comentários de forma clara e objetiva; evite informação irrelevante.
- Pode adicionar mais do que um comentário durante o processo de aprovação.


## BC-KB-084 — Como crio um produto a partir do Catálogo de Produtos?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Pretende-se criar um produto a partir de uma ficha existente no Catálogo de Produtos.

**Diagnóstico**
O utilizador não sabe como converter um item de catálogo num produto ativo.

**Causa provável**
Falta de conhecimento das opções de criação a partir do catálogo e de preenchimento de informações de fornecedor.

**Solução**
Selecionar a ficha de catálogo, preencher os campos necessários (como número de fornecedor) e utilizar a opção Criar Produto.

**Como proceder**
1. Aceder ao Catálogo de Produtos a partir da pesquisa.
2. Selecionar a ficha do item de catálogo que pretende converter.
3. Preencher o campo Nº Fornecedor (obrigatório) e outros campos relevantes, como descrição detalhada ou atributos.
4. Clicar em Criar Produto; o sistema gera uma nova ficha de produto com estado Bloqueado.
5. Abrir a ficha de produto criada e completar os campos obrigatórios em eInfo Obrigatória.
6. Enviar o pedido de aprovação como num produto criado de raiz.

**Validação final**
O produto criado a partir do catálogo aparece na lista de produtos e o pedido de aprovação está em curso.

**Notas**
- O produto é criado inicialmente com estado Bloqueado; só após aprovação fica ativo.
- Este processo é útil para itens padronizados que já existem no catálogo corporativo.


## BC-KB-085 — Que informação tenho de preencher na Ficha Produto Catálogo antes de criar o produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Ao criar a partir do catálogo, o utilizador não sabe quais os campos mínimos exigidos.

**Diagnóstico**
A ficha de catálogo apresenta menos campos do que a de produto, mas alguns são obrigatórios para criar o registo.

**Causa provável**
Desconhecimento dos dados obrigatórios na ficha do catálogo.

**Solução**
Preencher o campo Nº Fornecedor e quaisquer campos identificados como obrigatórios no catálogo antes de criar o produto.

**Como proceder**
1. Abrir a ficha do produto no Catálogo de Produtos.
2. Procurar a secção Dados Obrigatórios (semelhante a eInfo Obrigatória).
3. Preencher o Nº Fornecedor com o código do fornecedor que fornecerá o produto.
4. Verificar campos como Tipo, Descrição, Categoria e assegurar que estão preenchidos.
5. Após completar os campos, clicar em Criar Produto.

**Validação final**
O produto é criado sem erros e encontra se pronto para preenchimento dos restantes dados na ficha de produto.

**Notas**
- O campo Nº Fornecedor é essencial para estabelecer a relação de fornecimento inicial.
- Caso o fornecedor não exista, crie primeiro o fornecedor antes de associá lo ao produto.


## BC-KB-086 — O que acontece ao produto quando é criado a partir do Catálogo de Produtos?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador pretende saber como o sistema trata o produto após a criação a partir do catálogo.

**Diagnóstico**
A ficha de produto é gerada automaticamente com algumas particularidades.

**Causa provável**
Necessidade de compreender o estado inicial e os passos seguintes após a criação.

**Solução**
Entender que o produto é criado em estado Bloqueado, exigindo configuração adicional e aprovação para ficar ativo.

**Como proceder**
1. Após selecionar Criar Produto, o Business Central copia os dados da ficha do catálogo para uma nova ficha de produto.
2. O campo Status ou Bloqueado é definido como Sim para impedir o uso até que a configuração seja concluída.
3. Abrir a nova ficha de produto e completar todos os campos obrigatórios (planeamento, contabilidade, logística).
4. Verificar as relações com fornecedores e preços, pois apenas o Nº Fornecedor foi herdado.
5. Enviar o pedido de aprovação; após aprovação, o campo Bloqueado é atualizado e o produto passa a ativo.

**Validação final**
O produto criado a partir do catálogo cumpre os mesmos requisitos de um produto criado de raiz e torna se utilizável após aprovação.

**Notas**
- O estado Bloqueado impede a utilização em documentos enquanto a ficha não estiver completa.
- Use esta funcionalidade para acelerar a criação de produtos recorrentes.


## BC-KB-087 — Como adiciono atributos a uma Ficha de Produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O produto precisa de atributos adicionais (tamanho, cor, marca) para fins de filtragem e relatórios.

**Diagnóstico**
A ficha permite associar atributos definidos a nível global, mas o utilizador não sabe onde fazê lo.

**Causa provável**
Desconhecimento da funcionalidade de atributos e da página de associação.

**Solução**
Utilizar a funcionalidade Atributos na ficha de produto para atribuir valores aos atributos existentes.

**Como proceder**
1. Abrir a ficha do produto pretendido.
2. Selecionar Produto → Atributos no menu.
3. Na janela de atributos, clicar em + Novo e selecionar o atributo (por exemplo, Tamanho, Cor, Marca).
4. Escolher ou introduzir o valor apropriado para esse atributo.
5. Repetir para todos os atributos necessários.

**Validação final**
Os atributos e os seus valores aparecem listados na ficha e podem ser usados em filtros de oportunidades e propostas.

**Notas**
- Os atributos têm de estar previamente definidos a nível de empresa antes de serem atribuídos.
- Podem ser utilizados para segmentar produtos em relatórios e listas.


## BC-KB-088 — Para que servem os atributos de produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador quer saber a utilidade de associar atributos a produtos.

**Diagnóstico**
A lista de produtos pode ser longa e diversa; os atributos permitem filtragem e análise mais detalhada.

**Causa provável**
Desconhecimento das vantagens dos atributos na gestão e pesquisa.

**Solução**
Explicar que os atributos facilitam a pesquisa, classificação e segmentação de produtos em listas, oportunidades e propostas.

**Como proceder**
1. Definir atributos a nível da empresa (Ex.: Tamanho, Cor, Marca, Grupo terapêutico).
2. Atribuir valores apropriados a cada produto através da funcionalidade de atributos na ficha.
3. Utilizar os atributos como filtros nas listas de produtos ou quando procura produtos para uma oportunidade ou proposta.
4. Incluir atributos nos relatórios e análises para segmentar produtos por características.

**Validação final**
Os atributos estão definidos e são visíveis nas listagens, permitindo filtrar rapidamente produtos com características específicas.

**Notas**
- Os atributos também podem ser usados para gerar etiquetas ou documentos personalizados.
- Mantenha a lista de atributos organizada e consistente para evitar redundâncias.


## BC-KB-089 — Onde posso consultar os atributos associados a um produto?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador deseja ver os atributos e valores de um produto específico.

**Diagnóstico**
Os atributos não aparecem diretamente na ficha principal e é necessário abrir uma janela específica.

**Causa provável**
Desconhecimento de onde visualizar os atributos já atribuídos.

**Solução**
Consultar a opção Atributos na ficha de produto.

**Como proceder**
1. Abrir a ficha do produto.
2. No menu, selecionar Produto → Atributos.
3. A janela de atributos apresenta a lista de todos os atributos associados e respetivos valores.
4. Nesta janela, é possível editar ou remover valores se necessário.
5. Fechar a janela após consulta ou edição.

**Validação final**
A lista de atributos e valores do produto é apresentada corretamente.

**Notas**
- Pode exportar a lista de atributos para Excel se necessitar de partilhar ou analisar externamente.
- Apenas atributos previamente definidos podem ser adicionados ou editados.


## BC-KB-090 — Como filtro a lista de produtos por atributos?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Precisa de encontrar produtos com características específicas (por exemplo, cor vermelha, marca X).

**Diagnóstico**
Usar filtros tradicionais (número, descrição) não é suficiente; é necessário filtrar por atributos.

**Causa provável**
Não conhecimento da funcionalidade de filtro por atributos na lista de produtos.

**Solução**
Aplicar filtros de atributos através da janela de pesquisa de atributos.

**Como proceder**
1. Na lista de Produtos, abrir o menu Filtrar e escolher Atributos.
2. Selecionar o atributo pretendido (por exemplo, Cor) e o valor (Vermelho).
3. Confirmar; a lista mostrará apenas produtos que têm esse atributo com o valor selecionado.
4. Se necessário, adicionar mais filtros de atributos para refinar ainda mais a pesquisa.
5. Para remover o filtro, voltar à janela de atributos e limpar os valores.

**Validação final**
A lista exibe unicamente os produtos que correspondem aos atributos escolhidos

**Notas**
- Criar vistas com filtros de atributos facilita pesquisas futuras.
- Filtros combinados (atributos + campos tradicionais) proporcionam maior precisão.


## BC-KB-091 — Como limpo um filtro de atributos aplicado à lista de produtos?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Após aplicar um filtro de atributos, o utilizador quer voltar à lista completa de produtos.

**Diagnóstico**
O filtro permanece ativo e limita a visualização de produtos.

**Causa provável**
Falta de conhecimento sobre como remover filtros de atributos.

**Solução**
Reabrir a janela de atributos e limpar os valores aplicados.

**Como proceder**
1. Na lista de Produtos, clicar em Filtrar → Atributos.
2. Para cada atributo com filtro ativo, selecionar Limpar Valor ou apagar manualmente.
3. Confirmar; a lista volta a mostrar todos os produtos.
4. Criar uma vista sem filtros se necessitar de aceder frequentemente à lista completa.

**Validação final**
A lista de produtos deixa de ter filtros e apresenta todos os registos.

**Notas**
- Pode alternar rapidamente entre vistas filtradas e não filtradas através de favoritos.
- Limpar os filtros garante que novos produtos não são escondidos.


## BC-KB-092 — Que atributos de produto são usados em oportunidades e propostas?
**Categoria:** Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador quer saber se os atributos influenciam oportunidades e propostas de venda.

**Diagnóstico**
Os atributos podem ser usados para filtrar e sugerir produtos durante a criação de propostas.

**Causa provável**
Desconhecimento da integração entre atributos e o módulo de oportunidades.

**Solução**
Explicar que os atributos utilizados nas fichas de produtos podem ser filtrados em oportunidades e propostas, ajudando a selecionar os produtos adequados.

**Como proceder**
1. Quando criar uma proposta de venda a partir de uma oportunidade, utilize a pesquisa de produtos para adicionar linhas.
2. Na janela de seleção de produtos, aplicar filtros de atributos (como Tamanho ou Marca) para localizar rapidamente os produtos que correspondem aos requisitos do cliente.
3. Adicionar os produtos filtrados à proposta; os atributos não são impressos por defeito, mas ajudam internamente.
4. Caso necessário, referencie atributos no texto da proposta através de comentários.

**Validação final**
Os produtos selecionados na proposta correspondem às características solicitadas pelo cliente, graças ao uso de filtros de atributos.

**Notas**
- Os atributos são particularmente úteis em oportunidades complexas com muitos requisitos técnicos.
- Garanta que todos os produtos têm atributos atualizados para que os filtros sejam eficazes.


## BC-KB-093 — Como importo o Dicionário ANF?
**Categoria:** Produtos  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
É necessário atualizar a base de dados com o dicionário de substâncias ou medicamentos ANF.

**Diagnóstico**
A importação requer acesso a ficheiros externos e permissões de administrador.

**Causa provável**
Mudanças de regulamentação ou atualização de nomenclatura que exigem a importação de novos dados.

**Solução**
Executar a rotina de importação de ANF através da funcionalidade de importação de dados.

**Como proceder**
1. Obter o ficheiro atualizado do Dicionário ANF no formato suportado (normalmente Excel ou CSV).
2. Aceder à funcionalidade de Importar Dicionário ANF via pesquisa.
3. Selecionar Procurar e escolher o ficheiro a importar.
4. Validar os campos de mapeamento entre o ficheiro e as tabelas internas.
5. Iniciar a importação e aguardar a conclusão; o sistema atualiza as substâncias, grupos e outras informações nas fichas de produtos.
6. Rever logs de importação para corrigir eventuais erros.

**Validação final**
As substâncias e grupos ANF são atualizados e disponíveis para utilização em produtos e relatórios.

**Notas**
- Esta operação deve ser executada por um administrador ou utilizador com permissões de importação.
- Mantenha um backup antes de realizar importações massivas.


## BC-KB-094 — Onde são atualizados os dados importados do Dicionário ANF?
**Categoria:** Produtos  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Após importar o Dicionário ANF, o utilizador pretende saber onde são refletidas as alterações.

**Diagnóstico**
Os dados importados alimentam tabelas de substâncias, grupos terapêuticos e indicações, que se refletem nas fichas de produto.

**Causa provável**
Necessidade de confirmar se as substâncias e classificações foram atualizadas corretamente.

**Solução**
Verificar as tabelas de substâncias e grupos ANF e confirmar os campos atualizados nas fichas de produto.

**Como proceder**
1. Após a importação, aceder às tabelas de Substâncias e Grupos Terapêuticos através da pesquisa.
2. Confirmar que as novas entradas e alterações do dicionário estão visíveis.
3. Abrir uma ficha de produto que utilize uma substância importada e verificar se os campos de classificação ANF estão atualizados.
4. Nos relatórios ou listas, utilizar filtros de substância ou grupo para garantir que as novas designações são reconhecidas.

**Validação final**
Os campos de substância e grupo terapêutico nas fichas de produto refletem as informações atualizadas do Dicionário ANF.

**Notas**
- Caso algum dado não tenha sido importado, consulte o log de importação para identificar erros.
- A atualização pode afetar relatórios regulatórios; confirme se estão a utilizar a informação correta.


## BC-KB-095 — Como importo dados de PVA, PIC, PMA, PVFD e PVAD?
**Categoria:** Produtos / Preços  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
É necessário atualizar as tabelas de Preço de Venda ao Armazém (PVA), Preço Industriais de Compra (PIC), Preço Máximo de Aprovisionamento (PMA), Preço de Venda Farmácia Descontado (PVFD) e Preço de Venda ao Doente (PVAD).

**Diagnóstico**
Os preços e margens definidos nas tabelas externas mudam com frequência e têm impacto na definição do preço de venda.

**Causa provável**
Revisões regulatórias de preços ou alterações contratuais com fornecedores.

**Solução**
Usar a funcionalidade de importação de preços/margens disponível no módulo de produtos para atualizar as tabelas correspondentes.

**Como proceder**
1. Obter os ficheiros de atualização de PVA, PIC, PMA, PVFD e PVAD nos formatos fornecidos pelo regulador ou fornecedor (normalmente Excel/CSV).
2. Aceder às páginas específicas de importação através da pesquisa (por exemplo, Importar PVA, Importar PIC).
3. Selecionar Procurar e escolher o ficheiro de cada tipo de preço.
4. Validar os campos de mapeamento; o sistema indica quais as colunas do ficheiro que correspondem aos campos internos.
5. Iniciar a importação; o sistema atualiza os campos de preço e margens nas fichas de produto e nas tabelas de apoio.
6. Repetir o processo para cada tipo de preço.
7. Após a importação, rever um conjunto de produtos para confirmar que os preços foram atualizados.

**Validação final**
As tabelas de PVA, PIC, PMA, PVFD e PVAD estão atualizadas e os preços refletem as últimas alterações.

**Notas**
- As importações devem ser realizadas em ambiente de testes antes de passar a produção.
- Mantenha os ficheiros de importação como registo e para efeitos de auditoria.


## BC-KB-096 — Onde posso consultar a informação de PVA, PIC, PMA, PVFD e PVAD na ficha do produto?
**Categoria:** Produtos / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador precisa de confirmar os preços e margens importados para um produto específico.

**Diagnóstico**
Os valores de PVA, PIC, PMA, PVFD e PVAD são armazenados em campos ou páginas de preços na ficha de produto.

**Causa provável**
Desconhecimento da localização destes dados na ficha de produto.

**Solução**
Abrir a ficha de produto e aceder às páginas de Preços ou Comercial para consultar os valores.

**Como proceder**
1. Abrir a ficha do produto desejado.
2. Ir ao separador Comercial ou Preços (dependendo da configuração).
3. Localizar campos como Preço PVA, Preço PIC, Preço PMA, PVFD e PVAD; estes campos mostram o valor mais recente importado.
4. Se os campos não estiverem visíveis, clicar em Navegar → Preços para abrir a página detalhada de preços onde todas as tabelas estão listadas.
5. Verificar datas de vigência e quantidades associadas a cada preço.

**Validação final**
Os valores de PVA, PIC, PMA, PVFD e PVAD apresentados correspondem aos dados importados e são coerentes com a tabela geral.

**Notas**
- Os preços podem estar sujeitos a arredondamentos e impostos; confirme se os valores se aplicam ao contexto correto.
- Utilize relatórios de preços para comparar os diferentes valores entre produtos.


## BC-KB-097 — Como crio um novo cliente?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um novo cliente tem de ser registado no sistema.

**Diagnóstico**
O utilizador não sabe qual o formulário ou modelo a utilizar.

**Causa provável**
Falta de experiência na criação de clientes no Business Central.

**Solução**
Criar a ficha de cliente através da lista de clientes, preencher os campos obrigatórios e submeter para aprovação.

**Como proceder**
1. A partir da pesquisa ou menu, aceder a Clientes.
2. Selecionar Novo para abrir a ficha de cliente em branco.
3. Se existir, escolher um Modelo de Cliente para pré preencher dados.
4. Preencher os campos obrigatórios indicados na secção eInfo Obrigatória (Nome, Nº Identificação Fiscal, Grupo Registo Cliente, Grupo Registo VAT Cliente, etc.).
5. Adicionar endereços de faturação e envio, contactos e outras informações relevantes.
6. Submeter para aprovação através de Pedido → Enviar Pedido Aprovação.

**Validação final**
O cliente aparece na lista de clientes com o pedido de aprovação pendente ou aprovado

**Notas**
- Utilize modelos de cliente para acelerar a criação.
- Verifique se o NIF e dados de faturação estão corretos para evitar rejeições.


## BC-KB-098 — Que campos obrigatórios devo preencher antes de pedir aprovação de um cliente?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador quer garantir que não faltam dados antes de enviar um cliente para aprovação.

**Diagnóstico**
A ficha tem uma área de informação obrigatória que lista os campos necessários.

**Causa provável**
Desconhecimento ou esquecimento de campos críticos (nome, morada, NIF, grupos de registo, etc.).

**Solução**
Consultar a secção eInfo Obrigatória e preencher todos os campos destacados antes de enviar para aprovação.

**Como proceder**
1. Na ficha de cliente, localizar a secção eInfo Obrigatória.
2. Preencher o Nome, Endereço, Código Postal, Localidade e País.
3. Preencher o Nº Identificação Fiscal (NIF) e confirmar a validade.
4. Selecionar o Grupo Registo Cliente e Grupo Registo VAT Cliente adequados.
5. Se aplicável, preencher limites de crédito, condições de pagamento e moedas.
6. Verificar se algum campo está marcado como Validado em: Pedido de Aprovação e garantir que está preenchido.

**Validação final**
A ficha exibe todos os campos obrigatórios preenchidos, permitindo o envio do pedido de aprovação.

**Notas**
- Alguns campos (como limite de crédito) podem ser exigidos apenas em certos workflows; confirme com a sua organização.


## BC-KB-099 — Como envio um novo cliente para aprovação?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O cliente foi criado mas ainda está pendente porque não foi enviado para aprovação.

**Diagnóstico**
O utilizador não encontra a opção de envio de pedido na ficha.

**Causa provável**
Falta de familiaridade com a estrutura do menu Pedido.

**Solução**
Utilizar o menu Pedido na ficha de cliente para enviar o pedido de aprovação.

**Como proceder**
1. Abrir a ficha do cliente recém criado.
2. Garantir que todos os campos obrigatórios estão preenchidos.
3. Aceder ao menu Pedido no topo da ficha.
4. Selecionar Enviar Pedido Aprovação.
5. Confirmar a submissão; o sistema criará a solicitação e notificará o aprovador.

**Validação final**
O pedido de aprovação é criado e aparece na lista de solicitações para aprovar.

**Notas**
- Caso a opção não esteja visível, verifique se o workflow está ativo para clientes.
- Depois de enviado, algumas alterações na ficha podem ficar bloqueadas.


## BC-KB-100 — Onde consulto o estado de aprovação de um cliente?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador precisa de saber se o cliente já foi aprovado ou continua pendente.

**Diagnóstico**
O estado da aprovação não aparece claramente na ficha principal.

**Causa provável**
Desconhecimento das páginas de acompanhamento de solicitações.

**Solução**
Consultar o estado na ficha de cliente ou na página Solicitações para Aprovar.

**Como proceder**
1. Na ficha de cliente, verificar a secção Aprovações ou Estado Workflow; esta secção indica se o pedido foi enviado, aprovado ou rejeitado.
2. Usar a pesquisa para abrir Solicitações para Aprovar e aplicar um filtro por Tipo Documento = Cliente.
3. Localizar a linha correspondente ao cliente e verificar o estado e o nome do aprovador.
4. Se necessário, abrir o registo do cliente através da opção Abrir Registo para ver detalhes.

**Validação final**
O utilizador identifica com clareza o estado da aprovação e o responsável pela aprovação do cliente.

**Notas**
- Em workflows multietapa, podem existir vários níveis de aprovação; acompanhe cada etapa na página de solicitações.
- Utilize notificações automáticas para ser informado quando o cliente for aprovado.


## BC-KB-101 — Como filtro clientes com workflow em progresso?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador pretende ver apenas os clientes que ainda estão em fase de aprovação.

**Diagnóstico**
A lista de clientes inclui clientes ativos, aprovados e pendentes, o que dificulta a gestão.

**Causa provável**
Desconhecimento do campo Workflowstatus na lista de clientes.

**Solução**
Aplicar um filtro no campo Workflowstatus com o valor Em Progresso.

**Como proceder**
1. Abrir a lista de Clientes.
2. Clicar em Filtrar e escolher o campo Workflowstatus.
3. Definir o valor para Em Progresso; isto mostrará apenas os clientes cujo pedido de aprovação está pendente.
4. sta vista para consultas futuras se necessário.

**Validação final**
A lista apresenta unicamente os clientes em processo de aprovação, facilitando o acompanhamento.

**Notas**
- Pode combinar este filtro com outros (por exemplo, por vendedor) para análises mais específicas.
- Limpar o filtro após a análise devolve a lista completa.


## BC-KB-102 — Como aprovo ou rejeito um novo cliente?
**Categoria:** Clientes  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Um cliente pendente precisa de ser aprovado ou rejeitado por um utilizador com autoridade.

**Diagnóstico**
O pedido de aprovação está criado e aguarda decisão na lista de solicitações.

**Causa provável**
O processo de aprovação exige uma verificação manual das informações do cliente.

**Solução**
Aprovar ou rejeitar o pedido através da página Solicitações para Aprovar, após revisão da ficha.

**Como proceder**
1. Aceder a Solicitações para Aprovar e aplicar o filtro Tipo Documento = Cliente.
2. Selecionar a linha relativa ao cliente pendente.
3. Clicar em Abrir Registo para rever a ficha de cliente e confirmar os dados (NIF, morada, condições de pagamento).
4. Voltar à lista de solicitações; se tudo estiver correto, clicar em Aprovar.
5. Se existirem erros ou informação incompleta, escolher Rejeitar e adicionar um comentário com o motivo.
6. O utilizador que criou o cliente será notificado da decisão.

**Validação final**
O pedido desaparece da lista de pendentes e o cliente passa a ativo ou rejeitado, consoante a decisão.

**Notas**
- Apenas utilizadores designados como aprovadores podem realizar esta operação.
- Registar o motivo da rejeição ajuda o criador a corrigir e reenviar o pedido.


## BC-KB-103 — Como crio diferentes endereços de envio para um cliente?
**Categoria:** Clientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um cliente utiliza várias moradas de entrega e é necessário registar e gerir estas moradas.

**Diagnóstico**
A ficha de cliente principal apenas contém uma morada de faturação; as moradas adicionais são geridas separadamente.

**Causa provável**
Desconhecimento da funcionalidade de Endereços Envio.

**Solução**
Criar e gerir as moradas de envio na secção de endereços do cliente.

**Como proceder**
1. Abrir a ficha do cliente.
2. No menu superior, selecionar Cliente → Endereços Envio.
3. Na janela de endereços, clicar em + Novo.
4. Preencher os campos da morada de envio (Nome do Destinatário, Morada, Código Postal, Localidade, País, Contacto).
5. Opcionalmente, definir uma morada de envio predefinida através da seleção de Definir como predefinido.

**Validação final**
As moradas estão disponíveis para seleção nos documentos de venda e logística e podem ser alteradas consoante a encomenda.

**Notas**
- Pode eliminar ou editar moradas de envio a partir da mesma janela.
- Certifique se de que a morada de envio corresponde ao local de entrega real para evitar devoluções.


## BC-KB-104 — Como crio um novo contacto a partir do Outlook?
**Categoria:** Clientes / Contactos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Pretende adicionar um contacto ao Business Central diretamente a partir do Outlook.

**Diagnóstico**
O utilizador recebe um email de um potencial contacto e deseja registá lo sem sair do Outlook.

**Causa provável**
Desconhecimento da integração entre Outlook e Business Central através do suplemento.

**Solução**
Usar o add in do Business Central no Outlook para criar o contacto a partir do email recebido.

**Como proceder**
1. No Outlook, abrir o email do remetente que deseja adicionar como contacto.
2. No painel direito ou superior, aceder ao suplemento do Business Central (ícone do logótipo).
3. Selecionar Criar Contacto; o sistema apresenta um formulário pré preenchido com o nome e email do remetente.
4. Rever e preencher dados adicionais, como telefone ou empresa.
5. Confirmar a criação; o contacto fica imediatamente associado ao cliente correspondente ou como contacto independente.

**Validação final**
O novo contacto aparece na lista de contactos no Business Central e está relacionado com o cliente correto.

**Notas**
- Esta funcionalidade requer que o add in do Business Central esteja configurado no Outlook.
- Os contactos criados no Outlook podem ser editados posteriormente na ficha de cliente.


## BC-KB-105 — Como crio um contacto a partir da Ficha de Cliente?
**Categoria:** Clientes / Contactos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário adicionar contactos diretamente na ficha do cliente.

**Diagnóstico**
A ficha do cliente não possui contactos ou precisa de mais contactos associados.

**Causa provável**
Desconhecimento de como aceder à área de contactos na ficha.

**Solução**
Usar a opção Contacto na ficha de cliente para criar novos contactos.

**Como proceder**
1. Abrir a ficha do cliente.
2. No menu, selecionar Base → Contacto.
3. Se não existir nenhum contacto associado, o sistema pergunta se deseja criar um; responder Sim.
4. Preencher a ficha do novo contacto com nome, email, telefone e cargo.
5. Fechar; o contacto fica associado ao cliente.
6. Para adicionar contactos adicionais, repetir o processo.

**Validação final**
Os contactos estão listados na ficha do cliente e podem ser utilizados em oportunidades e documentos de venda.

**Notas**
- Os contactos criados podem ser editados ou eliminados posteriormente através da lista de contactos.
- É possível definir um contacto predefinido para faturação ou envio.


## BC-KB-106 — Como edito ou elimino um contacto associado a um cliente?
**Categoria:** Clientes / Contactos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um contacto associado a um cliente precisa de ser atualizado ou removido.

**Diagnóstico**
Os contactos estão registados na ficha do cliente, mas não se sabe como editá los ou eliminá los.

**Causa provável**
Desconhecimento da opção de gerir contactos existentes.

**Solução**
Abrir a lista de contactos do cliente e utilizar as opções de editar ou eliminar.

**Como proceder**
1. Abrir a ficha do cliente.
2. Selecionar Base → Contacto para ver a lista de contactos.
3. Para editar, selecionar o contacto e clicar em Editar; alterar os campos necessários (nome, cargo, email, etc.).
4. Para eliminar, clicar nos três pontos (menu de contexto) à direita do contacto e escolher Eliminar; confirmar a eliminação.
5. Atualizar a ficha do cliente para refletir as alterações.

**Validação final**
As alterações estão refletidas na lista de contactos e o contacto eliminado deixa de aparecer.

**Notas**
- A eliminação é permanente; garanta que o contacto não é usado noutros registos antes de o eliminar.
- Os contactos editados mantêm o histórico de transações associadas ao cliente.


## BC-KB-107 — Como crio um novo fornecedor?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um fornecedor novo necessita de ser registado no Business Central.

**Diagnóstico**
O utilizador não conhece o formulário e os campos a preencher.

**Causa provável**
Falta de experiência no módulo de fornecedores.

**Solução**
Criar a ficha de fornecedor a partir da lista de fornecedores, preencher os campos obrigatórios e enviar para aprovação.

**Como proceder**
1. A partir da pesquisa ou menu, aceder a Fornecedores.
2. Clicar em Novo; a ficha de fornecedor abre com o número gerado automaticamente.
3. Preencher a secção eInfo Obrigatória com Nome, Endereço, Código Postal, País, Grupo Registo Fornecedor e Grupo Registo VAT Fornecedor.
4. Adicionar dados de contacto, condições de pagamento, moeda e valores mínimos de encomenda, se aplicável.

**Validação final**
O fornecedor surge na lista de fornecedores com a informação completa e o pedido de aprovação enviado

**Notas**
- Utilize a numeração automática para uniformidade.
- Confirme se o fornecedor já existe para evitar duplicados.


## BC-KB-108 — O número de fornecedor é manual ou automático?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador quer saber como é atribuído o número a um novo fornecedor.

**Diagnóstico**
A ficha de fornecedor gera o número automaticamente, mas pode ser configurada para manual.

**Causa provável**
Dúvida sobre a configuração de numeração no Business Central.

**Solução**
Por defeito, o número do fornecedor é atribuído automaticamente pela série de numeração definida. Em casos específicos, é possível atribuir manualmente.

**Como proceder**
1. Ao criar um fornecedor, o campo Nº é preenchido automaticamente com base na série de numeração configurada.
2. Se a empresa permitir numeração manual, o campo Nº pode ser editado antes de concluir a criação; contudo, esta opção deve ser evitada para manter consistência.
3. Para alterar a configuração de numeração, aceder a Configuração → Configuração de Compras e verificar a série atribuída a fornecedores.

**Validação final**
O número do fornecedor é gerado corretamente ou introduzido manualmente conforme a política da empresa.

**Notas**
- A numeração automática previne duplicação e garante rastreabilidade.
- Alterar a série de numeração requer permissões de administrador.


## BC-KB-109 — Que campos obrigatórios devo preencher numa nova Ficha de Fornecedor?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador precisa de saber quais os campos essenciais antes de enviar um fornecedor para aprovação.

**Diagnóstico**
A ficha de fornecedor contém uma secção de informação obrigatória que deve ser preenchida.

**Causa provável**
Falta de conhecimento dos campos críticos (nome, morada, grupos de registo, etc.).

**Solução**
Consultar a secção eInfo Obrigatória e preencher todos os campos indicados.

**Como proceder**
1. Ao criar a ficha de fornecedor, localizar a secção eInfo Obrigatória.
2. Preencher o Nome (razão social), Endereço, Código Postal, Localidade e País.
3. Inserir o Nº de Identificação Fiscal (NIF).
4. Selecionar o Grupo Registo Fornecedor e Grupo Registo VAT Fornecedor corretos.
5. Preencher o Método de Envio e a Condição de Pagamento quando aplicável.
6. Se os campos de aprovação exigirem, introduzir também o valor mínimo de encomenda e moeda base.

**Validação final**
Todos os campos da secção obrigatória estão preenchidos, permitindo o envio do pedido de aprovação.

**Notas**
- Campos adicionais podem ser obrigatórios consoante o workflow configurado.
- Revise as informações de banco e envio se forem necessárias para pagamentos e logística.


## BC-KB-110 — Como envio um fornecedor para aprovação?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Após criar o fornecedor, é necessário submetê lo ao workflow de aprovação.

**Diagnóstico**
O utilizador não sabe como iniciar o pedido de aprovação.

**Causa provável**
Desconhecimento da funcionalidade Enviar Pedido Aprovação.

**Solução**
Usar o menu Pedido na ficha do fornecedor para enviar o pedido de aprovação.

**Como proceder**
1. Abrir a ficha do fornecedor criado.
2. Certificar se de que todos os campos obrigatórios estão preenchidos.
3. Aceder ao menu Pedido.
4. Selecionar Enviar Pedido Aprovação; confirmar a ação.
5. O sistema cria uma solicitação e envia notificação ao aprovador designado.

**Validação final**
O pedido de aprovação aparece na lista de solicitações pendentes e o fornecedor fica com estado de workflow "Em Progresso".

**Notas**
- Verifique se o workflow de aprovação está configurado para fornecedores; caso contrário, a opção pode não estar disponível.
- Após envio, algumas edições podem ficar bloqueadas até à decisão.


## BC-KB-111 — Onde verifico o estado de aprovação de um fornecedor?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Pretende saber se um fornecedor já foi aprovado ou se continua pendente.

**Diagnóstico**
O estado da aprovação não é visível de imediato na lista de fornecedores.

**Causa provável**
Desconhecimento das páginas de consulta de aprovação.

**Solução**
Consultar o estado na ficha de fornecedor ou na página Solicitações para Aprovar.

**Como proceder**
1. Abrir a ficha do fornecedor e procurar a secção Aprovações para ver o estado atual.
2. Usar a pesquisa e aceder a Solicitações para Aprovar.
3. Aplicar um filtro por Tipo Documento = Fornecedor e localizar o número do fornecedor.
4. Verificar a coluna Estado (Pendente, Aprovado, Rejeitado) e Aprovador.
5. Se necessário, abrir o registo para ver detalhes adicionais.

**Validação final**
O estado da aprovação é conhecido e pode ser acompanhado até à decisão final.

**Notas**
- Utilize notificações ou alertas para receber informação de novas aprovações.
- Em workflows multilivelo, acompanhe cada etapa da aprovação separadamente.


## BC-KB-112 — Como filtro fornecedores com workflow em progresso?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Precisa de identificar rapidamente os fornecedores pendentes de aprovação.

**Diagnóstico**
A lista de fornecedores contém tanto registos aprovados como pendentes, dificultando a gestão.

**Causa provável**
Falta de conhecimento sobre filtros de workflow.

**Solução**
Aplicar um filtro no campo Workflowstatus com o valor Em Progresso na lista de fornecedores.

**Como proceder**
1. Aceder à lista de Fornecedores.
2. Clicar em Filtrar e selecionar o campo Workflowstatus.
3. Definir o valor Em Progresso para listar apenas fornecedores ainda em aprovação.
4. a vista personalizada se necessário para consultas futuras.

**Validação final**
A lista apresenta apenas fornecedores cujo estado de workflow está em progresso

**Notas**
- Pode combinar este filtro com outros (por exemplo, por comprador) para análises específicas.
- Limpar o filtro volta a apresentar todos os fornecedores.


## BC-KB-113 — Como aprovo ou rejeito um novo fornecedor?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Um fornecedor criado está pendente de aprovação e precisa de ser aprovado ou rejeitado.

**Diagnóstico**
O pedido de aprovação encontra se na lista de solicitações pendentes.

**Causa provável**
O workflow exige validação por parte de um aprovador designado.

**Solução**
Aceder à página de solicitações e tomar a decisão após rever a ficha.

**Como proceder**
1. Abrir Solicitações para Aprovar e aplicar o filtro por Tipo Documento = Fornecedor.
2. Selecionar o pedido pendente.
3. Clicar em Abrir Registo para analisar os dados do fornecedor (nome, NIF, condições de pagamento, produtos fornecidos).
4. Se os dados estiverem corretos, voltar à lista e clicar em Aprovar; se houver informações incorretas ou em falta, clicar em Rejeitar e adicionar um comentário com as razões.
5. O sistema informa o criador do fornecedor sobre a decisão.

**Validação final**
O fornecedor é aprovado e passa a ativo ou é rejeitado e removido do fluxo, conforme a decisão.

**Notas**
- Apenas os utilizadores com permissão de aprovador podem executar esta ação.
- Indicar as razões da rejeição evita erros recorrentes na criação de fornecedores.


## BC-KB-114 — Como identifico fornecedores que requerem aprovação de Packaging ou Artworks?
**Categoria:** Fornecedores  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Alguns fornecedores necessitam de aprovação específica para materiais de embalagem (Packaging) ou artes gráficas (Artworks).

**Diagnóstico**
Estas aprovações adicionais não fazem parte do workflow padrão de fornecedor e devem ser configuradas individualmente.

**Causa provável**
Fornecedores que fornecem produtos com embalagem personalizada ou documentação regulatória exigem verificações extra.

**Solução**
Configurar indicadores na ficha do fornecedor ou na ficha de produto que sinalizem a necessidade de aprovação de Packaging/Artworks.

**Como proceder**
1. Abrir a ficha do fornecedor.
2. Localizar campos como Requer Aprovação Packaging ou Requer Aprovação Artworks (dependendo da customização).
3. Definir estes campos como Sim quando o fornecedor fornecer produtos que necessitam de aprovação de materiais de embalagem ou de artes finais.
4. Ao criar encomendas de compra ou produtos associados, o sistema irá solicitar aprovação adicional antes do envio para produção.

**Validação final**
Fornecedores identificados requerem aprovação extra, e o processo de aprovação é ativado automaticamente quando aplicável.

**Notas**
- Se os campos não existirem, consulte a equipa de sistemas para configurar esta funcionalidade.
- Este procedimento reduz o risco de erros nos materiais de embalagem e cumprimento de normas.


## BC-KB-115 — Onde configuro a aprovação pré encomenda para fornecedores?
**Categoria:** Fornecedores / Compras  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Deseja que certas encomendas de fornecedores sejam aprovadas antes de serem enviadas.

**Diagnóstico**
A aprovação pré encomenda é útil para controlar compras acima de um determinado valor ou tipo de material.

**Causa provável**
Necessidade de implementar controlos internos e garantir conformidade com políticas de compras.

**Solução**
Ativar o workflow de aprovação pré encomenda na ficha do fornecedor ou nas configurações de compras.

**Como proceder**
1. Aceder a Configuração Compras e Pagamentos ou Configuração Workflow via pesquisa.
2. Criar ou editar um workflow de aprovação para encomendas de compra, definindo condições como valor mínimo ou fornecedor específico.
3. Associar o workflow à tabela Encomendas de Compra e definir os aprovadores.
4. Se pretender definir a aprovação por fornecedor, abrir a ficha do fornecedor e ativar o campo Requer Aprovação Pré Encomenda (quando disponível).
5. Testar o fluxo criando uma encomenda acima do limiar definido para garantir que o pedido de aprovação é gerado.

**Validação final**
As encomendas de compra para fornecedores configurados ou valores acima do limiar são bloqueadas até serem aprovadas.

**Notas**
- Esta configuração requer permissões de administrador.
- Ajuste os parâmetros do workflow conforme a política interna da empresa.


## BC-KB-116 — Como consulto as solicitações pendentes para aprovar?
**Categoria:** Aprovações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador deseja ver todos os pedidos de aprovação pendentes de decisão.

**Diagnóstico**
Existem pedidos de produto, cliente, fornecedor ou encomenda que aguardam aprovação.

**Causa provável**
Falta de conhecimento de onde centralizar as solicitações.

**Solução**
Usar a página Solicitações para Aprovar para ver e filtrar todos os pedidos pendentes.

**Como proceder**
1. Na pesquisa do Business Central, digitar Solicitações para Aprovar e abrir a página.
2. A lista mostra todas as solicitações pendentes; utilizar filtros por Tipo Documento (Produto, Cliente, Fornecedor, Encomenda, etc.) ou Responsável.
3. Analisar cada linha para ver o estado, data de envio e solicitante.
4. Selecionar uma linha e utilizar as ações disponíveis (Aprovar, Rejeitar, Abrir Registo, Comentários).

**Validação final**
Todas as solicitações pendentes são visíveis e organizadas, permitindo ao aprovador gerir o seu trabalho.

**Notas**
- É possível adicionar colunas adicionais à vista para facilitar a análise (por exemplo, valor da encomenda).
- Crie vistas personalizadas para diferentes tipos de aprovações.


## BC-KB-117 — Que opções existem numa linha de aprovação pendente?
**Categoria:** Aprovações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
Um aprovador quer saber que ações pode tomar numa solicitação pendente.

**Diagnóstico**
Cada linha de aprovação apresenta várias opções contextuais.

**Causa provável**
Necessidade de clarificar as ações antes de proceder.

**Solução**
Listar as opções disponíveis: Aprovar, Rejeitar, Abrir Registo e Comentários.

**Como proceder**
1. Abrir Solicitações para Aprovar e localizar a linha pendente.
2. Observar as ações disponíveis na faixa de opções ou no menu contextual:
o Aprovar: aceita o pedido e finaliza o processo.
o Rejeitar: recusa o pedido; deve ser indicado um comentário com o motivo.
o Abrir Registo: abre a ficha do documento (produto, cliente, fornecedor, encomenda) para revisão.
o Adicionar Comentário: permite escrever observações sem aprovar ou rejeitar.
1. Escolher a ação apropriada com base na análise.

**Validação final**
O aprovador conhece e utiliza as opções corretamente, conduzindo o pedido ao estado final desejado.

**Notas**
- Uma vez aprovada ou rejeitada, a solicitação desaparece da lista pendente.
- Os comentários ficam registados para consulta futura.


## BC-KB-118 — Quando devo usar a opção “Abrir Registo” numa aprovação?
**Categoria:** Aprovações  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**
O aprovador quer saber em que situações deve abrir o registo antes de aprovar ou rejeitar.

**Diagnóstico**
Nem sempre é necessário abrir o registo, mas em casos de dúvida é aconselhável.

**Causa provável**
Não entendimento da utilidade de rever o registo completo.

**Solução**
Usar Abrir Registo para verificar dados detalhados antes de tomar uma decisão.

**Como proceder**
1. Na lista de Solicitações para Aprovar, selecionar a linha do pedido.
2. Clicar em Abrir Registo; a ficha correspondente abre permitindo visualizar todos os campos e detalhes.
3. Rever informações como dados fiscais, preços, quantidades, datas ou anexos.
4. Fechar a ficha; com base na informação consultada, decidir Aprovar ou Rejeitar no pedido.

**Validação final**
O aprovador tomou uma decisão informada após analisar o conteúdo completo do registo.

**Notas**
- Esta opção é recomendada quando há dúvidas sobre a completude ou exatidão da informação.
- Evita aprovações erradas que poderiam comprometer processos futuros.


## BC-KB-119 — Como crio uma nova oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Um novo concurso, ajuste direto ou proposta simples precisa ser registado no sistema.

**Diagnóstico**
O utilizador não iniciou ainda a criação de oportunidades.

**Causa provável**
Desconhecimento do menu de oportunidades.

**Solução**
Criar uma oportunidade na lista de oportunidades.

**Como proceder**
1. A partir da pesquisa, abrir Oportunidades.
2. Clicar em Novo para criar uma nova oportunidade.
3. Preencher o formulário em branco; o campo Nº pode ser gerado automaticamente.

**Validação final**
A oportunidade fica registada e visível na lista de oportunidades

**Notas**
- O tipo de oportunidade (concurso, ajuste, proposta) pode ser indicado na ficha mais tarde.
- É possível associar anexos, ligações e notas após a criação.


## BC-KB-120 — Que informação devo preencher na tab Geral de uma oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
A ficha da oportunidade deve ser caracterizada com dados básicos antes de avançar.

**Diagnóstico**
O utilizador não conhece os campos exigidos na tab Geral.

**Causa provável**
Falta de formação na criação de oportunidades.

**Solução**
Preencher os campos principais: Número, Descrição, Contacto, Prioridade, Ciclo de Vendas e Vendedor.

**Como proceder**
1. Na ficha da oportunidade, ir à tab Geral.
2. Preencher o campo Nº (usar numeração automática se disponível).
3. Inserir uma Descrição breve do procedimento ou negócio.
4. Selecionar o Nº Contacto associado (cliente ou potencial cliente).
5. Definir a Prioridade (Alta, Normal, Baixa).
6. Selecionar o Cód. Ciclo de Vendas que determina as etapas da oportunidade.
7. Indicar o Cód. Vendedor responsável pelo acompanhamento.

**Validação final**
A tab Geral fica completa e a oportunidade pode avançar para as próximas fases

**Notas**
- Estes campos são obrigatórios para que o workflow de oportunidade funcione corretamente.
- Pode adicionar mais detalhes (origem, categoria) conforme a configuração.


## BC-KB-121 — Como identifico o contacto associado a uma oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário associar a oportunidade a uma pessoa de contacto dentro do cliente.

**Diagnóstico**
A ficha de oportunidade não tem um contacto atribuído ou tem um contacto incorreto.

**Causa provável**
O utilizador não selecionou o campo Nº Contacto.

**Solução**
Selecionar o contacto correto a partir da lista de contactos do cliente.

**Como proceder**
1. Na ficha da oportunidade, ir ao campo Nº Contacto.
2. Clicar na seta de pesquisa para abrir a lista de contactos do cliente (ou de todos os clientes).
3. Selecionar o contacto adequado (nome, cargo) e confirmar.
4. O campo é preenchido com o código do contacto e o nome aparece adjacente.

**Validação final**
O contacto associado reflete a pessoa certa para acompanhamento da oportunidade.

**Notas**
- Se o contacto não existir, crie-o previamente na ficha de cliente.
- O contacto pode ser alterado a qualquer momento, antes de fechar a oportunidade.


## BC-KB-122 — Como defino a prioridade de uma oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário classificar a urgência ou importância de uma oportunidade.

**Diagnóstico**
O campo Prioridade está vazio ou com o valor errado.

**Causa provável**
Desconhecimento da lista de prioridades e do seu impacto no ciclo de vendas.

**Solução**
Selecionar um valor de prioridade (Alta, Normal ou Baixa) na tab Geral.

**Como proceder**
1. Na ficha de oportunidade, localizar o campo Prioridade.
2. Clicar na seta de seleção e escolher entre Alta, Normal ou Baixa.
3. A prioridade pode influenciar a ordem de tratamento das oportunidades e alertas no centro de perfil.

**Validação final**
A oportunidade fica marcada com a prioridade adequada, refletindo a urgência do processo.

**Notas**
- A prioridade pode ser alterada a qualquer momento se a importância se modificar.
- Algumas organizações podem configurar prioridades personalizadas; verifique com o administrador.


## BC-KB-123 — Como escolho o ciclo de vendas de uma oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Precisa de associar a oportunidade a um ciclo de vendas que define as etapas e tarefas a realizar.

**Diagnóstico**
O campo Cód. Ciclo de Vendas pode estar em branco ou incorreto.

**Causa provável**
Desconhecimento dos ciclos de vendas disponíveis e do seu propósito.

**Solução**
Escolher o código apropriado consoante o tipo de oportunidade (Concursos Públicos, Ajustes Diretos, Propostas Simples, etc.).

**Como proceder**
1. Na ficha de oportunidade, localizar o campo Cód. Ciclo de Vendas.
2. Clicar na seta para abrir a lista de ciclos disponíveis.
3. Selecionar o ciclo que melhor se adapta ao tipo de oportunidade; por exemplo, Concursos Públicos tem etapas de preparação de proposta, envio, acompanhamento, etc.
4. Confirmar; o ciclo define automaticamente as etapas e tarefas associadas.
5. Prosseguir com o processo de Ativar Primeira Etapa quando estiver pronto.

**Validação final**
O ciclo de vendas está selecionado corretamente e orienta o processo de acompanhamento da oportunidade.

**Notas**
- Pode consultar a descrição de cada ciclo na tabela de ciclos de vendas.
- A alteração do ciclo após iniciar etapas pode não ser recomendada; verifique com o administrador.


## BC-KB-124 — Como adiciono anexos a uma oportunidade?
**Categoria:** Oportunidades / Documentação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário associar documentos relevantes (cadernos de encargos, cadernos de condições, certificados) à oportunidade.

**Diagnóstico**
A ficha de oportunidade permite anexar ficheiros, mas o utilizador não sabe como fazê lo.

**Causa provável**
Falta de experiência com a funcionalidade de anexos.

**Solução**
Utilizar a opção de anexos no menu da oportunidade para carregar ficheiros.

**Como proceder**
1. Abrir a ficha da oportunidade.
2. No canto superior ou menu, clicar em Anexos (ou ícone de clip).
3. Selecionar Novo Anexo ou Carregar Ficheiro.
4. Navegar até ao local do ficheiro (por exemplo, PDF do caderno de encargos) e selecionar Abrir.
5. O ficheiro fica associado à oportunidade; pode adicionar notas ou uma descrição ao anexo.
6. Repetir para outros documentos.

**Validação final**
Os anexos aparecem listados na ficha da oportunidade e podem ser abertos ou descarregados quando necessário.

**Notas**
- Use nomes claros nos anexos para fácil identificação.
- O tamanho máximo de ficheiro depende da configuração do Business Central ou do SharePoint.


## BC-KB-125 — Que tipo de anexos devo associar a uma oportunidade de concurso?
**Categoria:** Oportunidades / Documentação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O utilizador quer saber que documentos são relevantes quando a oportunidade é um concurso público.

**Diagnóstico**
Os concursos exigem documentos específicos para preparação e submissão da proposta.

**Causa provável**
Desconhecimento dos requisitos documentais de um concurso.

**Solução**
Associar os documentos fornecidos pelo cliente e os internos necessários para elaborar a proposta.

**Como proceder**
1. Na fase inicial, anexar o Programa de Concurso e o Caderno de Encargos fornecidos pela entidade adjudicante.
2. Anexar o Caderno de Condições e eventuais anexos técnicos relativos ao procedimento.
3. Adicionar documentos internos como Memória Descritiva, Declarações de Responsabilidade ou certificações que acompanhem a proposta.
4. Garantir que todos os anexos estão atualizados e completos antes de gerar a proposta.

**Validação final**
Todos os documentos pertinentes estão anexados à oportunidade e servem de base para a elaboração da proposta.

**Notas**
- Mantenha a ordem e a nomenclatura dos ficheiros para facilitar a consulta.
- Verifique se existem anexos obrigatórios específicos do setor (licenças, certificados).


## BC-KB-126 — Como adiciono ligações externas a uma oportunidade?
**Categoria:** Oportunidades / Ligações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário associar links externos, como páginas web ou pastas partilhadas, à oportunidade.

**Diagnóstico**
O módulo de oportunidades permite criar ligações externas, mas esta funcionalidade não foi utilizada.

**Causa provável**
Desconhecimento da opção Ligações na ficha da oportunidade.

**Solução**
Usar a opção Ligações para adicionar URL ou referências externas.

**Como proceder**
1. Abrir a ficha da oportunidade.
2. No menu, selecionar Ligações ou Anexos → Ligações.
3. Clicar em Nova Ligação.
4. Introduzir o URL (por exemplo, endereço de uma pasta SharePoint, página do concurso) e uma Descrição.

**Validação final**
As ligações externas ficam acessíveis através da ficha da oportunidade e permitem navegar rapidamente para recursos externos.

**Notas**
- Verifique regularmente se as ligações ainda são válidas e atualizadas.
- Pode atribuir permissões no SharePoint para controlar acesso a pastas ligadas.


## BC-KB-127 — Que cuidados devo ter ao associar uma pasta SharePoint a uma oportunidade?
**Categoria:** Oportunidades / Ligações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
A oportunidade necessita de estar ligada a uma pasta de documentos no SharePoint para colaboração.

**Diagnóstico**
Uma associação incorreta pode causar problemas de acesso ou de organização de ficheiros.

**Causa provável**
Falta de boas práticas na criação e associação de pastas.

**Solução**
Criar pastas específicas por oportunidade e assegurar permissões adequadas antes de associar.

**Como proceder**
1. No SharePoint, criar uma subpasta com o nome ou código da oportunidade numa biblioteca adequada.
2. Definir as permissões de acesso para a equipa que irá trabalhar na oportunidade.
3. Na ficha da oportunidade, utilizar a opção Ligações para adicionar o URL da pasta SharePoint recém criada.
4. Verificar se o link abre corretamente para os utilizadores.
5. Manter a organização de documentos dentro dessa pasta (subpastas por fase ou tipo de documento).

**Validação final**
A pasta está ligada e os utilizadores autorizados conseguem aceder e colaborar nos documentos da oportunidade.

**Notas**
- Evite associar a biblioteca raiz do SharePoint; crie uma pasta específica por oportunidade.
- Documentos sensíveis devem ter permissão restrita.


## BC-KB-128 — Que tipo de notas posso colocar numa oportunidade?
**Categoria:** Oportunidades / Notas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Pretende registar observações e informações que não cabem nos campos estruturados da oportunidade.

**Diagnóstico**
As notas permitem documentar detalhes importantes como chamadas telefónicas, reuniões e decisões internas.

**Causa provável**
Não utilização da funcionalidade Notas por desconhecimento.

**Solução**
Adicionar notas através da opção de comentários ou notas na ficha da oportunidade.

**Como proceder**
1. Abrir a ficha da oportunidade.
2. Selecionar Notas ou Comentários (dependendo da versão).
3. Escrever o texto da nota, mencionando data, autor e assunto (por exemplo, "Reunião com cliente X" ou "Sugestão do gestor").
4. Adicionar tantas notas quantas necessárias ao longo do ciclo de vendas.

**Validação final**
As notas ficam visíveis na ficha e servem de histórico para todos os intervenientes.

**Notas**
- Utilize uma linguagem objetiva e registe apenas informação relevante.
- As notas não substituem anexos ou campos estruturados; use-as como complemento.


## BC-KB-129 — Como registo requisitos do cliente numa oportunidade?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O cliente define requisitos específicos que devem constar na proposta (por exemplo, país de origem, marca, visibilidade do CDM).

**Diagnóstico**
Estes requisitos devem ser registados na ficha da oportunidade para serem impressos ou considerados na proposta.

**Causa provável**
Desconhecimento dos campos disponíveis para requisitos.

**Solução**
Usar o separador de requisitos na ficha da oportunidade para preencher os campos relevantes.

**Como proceder**
1. Na ficha da oportunidade, identificar que se trata de um concurso ou que há requisitos específicos.
2. Aceder ao separador Requisitos ou Procedimento, conforme o layout.
3. Preencher os campos solicitados pelo cliente (por exemplo, País de Origem, Marca, Visibilidade do CDM, Certificados exigidos).
4. Verificar se há campos opcionais que devem ser incluídos na proposta.

**Validação final**
Todos os requisitos estão registados e serão considerados no documento final.

**Notas**
- Se a oportunidade não for um concurso, estes campos podem ficar em branco.
- Recolher todos os requisitos antes de iniciar a elaboração da proposta evita atrasos.


## BC-KB-130 — Quando devo preencher os requisitos de concurso?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
Existe dúvida sobre o momento ideal para registar as informações do procedimento do concurso.

**Diagnóstico**
Os requisitos são determinantes para a proposta e devem ser registados atempadamente.

**Causa provável**
Falta de metodologia no preenchimento das fichas de concurso.

**Solução**
Preencher os requisitos logo que a oportunidade é identificada como concurso e a documentação é recebida.

**Como proceder**
1. Assim que for confirmada a participação num concurso, abrir a ficha da oportunidade.
2. No separador Requisitos, inserir imediatamente as informações básicas: Número do Procedimento, Título do Procedimento, Data/Hora Limite de Entrega, etc.
3. Acrescentar outros requisitos à medida que surgirem, garantindo que todos estão registados antes de gerar a proposta.
4. Atualizar a ficha sempre que houver clarificações ou aditamentos por parte do cliente.

**Validação final**
Os requisitos estão completos antes da elaboração da proposta, evitando omissões no documento final.

**Notas**
- Um registo atempado permite planear o ciclo de vendas de forma mais eficiente.
- Actualize os requisitos se forem recebidos adendos ou esclarecimentos do concurso.


## BC-KB-131 — Que campos devo preencher quando a oportunidade é um concurso?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
A oportunidade diz respeito a um concurso público e requer informação adicional.

**Diagnóstico**
Alguns campos da ficha da oportunidade são específicos para concursos e devem ser preenchidos para que apareçam na proposta.

**Causa provável**
Falta de conhecimento sobre os campos específicos de concursos.

**Solução**
Preencher os campos de procedimento e requisitos na ficha de oportunidade.

**Como proceder**
1. Na ficha da oportunidade, aceder ao separador Requisitos.
2. Preencher o campo Procedimento com o número do concurso (ex.: número do anúncio no Diário da República).
3. Preencher o Título do Procedimento com a designação oficial, que será impressa na proposta.
4. Definir a Data/Hora Limite de Entrega da Proposta conforme o caderno de encargos.
5. Ativar e preencher outros campos específicos solicitados (País de origem, Marca, Certificações).

**Validação final**
Todos os campos específicos do concurso estão preenchidos, permitindo a geração de propostas e documentos regulamentares.

**Notas**
- Se algum campo não se aplicar, pode deixar em branco, mas confirme se não é obrigatório pelo cliente.
- Utilize notas para explicar campos não padronizados.


## BC-KB-132 — Como identifico o número do procedimento de concurso?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
É necessário introduzir o número do procedimento (ou concurso) na ficha da oportunidade.

**Diagnóstico**
O documento do concurso indica o número, mas o utilizador não sabe em que campo o colocar.

**Causa provável**
Desconhecimento da estrutura da ficha de oportunidade.

**Solução**
Preencher o campo Procedimento no separador de requisitos com o número oficial do concurso.

**Como proceder**
1. Consultar o anúncio do concurso ou o convite e identificar o número do procedimento (por exemplo, o número do anúncio no Portal Base).
2. Na ficha da oportunidade, aceder ao separador Requisitos.
3. Introduzir o número no campo Procedimento.

**Validação final**
O número do procedimento está corretamente registado na oportunidade e será utilizado nos documentos oficiais.

**Notas**
- Verifique que o número coincide com o indicado nos documentos do cliente para evitar erros.
- Se houver vários procedimentos, crie oportunidades separadas para cada um.


## BC-KB-133 — Como identifico o título do procedimento que será impresso na proposta?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**
O título do concurso deve ser impresso na proposta de venda e deve corresponder ao que consta no caderno de encargos.

**Diagnóstico**
O campo de título pode estar em branco ou incorreto e precisa ser atualizado.

**Causa provável**
O utilizador não sabe onde preencher o título do procedimento.

**Solução**
Usar o campo Título do Procedimento no separador de requisitos da oportunidade.

**Como proceder**
1. Abrir a ficha da oportunidade.
2. Aceder ao separador Requisitos.
3. No campo Título do Procedimento, introduzir o nome oficial do concurso (por exemplo, "Fornecimento de Medicamentos para Hospital X").
4. Quando a proposta de venda for gerada, o título será impresso conforme este campo.

**Validação final**
O título está registado e aparece corretamente na proposta de venda e documentos relacionados.

**Notas**
- Certifique se de que o título corresponde exatamente ao indicado nos documentos oficiais para evitar impugnações.
- Pode utilizar notas para incluir versões abreviadas ou traduções, se necessário.


## BC-KB-134 — Como defino a data e hora limite de entrega da proposta?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Ao preparar uma proposta para um concurso público ou ajuste directo, é necessário indicar a data e hora em que o cliente exige a entrega da proposta de venda.

**Diagnóstico**  
A ficha de oportunidade contém um separador de requisitos com um campo próprio para a data/hora limite, mas este campo está vazio ou contém informação errada.

**Causa provável**  
O utilizador não sabe onde inserir a data e hora de entrega ou esqueceu-se de a registar.

**Solução**  
Preencher o campo Data/Hora Limite de Entrega da Proposta no separador de requisitos da oportunidade.

**Como proceder**  
1. Abrir a ficha da oportunidade relacionada com o concurso.
2. Aceder ao separador Requisitos.
3. Localizar o campo Data/Hora Limite de Entrega da Proposta.
4. Introduzir a data e hora exacta exigida pelo cliente (por exemplo, 27-05-2026 10:00).

**Validação final**  
A data e hora limite aparecem preenchidas no separador de requisitos e serão impressas no documento de proposta.

**Notas**  
- Verifique sempre as especificações do concurso para não introduzir datas erradas.
- Ajuste a hora de acordo com o fuso horário do cliente quando aplicável.


## BC-KB-135 — Para que servem os campos de requisitos do concurso?
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Nas oportunidades de concurso existem vários campos específicos (País de origem, marca, CDM, etc.) e o utilizador não sabe se devem ser preenchidos.

**Diagnóstico**  
Os campos não foram completados, o que pode levar a propostas incompletas ou rejeitadas.

**Causa provável**  
Falta de conhecimento sobre a finalidade destes campos e sobre a impressão automática na proposta.

**Solução**  
Utilizar os campos do separador Requisitos para registar informação exigida pelo cliente no concurso.

**Como proceder**  
1. Abrir a ficha da oportunidade de concurso.
2. Ir ao separador Requisitos.
3. Preencher os campos disponíveis, como País de Origem, Marca, N.º de Lote/CDM, País de Fabrico ou outros solicitados no caderno de encargos.
4. Se algum campo não for aplicável, deixar em branco ou indicar “Não aplicável”.

**Validação final**  
Os campos de requisitos estão preenchidos e a informação será incluída na proposta de venda.

**Notas**  
- Estes campos são opcionais em oportunidades normais, mas obrigatórios quando especificados no concurso.
- Informações incorrectas podem invalidar a proposta; valide com a documentação oficial.


## BC-KB-136 — O que é o ciclo de vendas da oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário seguir um conjunto de etapas na gestão de uma oportunidade, mas o utilizador não sabe como funciona o ciclo de vendas.

**Diagnóstico**  
O campo Cód. Ciclo de Vendas está vazio e a oportunidade não gera tarefas ou alertas.

**Causa provável**  
O utilizador não conhece os ciclos pré-definidos (ex.: Concursos Públicos, Ajustes Directos) e não seleccionou nenhum.

**Solução**  
O ciclo de vendas é uma estrutura com etapas e ações que guiam a oportunidade desde a criação até ao fecho; deve ser seleccionado na ficha para que o sistema gere tarefas automaticamente.

**Como proceder**  
1. Abrir a ficha da oportunidade.
2. No separador Geral, localizar o campo Cód. Ciclo de Vendas.
3. Seleccionar o ciclo adequado (por exemplo, CONCURSO) de acordo com o tipo de negócio.
4. Activar a primeira etapa do ciclo para iniciar o fluxo de tarefas.

**Validação final**  
O ciclo de vendas está seleccionado e a oportunidade mostra o estado de etapa em curso, com tarefas geradas.

**Notas**  
- Os ciclos podem ser configurados pela administração para reflectir processos internos.
- Se nenhum ciclo for aplicado, não serão geradas tarefas automáticas.


## BC-KB-137 — Como activo a primeira etapa do ciclo de vendas?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após atribuir um ciclo à oportunidade, o utilizador não sabe como iniciar a primeira etapa.

**Diagnóstico**  
A oportunidade permanece com estado “Não iniciada” e não são criadas tarefas.

**Causa provável**  
Falta de acção manual para iniciar o ciclo.

**Solução**  
Utilizar a opção “Ativar Primeira Etapa” para colocar a oportunidade em curso.

**Como proceder**  
1. Na ficha da oportunidade com ciclo de vendas atribuído, clicar em Processar.
2. Seleccionar Ativar Primeira Etapa.
3. Confirmar a operação; o estado da oportunidade muda para Em curso e são geradas as primeiras tarefas.

**Validação final**  
A etapa inicial está activa e as tarefas correspondentes são criadas.

**Notas**  
- Este passo só precisa de ser executado uma vez, no início da oportunidade.
- Se a etapa já estiver activa, a opção fica indisponível.


## BC-KB-138 — O que acontece quando activo a primeira etapa do ciclo de vendas?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador quer saber quais as consequências de activar o ciclo de vendas.

**Diagnóstico**  
Desconhecimento das funcionalidades automáticas associadas ao ciclo.

**Causa provável**  
Falta de formação sobre a configuração de ciclos e tarefas.

**Solução**  
Activar o ciclo desencadeia a criação de tarefas a efectuar e altera o estado da oportunidade, permitindo o seu acompanhamento.

**Como proceder**  
1. Após clicar em Ativar Primeira Etapa, o estado da oportunidade muda para Em curso.
2. O sistema cria automaticamente uma ou mais Ações a Efetuar atribuídas ao responsável de vendas ou à equipa.
3. Estas acções aparecem no centro de perfil do utilizador e na ficha da oportunidade.

**Validação final**  
O estado da oportunidade é “Em curso”, e as tarefas geradas podem ser vistas nas listas de acções.

**Notas**  
- As tarefas guiam o utilizador através das actividades necessárias, como contacto com cliente, envio de proposta, etc.
- A falta de conclusão das tarefas pode bloquear a progressão para etapas seguintes.


## BC-KB-139 — Como passo para a etapa seguinte do ciclo de vendas?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após concluir as tarefas da etapa actual, pretende avançar para a próxima fase do ciclo.

**Diagnóstico**  
O campo de estado permanece na etapa actual porque a mudança não foi solicitada.

**Causa provável**  
O utilizador não sabe como registar a conclusão da etapa ou onde actualizar o ciclo.

**Solução**  
Utilizar a opção de actualizar etapa para avançar no ciclo de vendas.

**Como proceder**  
1. Na ficha da oportunidade, garantir que todas as tarefas da etapa actual estão concluídas.
2. Seleccionar Base → Actualizar (ou opção equivalente) para indicar a conclusão da etapa.
3. Preencher as informações adicionais solicitadas (por exemplo, data de conclusão, notas).
4. Confirmar; a etapa seguinte passa a ficar em curso e são criadas novas tarefas.

**Validação final**  
O ciclo avança para a nova etapa e as tarefas associadas são geradas.

**Notas**  
- Se não aparecer a opção para actualizar, verifique se existem tarefas por concluir.
- Apenas utilizadores com permissões adequadas podem avançar etapas.


## BC-KB-140 — Como acedo às ações a efetuar de uma oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Necessita de ver a lista de tarefas ou acções associadas a uma oportunidade específica.

**Diagnóstico**  
As acções existem mas não são visíveis porque não foram abertas a partir da ficha.

**Causa provável**  
Desconhecimento da localização do menu Ações a Efetuar.

**Solução**  
Aceder à lista de acções a partir da oportunidade ou do centro de perfil.

**Como proceder**  
1. Abra a ficha da oportunidade e clique em Ações a Efetuar (normalmente localizada no topo ou no separador de acções).
2. É apresentada uma lista com todas as tarefas geradas para a oportunidade, indicando o responsável, data de vencimento e estado.
3. Como alternativa, aceda ao Centro de Perfil e consulte a secção de Ações Pendentes para ver as acções de todas as oportunidades.

**Validação final**  
A lista de acções mostra as tarefas activas e concluídas da oportunidade.

**Notas**  
- Use filtros por estado (Por Iniciar, Em Curso, Concluído) para organizar o trabalho.
- A lista permite abrir cada acção para editar ou concluir.


## BC-KB-141 — Como vejo as minhas ações pendentes no Centro de Perfil?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Quer acompanhar todas as tarefas que lhe estão atribuídas, independentemente da oportunidade.

**Diagnóstico**  
O utilizador não usa a área de painel ou vê apenas tarefas por acaso.

**Causa provável**  
Desconhecimento das funcionalidades do Centro de Perfil.

**Solução**  
Usar o Centro de Perfil para visualizar as suas acções pendentes.

**Como proceder**  
1. No menu principal do Business Central, seleccionar Centro de Perfil.
2. Na secção Ações Pendentes, encontra a lista de todas as tarefas atribuídas ao seu código de vendedor.
3. Clicar numa acção para abrir e editar, ou marcar como concluída quando apropriado.

**Validação final**  
O utilizador vê todas as suas acções pendentes num único painel.

**Notas**  
- Pode ordenar por data de vencimento para priorizar tarefas urgentes.
- As acções da equipa não aparecem aqui; para isso use o separador de equipa.


## BC-KB-142 — Como vejo as ações pendentes da minha equipa?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Como responsável de equipa, precisa de acompanhar as tarefas atribuídas aos membros da equipa.

**Diagnóstico**  
As acções da equipa estão distribuídas e não são facilmente acessíveis num único ecrã.

**Causa provável**  
O utilizador não está familiarizado com as opções de visão da equipa no centro de perfil ou na lista de acções.

**Solução**  
Visualizar as acções da equipa através das listas partilhadas ou de relatórios.

**Como proceder**  
1. No Centro de Perfil, localizar a área Ações da Equipa (por vezes chamada Actividades da Equipa).
2. Esta secção apresenta todas as tarefas atribuídas aos membros da equipa que gere.
3. Usar filtros de Responsável para analisar as acções por colaborador.
4. Para mais detalhe, abrir a ficha da oportunidade respectiva e ver as acções.

**Validação final**  
O responsável consegue ver e monitorizar as acções pendentes dos membros da sua equipa.

**Notas**  
- Para visualizar acções da equipa é necessário ter permissões de supervisor ou gestor.
- Esta visão ajuda a equilibrar cargas de trabalho e a identificar atrasos.


## BC-KB-143 — Qual é a diferença entre tarefas minhas e tarefas de equipa?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Confusão entre as tarefas que o utilizador deve executar e as tarefas delegadas à sua equipa.

**Diagnóstico**  
O utilizador não distingue os filtros Minhas e Equipa nas listas de acções.

**Causa provável**  
Falta de clarificação sobre a atribuição de responsáveis.

**Solução**  
Entender que cada acção possui um campo Código Vendedor; as tarefas “Minhas” são aquelas em que o código coincide com o seu, enquanto as de equipa pertencem a outros membros sob a sua supervisão.

**Como proceder**  
1. Na lista de Ações a Efetuar ou no Centro de Perfil, utilizar o filtro Responsável.
2. Seleccionar Código Vendedor = Meu Utilizador para ver apenas as suas tarefas.
3. Seleccionar os códigos dos membros da equipa para ver as tarefas atribuídas a cada um.
4. Alternativamente, usar a secção Minhas Ações vs Ações da Equipa se existir no painel.

**Validação final**  
As tarefas são filtradas correctamente, distinguindo as que são da sua responsabilidade das da equipa.

**Notas**  
- Saber diferenciar permite gerir melhor o tempo e monitorizar a equipa sem confusão.
- Reatribuir uma acção muda o código e, portanto, altera a lista em que aparece.


## BC-KB-144 — Como configuro equipas no Business Central?
**Categoria:** Oportunidades / Configuração  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Uma organização de vendas pretende criar equipas para agrupar vendedores e gerir oportunidades de forma colaborativa.

**Diagnóstico**  
Não existem equipas definidas ou as equipas actuais não reflectem a estrutura da empresa.

**Causa provável**  
A configuração inicial não incluiu a definição de equipas ou estas precisam de ser ajustadas.

**Solução**  
Criar e editar registos de equipas através da configuração do Business Central.

**Como proceder**  
1. Na pesquisa global, escrever Equipas de Vendas (ou similar) e seleccionar a página.
2. Clicar em Novo para criar uma nova equipa.
3. Definir um Código e Descrição para a equipa (ex.: EQUIPA_A, “Equipa Hospitalar”).
4. Configurar um Responsável se aplicável.

**Validação final**  
A equipa fica disponível na lista e pode ser seleccionada em oportunidades e acções.

**Notas**  
- A criação e edição de equipas requer permissão de administrador ou de configuração.
- Actualize as equipas periodicamente para reflectir alterações na organização.


## BC-KB-145 — Como adiciono vendedores a uma equipa?
**Categoria:** Oportunidades / Configuração  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Precisa de atribuir um ou mais vendedores a uma equipa de vendas já existente.

**Diagnóstico**  
A equipa foi criada mas não tem membros associados.

**Causa provável**  
Esquecimento ou dificuldade em localizar a lista de membros da equipa.

**Solução**  
Adicionar vendedores na página de linhas da equipa.

**Como proceder**  
1. Abrir a página Equipas de Vendas e seleccionar a equipa pretendida.
2. Clicar em Membros (ou Linhas de Equipa).
3. Na lista, seleccionar Novo e escolher o vendedor a adicionar através do campo Código Vendedor.
4. Repetir para cada vendedor adicional.

**Validação final**  
Os vendedores aparecem como membros da equipa seleccionada.

**Notas**  
- Se o vendedor não estiver disponível na lista, verifique se está criado como utilizador/vendedor no sistema.
- Uma equipa pode ter vários vendedores; um vendedor pode pertencer a várias equipas.


## BC-KB-146 — Como removo vendedores de uma equipa?
**Categoria:** Oportunidades / Configuração  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
É necessário remover um membro de uma equipa de vendas, por exemplo, por alteração de funções.

**Diagnóstico**  
O vendedor continua associado à equipa no sistema.

**Causa provável**  
A operação de remoção não foi feita.

**Solução**  
Eliminar a linha do membro na página de equipas.

**Como proceder**  
1. Aceder à página Equipas de Vendas e abrir a equipa pretendida.
2. Clicar em Membros para ver a lista actual.
3. Seleccionar a linha referente ao vendedor a remover e clicar em Eliminar.
4. Confirmar a remoção.

**Validação final**  
O vendedor deixa de constar na lista de membros da equipa.

**Notas**  
- A remoção não elimina o vendedor do sistema, apenas retira a associação à equipa.
- Reatribua as tarefas pendentes do vendedor removido, se necessário.


## BC-KB-147 — Como edito uma ação a efetuar?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma acção criada automaticamente pode precisar de correcções, como alterar a data de vencimento ou o objectivo.

**Diagnóstico**  
A acção foi criada com valores predefinidos e necessita de ajuste manual.

**Causa provável**  
Informação adicional chegou após a criação da acção ou houve uma mudança de prioridade.

**Solução**  
Editar a acção directamente na lista.

**Como proceder**  
1. Aceder à lista de Ações a Efetuar (via oportunidade ou centro de perfil).
2. Seleccionar a linha da acção a editar.
3. Clicar em Abrir Detalhes ou utilizar o menu Linha → Detalhes.
4. Editar os campos necessários, como Descrição, Data Vencimento, Código Vendedor ou Prioridade.

**Validação final**  
Os campos alterados reflectem a nova informação e a acção aparece actualizada.

**Notas**  
- Tenha cuidado ao alterar o código de vendedor; isso transfere a tarefa para outro colaborador.
- Algumas alterações podem exigir permissões específicas.


## BC-KB-148 — Como altero o responsável de uma ação?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma tarefa atribuída a um vendedor precisa de ser transferida para outro colaborador.

**Diagnóstico**  
O campo Código Vendedor da acção está atribuído à pessoa errada.

**Causa provável**  
Alteração na disponibilidade ou reestruturação das equipas.

**Solução**  
Editar o código de vendedor da acção para o novo responsável.

**Como proceder**  
1. Abrir a acção a partir da lista de Ações a Efetuar.
2. Localizar o campo Código Vendedor ou Responsável.
3. Seleccionar o novo código (vendedor) a quem pretende atribuir a tarefa.
4. Informar o novo responsável sobre a tarefa.

**Validação final**  
A acção passa a aparecer na lista do novo responsável e deixa de constar na lista do anterior.

**Notas**  
- Ao alterar o responsável, as datas e outras definições mantêm-se.
- Confirme com a pessoa antes de transferir tarefas críticas.


## BC-KB-149 — O que acontece quando altero o código de vendedor de uma ação?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Deseja compreender o impacto da troca do responsável numa tarefa.

**Diagnóstico**  
Alterar o código de vendedor é equivalente a reatribuir a tarefa a outro utilizador.

**Causa provável**  
O utilizador teme perder a informação ou o seguimento da acção.

**Solução**  
Ao reatribuir uma acção, o sistema remove-a da lista do vendedor original e adiciona-a à lista do novo responsável; a acção mantém o seu historial.

**Como proceder**  
1. No ecrã de edição da acção, alterar o campo Código Vendedor para o novo responsável.
2. O novo responsável passa a ver a acção no centro de perfil; o anterior já não tem acesso directo.

**Validação final**  
A reatribuição é visível na lista de acções de ambos os vendedores e a acção permanece íntegra.

**Notas**  
- Utilize esta funcionalidade para redistribuir trabalho em períodos de férias ou reestruturação.
- O histórico de alterações fica registado na ficha da acção.


## BC-KB-150 — Como altero o estado de uma ação para “Em Curso”?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma acção foi criada com estado Por Iniciar e o utilizador já começou a trabalhá-la.

**Diagnóstico**  
O estado não reflecte a situação actual e pode provocar confusão no relatório de tarefas.

**Causa provável**  
O utilizador não actualizou manualmente o estado da acção.

**Solução**  
Definir o estado da acção como Em Curso.

**Como proceder**  
1. Aceder à lista de Ações a Efetuar e abrir a acção desejada.
2. No campo Estado, seleccionar Em Curso.

**Validação final**  
O estado da acção passa a Em Curso e o centro de perfil reflecte a mudança.

**Notas**  
- O estado Em Curso permite diferenciar tarefas iniciadas das que ainda aguardam início.
- Este campo pode ser filtrado para priorização.


## BC-KB-151 — Como concluo uma ação?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após terminar a actividade correspondente, é necessário encerrar a tarefa no sistema.

**Diagnóstico**  
A acção permanece em estado Por Iniciar ou Em Curso, apesar de concluída.

**Causa provável**  
O utilizador não executou a conclusão na interface.

**Solução**  
Alterar o estado para Concluído e registar a interacção ou nota final.

**Como proceder**  
1. Abra a acção através da lista de Ações a Efetuar.
2. Seleccionar Estado = Concluído.
3. Preencher, se necessário, um registo de interacção ou comentário com o resultado da tarefa.

**Validação final**  
A acção deixa de aparecer nas listas de pendentes e passa a constar no histórico.

**Notas**  
- Concluir atempadamente as acções permite avançar etapas no ciclo de vendas.
- O registo de interacção ajuda a documentar o que foi feito.


## BC-KB-152 — O que devo fazer se não quiser registar uma nova interação ao concluir uma ação?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Ao concluir uma acção, o Business Central sugere criar um novo registo de interacção, mas o utilizador apenas quer marcar a tarefa como concluída.

**Diagnóstico**  
A funcionalidade de conclusão pode estar configurada para pedir interacções por defeito.

**Causa provável**  
Pode existir uma regra de interacção automática associada ao tipo de acção.

**Solução**  
Escolher a opção para concluir sem interacção quando disponível.

**Como proceder**  
1. Ao clicar para Concluir uma acção, observar se o sistema pede para registar uma nova interacção.
2. Se surgir o diálogo, seleccionar a opção Concluir sem Interação ou simplesmente fechar a janela de registo.
3. Verifique se o estado da acção passou a Concluído.

**Validação final**  
A acção fica concluída sem registo de nova interacção.

**Notas**  
- Documente a conclusão em notas se necessário; não é obrigatório abrir uma nova interacção.
- Esta opção pode não estar disponível em todas as versões; fale com o administrador se tiver dúvidas.


## BC-KB-153 — Como crio manualmente uma nova ação a efetuar?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Pretende adicionar uma tarefa que não foi gerada automaticamente pelo ciclo de vendas.

**Diagnóstico**  
O fluxo da oportunidade não contempla determinada actividade, mas esta continua a ser necessária.

**Causa provável**  
Nova informação do cliente ou necessidade interna que surge após a geração das tarefas.

**Solução**  
Criar manualmente uma acção e associá-la à oportunidade.

**Como proceder**  
1. Na ficha da oportunidade, clicar em Ações a Efetuar ou abrir a lista de acções gerais.
2. Seleccionar Novo para criar uma nova acção.
3. Preencher os campos principais: Descrição, Data Vencimento, Código Vendedor (responsável), Prioridade e, se aplicável, Tipo de Tarefa.

**Validação final**  
A nova acção fica visível na lista associada à oportunidade.

**Notas**  
- Manualmente pode criar tarefas para follow-up, esclarecimento ou actividades internas.
- Garanta que a pessoa responsável foi informada da nova tarefa.


## BC-KB-154 — Como atribuo uma ação manual a outro colaborador?
**Categoria:** Oportunidades / Gestão de Tarefas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma acção criada manualmente deve ser executada por um colega e não por quem a criou.

**Diagnóstico**  
O criador aparece como responsável por omissão.

**Causa provável**  
O campo Código Vendedor foi preenchido com o utilizador corrente.

**Solução**  
Ao criar a acção, definir o responsável correcto ou editá-la posteriormente.

**Como proceder**  
1. Ao criar a nova acção (BC-KB-153), definir o Código Vendedor para o colaborador pretendido.
2. Se já estiver criada, abrir a acção na lista.
3. Alterar o campo Código Vendedor para o responsável pretendido.

**Validação final**  
A acção aparece na lista do colaborador designado.

**Notas**  
- Use a lista de vendedores para seleccionar correctamente.
- Isto simplifica a distribuição de tarefas sem recorrer a administradores.


## BC-KB-155 — Como identifico o pedido do cliente numa oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Precisa de associar o código ou referência do pedido do cliente à oportunidade para facilitar a comunicação.

**Diagnóstico**  
O campo de referência do cliente está vazio ou incorrecto na ficha de oportunidade.

**Causa provável**  
O utilizador não localizou o campo adequado ou esqueceu-se de o preencher.

**Solução**  
Usar o campo Referência do Cliente na ficha da oportunidade.

**Como proceder**  
1. Abrir a ficha da oportunidade.
2. No separador Geral, localizar o campo Referência do Cliente (também pode aparecer como Nº Pedido Cliente).
3. Introduzir a referência fornecida pelo cliente.

**Validação final**  
O número de pedido do cliente fica associado à oportunidade e será transferido para a proposta.

**Notas**  
- Esta referência ajuda a identificar rapidamente a transação no lado do cliente.
- Use o mesmo valor em todos os documentos relacionados com a oportunidade.


## BC-KB-156 — Onde acedo aos produtos solicitados pelo cliente?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O cliente enviou uma lista de produtos desejados e deseja consultá-la numa oportunidade ou proposta.

**Diagnóstico**  
Os produtos não aparecem porque não foram adicionados ou estão noutra página.

**Causa provável**  
Os produtos foram registados numa proposta ou num anexo e não na lista de produtos da oportunidade.

**Solução**  
Aceder ao separador Produtos da oportunidade ou abrir a proposta associada.

**Como proceder**  
1. Na ficha da oportunidade, seleccionar o separador Produtos (ou eProdutos).
2. Aqui pode adicionar, editar ou consultar as linhas de produto solicitadas pelo cliente.
3. Se a lista estiver vazia, clique em Inserir e seleccione os produtos a partir do catálogo.
4. Alternativamente, abra a Proposta de Venda associada (BC-KB-159) para ver as linhas de produto já compiladas.

**Validação final**  
A lista de produtos solicitados pelo cliente está visível na ficha da oportunidade ou na proposta.

**Notas**  
- Garanta que as quantidades e unidades de medida reflectem o pedido do cliente.
- Use atributos (BC-KB-157) para filtrar produtos adequados durante a selecção.


## BC-KB-157 — Como uso a informação de atributos de produto numa proposta?
**Categoria:** Oportunidades / Produtos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Deseja aplicar filtros de atributos (ex.: fórmula, acondicionamento, embalagem) para sugerir produtos na proposta.

**Diagnóstico**  
Os atributos existem nas fichas de produtos, mas não estão a ser considerados na escolha de produtos.

**Causa provável**  
O utilizador desconhece o módulo de atributos ou não usa as funcionalidades de filtro.

**Solução**  
Utilizar a pesquisa por atributos ao adicionar produtos e apresentar esses atributos na proposta.

**Como proceder**  
1. Ao adicionar linhas de produto na oportunidade ou na proposta, utilizar a funcionalidade de filtro de atributos:
2. Seleccionar Selecionar Produtos ou Adicionar Produtos.
3. No painel de selecção, aplicar filtros nos campos Atributo e Valor (ex.: Atributo = "Marca", Valor = "Genérico").
4. Confirmar a selecção; apenas os produtos que correspondem aos atributos escolhidos serão listados.
5. Inserir os produtos desejados na proposta.

**Validação final**  
Os produtos inseridos correspondem aos atributos seleccionados, garantindo aderência às especificações do cliente.

**Notas**  
- Os atributos devem estar previamente definidos nas fichas de produto (ver BC-KB-087).
- Este método reduz o risco de oferecer produtos fora das especificações.


## BC-KB-158 — Que informações de apoio à decisão posso consultar numa oportunidade?
**Categoria:** Oportunidades  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Precisa de analisar dados adicionais para decidir se avança ou não com uma proposta.

**Diagnóstico**  
Nem todas as informações relevantes estão visíveis por defeito na ficha de oportunidade.

**Causa provável**  
O utilizador não explorou os factboxes e relatórios associados à oportunidade.

**Solução**  
Utilizar as FactBoxes e relatórios de apoio existentes na página da oportunidade.

**Como proceder**  
1. Na ficha da oportunidade, explorar o painel lateral de FactBoxes. Estes podem incluir:
2. Último Preço de Venda do cliente para o produto.
3. Margem Comercial prevista.
4. Histórico de Interacções e Ações Pendentes.
5. Montante Total previsto da proposta.
6. Usar relatórios padrão, como Análise de Oportunidades, para comparar ganhos e perdas por vendedor, região ou produto.
7. Explorar outras páginas relacionadas, como Histórico de Propostas, para ver propostas anteriores ao mesmo cliente.

**Validação final**  
O utilizador tem acesso a dados detalhados para tomar uma decisão informada sobre a oportunidade.

**Notas**  
- A interpretação destas informações ajuda a priorizar oportunidades com maior probabilidade de sucesso.
- Para análises mais avançadas, considere exportar dados para Excel ou Power BI.


## BC-KB-159 — Como associo uma proposta de venda a uma oportunidade?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário criar rapidamente uma proposta de venda com base nos dados da oportunidade.

**Diagnóstico**  
A proposta ainda não foi gerada ou está associada a outra oportunidade.

**Causa provável**  
O utilizador ainda não clicou na opção de associação ou não sabe onde a encontrar.

**Solução**  
Associar a proposta de venda através da opção Associar Proposta Venda.

**Como proceder**  
1. Abrir a ficha da oportunidade.
2. Clicar em Processar → Associar Proposta Venda.
3. O sistema cria uma proposta de venda com as linhas de produtos e condições comerciais da oportunidade.
4. Rever a proposta e efectuar ajustes se necessário.

**Validação final**  
A nova proposta de venda fica associada à oportunidade e visível nos campos de documento.

**Notas**  
- Esta associação facilita a passagem de informação sem duplicação manual.
- Após associar, pode enviar a proposta para aprovação (BC-KB-189).


## BC-KB-160 — Como retiro a associação de uma proposta de venda à oportunidade?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma proposta de venda associada à oportunidade está incorrecta e deve ser substituída.

**Diagnóstico**  
O campo Nº Documento de Venda na oportunidade contém o número de uma proposta que se pretende remover.

**Causa provável**  
Erros nos produtos, preços ou condições da proposta original.

**Solução**  
Remover a associação e criar nova proposta.

**Como proceder**  
1. Na ficha da oportunidade, apagar o valor do campo Nº Documento de Venda.
2. Corrigir os produtos ou condições no separador Produtos ou outros campos.
3. Voltar a usar Processar → Associar Proposta Venda para gerar uma nova proposta.

**Validação final**  
A nova proposta está correcta e associada; a anterior deixou de estar ligada à oportunidade.

**Notas**  
- Esta operação não elimina a proposta antiga; para isso, consulte a BC-KB-161.
- Garanta que todas as informações necessárias estão corrigidas antes de associar novamente.


## BC-KB-161 — Como elimino uma proposta de venda?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma proposta de venda foi criada por engano ou não será enviada ao cliente.

**Diagnóstico**  
A proposta está listada no sistema e ocupa espaço ou causa confusão.

**Causa provável**  
Decisão de não enviar ou criação de documento duplicado.

**Solução**  
Eliminar a proposta através da acção de apagar.

**Como proceder**  
1. Abrir a proposta de venda a eliminar.
2. Clicar no ícone Eliminar (representado por um caixote do lixo).
3. Confirmar a eliminação.

**Validação final**  
A proposta desaparece da lista e deixa de estar associada à oportunidade.

**Notas**  
- A eliminação não pode ser desfeita; crie nova proposta se necessário.
- Certifique-se de que a proposta não foi enviada antes de a apagar.


## BC-KB-162 — Como adiciono comentários de produto numa proposta de venda?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário incluir notas específicas em cada linha de produto de uma proposta para esclarecer condições ou características.

**Diagnóstico**  
A proposta de venda não apresenta comentários nas linhas e o utilizador desconhece a funcionalidade.

**Causa provável**  
O menu de linhas Comentário não foi utilizado.

**Solução**  
Inserir comentários na linha de produto.

**Como proceder**  
1. Na proposta de venda, seleccionar a linha de produto em que pretende adicionar o comentário.
2. Clicar em Linha → Comentário.
3. Inserir o texto do comentário (ex.: "Entrega em 48 h", "Produto substituto disponível").
4. Fechar a janela; o comentário fica associado à linha.

**Validação final**  
Os comentários são impressos na proposta de venda sob a respectiva linha.

**Notas**  
- Use comentários para indicar condições especiais, esclarecimentos técnicos ou prazos de entrega.
- Os comentários não alteram o preço ou as quantidades da linha.


## BC-KB-163 — Como imprimo uma proposta de venda para concurso?
**Categoria:** Oportunidades / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Precisa de gerar um documento formal de proposta adaptado a concursos públicos.

**Diagnóstico**  
O utilizador não sabe qual o relatório correto a usar.

**Causa provável**  
Confusão entre opções de impressão (proposta interna, concursos, factura pró-forma).

**Solução**  
Usar a opção de impressão específica para concursos.

**Como proceder**  
1. Abrir a proposta de venda associada ao concurso.
2. Clicar em Imprimir/Enviar.
3. Seleccionar Imprimir Proposta Concursos (ou nomenclatura similar).
4. Gerar o documento e imprimir ou descarregar em PDF conforme necessário.

**Validação final**  
O sistema gera um documento formatado para concursos, incluindo os requisitos e campos específicos.

**Notas**  
- Verifique que todos os campos obrigatórios e anexos estão preenchidos antes de imprimir.
- Utilize a mesma funcionalidade para enviar o documento por email.


## BC-KB-164 — Como configuro o planeamento na Ficha de Produto?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário que o produto seja reaprovisionado automaticamente quando o stock atinge determinados níveis, mas os parâmetros de planeamento não estão definidos.

**Diagnóstico**  
A ficha de produto não contém valores de política de reaprovisionamento, ponto de encomenda ou quantidades mínimas/máximas.

**Causa provável**  
O utilizador nunca configurou o separador Planeamento do produto.

**Solução**  
Preencher os campos de planeamento na ficha de produto para que o MRP (planeador) funcione correctamente.

**Como proceder**  
1. Abrir a ficha de produto.
2. Navegar até ao separador Planeamento.
3. Definir a Política de Reaprovisionamento:
4. Fixa (Reorder Point) – cria encomendas quando o stock atinge o ponto de encomenda.
5. Máximo – repõe até à quantidade máxima.
6. Nenhum – não gera propostas automáticas.
7. Preencher Ponto de Encomenda (quantidade mínima de stock).
8. Definir Qtde. Reposição (quantidade de encomenda padrão).
9. Indicar Qtde. Múltiplo Encomenda se as encomendas tiverem de ser múltiplos (ver BC-KB-168).
10. Preencher Qtde. Máxima de Encomenda se pretender limitar o stock.

**Validação final**  
O separador de planeamento está preenchido e o planeador gera sugestões correctas.

**Notas**  
- Ajuste estes valores periodicamente com base na procura real.
- Os campos de planeamento interagem com as previsões (BC-KB-181) e com a folha de requisição.


## BC-KB-165 — Como configuro o planeamento na Unidade de Armazenamento?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Um produto tem diferentes parâmetros de planeamento consoante a unidade de armazenamento (U/M) ou localização.

**Diagnóstico**  
Os reaprovisionamentos podem estar a ser gerados com valores errados porque a unidade de armazenamento não tem planeamento específico.

**Causa provável**  
O utilizador desconhece a página de Unidade de Armazenamento do Produto.

**Solução**  
Configurar os parâmetros de planeamento na página da unidade de armazenamento.

**Como proceder**  
1. Aceder à ficha do produto.
2. Na acção Relacionadas → Produto → Unidades de Armazenamento, abrir a página.
3. Seleccionar ou criar a linha da localização/unidade pretendida.
4. Preencher os campos de planeamento específicos: Política de Reaprovisionamento, Ponto de Encomenda, Qtde. Reposição, Qtde. Múltiplo Encomenda, etc., conforme necessário para aquela localização.

**Validação final**  
Cada unidade de armazenamento tem os seus próprios parâmetros de planeamento e o sistema gera sugestões correctas.

**Notas**  
- Esta configuração é útil quando um produto é armazenado em vários armazéns ou com U/M distintas.
- Se não for definido, os valores da ficha principal são utilizados por defeito.


## BC-KB-166 — Que políticas de aprovisionamento existem no Business Central?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Deseja perceber as diferentes opções de política de reaprovisionamento para escolher a mais adequada.

**Diagnóstico**  
O utilizador vê várias opções (Nenhum, Fixa, Máximo) e não sabe qual aplicar.

**Causa provável**  
Falta de conhecimento sobre o impacto de cada política no planeamento.

**Solução**  
Conhecer e seleccionar a política correcta na ficha de produto ou unidade de armazenamento.

**Como proceder**  
1. Na ficha de produto, no separador Planeamento, localizar o campo Política de Reaprovisionamento.
2. As opções usuais são:
3. Nenhum: o planeador não cria encomendas automaticamente; adequado para produtos de produção sob encomenda.
4. Fixa (Reorder Point): o sistema gera encomendas quando o stock cai abaixo do Ponto de Encomenda, reabastecendo até à Qtde. Reposição.
5. Máximo: o planeador reabastece até atingir a Qtde. Máxima de Encomenda sempre que o stock cai abaixo do ponto de encomenda.
6. Pedido: em algumas versões, pode existir Pedido para aprovisionamento baseado em encomendas de venda específicas.
7. Seleccionar a política mais apropriada ao ciclo de vida e consumo do produto.

**Validação final**  
A política de aprovisionamento escolhida está configurada e as sugestões de compra comportam-se conforme esperado.

**Notas**  
- A escolha errada da política pode gerar stocks em excesso ou rupturas.
- Revise periodicamente a política à medida que a procura evolui.


## BC-KB-167 — Como configuro quantidades mínimas de encomenda por produto?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Alguns fornecedores exigem encomendas mínimas; o planeador deve sugerir quantidades conforme esse requisito.

**Diagnóstico**  
As propostas de compra estão a ser criadas abaixo da quantidade mínima, gerando rejeições.

**Causa provável**  
O campo Qtde. Reposição está a zero ou com valor inferior ao mínimo exigido.

**Solução**  
Definir a quantidade mínima de encomenda na ficha de produto ou na unidade de armazenamento.

**Como proceder**  
1. Abrir a ficha de produto e ir ao separador Planeamento.
2. No campo Qtde. Reposição, introduzir a quantidade mínima que deve ser encomendada de uma só vez (por exemplo, 100 unidades).
3. Se a quantidade mínima variar por fornecedor, configurar também a página Fornecedor do Produto para cada fornecedor (campo Quantidade Mínima).

**Validação final**  
As sugestões de compra obedecem à quantidade mínima definida.

**Notas**  
- Ajustar este valor se o fornecedor alterar o requisito.
- Em conjunto com o Ponto de Encomenda, determina a frequência e o tamanho das encomendas.


## BC-KB-168 — Como configuro múltiplos de encomenda por produto?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Alguns produtos só podem ser encomendados em múltiplos de uma quantidade fixa (ex.: caixas de 12).

**Diagnóstico**  
O planeador gera quantidades que não são múltiplas e as encomendas precisam de ser corrigidas manualmente.

**Causa provável**  
O campo de múltiplo de encomenda não está definido.

**Solução**  
Preencher o campo Qtde. Múltiplo Encomenda.

**Como proceder**  
1. Abrir a ficha de produto → separador Planeamento.
2. No campo Qtde. Múltiplo Encomenda, introduzir o múltiplo pretendido (por exemplo, 12).
3. Se necessário, definir valores diferentes por unidade de armazenamento ou fornecedor nas páginas correspondentes.

**Validação final**  
As sugestões de compra são arredondadas ao múltiplo configurado.

**Notas**  
- Em conjunto com a Qtde. Reposição, determina o tamanho das encomendas.
- Se o múltiplo não for definido, o sistema sugere quantidades exactas, podendo originar quantidades fraccionadas.


## BC-KB-169 — Como aciono a não atualização das linhas de encomenda de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Durante a recepção de mercadoria, as quantidades das linhas de encomenda alteram-se automaticamente, mas pretende impedir essa actualização para manter os valores originais.

**Diagnóstico**  
O parâmetro de atualização de linhas está activo por defeito.

**Causa provável**  
Configuração geral permite actualizar linhas ao lançar a recepção, alterando quantidades e valores.

**Solução**  
Desactivar a actualização automática de linhas na encomenda de compra.

**Como proceder**  
1. Abrir a Encomenda de Compra.
2. Na faixa Processar, procurar a opção Não Actualizar Linhas (ou Lock Lines).
3. Marcar esta opção para impedir que as linhas sejam actualizadas durante a recepção ou faturação.

**Validação final**  
Ao receber ou facturar, as quantidades originais não são alteradas.

**Notas**  
- Utilize esta opção quando pretende manter controlo manual sobre a recepção e faturação.
- Recorde-se de ajustar manualmente as quantidades quando necessário.


## BC-KB-170 — Como acedo à Folha de Requisição?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador precisa de gerar sugestões de compra, mas não encontra a Folha de Requisição.

**Diagnóstico**  
A folha de requisição não está seleccionada ou não foi criada para o utilizador.

**Causa provável**  
Não existe uma folha de requisição associada ao utilizador ou desconhece como aceder.

**Solução**  
Abrir a Folha de Requisição e garantir que existe uma folha específica.

**Como proceder**  
1. Na barra de pesquisa, escrever Folhas de Requisição e seleccionar a página.
2. Verificar o Nome da Folha de Requisição; cada utilizador deve utilizar a sua própria folha.
3. Se a folha não existir, solicitar a sua criação à equipa de suporte.
4. Para mudar de folha, utilizar os três pontos e seleccionar outra folha existente.

**Validação final**  
A folha de requisição correcta está aberta e pronta para gerar sugestões.

**Notas**  
- Trabalhar numa folha própria evita conflitos com as sugestões de outros utilizadores.


## BC-KB-171 — Que parâmetros devo preencher para gerar sugestões de compra?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Ao gerar sugestões de reaprovisionamento na folha de requisição, surgem campos e opções que o utilizador desconhece.

**Diagnóstico**  
Os campos de data e previsões não foram configurados, resultando em sugestões incorrectas.

**Causa provável**  
Desconhecimento das opções de planeamento ao usar a funcionalidade Sugerir Requisição Produtos.

**Solução**  
Preencher os parâmetros de período e de utilização de previsão antes de gerar a sugestão.

**Como proceder**  
1. Na folha de requisição, clicar em Processar → Sugerir Requisição Produtos.
2. Na janela que surge, definir:
3. Data Inicial e Data Final – intervalo de tempo para o planeamento.
4. Utilizar Previsão – activar se existir previsão de vendas (BC-KB-181).
5. Excluir Previsão Anterior a – introduzir uma data para ignorar previsões antigas.
6. Respeitar Parâmetros Planeamento – marcar para considerar pontos de encomenda, quantidades mínimas/máximas.
7. Opcionalmente, aplicar filtros como Nº (produto específico) ou Nº Fornecedor.
8. Confirmar.

**Validação final**  
As linhas de sugestão geradas reflectem o período e parâmetros definidos.

**Notas**  
- Se gerar sugestões para muitos produtos, inicie com um intervalo curto para validar resultados.
- Ajuste os parâmetros sempre que existirem alterações significativas no consumo.


## BC-KB-172 — Como edito linhas de sugestão na Folha de Requisição?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após gerar a sugestão, é necessário ajustar quantidades ou condições antes de criar encomendas de compra.

**Diagnóstico**  
As linhas sugeridas podem conter quantidades desajustadas ou fornecedores errados.

**Causa provável**  
Os parâmetros iniciais de planeamento não incluíram todas as restrições ou existem excepções.

**Solução**  
Rever e editar manualmente as linhas de sugestão.

**Como proceder**  
1. Na folha de requisição, analisar cada linha gerada.
2. Eliminar linhas desnecessárias ou adicionar linhas manualmente.
3. Verificar e ajustar os campos Nº (produto), Mensagem de Acção (Novo, Alterar Qtde., Reagendar), Código Localização, Quantidade Original e Quantidade.
4. Seleccionar fornecedores alternativos, se necessário, ajustando o campo Nº Fornecedor (ver BC-KB-174).
5. Ajustar a Data Vencimento se o planeamento assim o exigir.

**Validação final**  
As linhas de sugestão editadas correspondem às quantidades e fornecedores correctos.

**Notas**  
- Aceitar ou alterar a Mensagem de Acção determina se a linha será convertida em encomenda.
- Registe notas ou justificação se tiver de excluir uma sugestão.


## BC-KB-173 — Como verifico a origem de uma sugestão de compra?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Quer identificar se a sugestão de compra provém de uma encomenda de venda, previsão ou ponto de encomenda.

**Diagnóstico**  
Não há clareza sobre a origem da sugestão na folha de requisição.

**Causa provável**  
O utilizador não utilizou a funcionalidade de rastreio de encomendas.

**Solução**  
Usar a opção Rastreio Encomenda para ver a cadeia de origem.

**Como proceder**  
1. Seleccionar a linha de sugestão na folha de requisição.
2. Clicar em Linha → Rastreio Encomenda.
3. Analisar a janela que mostra se a sugestão deriva de uma encomenda de venda, previsão de vendas, stock de segurança ou outros factores.
4. Fechar a janela após a análise.

**Validação final**  
A origem da sugestão é claramente identificada e documentada.

**Notas**  
- Saber a origem ajuda a priorizar e a justificar a aceitação ou rejeição da sugestão.
- Use esta função antes de questionar o planeador sobre quantidades inesperadas.


## BC-KB-174 — Como seleciono fornecedores alternativos de um produto?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Pretende trocar o fornecedor sugerido por outro configurado na ficha de produto.

**Diagnóstico**  
Na folha de requisição, a linha apresenta apenas um fornecedor padrão.

**Causa provável**  
Não foi consultada a lista de fornecedores alternativos associados ao produto.

**Solução**  
Seleccionar o fornecedor alternativo na linha de sugestão.

**Como proceder**  
1. Na folha de requisição, posicionar-se na linha desejada.
2. Clicar no campo Nº Fornecedor e abrir a lista.
3. Seleccionar um dos fornecedores alternativos configurados para o produto.
4. Verificar se as restantes condições (quantidade, data) continuam adequadas.

**Validação final**  
A linha reflecte o fornecedor alternativo escolhido.

**Notas**  
- Os fornecedores alternativos devem ser configurados previamente na ficha do produto.
- Comparar preços e prazos de entrega antes de seleccionar um fornecedor alternativo.


## BC-KB-175 — Que ações posso executar a partir da Folha de Requisição?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após rever as linhas de sugestão, o utilizador não sabe que ações estão disponíveis para processar as linhas.

**Diagnóstico**  
As linhas permanecem no estado “aberto” e não geram encomendas de compra.

**Causa provável**  
O utilizador não executou as mensagens de acção ou desconhece as opções.

**Solução**  
Utilizar a funcionalidade de Executar Mensagem de Acção para processar as linhas e gerar encomendas.

**Como proceder**  
1. Na folha de requisição, depois de editar as linhas, clicar em Processar → Executar Mensagem de Acção.
2. O sistema executa cada linha conforme a sua Mensagem de Acção:
3. Novo – cria uma nova encomenda de compra.
4. Alterar Quantidade – ajusta uma encomenda existente.
5. Reagendar – altera datas.
6. Reagendar & Mudar Qtde. – altera datas e quantidades.
7. Cancelar – elimina a sugestão.
8. Verificar as encomendas criadas ou actualizadas.

**Validação final**  
As encomendas são geradas e as linhas de requisição são processadas.

**Notas**  
- Certifique-se de que os dados estão correctos antes de executar; o processo é automático.
- Após execução, as linhas desaparecem da folha de requisição.


## BC-KB-176 — Como funciona a validação do valor mínimo de compra por encomenda?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Deseja garantir que uma encomenda de compra atinge um valor mínimo exigido pelo fornecedor.

**Diagnóstico**  
Ao libertar a encomenda, surge um aviso de que o valor total está abaixo do mínimo.

**Causa provável**  
O valor mínimo de compra está definido na ficha do fornecedor e a encomenda não o cumpre.

**Solução**  
Configurar o valor mínimo na ficha do fornecedor e ajustar a encomenda para satisfazer esse mínimo.

**Como proceder**  
1. Na ficha do fornecedor, definir o Valor Mínimo de Encomenda (campo que pode chamar-se Valor Mínimo).
2. Criar ou editar a Encomenda de Compra com as linhas necessárias.
3. Ao libertar a encomenda, o sistema compara o valor total com o mínimo.
4. Se o valor for inferior, adicionar produtos ou aumentar quantidades até ultrapassar o mínimo.
5. Libertar novamente.

**Validação final**  
A encomenda cumpre o valor mínimo e o sistema não apresenta alertas.

**Notas**  
- Esta validação ajuda a cumprir acordos comerciais e a economizar custos de transporte.
- Ajuste o valor mínimo na ficha do fornecedor sempre que necessário.


## BC-KB-177 — Em que momento é validado o valor mínimo de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É preciso saber quando o sistema verifica se a encomenda de compra atinge o valor mínimo.

**Diagnóstico**  
O utilizador não tem certeza se a validação ocorre na criação, ao libertar ou ao facturar.

**Causa provável**  
Falta de clarificação sobre o ponto exacto da verificação.

**Solução**  
Entender que o valor mínimo é validado no momento de libertação da encomenda.

**Como proceder**  
1. Criar ou editar a encomenda de compra normalmente.
2. No momento de clicar em Libertar, o sistema calcula o valor total e verifica se cumpre o Valor Mínimo definido no fornecedor.
3. Se não cumprir, é apresentado um aviso e a encomenda não é libertada.
4. Ajustar as linhas conforme necessário e tentar libertar novamente.

**Validação final**  
O alerta surge apenas no acto de libertação; após corrigir, a encomenda é libertada.

**Notas**  
- Antes de libertar, pode consultar o total da encomenda para antever se cumpre o mínimo.
- A validação não ocorre no registo da recepção nem da factura.


## BC-KB-178 — Como registo compras a farmácias no Business Central?
**Categoria:** Compras / Gestão de Farmácia  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa fornece produtos a farmácias e pretende registar essas compras (de farmácias para a empresa) de forma correcta no Business Central.

**Diagnóstico**  
Não existe um processo documentado específico para compras a farmácias, o que gera dúvidas na criação das encomendas.

**Causa provável**  
As farmácias são tratadas como clientes e fornecedores simultaneamente, podendo confundir o utilizador sobre o módulo a utilizar.

**Solução**  
Tratar a farmácia como fornecedor quando a empresa lhe compra produtos e utilizar o fluxo normal de encomenda de compra, atribuindo a categoria correcta para rastreio.

**Como proceder**  
1. Criar uma ficha de Fornecedor para cada farmácia a quem a empresa compra produtos (se já existir como cliente, adicionar a ficha de fornecedor com código idêntico).
2. Na ficha do fornecedor, atribuir a categoria Farmácia ou utilizar a dimensão correspondente para segmentação.
3. Criar uma Encomenda de Compra e seleccionar o fornecedor (farmácia).
4. Inserir as linhas de produtos a comprar.
5. Processar a encomenda seguindo o fluxo normal de compras (libertar, receber, registar factura).

**Validação final**  
A compra à farmácia está registada como compra e aparece nos relatórios de fornecedores.

**Notas**  
- Se a mesma entidade vender produtos à farmácia, mantenha as fichas de cliente e fornecedor separadas.
- Use dimensões ou categorias para distinguir compras a farmácias de outros fornecedores.


## BC-KB-179 — Onde devo aceder para criar uma nova compra à farmácia?
**Categoria:** Compras / Gestão de Farmácia  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Necessita de saber em que menu iniciar o processo de compra a uma farmácia.

**Diagnóstico**  
O utilizador não localiza a opção correcta no interface.

**Causa provável**  
Os menus de compras contêm várias opções (encomendas, facturas, requisições) e há incerteza sobre a escolha.

**Solução**  
Aceder ao menu Encomendas de Compra e seleccionar a farmácia como fornecedor.

**Como proceder**  
1. No menu principal ou no campo de pesquisa, escrever Encomendas de Compra e abrir a página.
2. Clicar em Novo para criar uma nova encomenda.
3. Seleccionar a farmácia como fornecedor (ver BC-KB-178).
4. Inserir as linhas de produtos e seguir o fluxo normal de compra.

**Validação final**  
Uma nova encomenda de compra à farmácia é criada correctamente.

**Notas**  
- As compras a farmácias não diferem das restantes compras em termos de processo; a diferença está na categoria do fornecedor.
- Considere criar uma folha de aprovação específica se existir controlo adicional.


## BC-KB-180 — Como acedo à previsão de necessidades?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Pretende consultar a previsão de vendas/consumo para planear compras futuras.

**Diagnóstico**  
Não sabe onde encontrar a previsão de necessidades registada no sistema.

**Causa provável**  
Desconhecimento da página de Previsão de Necessidades (ou equivalente).

**Solução**  
Utilizar a página de previsão para visualizar e gerir dados de previsão.

**Como proceder**  
1. No campo de pesquisa, escrever Previsão de Necessidades ou Previsão de Vendas.
2. Abrir a página correspondente (pode chamar-se Previsão de Demanda ou Previsão de Necessidades).
3. Seleccionar o Período e a Unidade de Tempo (mensal, semanal, diário) para ver os dados.
4. Filtrar por Produto, Localização ou Fornecedor conforme necessário.

**Validação final**  
A previsão de necessidades é apresentada com valores por período.

**Notas**  
- A previsão deve ser carregada previamente (ver BC-KB-181).
- Use estes dados em conjunto com o planeador para ajustar reaprovisionamento.


## BC-KB-181 — Como insiro ou edito dados de previsão de necessidades?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário introduzir ou actualizar a previsão de consumo para determinados produtos.

**Diagnóstico**  
Os valores de previsão estão em branco ou desactualizados.

**Causa provável**  
As previsões não foram introduzidas manualmente nem importadas de ficheiros externos.

**Solução**  
Inserir ou editar valores de previsão em cada período na página Previsão de Necessidades.

**Como proceder**  
1. Aceder à página Previsão de Necessidades (BC-KB-180).
2. Seleccionar o produto e período pretendido.
3. Introduzir a quantidade prevista em cada célula para os períodos futuros (ex.: 100 unidades para Maio 2026).
4. Repetir para todos os produtos e períodos relevantes.
5. Alternativamente, utilizar a opção Importar de Excel para carregar previsões a partir de um ficheiro com as colunas de produto, período e quantidade.

**Validação final**  
Os valores de previsão estão registados na base de dados e podem ser utilizados pelo planeador.

**Notas**  
- Actualize as previsões regularmente com base em dados de vendas e tendências de mercado.
- A previsão afecta as sugestões de compra quando a opção Utilizar Previsão é activada (BC-KB-171).


## BC-KB-182 — Para que serve o repositório SGNCL de previsão de necessidades?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Existe um repositório externo (SGNCL) que armazena previsões de necessidades, mas o utilizador não sabe a sua função no processo.

**Diagnóstico**  
O planeador ou administrador menciona o SGNCL mas o utilizador não o utiliza directamente.

**Causa provável**  
O SGNCL é uma base de dados central gerida por outra equipa e não faz parte da interface diária.

**Solução**  
Compreender que o SGNCL é utilizado para centralizar e partilhar previsões de necessidades entre parceiros, sendo carregado e consultado por scripts ou integrações.

**Como proceder**  
1. Reconhecer que o Repositório SGNCL não é uma página interactiva no Business Central.
2. A previsão de necessidades é exportada para o SGNCL por equipas de planeamento ou TI; os dados são depois lidos pelos sistemas centrais de logística.
3. Se for necessário actualizar o repositório, contactar a equipa responsável ou seguir os procedimentos de exportação definidos internamente.

**Validação final**  
Os dados de previsão são partilhados com o repositório e utilizados para planear necessidades a nível global.

**Notas**  
- Utilizadores comuns não precisam de interagir directamente com o SGNCL.
- As políticas de actualização são definidas pela direcção de logística.


## BC-KB-183 — Como crio uma lista de preços de compra?
**Categoria:** Compras / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa quer registar preços de compra específicos por fornecedor, produto e quantidade mínima.

**Diagnóstico**  
Não existe uma lista de preços de compra configurada ou os preços estão a ser inseridos manualmente em cada linha de encomenda.

**Causa provável**  
Falta de utilização da funcionalidade de listas de preços de compra do Business Central.

**Solução**  
Criar uma lista de preços de compra e inserir linhas com os preços acordados.

**Como proceder**  
1. No campo de pesquisa, escrever Listas Preços de Compra (ou Preço Compra).
2. Clicar em Novo para criar uma nova lista.
3. Preencher os campos: Descrição, Fornecedor, Moeda (se aplicável), Data Início e Data Fim.
4. No separador Linhas, inserir cada produto com os campos: Nº Produto, Unidade de Medida, Quantidade Mínima, Preço e, se necessário, Desconto.
5. Por fim, clicar em Activar para que a lista fique disponível; apenas listas activas são consideradas nas encomendas.

**Validação final**  
A lista de preços de compra está activa e os preços são automaticamente sugeridos nas encomendas.

**Notas**  
- Actualize ou expire a lista quando os preços mudarem.
- Para importar muitas linhas, utilize a função de importação de Excel com colunas correspondentes.


## BC-KB-184 — Como edito uma lista de preços de compra?
**Categoria:** Compras / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário actualizar uma lista de preços de compra existente, alterando datas, produtos ou valores.

**Diagnóstico**  
A lista de preços está activa ou pendente e contém linhas desactualizadas ou em falta.

**Causa provável**  
Revisão de contratos com fornecedores ou actualização de custos, exigindo correcções nas listas de preços.

**Solução**  
Abrir a lista de preços de compra, editar cabeçalho e linhas, reactivar se necessário.

**Como proceder**  
1. Pesquisar por Listas de Preços de Compra e abrir a lista a editar.
2. Se a lista estiver activa, seleccionar Acções → Desactivar para permitir alterações.
3. No cabeçalho, actualizar campos como Descrição, Data Início, Data Fim ou Fornecedor, se aplicável.
4. No separador Linhas, navegar pelas linhas existentes e alterar os campos Quantidade Mínima, Preço, Desconto ou Unidade de Medida conforme o novo acordo.
5. Para adicionar novos produtos, inserir uma linha em branco e preencher o Nº Produto e os restantes campos; para remover produtos, seleccionar a linha e clicar em Eliminar Linha.
6. Verificar se todas as linhas têm preços válidos e que as datas no cabeçalho cobrem o período pretendido.
7. Activar novamente a lista clicando em Activar; a lista fica disponível para ser usada em encomendas.

**Validação final**  
A lista de preços apresenta o estado Activa e as linhas reflectem os valores actualizados.

**Notas**  
- Apenas listas desactivadas podem ser editadas.
- As listas activas com datas expiradas devem ser duplicadas para criar uma nova versão.


## BC-KB-185 — Como activo uma lista de preços de compra?
**Categoria:** Compras / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após criar ou editar uma lista de preços de compra, é necessário que fique disponível para utilização nas encomendas.

**Diagnóstico**  
A lista encontra-se em estado Aberta ou Desactivada, não sendo usada no cálculo automático de preços.

**Causa provável**  
A lista foi recentemente criada ou alterada e ainda não foi activada.

**Solução**  
Utilizar a acção Activar para mudar o estado da lista para Activa.

**Como proceder**  
1. Pesquisar por Listas de Preços de Compra e seleccionar a lista pretendida.
2. Verificar se o campo Estado está como Aberta ou Desactivada.
3. Rever as linhas e confirma que todas as informações estão correctas.
4. Clicar em Activar no separador superior ou em Acções → Activar.
5. Confirmar a activação quando solicitado; o estado muda para Activa.
6. Caso surja alguma mensagem de erro, corrigir dados obrigatórios em falta e repetir a activação.

**Validação final**  
O campo Estado da lista apresenta Activa e a lista é considerada na determinação de preços.

**Notas**  
- As listas activadas ficam bloqueadas para edição; para efectuar alterações é necessário desactivar.
- Mantenha apenas uma lista activa por fornecedor e período para evitar conflitos.


## BC-KB-186 — Como inactivo uma lista de preços de compra?
**Categoria:** Compras / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Uma lista de preços de compra deixa de ser válida porque expirou ou foi substituída por uma nova lista.

**Diagnóstico**  
A lista ainda aparece como Activa e está a ser aplicada em encomendas apesar de estar desactualizada.

**Causa provável**  
Esquecimento em alterar o estado da lista quando termina o acordo com o fornecedor.

**Solução**  
Desactivar a lista de preços de compra para que deixe de ser considerada e/ou expirar o período de validade.

**Como proceder**  
1. Pesquisar por Listas de Preços de Compra e seleccionar a lista a inactivar.
2. Confirmar que existe uma nova lista activa ou que já não é necessário aplicar a lista actual.
3. Clicar em Desactivar ou, se o menu diferir, ir a Acções → Desactivar.
4. Confirmar a desactivação quando solicitado; o estado passa a Desactivada.
5. Em alternativa, ajustar os campos Data Fim para uma data anterior ao dia actual para que a lista expire automaticamente.

**Validação final**  
O campo Estado da lista apresenta Desactivada e os preços deixam de ser sugeridos.

**Notas**  
- Manter listas antigas desactivadas ajuda a preservar histórico sem afectar o cálculo de preços.
- É recomendado expirar listas usando datas para manter o registo temporal.


## BC-KB-187 — Como configuro preços por contacto de fornecedor?
**Categoria:** Compras / Preços  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Determinado fornecedor tem preços específicos para diferentes contactos ou departamentos e é necessário registá-los.

**Diagnóstico**  
Os preços registados na lista de preços são globais ao fornecedor e não distinguem contactos, o que pode originar preços errados nas encomendas.

**Causa provável**  
Falta de configuração dos campos Contacto Fornecedor nas linhas da lista de preços de compra.

**Solução**  
Preencher o campo Contacto Fornecedor em cada linha da lista de preços para associar o preço ao contacto correcto.

**Como proceder**  
1. Abrir a lista de preços de compra que pretende configurar.
2. Na zona de linhas, personalizar a vista para mostrar a coluna Contacto Fornecedor (utilize Mostrar Mais Colunas se necessário).
3. Para cada produto, seleccionar ou introduzir o nome ou número do contacto correspondente ao departamento do fornecedor.
4. Preencher o preço, quantidade mínima e outros campos para esse contacto específico.
5. Repetir o processo para cada contacto que tenha preços diferentes.

**Validação final**  
Ao criar uma encomenda de compra e seleccionar o mesmo contacto do fornecedor, o preço adequado é automaticamente sugerido.

**Notas**  
- Certifique-se de que os contactos estão previamente criados na ficha do fornecedor.
- Se não for indicado contacto na encomenda, o sistema aplica o preço sem contacto ou o preço genérico do fornecedor.


## BC-KB-188 — Como configuro fornecedores alternativos do produto?
**Categoria:** Compras / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Os produtos podem ser fornecidos por mais do que um fornecedor e é necessário registar fornecedores alternativos com prazos de entrega, quantidades mínimas e preços.

**Diagnóstico**  
A ficha do produto apenas contém o fornecedor principal e não estão definidos fornecedores alternativos. O planeamento ou a folha de requisão não sugere alternativas.

**Causa provável**  
O campo Fornecedores Alternativos não foi preenchido na ficha do produto.

**Solução**  
Configurar fornecedores alternativos na ficha do produto, definindo prazos de entrega, quantidades mínimas e preços unitários.

**Como proceder**  
1. Aceder à ficha do produto.
2. Ir a Relacionado → Planeamento → Fornecedores Alternativos.
3. Clicar em Novo para adicionar um fornecedor alternativo.
4. Preencher os campos Nº Fornecedor, Tempo de Aprovisionamento, Quantidade Mínima, Preço Unitário e outros campos relevantes.
5. Repetir para todos os fornecedores alternativos aplicáveis.

**Validação final**  
Na Folha de Requisição, as sugestões de compra incluem fornecedores alternativos quando o fornecedor principal não está disponível ou quando as condições são mais vantajosas.

**Notas**  
- Os fornecedores alternativos não substituem automaticamente o fornecedor principal; dependem das configurações de planeamento e quantidades.
- Revise periodicamente prazos e preços para manter dados actualizados.


## BC-KB-189 — Como peço aprovação de uma encomenda de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário submeter uma encomenda de compra à aprovação de superiores antes de ser enviada ao fornecedor.

**Diagnóstico**  
A encomenda está em estado Aberta e contém linhas completas, mas ainda não foi enviada para aprovação.

**Causa provável**  
O utilizador não iniciou o fluxo de aprovação ou desconhece o procedimento.

**Solução**  
Enviar a encomenda para aprovação através da funcionalidade de workflows de aprovação.

**Como proceder**  
1. Aceder à Encomenda de Compra que pretende submeter.
2. Validar que todos os campos obrigatórios no cabeçalho (Fornecedor, Datas, Localização) e nas linhas (Produto, Quantidade, Preço) estão correctos.
3. No separador Pedido, seleccionar Enviar Pedido de Aprovação (ou Solicitar Aprovação).
4. Confirmar o envio quando for apresentado o diálogo.
5. O estado da encomenda muda para Pendente de Aprovação; a encomenda fica bloqueada para edições até ser aprovada ou rejeitada.

**Validação final**  
A encomenda aparece em Solicitações para Aprovar com estado Pendente, indicando que a aprovação está em curso.

**Notas**  
- Se for necessário alterar a encomenda após enviar o pedido, esta deve ser reaberta ou rejeitada pelo aprovador.
- Os fluxos de aprovação variam conforme as permissões e valores limite definidos pela organização.


## BC-KB-190 — Onde verifico o estado de aprovação de uma encomenda de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após enviar uma encomenda de compra para aprovação, o utilizador pretende acompanhar o estado e saber se já foi aprovada ou rejeitada.

**Diagnóstico**  
Não é claro onde consultar a lista de solicitações pendentes ou o histórico de aprovações.

**Causa provável**  
Desconhecimento da página Solicitações para Aprovar ou dos filtros necessários.

**Solução**  
Utilizar a página Solicitações para Aprovar ou consultar o campo Estado de Aprovação directamente na encomenda.

**Como proceder**  
1. Pesquisar por Solicitações para Aprovar e abrir a página.
2. Na lista, filtrar pelo campo Tipo de Documento para Encomenda de Compra.
3. Localizar a encomenda pelo número ou fornecedor e observar a coluna Estado (Pendente, Aprovado, Rejeitado).
4. Para mais detalhes, abrir o registo e consultar as entradas de workflow.
5. Em alternativa, abrir a própria encomenda de compra: o cabeçalho exibe o campo Estado de Aprovação com o valor actual.

**Validação final**  
O utilizador consegue ver se a encomenda está pendente, aprovada ou rejeitada e, no caso de aprovação, consegue prosseguir para o envio ao fornecedor.

**Notas**  
- Os registos de aprovação apresentam detalhes como data, hora e comentário de aprovação.
- As notificações por email podem ser configuradas para informar o requisitante automaticamente.


## BC-KB-191 — Como aprovo uma encomenda de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Um colaborador com permissões de aprovador precisa aprovar ou rejeitar uma encomenda de compra pendente.

**Diagnóstico**  
A encomenda encontra-se em estado Pendente de Aprovação e aguarda a decisão do aprovador.

**Causa provável**  
As regras de aprovação exigem intervenção manual para valores acima de determinados limites.

**Solução**  
Aceder às solicitações de aprovação, analisar a encomenda e selecionar Aprovar ou Rejeitar.

**Como proceder**  
1. Pesquisar por Solicitações para Aprovar e aplicar o filtro para encomendas de compra.
2. Seleccionar a linha da encomenda que pretende aprovar.
3. Clicar em Aprovar para autorizar o pedido ou em Rejeitar para devolvê-lo ao requisitante.
4. Se necessário, adicionar um comentário ou motivo de rejeição.
5. Após aprovar, o estado muda para Aprovado e a encomenda desbloqueia; o requisitante pode continuar com o processo (envio, recepção, etc.).

**Validação final**  
A encomenda de compra fica com estado Aprovado e pode ser registada ou enviada ao fornecedor.

**Notas**  
- Os aprovadores devem validar preços, quantidades e impacto orçamental antes de aprovar.
- Após aprovação, quaisquer alterações na encomenda podem exigir nova aprovação.


## BC-KB-192 — Como fecho encomendas de compra completamente faturadas?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Algumas encomendas de compra já foram completamente recebidas e faturadas, mas continuam visíveis como Aberto e constam nos relatórios de compromissos.

**Diagnóstico**  
O sistema mantém encomendas abertas até que sejam manualmente encerradas, mesmo quando não existem mais quantidades por receber ou faturar.

**Causa provável**  
Falta de conhecimento sobre a funcionalidade Fechar Encomenda ou Encerrar.

**Solução**  
Fechar manualmente a encomenda de compra após verificar que todas as quantidades foram recebidas e faturadas.

**Como proceder**  
1. Abrir a Encomenda de Compra que pretende encerrar.
2. Verificar que as colunas Qtd. Recebida e Qtd. Faturada coincidem com a Qtd. Encomendada em todas as linhas.
3. No separador Processo, clicar em Fechar Encomenda (ou Fechar conforme versão).
4. Confirmar o fecho; o estado da encomenda muda para Fechada.

**Validação final**  
A encomenda desaparece da lista de abertas e fica marcada como Fechada, não contribuindo para relatórios de compromissos.

**Notas**  
- Apenas feche encomendas completamente recebidas e faturadas; caso contrário surgirão discrepâncias.
- O fecho não afecta o histórico de movimentação nem os documentos registados.


## BC-KB-193 — Como atribuo motivos de não fornecimento numa encomenda de compra?
**Categoria:** Compras / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após recepção de uma encomenda de compra, algumas quantidades não foram entregues e é necessário registar o motivo de não fornecimento para análise.

**Diagnóstico**  
Existem linhas da encomenda parcialmente recebidas ou com entrega zero e o campo Motivo Não Fornecimento está em branco.

**Causa provável**  
Falta de registo do motivo por parte do operador ou ausência de parâmetros para recolher a informação.

**Solução**  
Associar um motivo de não fornecimento à linha da encomenda de compra para posterior tratamento e estatísticas.

**Como proceder**  
1. Aceder à Encomenda de Compra depois da recepção parcial.
2. Seleccionar a linha afectada e expandir para ver os detalhes.
3. Adicionar a coluna Motivo Não Fornecimento à vista, se não estiver visível (utilizar Escolher Colunas).
4. Escolher o motivo adequado na lista (ex.: Falta de Stock, Produto Descontinuado, Erro de Planeamento).

**Validação final**  
O campo Motivo Não Fornecimento fica preenchido na linha e pode ser utilizado para relatórios e análises de fornecedores.

**Notas**  
- Definir previamente a lista de motivos na configuração para garantir consistência.
- Este campo não altera o valor recepcionado mas auxilia no acompanhamento de performance do fornecedor.


## BC-KB-194 — Como valido encomendas de venda?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Antes de registar ou enviar uma encomenda de venda, o utilizador pretende garantir que todos os dados estão correctos e que a encomenda passa nas validações do sistema.

**Diagnóstico**  
A encomenda contém linhas de produtos e dados do cliente, mas podem existir campos incompletos ou erros de crédito, preços e disponibilidades.

**Causa provável**  
Falta de revisão dos campos obrigatórios ou ausência de verificação prévia de crédito e stock.

**Solução**  
Utilizar a funcionalidade de Validar encomendas de venda para identificar e corrigir erros antes de registar.

**Como proceder**  
1. Aceder à Encomenda de Venda que pretende validar.
2. No separador Processo, clicar em Validar (ou Verificar Documento).
3. O sistema verifica: existência de produto, disponibilidade em stock, restrições de crédito do cliente, preços e descontos, e campos obrigatórios.
4. Se existirem erros ou avisos, o sistema apresenta mensagens; ler cada mensagem, corrigir os campos indicados e executar novamente a validação.
5. Quando não existirem mensagens de erro, a encomenda está pronta para registo ou envio.

**Validação final**  
A encomenda de venda é validada sem erros e está apta a ser registada ou enviada.

**Notas**  
- A validação não regista a encomenda; serve apenas para detecção precoce de problemas.
- Correções de crédito podem exigir intervenção do departamento financeiro.


## BC-KB-195 — Como registo motivos de não fornecimento em vendas?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Em determinadas vendas, as quantidades encomendadas não são totalmente fornecidas e é necessário registar o motivo para análise e comunicação ao cliente.

**Diagnóstico**  
Existem linhas de encomenda de venda com quantidades por entregar, mas o campo Motivo Não Fornecimento não está preenchido.

**Causa provável**  
O utilizador não acrescentou o motivo ou desconhece a coluna correspondente nas linhas da encomenda.

**Solução**  
Preencher o campo Motivo Não Fornecimento nas linhas de encomenda de venda afectadas.

**Como proceder**  
1. Abrir a Encomenda de Venda com entregas parciais.
2. Seleccionar a linha onde faltou fornecer o produto.
3. Personalizar a vista para mostrar a coluna Motivo Não Fornecimento.
4. Seleccionar o motivo adequado (ex.: Falta de Stock, Produto Descontinuado).
5. Comunicar o motivo ao cliente através de relatório ou mensagem, se necessário.

**Validação final**  
O campo Motivo Não Fornecimento está preenchido nas linhas com falta de entrega.

**Notas**  
- A lista de motivos é comum às compras e vendas; configure-a para uniformizar relatórios.
- Os motivos registados alimentam indicadores de serviço ao cliente.


## BC-KB-196 — Como faço faturação antecipada?
**Categoria:** Vendas / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário emitir uma fatura de pré-pagamento ou faturação antecipada antes da entrega dos produtos, de acordo com o contrato com o cliente.

**Diagnóstico**  
Foi criada uma encomenda de venda com percentagem ou montante de pré-pagamento definido, mas ainda não foi emitida a fatura de adiantamento.

**Causa provável**  
Desconhecimento do processo de emissão da fatura de pré-pagamento no Business Central.

**Solução**  
Utilizar a funcionalidade Faturação Antecipada para gerar a fatura de pré-pagamento baseada numa encomenda.

**Como proceder**  
1. Criar ou abrir uma Encomenda de Venda.
2. No separador Faturação, preencher o campo Percentagem Pré-pagamento ou definir uma linha com Tipo de Linha = Pré-pagamento e o valor pretendido.
3. Confirmar que o cliente e o produto estão configurados para pré-pagamentos.
4. No separador Processo, clicar em Fatura Antecipada (ou Fatura de Pré-pagamento).
5. Seleccionar Imprimir Fatura ou Enviar por Email se necessário.
6. Registar a fatura; o sistema cria um documento de venda com tipo Fatura de Pré-pagamento.
7. Após receber o pagamento, registar o recibo de pré-pagamento nos movimentos de clientes.

**Validação final**  
A fatura de pré-pagamento aparece no histórico de vendas e o saldo do cliente reflecte o adiantamento recebido.

**Notas**  
- As faturas de pré-pagamento são reconciliadas automaticamente com a fatura final no registo da encomenda.
- Verifique a legislação fiscal sobre a necessidade de notas de crédito se o valor final for menor que o adiantamento.


## BC-KB-197 — Como consulto o saldo de faturação antecipada?
**Categoria:** Vendas / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador necessita saber quanto foi faturado antecipadamente e qual o saldo ainda por faturar na encomenda ou por cliente.

**Diagnóstico**  
Existem faturas de pré-pagamento registadas, mas não é claro qual o montante total de adiantamentos por encomenda ou cliente.

**Causa provável**  
Falta de consulta aos movimentos de pré-pagamento ou desconhecimento do relatório adequado.

**Solução**  
Utilizar a página Movimentos de Pré-pagamento ou relatórios de faturação para analisar o saldo de pré-pagamento.

**Como proceder**  
1. Na Encomenda de Venda, seleccionar Relatórios → Pré-pagamentos para ver o detalhe de adiantamentos aplicados e saldo por encomenda.
2. Em alternativa, pesquisar por Movimentos Clientes e aplicar filtro em Tipo Documento = Fatura de Pré-pagamento.
3. Consultar os campos Montante Pago e Saldo para cada documento.
4. Para visão global, utilizar o relatório Pré-pagamentos Pendentes que lista clientes com saldos de pré-pagamento.
5. Exportar para Excel para análise adicional, se necessário.

**Validação final**  
O utilizador identifica facilmente o valor total adiantado e o saldo por faturar.

**Notas**  
- Recomenda-se reconciliar pré-pagamentos com a fatura final assim que os serviços ou produtos são fornecidos.
- Saldos de pré-pagamento impactam a conta corrente do cliente.


## BC-KB-198 — Como anulo faturação antecipada?
**Categoria:** Vendas / Faturação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Foi emitida uma fatura de pré-pagamento errada ou cancelada e precisa ser anulada para efeitos fiscais e de contabilidade.

**Diagnóstico**  
A fatura de pré-pagamento está registada e afecta os saldos de cliente; é necessário revertê-la.

**Causa provável**  
Erro na emissão do documento de pré-pagamento ou cancelamento do contrato antes da entrega.

**Solução**  
Emitir uma Nota de Crédito de Pré-pagamento para anular a fatura antecipada e reconciliar com o cliente.

**Como proceder**  
1. Pesquisar por Movimentos Clientes ou abrir a fatura de pré-pagamento em questão.
2. Seleccionar Funções → Criar Nota de Crédito Corretiva (ou Anular) sobre a fatura de pré-pagamento.
3. O sistema cria uma nota de crédito de pré-pagamento com montante igual à fatura.
4. Registar a nota de crédito.
5. Aplicar a nota de crédito à fatura de pré-pagamento nos movimentos de cliente para fechar o saldo.
6. Confirmar que o saldo da fatura e a conta do cliente foram ajustados.

**Validação final**  
A fatura de pré-pagamento deixa de impactar a conta corrente e o saldo do cliente reflecte a anulação.

**Notas**  
- A anulação de pré-pagamentos pode ter implicações fiscais; validar com a contabilidade.
- Após anular, deve ser criada nova fatura de pré-pagamento se houver novo acordo.


## BC-KB-199 — Como funciona a previsão de vendas?
**Categoria:** Vendas / Planeamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa necessita prever vendas futuras para planear produção e inventário.

**Diagnóstico**  
Não existe um registo sistemático de previsões ou a funcionalidade não é utilizada.

**Causa provável**  
Desconhecimento da funcionalidade de Previsão de Vendas ou Previsão de Necessidades no Business Central.

**Solução**  
Utilizar as páginas de previsão de vendas para inserir volumes esperados por período e analisar tendências.

**Como proceder**  
1. Pesquisar por Previsão de Vendas e abrir a página.
2. Definir a dimensão temporal (mensal, trimestral) e, se aplicável, as dimensões analíticas (cliente, produto, localização).
3. Para cada período, inserir as quantidades previstas de venda para cada produto ou grupo de produtos.
4. Utilizar a função Cópia Previsão para duplicar previsões de períodos anteriores e ajustar conforme necessário.
5. Validar as previsões comparando com dados históricos através do relatório de Desvio de Previsão.
6. Integrar a previsão no planeamento de produção ou aprovisionamento, usando a Folha de Requisição ou MRP.

**Validação final**  
As quantidades previstas ficam registadas e influenciam os cálculos de planeamento para produção e compras.

**Notas**  
- As previsões devem ser revistas regularmente para ajustar a procura real.
- Podem ser exportadas/importadas via Excel para facilitar ajustes.


## BC-KB-200 — Como corrijo uma fatura de venda registada?
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Foi registada uma fatura de venda com erros (ex.: produto, quantidade, preço) e é necessário corrigi-la sem anular totalmente a transação.

**Diagnóstico**  
A fatura de venda já está registada, mas ainda não foi comunicada às autoridades fiscais ou não tem movimentos de pagamento associados.

**Causa provável**  
Erro no preenchimento inicial ou alterações acordadas com o cliente após a emissão.

**Solução**  
Utilizar a funcionalidade Corrigir Fatura de Venda para gerar automaticamente uma nota de crédito e uma nova fatura correcta.

**Como proceder**  
1. Aceder à fatura de venda registada (via Faturas de Venda Registadas).
2. No separador Processo, clicar em Corrigir ou Criar Nota de Crédito Corretiva.
3. O sistema cria automaticamente uma nota de crédito para anular a fatura original e uma nova encomenda de venda com os mesmos dados.
4. Rever a nova encomenda: corrigir campos como produto, quantidade ou preço.
5. Registar a nova encomenda para gerar a fatura correcta.
6. Aplicar a nota de crédito à fatura original nos movimentos de clientes para fechar o saldo.

**Validação final**  
A fatura original fica anulada, a nova fatura reflecte os dados correctos e o saldo do cliente está ajustado.

**Notas**  
- A correcção apenas é permitida se a fatura ainda não foi exportada para a Autoridade Tributária ou utilizada em comunicação SAF-T.
- Caso a fatura já tenha sido comunicada, deve emitir-se uma nota de crédito em separado e nova fatura manual.


## BC-KB-201 — Em que situações posso corrigir uma fatura de venda registada?
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador pretende saber quando pode utilizar a funcionalidade de correcção em vez de notas de crédito independentes.

**Diagnóstico**  
Há dúvidas quanto às restrições legais e de sistema para corrigir faturas registadas.

**Causa provável**  
Confusão entre correcção imediata (antes da comunicação fiscal) e procedimentos de anulação após comunicação.

**Solução**  
Aplicar a correcção apenas se a fatura não foi comunicada ao SAF-T/AT e não possui pagamentos ou notas de crédito associadas.

**Como proceder**  
1. Verificar se a fatura foi comunicada à Autoridade Tributária (consultar o campo Status Comunicação na fatura).
2. Confirmar se não existem pagamentos registados ou notas de crédito já aplicadas.
3. Se ambos os requisitos forem satisfeitos, proceder à correcção conforme descrito na FAQ anterior.
4. Caso contrário, emitir uma nota de crédito separada para anular a fatura e criar uma nova fatura manual.

**Validação final**  
A correcção é efetuada apenas em faturas elegíveis e respeita as obrigações legais.

**Notas**  
- Consulte a contabilidade ou departamento fiscal para confirmar a possibilidade de correcção.
- Em alguns casos, pode ser necessário comunicar ambas as notas de crédito e faturas ao SAF-T.


## BC-KB-202 — Como adjudico uma proposta de venda?
**Categoria:** Vendas / Propostas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Após envio de uma proposta de venda (cotação) a um cliente, a empresa recebe aceitação parcial ou total e precisa converter a proposta numa encomenda.

**Diagnóstico**  
A proposta foi criada e enviada a partir de uma oportunidade ou directamente, mas ainda não foi adjudicada.

**Causa provável**  
O utilizador não sabe como converter a proposta numa encomenda ou adjudicar apenas linhas específicas.

**Solução**  
Utilizar a função Adjudicar Proposta para criar uma encomenda de venda a partir da proposta com as linhas aceites.

**Como proceder**  
1. Aceder à Proposta de Venda (lista de propostas).
2. Seleccionar a proposta pretendida.
3. No separador Processo, clicar em Converter em Encomenda ou Adjudicar.
4. Se necessário, seleccionar apenas as linhas a adjudicar (pode marcar/desmarcar linhas).
5. Confirmar; o sistema cria uma nova encomenda de venda com o cliente e produtos seleccionados.
6. Revisar a encomenda e completar dados adicionais (datas, local de envio).
7. Proceder ao registo ou aprovação conforme workflow.

**Validação final**  
Uma encomenda de venda é criada e a proposta original fica registada como Adjudicada ou Fechada.

**Notas**  
- Caso parte da proposta não seja aceite, crie uma encomenda apenas com as linhas aprovadas e feche a proposta.
- A adjudicação mantém a traçabilidade entre proposta, oportunidade e encomenda.


## BC-KB-203 — Como trabalho com encomendas abertas de venda?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa utiliza Encomendas Abertas de Venda para contratos de fornecimento em que o cliente solicita quantidades gradualmente e é necessário gerir entregas parciais.

**Diagnóstico**  
É necessário criar uma encomenda aberta, indicar o total contratado e extrair encomendas parciais com base nas necessidades do cliente.

**Causa provável**  
Os utilizadores não estão familiarizados com o processo de criação e gestão de encomendas abertas.

**Solução**  
Criar uma encomenda aberta de venda e utilizar a funcionalidade Criar Encomenda para gerar encomendas de venda parciais conforme o consumo.

**Como proceder**  
1. Pesquisar por Encomendas Abertas de Venda e clicar em Novo.
2. Preencher o cabeçalho com Cliente, Data de Início, Data de Fim e outras informações.
3. Na secção Linhas, introduzir os produtos e as quantidades totais contratadas.
4. Registar a encomenda aberta.
5. Quando o cliente solicitar uma entrega parcial, abrir a encomenda aberta e seleccionar Criar Encomenda.
6. Definir as quantidades a enviar e confirmar; o sistema cria uma nova Encomenda de Venda com essas quantidades.
7. Repetir o processo até esgotar as quantidades contratadas.
8. Encerrar a encomenda aberta quando todas as quantidades tiverem sido satisfeitas.

**Validação final**  
As encomendas abertas permitem rastrear o total contratado e criar múltiplas encomendas parciais de forma controlada.

**Notas**  
- As encomendas abertas são particularmente úteis para contratos de fornecimento de longo prazo.
- Mantenha um controlo rigoroso das quantidades restantes para evitar sobre-entregas.


## BC-KB-204 — Como crio uma encomenda de venda?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
O utilizador precisa registar uma nova encomenda de venda para um cliente, incluindo dados de envio, produtos, quantidades e preços.

**Diagnóstico**  
Não existe encomenda para o pedido e o utilizador necessita seguir todos os passos para criação.

**Causa provável**  
Primeira utilização ou processo pontual que requer reforço de procedimentos.

**Solução**  
Criar uma Encomenda de Venda na lista de encomendas, preencher o cabeçalho e as linhas com os detalhes necessários e validar.

**Como proceder**  
1. Pesquisar por Encomendas de Venda e clicar em Novo.
2. Preencher o campo Cliente Nº com o número do cliente; o sistema preenche dados padrão (endereço, condições de pagamento).
3. Definir a Data de Registo, Data de Envio, Localização e outras datas relevantes.
4. No separador Linhas, para cada produto: seleccionar Tipo = Produto, indicar Nº Produto, Quantidade e confirmar o preço sugerido.
5. Se necessário, ajustar preços ou descontos manualmente, respeitando as políticas de margem e desconto máximos.
6. Adicionar linhas de comentário ou encargos adicionais, se aplicável.
7. Verificar os campos totais (montante, IVA) e corrigir eventuais mensagens de erro.
8. a encomenda; se existir workflow, enviar para aprovação ou libertar para processamento logístico.

**Validação final**  
A encomenda de venda aparece na lista com estado Aberta ou Liberada, pronta para envio ou faturação.

**Notas**  
- Utilize funções de cópia de encomenda ou duplicação para acelerar a criação de encomendas semelhantes.
- Verifique os limites de crédito do cliente antes de aprovar a encomenda.


## BC-KB-205 — Como funciona a aprovação de encomendas a processar para logística externa?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Algumas encomendas de venda são processadas por operadores logísticos externos e requerem aprovação adicional antes do envio.

**Diagnóstico**  
O workflow de aprovação para logística externa não foi accionado ou o utilizador desconhece o procedimento.

**Causa provável**  
Ausência de configuração de fluxos de aprovação para encomendas com Localização de logística externa ou falta de treino.

**Solução**  
Configurar e utilizar o workflow de aprovação específico e enviar a encomenda para aprovação antes de entregar ao operador externo.

**Como proceder**  
1. Ao criar a encomenda de venda, seleccionar uma Localização ou Fornecedor de Logística que indique processamento externo.
2. Preencher a encomenda normalmente.
3. No separador Pedido, clicar em Enviar Pedido de Aprovação; a encomenda muda para Pendente de Aprovação.
4. O gestor de logística ou aprovador externo recebe uma notificação e analisa a encomenda.
5. Após aprovação, a encomenda é marcada como Aprovada e é libertada para o parceiro logístico (via EDI ou exportação).
6. Acompanhar o estado na página Solicitações para Aprovar e proceder ao envio físico após aprovação.

**Validação final**  
A encomenda é aprovada e enviada ao operador logístico externo apenas após passar no workflow.

**Notas**  
- Este processo minimiza envios errados para operadores externos.
- A configuração do workflow deve prever valores limite e destinatários correctos.


## BC-KB-206 — Como funciona a faturação de lares?
**Categoria:** Vendas / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Existem acordos específicos com instituições de solidariedade (lares) para fornecimento de produtos, e a faturação obedece a regras próprias.

**Diagnóstico**  
O processo normal de faturação não contempla a diferenciação de itens e preços para lares.

**Causa provável**  
Falta de utilização do módulo ou da configuração de Tipo de Cliente = Lar e respectivas tabelas de preços.

**Solução**  
Configurar clientes como Lar, utilizar listas de preços específicas e emitir faturas periodicamente segundo as quantidades fornecidas.

**Como proceder**  
1. Criar ou editar a ficha do cliente e definir o campo Tipo Cliente para Lar.
2. Associar ao cliente uma lista de preços específica para lares (com preços e descontos ajustados).
3. Criar encomendas de venda normalmente, indicando a instituição como cliente.
4. Na factura, os preços aplicados são automaticamente retirados da lista de preços de lares.
5. Se existirem contratos de fornecimento periódico, configurar Encomendas Abertas ou Acordos de Serviço para gerar faturas periodicamente.
6. Registar as faturas de acordo com as regras de pagamento especiais acordadas com cada instituição.

**Validação final**  
As faturas emitidas para lares reflectem os preços e condições específicas acordadas.

**Notas**  
- Mantenha listas de preços actualizadas para estas instituições.
- Nos relatórios fiscais, as vendas a lares podem necessitar de códigos específicos de isenção ou taxa reduzida.


## BC-KB-207 — Como registo amostras?
**Categoria:** Vendas / Amostras  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa necessita enviar amostras de produtos a clientes, contabilizando o custo e controlando o stock.

**Diagnóstico**  
Não existe um documento dedicado ou método padronizado para registar amostras; as saídas são feitas manualmente, sem rastreabilidade.

**Causa provável**  
Desconhecimento da funcionalidade de Encomenda de Amostras ou da configuração de Tipo Documento = Amostra.

**Solução**  
Criar uma encomenda de venda específica de amostras, com preços a zero, e registar a saída do stock.

**Como proceder**  
1. Pesquisar por Encomendas de Venda e clicar em Novo.
2. Seleccionar o Cliente que vai receber a amostra (ou criar um cliente genérico Amostras).
3. Na linha, seleccionar Tipo = Produto e indicar o Nº Produto.
4. Introduzir a Quantidade de amostras.
5. No campo Tipo Documento Saída, seleccionar Amostra; o preço unitário é automaticamente zero.
6. Registar a encomenda; o stock é diminuído e o custo é registado em conta de marketing ou promoções.
7. Imprimir ou enviar o documento ao cliente, se necessário.

**Validação final**  
O stock é actualizado e a entrega da amostra fica registada com preço zero.

**Notas**  
- Crie um relatório periódico de amostras enviadas para controlar custos.
- Utilize contas analíticas para imputar custos de amostras a centros de marketing.


## BC-KB-208 — Como registo ofertas?
**Categoria:** Vendas / Ofertas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
A empresa oferece produtos a clientes (brindes) e precisa registá-los sem facturar o cliente, mas mantendo a movimentação de stock e registo contabilístico.

**Diagnóstico**  
Ainda não existe um procedimento para diferenciar ofertas de vendas normais ou amostras.

**Causa provável**  
Falta de configuração de tipo de documento Oferta ou de um cliente específico para ofertas.

**Solução**  
Criar uma encomenda de venda de tipo Oferta para registar os produtos oferecidos a custo zero e imputar o valor ao centro de marketing.

**Como proceder**  
1. Criar um cliente específico Ofertas ou utilizar o cliente real.
2. Iniciar uma nova Encomenda de Venda.
3. No cabeçalho ou nas configurações, definir Tipo Documento Saída = Oferta.
4. Inserir as linhas de produto e quantidades; o preço unitário é automaticamente zero (pode ser necessário configurar uma lista de preços de ofertas).
5. Verificar que a conta contabilística da linha corresponde ao centro de custo de marketing.
6. Registar a encomenda.

**Validação final**  
A oferta é registada, o stock é reduzido e o custo é imputado à conta adequada.

**Notas**  
- Use códigos de razão para ofertas para distinguir de amostras nos relatórios.
- As ofertas podem necessitar de aprovação dependendo do valor.


## BC-KB-209 — Como registo demonstrações a clientes?
**Categoria:** Vendas / Demonstrações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Necessidade de emprestar produtos a clientes para demonstração temporária, com controlo de devolução e custo associado.

**Diagnóstico**  
O processo não está formalizado e pode levar a perda de inventário ou a ausência de follow-up de devoluções.

**Causa provável**  
Não utilização de um documento específico de demonstração e de um registro de saída e retorno.

**Solução**  
Criar um documento de Saída de Demonstração que regista a entrega e posterior devolução dos produtos.

**Como proceder**  
1. Pesquisar por Demonstrações a Clientes (ou utilizar Documento de Transferência adaptado).
2. Criar um novo documento indicando o Cliente e a Data de Saída.
3. Adicionar as linhas de produto a demonstrar e as quantidades.
4. Registar a saída; o stock é transferido para uma localização temporária de demonstrações.
5. Na devolução, abrir o mesmo documento e registar a Entrada de Demonstração, indicando as quantidades devolvidas.
6. Validar que o stock regressa à localização original.

**Validação final**  
As demonstrações são rastreadas e o stock é reposto quando os produtos são devolvidos.

**Notas**  
- Controlar a data de devolução prevista e enviar lembretes ao cliente.
- Se a demonstração se converter em venda, criar uma encomenda de venda a partir do documento de demonstração.


## BC-KB-210 — Como registo demonstrações em eventos?
**Categoria:** Vendas / Demonstrações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário enviar produtos para feiras ou eventos para demonstração, com controlo de stock e devoluções.

**Diagnóstico**  
Não existe um processo formal de registo, levando a inconsistências de inventário após eventos.

**Causa provável**  
Ausência de documentos de transferência dedicados a eventos e de controlo de inventário temporário.

**Solução**  
Utilizar a funcionalidade de Transferência entre Localizações para eventos e registar a devolução posterior.

**Como proceder**  
1. Criar uma Localização específica para cada evento (ex.: EVENTO_FEIRA).
2. Utilizar uma Ordem de Transferência para mover o stock da localização principal para a localização do evento.
3. No documento, indicar as linhas dos produtos e quantidades.
4. Processar a ordem de transferência para registar a saída.
5. Após o evento, criar outra ordem de transferência inversa para devolver os produtos não consumidos à localização original.
6. Se alguns produtos forem consumidos ou vendidos, registar como Amostras, Ofertas ou Vendas conforme apropriado.

**Validação final**  
O stock em eventos é controlado e reconciliado após a devolução.

**Notas**  
- Planeie a logística com antecedência para garantir disponibilidade de produtos nos eventos.
- Utilize relatórios de inventário por localização para avaliar consumos durante eventos.


## BC-KB-211 — Como registo consumos internos?
**Categoria:** Vendas / Consumos Internos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Alguns produtos são consumidos internamente pela empresa (por exemplo, para testes, formação ou uso interno) e é necessário dar saída de stock de forma controlada.

**Diagnóstico**  
O consumo interno não está documentado, podendo gerar discrepâncias de inventário e custos não atribuídos.

**Causa provável**  
Desconhecimento do documento Consumo Interno ou falta de uso da funcionalidade de diário de produtos.

**Solução**  
Registar consumos internos através de diários de consumo ou encomendas específicas, garantindo a imputação de custos ao centro apropriado.

**Como proceder**  
1. Pesquisar por Diário de Consumo Interno (ou Diário de Saídas).
2. Criar uma nova linha para cada produto consumido.
3. Indicar a Localização, Nº Produto, Quantidade e, se necessário, a Dimensão ou Centro de Custo que deve suportar o custo.
4. Verificar que o preço unitário corresponde ao custo do produto (campo Custo Unitário).
5. Registar o diário para dar baixa no inventário e gerar o movimento contabilístico.
6. Opcionalmente, imprimir um relatório interno de consumo para aprovação.

**Validação final**  
Os consumos internos são reflectidos no inventário e as contas de despesa são actualizadas.

**Notas**  
- Estabeleça procedimentos internos para aprovar consumos fora das quantidades normais.
- Os diários de consumo permitem distribuir custos por departamentos ou projectos.


## BC-KB-212 — Como trato vendas de psicotrópicos?
**Categoria:** Vendas / Psicotrópicos  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
As vendas de medicamentos psicotrópicos requerem documentação adicional e registos específicos devido a legislação restritiva.

**Diagnóstico**  
É necessário garantir que a transacção cumpre os requisitos legais, incluindo prescrição médica e registo separado.

**Causa provável**  
Falta de funcionalidades activadas para artigos psicotrópicos e ausência de registo de prescrição ou autorização.

**Solução**  
Configurar os produtos como Psicotrópicos, registar a prescrição do médico e utilizar documentos específicos que reportem às autoridades.

**Como proceder**  
1. Na ficha do produto, definir o campo Categoria Terapêutica para Psicotrópico e activar qualquer opção de controlo adicional (ex.: Lote obrigatório).
2. Ao criar uma encomenda de venda, exigir o campo Nº de Prescrição ou documento legal equivalente.
3. Inserir as linhas do produto psicotrópico, quantidade e preço conforme regulamentado.
4. Registar a encomenda e emitir a fatura; o sistema gera um relatório adicional para comunicação às autoridades de saúde.
5. Arquivar cópia da prescrição e manter registo por período legal obrigatório.

**Validação final**  
A venda do psicotrópico é registada com os documentos legais necessários e comunicada às autoridades.

**Notas**  
- Consultar a legislação nacional sobre venda de psicotrópicos; alguns produtos exigem quotas e notificações prévias.
- As penalidades por incumprimento são elevadas; documente e aprove todos os passos.


## BC-KB-213 — Como emito uma declaração de antibióticos para exportação?
**Categoria:** Vendas / Exportação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
A exportação de antibióticos para países fora da UE exige um certificado ou declaração confirmando que o produto cumpre normas e que é destinado à exportação.

**Diagnóstico**  
Sem uma declaração de antibióticos, a carga pode ser retida na alfândega ou recusada pelas autoridades do país de destino.

**Causa provável**  
Desconhecimento do formulário a utilizar ou dos campos necessários para a declaração.

**Solução**  
Gerar a declaração de antibióticos através de um modelo oficial e preencher os dados do produto, lote, quantidades e destino.

**Como proceder**  
1. Pesquisar pelo relatório Declaração de Antibióticos no Business Central (ou aceder a documentos externos fornecidos pela autoridade sanitária).
2. Introduzir os dados da exportação: Cliente, País de Destino, Data de Expedição.
3. Seleccionar as linhas de produtos antibióticos, indicando Nº Lote, Quantidade e Data de Fabrico.
4. Gerar o relatório/declaração e imprimir.
5. Validar a declaração com o responsável técnico (farmacêutico) e assinar.
6. Enviar a declaração juntamente com a documentação de exportação.

**Validação final**  
A declaração de antibióticos é emitida, assinada e entregue às autoridades aduaneiras.

**Notas**  
- Confirme os requisitos específicos do país de destino, pois podem variar.
- Mantenha um arquivo das declarações emitidas para auditorias.


## BC-KB-214 — Como anulo uma fatura de venda através de nota de crédito interna?
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Uma fatura de venda precisa ser anulada por completo devido a erro ou devolução total de produtos.

**Diagnóstico**  
A fatura está registada e já foi comunicada; é necessário emitir uma nota de crédito interna para anular a dívida do cliente.

**Causa provável**  
Erro na fatura, devolução total da mercadoria ou cancelamento do contrato de venda.

**Solução**  
Gerar uma nota de crédito de venda com referência à fatura original e aplicar aos movimentos do cliente.

**Como proceder**  
1. Aceder à lista Faturas de Venda Registadas e seleccionar a fatura a anular.
2. Clicar em Criar Nota de Crédito (ou Anular), confirmando que deseja anular a fatura.
3. O sistema abre uma nota de crédito com as linhas e montantes da fatura original.
4. Verificar as linhas, ajustar se necessário (por exemplo, quantidades devolvidas).
5. Registar a nota de crédito; o sistema emite o documento e actualiza os saldos.
6. Aplicar a nota de crédito à fatura original nos movimentos de clientes para fechar a dívida.

**Validação final**  
A fatura original fica saldada e os relatórios mostram a nota de crédito correspondente.

**Notas**  
- A anulação completa exige que todos os produtos sejam devolvidos; caso contrário, emita nota de crédito parcial.
- Verifique as obrigações fiscais de comunicação da nota de crédito.


## BC-KB-215 — Como anulo uma nota de crédito de venda através de fatura interna?
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Uma nota de crédito emitida anteriormente estava errada e precisa ser anulada, emitindo-se uma fatura para restabelecer a venda original.

**Diagnóstico**  
O cliente devolveu a mercadoria parcialmente ou foi emitida uma nota de crédito indevida; é necessário restituir a dívida.

**Causa provável**  
Erro no valor ou na quantidade da nota de crédito ou reversão de um cancelamento.

**Solução**  
Emitir uma nova fatura com os itens correctos e aplicar contra a nota de crédito para anular o seu efeito.

**Como proceder**  
1. Abrir a Nota de Crédito de Venda Registada que pretende anular.
2. Seleccionar Criar Documento de Reversão ou Gerar Fatura Corretiva.
3. O sistema cria uma nova Encomenda de Venda com as linhas da nota de crédito; ajustar quantidades ou valores para representar a venda correcta.
4. Registar a encomenda para emitir a fatura.
5. Aplicar a fatura gerada à nota de crédito nos movimentos de clientes, de forma a anulá-la.
6. Verificar o saldo do cliente após a operação.

**Validação final**  
A nota de crédito é anulada e substituída por uma fatura correcta.

**Notas**  
- Este processo deve ser usado apenas quando a nota de crédito foi emitida por engano.
- Garanta que a nova fatura cumpre todos os requisitos fiscais.


## BC-KB-216 — Como fecho encomendas de venda completamente faturadas?
**Categoria:** Vendas / Encomendas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
Encomendas de venda que já tiveram todas as quantidades facturadas permanecem em estado Aberta ou Liberada, causando confusão nos relatórios de carteira de encomendas.

**Diagnóstico**  
As encomendas não são encerradas automaticamente após a facturação, pelo que permanecem activas até serem fechadas manualmente.

**Causa provável**  
Desconhecimento da função Fechar Encomenda ou negligência em encerrar processos concluídos.

**Solução**  
Utilizar a função Fechar Encomenda para mudar o estado para Fechada quando todas as quantidades estiverem facturadas.

**Como proceder**  
1. Aceder à Encomenda de Venda que pretende encerrar.
2. Verificar que a coluna Qtd. Faturada coincide com a Qtd. Encomendada em todas as linhas.
3. No separador Processo, clicar em Fechar Encomenda.
4. Confirmar o fecho; o estado passa a Fechada.
5. A encomenda deixa de aparecer nas listas de pendentes.

**Validação final**  
A encomenda desaparece da lista de abertas e figura como Fechada.

**Notas**  
- O fecho de encomendas ajuda a manter relatórios limpos e a separar encomendas activas das concluídas.
- Não feche encomendas com quantidades por entregar; use motivos de não fornecimento ou notas de crédito conforme o caso.


## BC-KB-217 — Como funciona a criação automática de encomendas de venda para Alliance?
**Categoria:** Pricing & Modelo Comercial / Integração  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
É necessário gerar encomendas de venda automaticamente para um parceiro comercial (Alliance) com base em informação de consumo ou stocks.

**Diagnóstico**  
O processo manual é demorado e suscetível a erros; existe uma integração que permite a criação automática mas não foi configurada.

**Causa provável**  
Falta de configuração dos parâmetros de integração ou desconhecimento da funcionalidade.

**Solução**  
Configurar a integração com a Alliance e parametrizar a criação automática de encomendas de venda.

**Como proceder**  
1. Confirmar que existe um módulo de integração com a Alliance instalado.
2. Configurar os parâmetros: Código do Cliente Alliance, Frequência de Criação de Encomendas (diária, semanal), Códigos de Produtos elegíveis e Limites de Stock que disparam encomendas.
3. Activar a opção de Criação Automática de Encomendas na configuração.
4. A cada período, o sistema verifica o consumo ou stock e gera automaticamente encomendas de venda com base nos parâmetros definidos.
5. Revisar as encomendas geradas em Encomendas de Venda, validar e, se necessário, ajustar antes de enviar ao cliente.

**Validação final**  
Encomendas de venda são criadas automaticamente de acordo com os parâmetros de integração.

**Notas**  
- Monitorize regularmente o processo para garantir que as encomendas refletem as necessidades reais.
- Ajuste os limites de stock e produtos elegíveis conforme as condições de fornecimento.


## BC-KB-218 — Como configuro margens mínimas?
**Categoria:** Pricing & Modelo Comercial / Regras  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
É necessário garantir que os preços de venda não ficam abaixo de uma margem de lucro mínima por produto ou família.

**Diagnóstico**  
Existem propostas e encomendas que podem ser registadas com margens muito baixas, reduzindo a rentabilidade.

**Causa provável**  
Falta de configuração das regras de margem mínima no modelo comercial.

**Solução**  
Definir margens mínimas por família de produtos ou categoria no Modelo Comercial para que o sistema valide nas encomendas e propostas.

**Como proceder**  
1. Aceder à página Modelo Comercial ou Regras de Preços.
2. Seleccionar a família ou categoria de produto que pretende configurar.
3. Inserir a Margem Mínima (percentagem) ou valor absoluto por unidade.
4. Em propostas de venda e encomendas, o sistema calcula a margem obtida comparando o preço de venda com o custo; se a margem calculada for inferior à definida, será apresentada uma mensagem de aviso ou bloqueio.
5. O utilizador poderá ajustar o preço ou solicitar aprovação excepcional.

**Validação final**  
As margens mínimas são aplicadas automaticamente e impedem a criação de transacções com margens inferiores.

**Notas**  
- As margens mínimas podem variar conforme o segmento de cliente ou canal de venda.
- Avalie periodicamente as margens em função de flutuações de custo.


## BC-KB-219 — Como configuro descontos máximos?
**Categoria:** Pricing & Modelo Comercial / Regras  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Controlar o desconto máximo que cada vendedor pode conceder nos produtos, evitando erosão de margem.

**Diagnóstico**  
Os utilizadores aplicam descontos superiores ao limite desejado porque não existe regra de sistema que impeça ou avise.

**Causa provável**  
Não foram definidas regras de Desconto Máximo por família de produtos ou utilizador.

**Solução**  
Configurar descontos máximos no modelo comercial e associar limites a perfis de utilizador ou grupos de produtos.

**Como proceder**  
1. Aceder à página Modelo Comercial ou Regras de Desconto.
2. Definir para cada família de produtos ou produto individual o campo Desconto Máximo em percentagem.
3. Associar essas regras aos perfis de vendedores ou grupos de clientes, se aplicável.
4. Em propostas e encomendas, quando o desconto introduzido exceder o limite, o sistema apresenta aviso ou bloqueio, exigindo aprovação.

**Validação final**  
Os descontos aplicados nas vendas respeitam os limites configurados e qualquer excedente gera alertas.

**Notas**  
- Pode definir níveis de desconto por escalão de quantidade ou por campanha.
- As regras devem ser revistas quando há alterações de estratégia comercial.


## BC-KB-220 — Como configuro majoração máxima?
**Categoria:** Pricing & Modelo Comercial / Regras  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
Além do desconto máximo, é necessário limitar a Majoração (aumento) de preços de venda em determinadas circunstâncias.

**Diagnóstico**  
Em algumas propostas ou listas, os preços foram majorados em percentagens elevadas, tornando-os pouco competitivos.

**Causa provável**  
Falta de regra de Majoração Máxima no modelo comercial.

**Solução**  
Definir uma majoração máxima por produto ou família, impedindo que a majoração exceda a percentagem estabelecida.

**Como proceder**  
1. No Modelo Comercial, localizar a configuração de Majoração Máxima.
2. Definir, por produto ou grupo, a percentagem máxima de majoração permitida.
3. Ao majorar um preço (por exemplo, actualizando listas de preços ou definindo preços de venda especiais), o sistema compara com a majoração máxima; se exceder, emite aviso ou bloqueia a alteração.

**Validação final**  
As majorações de preços mantêm-se dentro dos limites definidos.

**Notas**  
- A majoração máxima evita práticas de preço abusivas.
- Ajuste os limites conforme as margens, mercado e estratégias de posicionamento.


## BC-KB-221 — Como majoro preços de venda?
**Categoria:** Pricing & Modelo Comercial / Preços  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
É necessário actualizar os preços de venda aplicando uma majoração percentual sobre o custo ou preço base, por exemplo devido a aumento de custos de matéria-prima.

**Diagnóstico**  
As listas de preços estão desactualizadas e os utilizadores não sabem como aplicar um coeficiente de majoração a múltiplos produtos.

**Causa provável**  
Desconhecimento da funcionalidade de actualização em lote de preços com base numa percentagem de majoração.

**Solução**  
Utilizar as funções de Majorar Preços nas listas de preços ou no modelo comercial para actualizar os preços de venda.

**Como proceder**  
1. Aceder à página Listas de Preços de Venda ou ao Modelo Comercial dependendo do âmbito da majoração.
2. Seleccionar a lista a actualizar e clicar em Majorar Preços ou Actualizar Preços.
3. Introduzir a Percentagem de Majoração (por exemplo, 5% = 0,05).
4. Definir se a majoração se aplica ao preço base, preço actual ou custo (conforme opções).
5. Executar a operação; o sistema calcula o novo preço para cada linha, respeitando a majoração máxima configurada.
6. Rever os valores e, se correcto, activar a lista.

**Validação final**  
Os preços de venda são actualizados segundo a percentagem indicada e estão prontos a ser utilizados.

**Notas**  
- Antes de majorar, faça uma cópia da lista para preservar histórico.
- Combine majoração com actualização de custos para garantir margens adequadas.


## BC-KB-222 — Como valido o modelo comercial?
**Categoria:** Pricing & Modelo Comercial / Validação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
O Modelo Comercial define margens, descontos e majorações; é necessário validar se todas as regras são coerentes e se os preços propostos cumprem as restrições.

**Diagnóstico**  
Após alterações no modelo, é importante verificar se nenhuma regra conflita com outra e se os preços estão correctamente calculados.

**Causa provável**  
Alterações recentes ou falta de validação periódica do modelo comercial.

**Solução**  
Executar a função de Validação do Modelo Comercial para analisar conflitos e inconsistências.

**Como proceder**  
1. Aceder à página Modelo Comercial.
2. Clicar em Validar Modelo ou Verificar Regras.
3. O sistema executa uma verificação das margens mínimas, descontos máximos e majorações máximas, identificando eventuais conflitos ou valores fora dos limites.
4. Ler a lista de mensagens e corrigir as regras que provocam erro (por exemplo, desconto máximo superior à margem mínima).
5. Repetir a validação até não existirem mensagens críticas.

**Validação final**  
O modelo comercial passa na verificação sem conflitos e pode ser aplicado.

**Notas**  
- Realize esta validação sempre que alterar margens ou descontos.
- Utilize a validação para auditar a conformidade de regras definidas por diferentes departamentos.


## BC-KB-223 — Como configuro markups no Business Central?
**Categoria:** Pricing & Modelo Comercial / Preços  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim  

**Problema**  
A empresa pretende aplicar markups (acréscimos) de preços específicos por produto, família ou canal, de forma automatizada.

**Diagnóstico**  
Os preços são calculados apenas com base em margens e custos, sem considerar um markup adicional que reflicta custos indirectos ou políticas comerciais.

**Causa provável**  
Não existe configuração de Markups nas listas de preços ou no modelo comercial.

**Solução**  
Criar regras de markup no Business Central e associá-las a produtos, grupos ou canais específicos.

**Como proceder**  
1. Aceder à página Regras de Markup ou configurar campos correspondentes no Modelo Comercial.
2. Clicar em Novo para criar uma regra de markup.
3. Definir o Tipo de Markup (percentual ou valor fixo), o Âmbito (produto individual, família, canal de venda) e a Percentagem ou Valor.
4. Em listas de preços ou propostas, os markups são automaticamente aplicados aos preços base, além das margens e majorações.
5. Revisar os preços resultantes para assegurar que respeitam margens mínimas e majorações máximas.

**Validação final**  
Os markups definidos são aplicados aos preços de venda de forma consistente, complementando as outras regras do modelo comercial.



## BC-KB-224 — Como verifico o estado de aprovação de um produto?
**Categoria:** Produtos / Aprovações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim  

**Problema**  
É necessário verificar o estado de aprovação de um produto, mas o utilizador não sabe onde consultar se o pedido está pendente, quem é o aprovador ou se o pedido de aprovação já foi criado.

**Diagnóstico**  
O estado de aprovação do produto pode ser consultado diretamente na ficha do produto, através dos movimentos de aprovação associados.

**Causa provável**  
O utilizador desconhece onde consultar os movimentos de aprovação do produto ou não tem acesso aos mesmos, por não ser o utilizador que solicitou a aprovação nem um dos aprovadores.

**Solução**  
Aceder à ficha do produto e consultar a opção **Produto → Aprovações** para verificar se existem movimentos de aprovação pendentes e identificar o aprovador responsável.

**Como proceder**
1. Abrir a ficha do produto em questão.
2. Na ficha do produto, aceder ao menu **Produto → Aprovações**.
3. Será aberta a página com os movimentos de aprovação do produto.
4. Verificar se existem linhas de aprovação associadas ao produto.
5. Caso existam linhas pendentes, confirmar:
   - o estado da aprovação;
   - quem é o aprovador;
   - se o pedido ainda se encontra por tratar.
6. Se a página estiver vazia, podem existir duas razões:
   - **O utilizador não tem acesso aos movimentos de aprovação:** por uma questão de privacidade implementada pela Microsoft, apenas o utilizador que solicitou a aprovação e/ou os aprovadores conseguem visualizar os movimentos de aprovação.
   - **Ninguém solicitou a aprovação do produto:** neste caso, é necessário pedir aprovação do produto.
7. Se for necessário pedir aprovação, deve ser contactado o gestor de produto ou o utilizador responsável pela criação do produto.
8. O pedido de aprovação não deve ser criado pelo próprio aprovador.

**Validação final**  
A validação está concluída quando é possível confirmar uma das seguintes situações:

1. Existem movimentos de aprovação e foi identificado o estado do pedido.
2. Existem linhas pendentes e foi identificado o aprovador responsável.
3. A página está vazia porque o utilizador não tem acesso aos movimentos.
4. A página está vazia porque o pedido de aprovação ainda não foi solicitado.

**Notas**  
Apenas o utilizador que solicitou o pedido de aprovação e/ou os elementos aprovadores conseguem visualizar os movimentos de aprovação do produto.

Se a página de aprovações estiver vazia, isso não significa obrigatoriamente que não existe pedido de aprovação. Pode significar apenas que o utilizador atual não tem permissões para visualizar esses movimentos.

Caso se confirme que ainda não existe pedido de aprovação, deve ser contactado o gestor de produto para solicitar a aprovação do produto.

---

# Artigos adicionados a partir das comunicações TIC i9

## BC-KB-225 — Consultar Pedidos Pendentes de Envio
**Categoria:** Logística / Envios Pendentes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de acompanhar os pedidos de envio de mercadoria, distinguindo pedidos libertos para armazém, pedidos futuros e pedidos ainda em preparação pela área.

**Diagnóstico**  
A informação dos pedidos pendentes está centralizada numa área própria que resume encomendas, amostras, ofertas, demonstrações, consumos internos e outras transferências logísticas.

**Causa provável**  
Desconhecimento da nova área de consulta e dos indicadores disponíveis para análise dos pedidos pendentes.

**Solução**  
Aceder à área eArmazéns/eEnvios Pendentes e utilizar os indicadores de cabeçalho e detalhe para acompanhar o estado dos pedidos de envio.

**Como proceder**
1. Aceder ao Business Central com um perfil autorizado, como Diretor Área, Comercial, Apoio ao Cliente ou Logística.
2. No menu, abrir a opção eArmazéns/eEnvios Pendentes.
3. No cabeçalho, analisar os indicadores disponíveis.
4. Validar os pedidos libertos para envio com data até hoje.
5. Validar os pedidos libertos para envio com data a partir de amanhã.
6. Validar os pedidos em preparação pela área, ainda não libertos.
7. No indicador de pedidos até hoje, confirmar se existem pedidos já em preparação no armazém, em recolha ou recolhidos.
8. No detalhe, analisar o documento, cliente, estado, data de envio, armazém, produto, quantidades requisitadas, enviadas e pendentes.
9. Validar também o inventário disponível na localização indicada e o inventário total do produto.
10. Usar a informação para priorizar desbloqueios, libertações ou contactos com a logística.

**Validação final**  
1. O utilizador consegue consultar os pedidos pendentes numa única área.
2. Os pedidos estão agrupados por estado e data de envio.
3. É possível distinguir pedidos libertos, futuros, em preparação e já em recolha/armazém.
4. A informação permite acompanhar quantidades pendentes e inventário disponível.

**Notas**  
* Esta área aproxima as áreas comerciais, apoio ao cliente e logística, reduzindo a necessidade de pedidos manuais de estado.
* Fonte: Comunicação TIC i9 de 15/05/2024.


## BC-KB-226 — Integração Logista Pharma para recolha de pedidos de envio
**Categoria:** Logística Externa / Logista Pharma  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
A logística necessita de preparar e enviar pedidos de expedição para a Logista Pharma, garantindo que os pedidos pendentes ficam tratados e monitorizados.

**Diagnóstico**  
Foi disponibilizada uma área de integração automática de recolha de pedidos para envio à Logista Pharma. Numa fase inicial, a recolha é automática, mas o envio à Logista Pharma é efetuado manualmente através de template Excel.

**Causa provável**  
A integração automática completa dependia da preparação técnica da Logista Pharma, sendo necessário suportar temporariamente o envio manual com base em ficheiro gerado pelo Business Central.

**Solução**  
Utilizar a área de integração Logista Pharma para recolher automaticamente os pedidos e gerar o template Excel de envio.

**Como proceder**
1. Aceder à área de integração Logista Pharma no Business Central.
2. Confirmar os pedidos pendentes disponíveis para envio.
3. Executar a recolha automática dos pedidos, quando aplicável.
4. Gerar o template Excel disponibilizado pelo sistema para apoio ao envio.
5. Validar a informação constante no template antes de envio à Logista Pharma.
6. Enviar manualmente o template à Logista Pharma, enquanto a integração automática de envio não estiver ativa.
7. Confirmar posteriormente, na área de monitorização, o estado dos pedidos pendentes.

**Validação final**  
1. Os pedidos pendentes são recolhidos pelo sistema.
2. O template Excel é gerado com a informação necessária.
3. Os pedidos enviados à Logista Pharma ficam tratados e monitorizáveis pelas áreas envolvidas.

**Notas**  
* Funcionalidade orientada sobretudo à logística e à equipa de suporte.
* Fonte: Comunicação TIC i9 de 24/05/2024.


## BC-KB-227 — Ler DataMatrix Touch Care na aplicação de Mobilidade
**Categoria:** Mobilidade / Rastreabilidade  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao rececionar produto Touch Care no armazém, é necessário ler um DataMatrix com standard específico para recolher automaticamente GTIN e números de série.

**Diagnóstico**  
A aplicação de mobilidade de armazéns foi atualizada para reconhecer um novo tipo de DataMatrix associado ao produto Touch Care.

**Causa provável**  
O DataMatrix do produto Touch Care seguia um standard específico que não era interpretado corretamente pela aplicação antes da alteração.

**Solução**  
Utilizar a aplicação de mobilidade atualizada para efetuar a leitura do DataMatrix durante a entrada, garantindo recolha automática de GTIN e números de série.

**Como proceder**
1. Na receção do produto Touch Care, iniciar o processo normal de entrada na aplicação de mobilidade.
2. Quando for solicitado o código, ler o DataMatrix do produto/equipamento.
3. Confirmar que o sistema recolhe automaticamente o GTIN.
4. Confirmar que os números de série são também recolhidos automaticamente.
5. Prosseguir com a entrada do produto em armazém.
6. Validar que a informação de rastreabilidade fica associada ao movimento de entrada.
7. Em movimentos posteriores de saída ou movimentação interna, confirmar que os equipamentos mantêm rastreabilidade.

**Validação final**  
1. O DataMatrix é lido sem erro.
2. O GTIN e os números de série ficam preenchidos automaticamente.
3. A rastreabilidade fica garantida na entrada, saída e movimentação interna.

**Notas**  
* A alteração foi motivada pela receção do produto Touch Care no armazém Sta Isabel.
* Fonte: Comunicação TIC i9 de 28/05/2024.


## BC-KB-228 — Garantir custo específico da compra na venda em Envios Diretos
**Categoria:** Compras / Vendas / Envios Diretos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário garantir que o custo específico de uma compra fica associado à venda quando a mercadoria é enviada diretamente pelo fornecedor ao cliente.

**Diagnóstico**  
A funcionalidade de Envios Diretos permite ligar o processo de compra ao processo de venda quando a mercadoria não passa pela logística interna.

**Causa provável**  
Sem ligação entre compra e venda, pode não ficar assegurado que o custo real da compra é refletido corretamente no processo de venda.

**Solução**  
Utilizar o processo de Envio Direto para associar a encomenda de venda à encomenda de compra e garantir o custo específico, a receção, o envio automático e o rastreio.

**Como proceder**
1. Confirmar que a mercadoria será enviada diretamente pelo fornecedor ao cliente, sem passagem pela logística interna.
2. Criar ou validar a encomenda de venda com as linhas pretendidas.
3. Marcar as linhas aplicáveis como envio direto, conforme o processo interno definido.
4. Gerar ou associar a encomenda de compra correspondente ao fornecedor.
5. Confirmar que a linha de venda fica ligada à linha de compra.
6. Registar a receção da compra quando o fornecedor confirmar o envio/entrega.
7. Confirmar que o sistema gera automaticamente o envio da mercadoria na venda, quando aplicável.
8. Validar que o rastreio é atribuído automaticamente e que o custo da compra fica refletido na venda.

**Validação final**  
1. A venda está associada à compra correspondente.
2. O custo específico da compra é usado no processo de venda.
3. A receção da compra desencadeia o comportamento esperado no envio da venda.
4. O rastreio fica associado ao processo.

**Notas**  
* Aplicável quando existe envio direto fornecedor-cliente.
* Fonte: Comunicação TIC i9 de 04/06/2024.


## BC-KB-230 — Justificar ajustes de stock
**Categoria:** Stock / Ajustes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao efetuar ajustes de stock, é necessário registar uma justificação para garantir rastreabilidade e controlo do motivo do ajuste.

**Diagnóstico**  
Foi disponibilizado um desenvolvimento para suportar a justificação dos ajustes de stock em Business Central.

**Causa provável**  
Os ajustes de stock sem justificação dificultam a auditoria, a análise posterior e a identificação da causa da correção.

**Solução**  
Sempre que for efetuado um ajuste de stock, preencher a justificação solicitada pelo sistema antes de concluir o registo.

**Como proceder**
1. Identificar o ajuste de stock a realizar.
2. Aceder ao documento, diário ou funcionalidade de ajuste aplicável.
3. Preencher a referência, localização, quantidade e demais informação operacional necessária.
4. Preencher o campo de justificação do ajuste, quando disponibilizado/solicitado pelo sistema.
5. Usar uma descrição objetiva, indicando o motivo do ajuste.
6. Validar se a justificação está coerente com o tipo de movimento.
7. Registar o ajuste apenas depois de a informação estar completa.
8. Em caso de dúvida sobre a justificação adequada, validar com a equipa responsável antes de registar.

**Validação final**  
1. O ajuste de stock fica registado com justificação associada.
2. A informação permite compreender o motivo do movimento.
3. O registo fica mais rastreável para análise posterior ou auditoria.

**Notas**  
* A comunicação original confirma a disponibilização do desenvolvimento, mas não detalha todos os campos/ecrãs. Ajustar este artigo caso existam nomes específicos de campos no ambiente produtivo.
* Fonte: Comunicação TIC i9 de 04/06/2024.


## BC-KB-231 — Gerar Template Logista Pharma com localidade, cidade e limite de linhas
**Categoria:** Logística Externa / Logista Pharma  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário gerar pedidos para a Logista Pharma com template atualizado, garantindo informação correta de localidade/cidade e limite máximo de linhas.

**Diagnóstico**  
O template de criação de pedidos da Logista foi alterado para rever a informação de localidade e cidade e limitar o número de linhas do pedido a 40.

**Causa provável**  
O template anterior podia não apresentar corretamente localidade/cidade ou ultrapassar o limite de linhas aceite no processo.

**Solução**  
Usar o template atualizado gerado pelo Business Central e validar que cada pedido respeita o máximo de 40 linhas.

**Como proceder**
1. Aceder à funcionalidade de geração de pedidos/template Logista Pharma.
2. Gerar o template Excel atualizado.
3. Validar se a informação de localidade e cidade está corretamente preenchida.
4. Confirmar o número de linhas do pedido.
5. Se o pedido tiver mais de 40 linhas, dividir ou tratar conforme o procedimento logístico definido.
6. Enviar o template apenas depois de validar os dados principais do pedido.
7. Guardar evidência do template enviado, se aplicável.

**Validação final**  
1. O template contém localidade e cidade corretamente preenchidas.
2. O pedido não ultrapassa 40 linhas.
3. O ficheiro fica pronto para envio à Logista Pharma.

**Notas**  
* Alteração com efeitos a partir de 25/06/2024.
* Fonte: Comunicação TIC i9 de 24/06/2024.


## BC-KB-232 — Usar produtos não aprovados em Propostas e ENCAV e criar fichas de produto de forma massiva
**Categoria:** Produtos / Oportunidades / Encomendas Abertas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A área de resposta a concursos precisa de utilizar produtos ainda não aprovados em propostas e encomendas abertas de venda, bem como criar fichas de produto de forma massiva.

**Diagnóstico**  
Os produtos passam a poder ser criados desbloqueados para utilização limitada em propostas de venda, resposta a concursos e ENCAV, ficando disponíveis para todos os documentos apenas após conclusão do ciclo de aprovação.

**Causa provável**  
O ciclo de aprovação de produtos pode não estar concluído no momento em que é necessário preparar propostas ou documentos de concurso.

**Solução**  
Criar ou importar fichas de produto conforme o processo massivo e utilizar os produtos em propostas/ENCAV apenas dentro do âmbito permitido até à aprovação final.

**Como proceder**
1. Criar a ficha do produto ou carregar as fichas de forma massiva, conforme procedimento disponível.
2. Confirmar que o produto fica desbloqueado para utilização limitada.
3. Utilizar o produto apenas em áreas permitidas: resposta a concursos, propostas de venda e encomendas abertas de venda.
4. Não utilizar o produto em outros documentos operacionais enquanto o ciclo de aprovação não estiver concluído.
5. Completar a informação obrigatória da ficha de produto.
6. Enviar o produto para aprovação, seguindo o processo normal.
7. Após aprovação, confirmar que o produto fica disponível para utilização em todos os documentos aplicáveis.

**Validação final**  
1. O produto pode ser usado em propostas e ENCAV antes da aprovação final.
2. O produto não é usado indevidamente em documentos fora do âmbito permitido.
3. Após aprovação, o produto fica disponível de forma completa.

**Notas**  
* Este comportamento foi criado para dar agilidade à resposta a concursos sem dispensar a aprovação final do produto.
* Fonte: Comunicação TIC i9 de 22/07/2024.


## BC-KB-233 — Pesquisar clientes por endereço, cidade, distrito ou Nº Contribuinte
**Categoria:** Clientes / Pesquisa  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Na criação de documentos de venda ou consulta da lista de clientes, o utilizador precisa de encontrar clientes por dados adicionais além do número ou nome.

**Diagnóstico**  
Foram adicionados campos visíveis e pesquisáveis na lista de clientes e na criação de documentos de venda.

**Causa provável**  
A pesquisa anterior podia dificultar a identificação rápida do cliente correto, especialmente em clientes com nomes semelhantes.

**Solução**  
Utilizar os novos campos visíveis e pesquisáveis: Endereço, Cidade, Distrito e Nº Contribuinte.

**Como proceder**
1. Aceder à lista de Clientes ou iniciar a criação de um documento de venda.
2. Na pesquisa do cliente, escrever parte do endereço, cidade, distrito ou Nº Contribuinte.
3. Analisar os resultados apresentados.
4. Confirmar se o cliente selecionado corresponde ao NIF/morada pretendidos.
5. Selecionar o cliente correto para consulta ou criação do documento.
6. Caso o cliente não seja encontrado, confirmar se os dados pesquisados estão corretos ou se o cliente existe no Business Central.

**Validação final**  
1. O utilizador consegue pesquisar clientes por Endereço, Cidade, Distrito ou Nº Contribuinte.
2. O cliente correto é identificado com maior rapidez.
3. A criação de documentos de venda fica menos sujeita a seleção incorreta de cliente.

**Notas**  
* Campos adicionados para aumentar produtividade na pesquisa e seleção de clientes.
* Fonte: Comunicação TIC i9 de 24/07/2024.


## BC-KB-234 — Registar Data/Hora Limite para submissão de Erros e Omissões na Oportunidade
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Nos procedimentos concursais, é necessário registar o prazo limite para submissão de esclarecimentos sobre erros e omissões.

**Diagnóstico**  
Foi adicionada na ficha da oportunidade uma informação específica para Data/Hora Limite de submissão de Erros e Omissões.

**Causa provável**  
A ausência desta data na oportunidade reduz visibilidade e pode provocar falhas no acompanhamento dos prazos de concurso.

**Solução**  
Preencher o campo de Data/Hora Limite para submissão de Erros e Omissões na ficha da oportunidade sempre que aplicável.

**Como proceder**
1. Abrir a ficha da Oportunidade associada ao concurso.
2. Confirmar se o procedimento tem prazo definido para submissão de erros e omissões.
3. Localizar o campo de Data/Hora Limite para submissão de Erros e Omissões.
4. Preencher a data e hora conforme indicado nos documentos oficiais do concurso.
5. Guardar a ficha da oportunidade.
6. Confirmar que a informação fica visível para os utilizadores intervenientes no processo.
7. Atualizar a data/hora caso exista esclarecimento, prorrogação ou alteração oficial do prazo.

**Validação final**  
1. A oportunidade apresenta a Data/Hora Limite de Erros e Omissões preenchida.
2. Os intervenientes conseguem consultar o prazo na ficha.
3. O risco de falha de prazo é reduzido.

**Notas**  
* Campo criado na sequência de auditoria à área de resposta a concursos.
* Fonte: Comunicação TIC i9 de 30/07/2024.


## BC-KB-235 — Consultar Nº de PO do cliente nas etiquetas de faturação da Mobilidade
**Categoria:** Mobilidade / Etiquetas / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Alguns clientes não recebem fatura a acompanhar a mercadoria e precisam de ter a sua referência interna visível nos volumes expedidos.

**Diagnóstico**  
Foi adicionada à etiqueta de faturação a indicação do número da(s) PO(s) do cliente.

**Causa provável**  
Com a conversão para fatura eletrónica, a mercadoria pode seguir sem fatura física, tornando necessário reforçar a identificação do pedido do cliente na etiqueta.

**Solução**  
Usar as etiquetas de faturação geradas pela Mobilidade, que passam a incluir o Nº da(s) PO(s) do cliente.

**Como proceder**
1. Preparar o envio/faturação através do processo normal de mobilidade.
2. Gerar a etiqueta de faturação associada ao volume.
3. Confirmar que a etiqueta apresenta o Nº da(s) PO(s) do cliente, quando a informação exista no documento.
4. Validar se a etiqueta acompanha corretamente os volumes expedidos.
5. Em caso de ausência da PO na etiqueta, confirmar se o documento de origem tem a referência do cliente preenchida.
6. Se a referência estiver em falta ou incorreta, corrigir o documento conforme permissões/processo interno antes de nova impressão.

**Validação final**  
1. A etiqueta apresenta o Nº da(s) PO(s) do cliente.
2. O cliente consegue identificar a sua referência interna nos volumes.
3. O processo suporta clientes sem fatura física a acompanhar mercadoria.

**Notas**  
* Alteração criada para apoiar o processo de fatura eletrónica.
* Fonte: Comunicação TIC i9 de 30/07/2024.


## BC-KB-236 — Interpretar indicadores de Encomendas de Venda Lançadas Não Enviadas no Centro de Perfil
**Categoria:** Centro de Perfil / Vendas / Envios  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de interpretar os indicadores de encomendas de venda lançadas que ainda não foram enviadas.

**Diagnóstico**  
Os indicadores foram revistos e estão disponíveis em diferentes Centros de Perfil, com filtros ajustados ao perfil do utilizador.

**Causa provável**  
Sem interpretação correta dos indicadores, pode existir dificuldade em priorizar encomendas pendentes, parcialmente enviadas ou atrasadas.

**Solução**  
Consultar os indicadores no Centro de Perfil e interpretar cada métrica: Prontas para Envio, Parcialmente Enviado, Atrasadas e Média Dias Atraso.

**Como proceder**
1. Aceder ao Business Central com o Centro de Perfil aplicável.
2. Localizar os indicadores de Encomendas de Venda Lançadas Não Enviadas.
3. Interpretar Prontas para Envio como o número de encomendas de venda pendentes de envio.
4. Interpretar Parcialmente Enviado como o número de encomendas de venda parcialmente enviadas.
5. Interpretar Atrasadas como o número de encomendas atrasadas dentro das pendentes de envio.
6. Interpretar Média Dias Atraso como a média da soma do atraso de todas as linhas pendentes.
7. Clicar no indicador, quando aplicável, para abrir a lista filtrada e analisar detalhe.
8. Priorizar ações com base nas encomendas atrasadas e parcialmente enviadas.

**Validação final**  
1. O utilizador compreende o significado de cada indicador.
2. A lista filtrada permite analisar as encomendas por estado.
3. As encomendas atrasadas são identificadas para tratamento.

**Notas**  
* Perfis referidos na comunicação: eDireção Comercial, eApoio Cliente, eDireção Departamento e eGestor Comercial.
* Fonte: Comunicação TIC i9 de 01/08/2024.


## BC-KB-237 — Cancelar ou alterar encomendas pendentes com pedido ao armazém
**Categoria:** Vendas / Encomendas Pendentes / Logística  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de cancelar ou alterar uma encomenda de venda que já tem pedido de envio efetuado ao armazém.

**Diagnóstico**  
O Business Central passou a permitir cancelamento automático do pedido ao armazém em determinadas situações, e foi criada a ação eCancelar pedido ao Armazém para permitir alterações.

**Causa provável**  
Antes da melhoria, existia um alerta impeditivo e era necessário contactar a logística para cancelar manualmente o pedido de envio.

**Solução**  
Usar o cancelamento automático ou a ação eCancelar pedido ao Armazém, respeitando a regra de que encomendas em aviamento continuam a exigir contacto com a logística.

**Como proceder**
1. Identificar a encomenda de venda pendente que necessita de cancelamento ou alteração.
2. Confirmar se a encomenda está parcialmente enviada ou ainda nada enviada.
3. Caso pretenda cancelar a encomenda, executar a remoção/cancelamento conforme o processo normal.
4. Se existir pedido ao armazém e a encomenda não estiver em aviamento, o sistema cancela automaticamente o pedido ao armazém.
5. Se a encomenda estiver em aviamento, não prosseguir apenas pelo sistema; contactar a logística.
6. Caso pretenda alterar a encomenda, abrir a encomenda e selecionar a ação eCancelar pedido ao Armazém.
7. Confirmar que o pedido ao armazém foi cancelado.
8. Reabrir a encomenda.
9. Efetuar as alterações necessárias.
10. Submeter novamente a encomenda para aprovação, quando aplicável.

**Validação final**  
1. O pedido ao armazém é cancelado automaticamente quando permitido.
2. A encomenda pode ser alterada após reabertura.
3. Encomendas em aviamento não são canceladas automaticamente e são tratadas com a logística.
4. A encomenda alterada volta a seguir o processo correto de aprovação/libertação.

**Notas**  
* Após cancelar o pedido ao armazém, a encomenda deve ser reaberta; caso contrário, o pedido pode voltar a ser gerado quando a logística solicitar encomendas pendentes.
* Fonte: Comunicação TIC i9 de 23/08/2024.


## BC-KB-238 — Restrições em Notas de Crédito de Venda para faturas de Débito Direto
**Categoria:** Financeiro / Notas de Crédito / Débito Direto  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário impedir que notas de crédito de venda liquidem indevidamente faturas de débito direto.

**Diagnóstico**  
Foram incluídas restrições na emissão e liquidação de notas de crédito referentes a faturas de DDireto.

**Causa provável**  
Ao copiar uma fatura de DDireto para nota de crédito, a liquidação podia ser inicializada automaticamente, gerando risco de liquidação incorreta.

**Solução**  
Permitir a cópia da fatura para aproveitar informação, mas impedir o registo ou liquidação quando se mantém liquidação associada a fatura de DDireto.

**Como proceder**
1. Criar a nota de crédito, se necessário, através de cópia da fatura original.
2. Confirmar se a fatura copiada é de Débito Direto.
3. Validar se a nota de crédito ficou com liquidação inicializada automaticamente.
4. Se existir liquidação associada à fatura de DDireto, remover/regularizar a liquidação conforme procedimento financeiro antes de registar.
5. Tentar registar a nota de crédito apenas depois de validar que não existe liquidação indevida.
6. Na liquidação manual, não tentar liquidar faturas de DDireto com nota de crédito.
7. Se o sistema apresentar alerta impeditivo, rever a liquidação antes de prosseguir.

**Validação final**  
1. O sistema impede o registo de notas de crédito com liquidação indevida de fatura DDireto.
2. O sistema impede a liquidação de fatura DDireto por nota de crédito.
3. A área financeira mantém controlo sobre este tipo de regularização.

**Notas**  
* A cópia da fatura continua disponível para reutilizar informação; a restrição incide sobre a liquidação/registo indevido.
* Fonte: Comunicação TIC i9, comunicação financeira sem data explícita no ficheiro.


## BC-KB-239 — Validar layout de Propostas de Venda Concurso com lotes e quantidades
**Categoria:** Oportunidades / Propostas de Venda Concurso  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Na impressão de Propostas de Venda Concurso, é necessário garantir uma apresentação clara da informação de lotes e quantidades propostas.

**Diagnóstico**  
Foram atualizados dois pontos no layout: remoção da repetição do lote quando existe mais do que uma posição por lote e alteração da apresentação da quantidade proposta.

**Causa provável**  
A repetição de informação de lote e a apresentação anterior das quantidades dificultavam a leitura por parte do cliente.

**Solução**  
Gerar a Proposta de Venda Concurso com o layout atualizado e validar a apresentação de lotes e quantidades antes de envio ao cliente.

**Como proceder**
1. Abrir a Proposta de Venda associada ao concurso.
2. Confirmar que as linhas, lotes e quantidades estão corretamente preenchidos.
3. Selecionar a opção de impressão de Proposta de Venda Concurso.
4. Gerar a pré-visualização ou o documento final.
5. Validar se a informação de lote não é repetida indevidamente quando há mais de uma posição por lote.
6. Validar se a quantidade proposta está apresentada de forma clara para o cliente.
7. Se existir incoerência de dados, voltar à proposta/oportunidade e corrigir antes de enviar.

**Validação final**  
1. O lote não surge repetido desnecessariamente.
2. A quantidade proposta é apresentada de forma legível.
3. A proposta está pronta para envio ao cliente ou submissão em concurso.

**Notas**  
* Artigo complementar aos procedimentos de impressão de propostas de concurso.
* Fonte: Comunicação TIC i9 de 24/09/2024.


## BC-KB-240 — Utilizar o módulo de Inventário no Business Central e Mobilidade
**Categoria:** Inventário / Mobilidade  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário suportar as contagens de inventário através do novo módulo disponibilizado no Business Central e na aplicação de mobilidade de armazéns.

**Diagnóstico**  
Foi disponibilizado um novo módulo de inventário no Microsoft Business Central e na aplicação de mobilidade de armazéns.

**Causa provável**  
As contagens de inventário requerem suporte estruturado para organização, recolha e validação de contagens.

**Solução**  
Utilizar o módulo de inventário no Business Central em conjunto com a mobilidade para execução das contagens.

**Como proceder**
1. Aceder ao módulo de inventário no Business Central.
2. Validar o inventário/contagem a executar, conforme planeamento definido.
3. Confirmar as localizações, produtos ou áreas incluídas na contagem.
4. Utilizar a aplicação de mobilidade de armazéns para apoiar a recolha física, quando aplicável.
5. Registar as contagens conforme o processo definido para o inventário.
6. Validar diferenças entre stock esperado e contado.
7. Encaminhar diferenças para validação antes de registar ajustes finais.
8. Concluir o processo de inventário após validação das contagens.

**Validação final**  
1. As contagens são suportadas no Business Central e/ou mobilidade.
2. As diferenças de inventário são identificadas.
3. O processo fica preparado para suportar a atividade anual de contagem.

**Notas**  
* A comunicação original informa a disponibilização do módulo, mas não detalha o procedimento completo de inventário.
* Fonte: Comunicação TIC i9 de 27/09/2024.


## BC-KB-241 — Identificar Gestor Comercial de acompanhamento na Oportunidade
**Categoria:** Oportunidades / Gestão Comercial  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário identificar o gestor comercial responsável pelo acompanhamento de uma oportunidade.

**Diagnóstico**  
Foi disponibilizado um campo no cabeçalho da oportunidade para caracterizar o Gestor Comercial de acompanhamento, ficando também disponível na lista de oportunidades.

**Causa provável**  
Sem esta informação, a responsabilidade de acompanhamento comercial podia não ficar clara para os intervenientes.

**Solução**  
Preencher o Gestor Comercial de acompanhamento no cabeçalho da oportunidade e usar a lista de oportunidades para consulta/controlo.

**Como proceder**
1. Abrir a ficha da Oportunidade.
2. No cabeçalho, localizar o campo relativo ao Gestor Comercial de acompanhamento.
3. Selecionar o gestor comercial responsável.
4. Guardar a oportunidade.
5. Voltar à lista de Oportunidades.
6. Confirmar que a informação do gestor comercial está visível na lista.
7. Usar esta informação para filtrar, acompanhar ou distribuir oportunidades.

**Validação final**  
1. A ficha da oportunidade tem o Gestor Comercial de acompanhamento preenchido.
2. A lista de oportunidades mostra esta informação.
3. Os intervenientes conseguem identificar o responsável pelo acompanhamento.

**Notas**  
* Esta informação complementa o Cód. Vendedor e melhora a rastreabilidade comercial da oportunidade.
* Fonte: Comunicação TIC i9 de 02/10/2024.


## BC-KB-242 — Corrigir Nº Documento Externo em Fatura de Venda Registada
**Categoria:** Vendas / Faturas Registadas  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
Foi registada uma fatura de venda com o Nº Documento Externo incorreto, normalmente associado ao número de pedido do cliente.

**Diagnóstico**  
Está disponível no cabeçalho da Fatura de Venda Registada a possibilidade de editar o Nº Documento Externo através da opção Atualizar Documento.

**Causa provável**  
Antes desta funcionalidade, a correção deste campo podia exigir emissão de nota de crédito e nova fatura.

**Solução**  
Solicitar a correção à área financeira autorizada e atualizar o documento através da função Atualizar Documento.

**Como proceder**
1. Aceder à Fatura de Venda Registada afetada.
2. Confirmar que o erro está apenas no campo Nº Documento Externo.
3. Validar qual é o número correto do pedido/documento externo do cliente.
4. No separador Base, selecionar Atualizar Documento.
5. Atualizar o campo Nº Documento Externo com o valor correto.
6. Confirmar a alteração.
7. Validar se o valor atualizado fica visível no cabeçalho da fatura.

**Validação final**  
1. O Nº Documento Externo fica corrigido na fatura registada.
2. Não é necessário emitir nota de crédito apenas para esta retificação.
3. A correção é efetuada por utilizadores com permissão adequada.

**Notas**  
* A permissão para esta alteração foi indicada como disponível apenas para elementos da área financeira, devendo o pedido ser comunicado ao colega Ricardo Arnaut.
* Existe artigo semelhante na KB atual; este artigo mantém a origem TIC i9 como versão estruturada/complementar.
* Fonte: Comunicação TIC i9 de 29/11/2024.


## BC-KB-243 — Identificar clientes públicos e privados na ficha de cliente
**Categoria:** Clientes / Faturação / Grupo de Registo  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário distinguir clientes públicos e privados no Business Central de forma rápida e consistente.

**Diagnóstico**  
A informação foi atualizada com apoio do Departamento Financeiro e passou a estar disponível na ficha do cliente, no separador Faturação, através do Grupo de Registo Cliente.

**Causa provável**  
A identificação manual ou pouco visível de clientes públicos/privados dificultava a análise e o tratamento operacional/comercial.

**Solução**  
Consultar o Grupo de Registo Cliente na ficha do cliente para identificar se o cliente está classificado como público ou privado.

**Como proceder**
1. Aceder à lista de Clientes.
2. Pesquisar e abrir a ficha do cliente pretendido.
3. Ir ao separador Faturação.
4. Localizar o campo Grupo de Registo Cliente.
5. Confirmar se o cliente está classificado como CC-PRIVADOS ou CC-PUBLICOS.
6. Usar esta informação no tratamento financeiro, comercial ou operacional aplicável.
7. Caso a classificação pareça incorreta, encaminhar para validação da área financeira.

**Validação final**  
1. O cliente apresenta classificação pública ou privada na ficha.
2. A informação é consultável diretamente no Business Central.
3. A classificação está alinhada com os critérios definidos pelo Departamento Financeiro.

**Notas**  
* Na atualização comunicada, foram revistos 4201 clientes: 3930 privados e 271 públicos.
* Fonte: Comunicação TIC i9 de 02/01/2025.


## BC-KB-244 — Preencher descrição do motivo de exclusão na Análise Concorrencial
**Categoria:** Oportunidades / Análise Concorrencial  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Na análise concorrencial, é necessário complementar o motivo de exclusão do concurso com uma descrição mais detalhada.

**Diagnóstico**  
Foi adicionada a possibilidade de preencher uma descrição do motivo de exclusão, como complemento aos motivos pré-definidos.

**Causa provável**  
Os motivos de exclusão pré-definidos agregam a informação, mas podem não ser suficientes para explicar o contexto específico de cada concurso.

**Solução**  
Selecionar o motivo de exclusão pré-definido e preencher a descrição complementar com a informação relevante.

**Como proceder**
1. Abrir a oportunidade ou área de análise concorrencial associada ao concurso.
2. Identificar a linha/registo onde é necessário indicar exclusão.
3. Selecionar o motivo de exclusão pré-definido aplicável.
4. Preencher o campo de descrição do motivo de exclusão com detalhe objetivo.
5. Garantir que a descrição complementa o motivo selecionado, sem substituir a categorização.
6. Guardar a informação.
7. Usar esta descrição em análises futuras de perdas/exclusões.

**Validação final**  
1. O motivo de exclusão está selecionado.
2. A descrição complementar está preenchida.
3. A análise concorrencial contém detalhe suficiente para interpretação posterior.

**Notas**  
* A descrição serve como complemento aos motivos de exclusão pré-definidos, que continuam a funcionar como agregadores de informação.
* Fonte: Comunicação TIC i9 de 29/01/2025.


## BC-KB-245 — Preencher Preço Base do Procedimento na Oportunidade
**Categoria:** Oportunidades / Concursos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Nos procedimentos concursais, é necessário dar visibilidade ao preço base do procedimento diretamente na ficha da oportunidade.

**Diagnóstico**  
Foi adicionado no cabeçalho da oportunidade um campo para identificação do Preço Base do Procedimento.

**Causa provável**  
A ausência desta informação no cabeçalho da oportunidade dificultava a análise rápida do enquadramento financeiro do concurso.

**Solução**  
Preencher o campo Preço Base do Procedimento na ficha da oportunidade sempre que essa informação exista nos documentos do concurso.

**Como proceder**
1. Abrir a ficha da Oportunidade.
2. Consultar os documentos do procedimento para identificar o preço base oficial.
3. No cabeçalho da oportunidade, localizar o campo Preço Base do Procedimento.
4. Preencher o valor indicado no procedimento.
5. Confirmar se o valor está na moeda correta e sem erros de casas decimais.
6. Guardar a oportunidade.
7. Usar esta informação para análise comercial, margem, risco e preparação de proposta.

**Validação final**  
1. O preço base do procedimento está preenchido na oportunidade.
2. A informação fica visível no cabeçalho para consulta rápida.
3. A equipa consegue avaliar o concurso com base no valor de referência.

**Notas**  
* Campo criado para maior visibilidade financeira nos procedimentos concursais.
* Fonte: Comunicação TIC i9 de 29/01/2025.


## BC-KB-246 — Duplicar Oportunidades
**Categoria:** Oportunidades / Produtividade  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A área de resposta a concursos precisa de criar oportunidades semelhantes com pequenas diferenças, sem repetir manualmente toda a configuração.

**Diagnóstico**  
Foi disponibilizada a ação eDuplicar Oportunidade, que cria uma nova oportunidade com cópia da configuração, eProdutos e proposta de venda associada, caso exista.

**Causa provável**  
O aumento de pedidos semelhantes gera trabalho repetitivo e maior risco de erro na criação manual de oportunidades.

**Solução**  
Utilizar a ação eDuplicar Oportunidade a partir da oportunidade original.

**Como proceder**
1. Abrir a oportunidade original que pretende copiar.
2. Confirmar que a oportunidade contém a configuração, eProdutos e proposta de venda que devem servir de base.
3. No menu, aceder a Ações.
4. Clicar em eDuplicar Oportunidade.
5. Confirmar a mensagem apresentada pelo sistema, clicando em Sim.
6. Aguardar a confirmação de criação da nova oportunidade.
7. Abrir a nova oportunidade criada.
8. Rever e ajustar os dados que devem ser diferentes da oportunidade original.
9. Validar especialmente cliente/contacto, datas, requisitos, linhas e proposta associada, quando aplicável.

**Validação final**  
1. É criada uma nova oportunidade com base na original.
2. A configuração e os eProdutos são copiados.
3. A proposta de venda é copiada quando existe na oportunidade original.
4. A nova oportunidade pode ser ajustada sem alterar a original.

**Notas**  
* É possível copiar também oportunidades fechadas.
* Fonte: Comunicação TIC i9 de 31/01/2025.


## BC-KB-247 — Indicar atributos AIM e CHNM na Oportunidade
**Categoria:** Oportunidades / Medicamentos / Atributos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Em concursos de medicamentos, pode ser necessário indicar ou imprimir os atributos AIM e CHNM na proposta.

**Diagnóstico**  
Foram adicionados à oportunidade os atributos AIM e CHNM, permitindo identificar se o cliente solicita esta informação e garantindo impressão quando os atributos estão preenchidos na ficha do produto.

**Causa provável**  
O crescimento da resposta a concursos de medicamentos aumentou a necessidade de gerir estes atributos de forma estruturada.

**Solução**  
Na oportunidade, indicar se AIM e/ou CHNM são requeridos e garantir que os produtos têm esses atributos preenchidos na ficha de produto.

**Como proceder**
1. Abrir a ficha da Oportunidade associada ao concurso.
2. Confirmar nos documentos do cliente se é solicitado AIM e/ou CHNM.
3. Na oportunidade, preencher ou ativar a indicação correspondente ao pedido destes atributos.
4. Validar os produtos incluídos na oportunidade/proposta.
5. Abrir a ficha dos produtos, se necessário, e confirmar se os atributos AIM e CHNM estão devidamente preenchidos.
6. Gerar a proposta de venda de concurso.
7. Confirmar se os atributos são impressos quando aplicáveis e preenchidos.

**Validação final**  
1. A oportunidade identifica corretamente o pedido de AIM e/ou CHNM.
2. Os produtos têm os atributos preenchidos na ficha.
3. A proposta imprime os atributos quando aplicável.

**Notas**  
* A impressão depende de os atributos estarem devidamente preenchidos na ficha do produto.
* Fonte: Comunicação TIC i9 de 03/02/2025.


## BC-KB-248 — Exportar Comunicação Trimestral de Medicamentos Exportados ao Infarmed
**Categoria:** DTQAR / Infarmed / Exportação  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário comunicar trimestralmente ao Infarmed os medicamentos exportados, incluindo quantidades e país de destino.

**Diagnóstico**  
Foi criada uma área específica para DTQAR no Business Central, com acesso por email automático no início de cada trimestre ou via eDTQAR > eInfarmed Medicamentos Exportados.

**Causa provável**  
A Deliberação n.º 233/2025 do Infarmed exige comunicação trimestral até ao dia 15 do mês seguinte ao final de cada trimestre.

**Solução**  
Aceder à área eInfarmed Medicamentos Exportados e usar a opção Exportar Template Infarmed para obter o Excel de suporte à validação, tratamento e comunicação.

**Como proceder**
1. Aguardar o email automático enviado no início de cada novo trimestre para os elementos da DTQAR ou aceder diretamente ao Business Central.
2. No Business Central, navegar para eDTQAR > eInfarmed Medicamentos Exportados.
3. Validar o período trimestral a comunicar.
4. Executar a opção Exportar Template Infarmed.
5. Descarregar o ficheiro Excel gerado.
6. Validar as quantidades e países de destino constantes no ficheiro.
7. Efetuar o tratamento necessário antes da submissão ao Infarmed.
8. Garantir que a comunicação é efetuada até ao dia 15 do mês seguinte ao final do trimestre.

**Validação final**  
1. O ficheiro Excel é exportado com os dados de medicamentos exportados.
2. As quantidades e países de destino são validados pela DTQAR.
3. A comunicação ao Infarmed é preparada dentro do prazo regulamentar.

**Notas**  
* Prazos de referência: 15 de janeiro, 15 de abril, 15 de julho e 15 de outubro.
* Fonte: Comunicação TIC i9 de 08/04/2025.


## BC-KB-249 — Configurar cliente para envio de mercadoria apenas com Guia de Remessa
**Categoria:** Clientes / Expedição / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Alguns clientes não devem receber a fatura de venda a acompanhar a mercadoria, devendo o envio seguir apenas com Guia de Transporte/Remessa.

**Diagnóstico**  
Foi estendida à ficha de cliente uma funcionalidade já existente em encomendas de venda, permitindo indicar que os envios para esse cliente devem seguir apenas com guia.

**Causa provável**  
Necessidade de impedir que a fatura acompanhe fisicamente a mercadoria em clientes específicos.

**Solução**  
Na ficha do cliente, ativar a opção que indica envio apenas com Guia de Transporte/Remessa, garantindo que a fatura será enviada posteriormente conforme o método definido para o cliente.

**Como proceder**
1. Abrir a ficha do cliente pretendido.
2. Localizar a opção relacionada com envio apenas com Guia de Transporte/Remessa.
3. Ativar a opção para o cliente, quando aplicável.
4. Confirmar o método de envio posterior da fatura definido para esse cliente.
5. Guardar a ficha do cliente.
6. Criar ou processar uma encomenda de venda para esse cliente.
7. Validar que a mercadoria segue acompanhada apenas pela guia.
8. Confirmar que a fatura não acompanha fisicamente a mercadoria e é enviada posteriormente pelo método definido.

**Validação final**  
1. O cliente está configurado para envio apenas com guia.
2. Os envios do cliente deixam de incluir fatura física com a mercadoria.
3. A fatura continua a ser enviada posteriormente conforme o método definido.

**Notas**  
* Funcionalidade aplicável a clientes específicos, não devendo ser ativada de forma indiscriminada.
* Fonte: Comunicação TIC i9 de 20/05/2025.


## BC-KB-250 — Aplicação automática de portes no Modelo Comercial ePricing
**Categoria:** Pricing / Portes / Modelo Comercial  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário compreender quando os portes são aplicados automaticamente numa encomenda de venda e em que situações o sistema exclui essa aplicação.

**Diagnóstico**  
A aplicação de portes está centralizada no Modelo Comercial ePricing e é avaliada automaticamente pelo Business Central com base em regras previamente definidas.

O sistema considera, entre outros critérios:

- se a aplicação de portes está ativa;
- o segmento do cliente;
- a existência de procedimento concursal;
- o código postal da encomenda;
- o valor mínimo da encomenda sem IVA;
- o produto de portes aplicável.

**Causa provável**  
A dúvida pode surgir quando:

- os portes são aplicados automaticamente numa encomenda;
- os portes não são aplicados numa encomenda onde eram esperados;
- o cliente pertence a um segmento excluído;
- a encomenda tem origem numa oportunidade/procedimento concursal;
- o valor da encomenda está abaixo do mínimo definido para o código postal;
- a encomenda foi alterada e o sistema recalculou os portes.

**Solução**  
O utilizador deve validar a encomenda através do Modelo Comercial ou submeter a encomenda para aprovação. Nesse momento, o sistema avalia automaticamente as regras de portes e aplica, exclui ou recalcula os portes conforme as condições existentes.

A configuração das regras pode ser consultada no **Modelo Comercial**, na área **Transport Fee**, mas a alteração dessas regras não deve ser efetuada pelo utilizador final.

**Como funciona a aplicação automática de portes**

### 1. Avaliação inicial das regras

Ao validar o Modelo Comercial ou ao submeter a encomenda para aprovação, o sistema avalia as condições por ordem:

1. Verifica se a aplicação de portes está ativa no Modelo Comercial.
2. Verifica se o cliente pertence a um segmento excluído.
3. Verifica se a encomenda tem origem numa oportunidade com **Número de Procedimento** preenchido.
4. Verifica o código postal da encomenda.
5. Verifica o valor da encomenda sem IVA.
6. Se o valor da encomenda estiver abaixo do mínimo definido para o código postal, aplica os portes correspondentes.

### 2. Segmentos atualmente excluídos

Atualmente, os seguintes segmentos de cliente estão excluídos da aplicação automática de portes:

SC06 - Distribuidores 
SC10 - ERPI - Estruturas Residenciais para Pessoas Idosas 
SC11 - Farmácias 

Se o cliente pertencer a um destes segmentos, os portes não são aplicados automaticamente, mesmo que a encomenda cumpra outras condições.

### 3. Exclusão de concursos

Se a encomenda tiver origem numa oportunidade com o campo **Número de Procedimento** preenchido, o sistema considera que se trata de um processo concursal.

Nestes casos, os portes não são aplicados automaticamente.

### 4. Código postal e valor mínimo da encomenda

A aplicação de portes também depende da combinação entre:

- código postal da encomenda;
- intervalo de códigos postais configurado;
- valor mínimo de encomenda sem IVA;
- valor de portes definido para esse intervalo.

Se a encomenda estiver abaixo do valor mínimo definido para o código postal aplicável, o sistema poderá aplicar automaticamente o valor de portes correspondente.

### 5. Produto de portes aplicado

Quando existem condições para aplicar portes, o sistema adiciona automaticamente uma linha de produto de portes.

O produto de portes aplicado deve respeitar as regras internas do sistema, nomeadamente:

- o nome do produto deve começar por **“Porte”**;
- a dimensão do produto de portes deve ser compatível com a dimensão da encomenda.

Se o sistema não encontrar um produto de portes adequado, poderá apresentar erro.

### 6. Quando os portes são aplicados

A aplicação dos portes pode ocorrer em dois momentos:

1. Quando o utilizador clica em **eValidar Modelo Comercial** na encomenda.
2. Quando a encomenda é submetida para aprovação.

Se os portes forem aplicados, o sistema acrescenta a linha de portes à encomenda e apresenta uma mensagem de confirmação.

### 7. Alterações posteriores à encomenda

Depois de os portes serem aplicados, a encomenda pode ser alterada, por exemplo:

- adição de novas linhas;
- remoção de linhas;
- alteração de quantidades;
- alteração de produtos;
- alteração de valores.

Se forem feitas alterações relevantes, o sistema poderá recalcular automaticamente os portes quando:

- for feita nova validação do Modelo Comercial;
- ou a encomenda for novamente submetida para aprovação.

### 8. Regras sobre a linha de portes

Depois de aplicada a linha de portes:

- o preço unitário do produto de portes não deve ser alterado manualmente;
- é possível aplicar descontos sobre o valor dos portes, por exemplo 50% ou 100%, quando aplicável.

**Como proceder**

### 1. Validar se os portes foram aplicados

1. Abrir a encomenda de venda.
2. Validar o Modelo Comercial através da opção **eValidar Modelo Comercial**, ou submeter a encomenda para aprovação.
3. Confirmar se foi adicionada uma linha de portes à encomenda.
4. Verificar se o valor dos portes corresponde ao esperado.

### 2. Confirmar se a encomenda está excluída

Se os portes não forem aplicados, validar primeiro se existe uma exclusão aplicável:

1. Confirmar se o cliente pertence a um dos segmentos excluídos:
   - SC06 — Distribuidores;
   - SC10 — ERPI - Estruturas Residenciais para Pessoas Idosas;
   - SC11 — Farmácias.
2. Confirmar se a encomenda tem origem numa oportunidade com **Número de Procedimento** preenchido.
3. Confirmar se o valor da encomenda sem IVA está acima ou abaixo do mínimo aplicável.
4. Confirmar se o código postal da encomenda está abrangido pelas regras existentes.

### 3. Consultar as regras existentes

Para visualização das regras, pode ser consultada a área:

**Configuração → Modelo Comercial → Transport Fee**

Nesta área é possível visualizar informação como:

- se a aplicação de portes está ativa;
- se existem concursos excluídos;
- segmentos excluídos;
- regras por código postal;
- valor mínimo de encomenda;
- valor de portes aplicável.

**Nota:**  
Esta área deve ser usada apenas para consulta por utilizadores sem responsabilidade de configuração. Alterações às regras devem ser tratadas pelos responsáveis do Modelo Comercial/ePricing.

### 4. Verificar impacto de alterações à encomenda

Se a encomenda for alterada depois de os portes terem sido aplicados:

1. Rever as alterações efetuadas à encomenda.
2. Validar novamente o Modelo Comercial.
3. Confirmar se a linha de portes foi mantida, removida ou recalculada.
4. Se a encomenda for submetida novamente para aprovação, confirmar se o sistema voltou a avaliar as regras de portes.

**Validação final**  
O processo está correto quando:

1. Os portes são aplicados automaticamente apenas quando existem condições para tal.
2. Os segmentos excluídos não recebem aplicação automática de portes.
3. Encomendas associadas a procedimento concursal não recebem portes automáticos.
4. O valor dos portes respeita o código postal e o valor mínimo definido.
5. Alterações posteriores à encomenda originam nova avaliação quando o Modelo Comercial é validado ou a encomenda é submetida para aprovação.
6. A linha de portes aparece corretamente na encomenda quando aplicável.

**Notas**

- A aplicação automática de portes depende das regras existentes no Modelo Comercial ePricing.
- A configuração pode ser consultada em **Configuração → Modelo Comercial → Transport Fee**, mas não deve ser alterada pelo utilizador final.
- Os segmentos atualmente excluídos são:
  - **SC06 — Distribuidores**;
  - **SC10 — ERPI - Estruturas Residenciais para Pessoas Idosas**;
  - **SC11 — Farmácias**.
- Se a encomenda estiver associada a uma oportunidade com **Número de Procedimento** preenchido, os portes não são aplicados automaticamente.
- Se a encomenda for alterada, os portes podem ser recalculados.
- O preço unitário da linha de portes não deve ser alterado manualmente.
- Quando aplicável, podem ser usados descontos sobre os portes.
- Em caso de dúvida sobre regras ou valores aplicados, o utilizador deve contactar o responsável pelo Modelo Comercial/ePricing.


## BC-KB-251 — Monitorizar Garantias Bancárias, Cauções, Contratos Escritos e Tribunal de Contas na Oportunidade
**Categoria:** Oportunidades / Concursos Públicos / Garantias  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário centralizar no Business Central a gestão de garantias bancárias, cauções, contratos escritos e submissões ao Tribunal de Contas associadas a oportunidades.

**Diagnóstico**  
Foram criados novos campos no cabeçalho da Oportunidade para monitorizar garantias/cauções e formalidades legais associadas ao processo concursal.

**Causa provável**  
O controlo manual em Excel aumenta o risco de perda de prazos, custos desnecessários e baixa rastreabilidade legal/financeira.

**Solução**  
Preencher os campos de garantias, cauções, contratos escritos, Tribunal de Contas e valor contratual diretamente na ficha da Oportunidade.

**Como proceder**
1. Abrir a ficha da Oportunidade associada ao concurso.
2. Validar se o procedimento exige garantia bancária ou caução.
3. Preencher os campos relativos à existência de garantia/caução.
4. Preencher as datas de início e término da garantia/caução.
5. Validar se o procedimento implica contrato escrito.
6. Validar se existe submissão ao Tribunal de Contas.
7. Preencher o valor contratual associado, quando aplicável.
8. Guardar a oportunidade.
9. Usar estes campos para monitorizar prazos, custos, formalidades e planeamento antes da execução/faturação.

**Validação final**  
1. A oportunidade contém informação de garantias/cauções quando aplicável.
2. As datas de início e fim estão registadas.
3. Contrato escrito, Tribunal de Contas e valor contratual estão identificados.
4. O controlo fica centralizado no Business Central.

**Notas**  
* Objetivo: substituir controlo manual em Excel, aumentar rastreabilidade e melhorar planeamento financeiro e operacional.
* Fonte: Comunicação TIC i9 de 29/10/2025.


## BC-KB-252 — Selecionar o ambiente correto no acesso ao Business Central
**Categoria:** Acesso / Business Central / Ambientes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao aceder ao Business Central, pode ser apresentada uma mensagem de seleção de ambiente, causando dúvida sobre qual opção escolher.

**Diagnóstico**  
Para a Quilaban, os utilizadores devem selecionar sempre a primeira opção: Production.

**Causa provável**  
A seleção de ambiente incorreto pode levar o utilizador para um ambiente que não corresponde ao ambiente normal de trabalho.

**Solução**  
Quando surgir a seleção de ambiente, escolher sempre Production para acesso à Quilaban e não selecionar ProductionAO.

**Como proceder**
1. Aceder ao Business Central pelo link habitual.
2. Caso surja a mensagem de seleção de ambiente, não avançar sem validar a opção.
3. Selecionar a primeira opção: Production.
4. Não selecionar ProductionAO para acesso à Quilaban.
5. Aguardar o carregamento do Business Central.
6. Confirmar que a empresa e o ambiente apresentados correspondem ao ambiente correto de trabalho.
7. Em caso de acesso incorreto, terminar a sessão ou voltar atrás e repetir a seleção.

**Validação final**  
1. O utilizador entra no ambiente Production.
2. A empresa/ambiente de trabalho está correto.
3. O risco de operação em ambiente errado é eliminado.

**Notas**  
* Artigo complementar ao artigo geral de acesso ao Business Central.
* Fonte: Comunicação TIC i9 de 22/12/2025.


## BC-KB-253 — Rever encomenda de venda antes de solicitar Nota de Crédito de Retificação
**Categoria:** Vendas / Devoluções / Notas de Crédito  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao emitir nota de crédito associada a devolução, pode ocorrer duplicação de envio e faturação se a encomenda de venda original continuar ativa/liberta.

**Diagnóstico**  
Quando é registada uma devolução com crédito, o Business Central repõe automaticamente a quantidade na encomenda de venda original. Se a encomenda estiver liberta, a logística poderá gerar novo envio automaticamente.

**Causa provável**  
A encomenda original não foi revista antes da solicitação do crédito, mantendo quantidades prontas para novo envio.

**Solução**  
Antes de solicitar crédito à logística, rever a encomenda de venda original e ajustar/remover linhas conforme a intenção real do cliente.

**Como proceder**
1. Antes de solicitar o crédito à logística, identificar a encomenda de venda de origem.
2. Confirmar se a encomenda existe e se está ativa/liberta.
3. Validar o motivo do crédito e a intenção do cliente.
4. Se o cliente não pretende receber o produto, remover as linhas da encomenda que deram origem ao crédito.
5. Se o cliente pretende produto com validade diferente, remover as linhas que originam crédito e criar/ajustar novas linhas com lote/validade correto.
6. Se o cliente pretende envio noutra data, remover as linhas que originam crédito e criar/ajustar novas linhas com a nova data de envio.
7. Confirmar que a encomenda fica correta e sem quantidades indevidas prontas para envio.
8. Só depois solicitar o crédito à logística.

**Validação final**  
1. A encomenda original foi revista antes da solicitação do crédito.
2. Não existem linhas indevidas prontas para novo envio.
3. O crédito não origina duplicação de envio/faturação.
4. O processo fica alinhado com a intenção real do cliente.

**Notas**  
* Procedimento com efeito imediato na comunicação original.
* Fonte: Comunicação TIC i9 de 15/04.


## BC-KB-254 — Exportar Comunicação Mensal LNP - Lista de Notificação Prévia
**Categoria:** DTQAR / Infarmed / SIEXP / LNP  
**Disponível para Utilizador:** Não  
**Disponível para Agente:** Sim

**Problema**  
É necessário comunicar mensalmente as vendas de medicamentos incluídos na LNP - Lista de Notificação Prévia, com base na lista SIEXP.

**Diagnóstico**  
O Business Central disponibiliza uma área específica para extrair a informação mensal das vendas de medicamentos incluídos na lista SIEXP.

**Causa provável**  
Existe requisito regulatório de comunicação mensal ao Infarmed, aplicável a vendas nacionais e internacionais, considerando valores líquidos.

**Solução**  
Aceder a eDtqar > eSiexp > eSiexp LNP, preencher mês e ano e gerar a lista em Excel.

**Como proceder**
1. Aceder ao Business Central.
2. Navegar para eDtqar > eSiexp > eSiexp LNP.
3. Preencher o período correspondente ao mês anterior.
4. Indicar o mês e o ano pretendidos.
5. Clicar em OK.
6. Aguardar a geração do resultado.
7. Descarregar/abrir a lista em Excel.
8. Validar que a listagem inclui vendas de medicamentos da lista SIEXP, para qualquer país.
9. Confirmar que os valores são líquidos, considerando vendas menos notas de crédito.
10. Preparar a comunicação até dia 15 de cada mês.

**Validação final**  
1. O Excel é gerado para o mês/ano selecionado.
2. A listagem considera medicamentos incluídos na lista SIEXP.
3. Os valores apresentados são líquidos.
4. A informação fica pronta para validação e comunicação regulatória.

**Notas**  
* A lista SIEXP define os produtos a incluir.
* Prazo: até dia 15 de cada mês.
* Fonte: Comunicação TIC i9 de 16/04.


## BC-KB-255 — Identificar Psicotrópicos em Encomendas de Compra
**Categoria:** Compras / Psicotrópicos / Compliance  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a criação ou validação de encomendas de compra, é necessário identificar se algum produto está associado a uma Tabela de Psicotrópicos.

**Diagnóstico**  
Nas linhas da encomenda de compra passou a estar disponível a coluna Produto-Cód. Tabela Psicotrópico, apresentando valores como TAB IV quando aplicável.

**Causa provável**  
Em compras a fornecedores armazenistas, os produtos podem ser inseridos manualmente em plataformas externas e a encomenda pode não ser impressa, aumentando o risco de compra indevida de psicotrópicos a fornecedores sem certificados necessários.

**Solução**  
Verificar a coluna Produto-Cód. Tabela Psicotrópico nas linhas da encomenda de compra e analisar com atenção qualquer linha preenchida antes de avançar com o fornecedor.

**Como proceder**
1. Abrir ou criar a Encomenda de Compra.
2. Nas linhas do documento, localizar a coluna Produto-Cód. Tabela Psicotrópico.
3. Validar cada linha da encomenda.
4. Confirmar se alguma linha tem o campo preenchido, por exemplo TAB IV.
5. Quando o campo estiver preenchido, analisar a compra com atenção antes de avançar.
6. Validar se o fornecedor garante os certificados necessários para venda/fornecimento do produto.
7. Em caso de dúvida, não avançar com a compra sem validação da área responsável.
8. Após validação, prosseguir com o processo normal de compra.

**Validação final**  
1. As linhas com produtos psicotrópicos são identificadas antes do avanço da compra.
2. O comprador consegue sinalizar risco operacional e de incumprimento.
3. A encomenda só avança após análise adequada quando o campo está preenchido.

**Notas**  
* A alteração reforça o controlo no processo de compras, sobretudo em encomendas a fornecedores armazenistas.
* Fonte: Comunicação TIC i9 de 18/05.


## BC-KB-256 — Imprimir Código Pautal em Propostas de Venda a Concurso
**Categoria:** Oportunidades / Propostas / Internacional  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Em propostas de venda a concurso para processos internacionais, pode ser necessário apresentar o Código Pautal para apoiar processos de licenciamento de importação nos países de destino.

**Diagnóstico**  
Foi criado na ficha da oportunidade o seletor Requer Cód. Pautal. Quando ativado, o Código Pautal associado ao produto é apresentado na impressão da Proposta de Venda a Concurso.

**Causa provável**  
A ausência do Código Pautal na proposta obrigava a tratamento manual ou pedidos adicionais de informação, criando risco de inconsistência e atraso.

**Solução**  
Na ficha da oportunidade, ativar o seletor Requer Cód. Pautal quando aplicável e confirmar que os produtos têm Código Pautal preenchido na respetiva ficha.

**Como proceder**
1. Aceder à ficha da Oportunidade associada à Proposta de Venda a Concurso.
2. Validar se o processo requer apresentação do Código Pautal.
3. Validar a informação da oportunidade e dos produtos associados.
4. Ativar o seletor Requer Cód. Pautal, quando aplicável.
5. Confirmar se os produtos têm Código Pautal preenchido na ficha do produto.
6. Gerar ou imprimir a Proposta de Venda a Concurso.
7. Confirmar que o Código Pautal é apresentado abaixo da respetiva linha de produto.
8. Se o código não aparecer, validar se o produto tem Código Pautal preenchido.

**Validação final**  
1. O seletor Requer Cód. Pautal está ativo quando necessário.
2. A proposta apresenta o Código Pautal abaixo da linha do produto.
3. O código apresentado corresponde ao preenchido na ficha do produto.
4. A proposta fica preparada para apoiar processos internacionais de importação.

**Notas**  
* Funcionalidade disponível apenas para impressão de Propostas de Venda a Concurso.
* Se o produto não tiver Código Pautal preenchido na ficha, a informação não será apresentada na proposta.

## BC-KB-257 — Como aceder ao Portal Cliente Quilaban?

**Categoria:** Portal Cliente / Acessos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O cliente pretende aceder ao Portal Cliente Quilaban, mas não sabe como aceitar o convite inicial, iniciar sessão ou resolver situações em que o acesso deixa de estar autorizado.

**Diagnóstico**
O acesso ao Portal Cliente é efetuado através de um convite enviado por email pela organização Quilaban, via Office365.

Após aceitar o convite, o cliente deve validar o acesso através de um código de verificação enviado para o email utilizado na autenticação. Depois da adesão inicial, o acesso passa a poder ser feito através do site da Quilaban, no menu **Portal Cliente**.

**Causa provável**
A dificuldade de acesso pode estar relacionada com uma das seguintes situações:

* o cliente ainda não aceitou o convite inicial;
* o convite foi aceite, mas o código de verificação não foi introduzido;
* o código de verificação expirou;
* as permissões solicitadas não foram aceites;
* o cliente está a tentar aceder com um email diferente do email autorizado;
* o acesso ao Portal Cliente deixou de estar autorizado;
* a conta encontra-se bloqueada, desativada ou sem permissão ativa.

**Solução**
O cliente deve aceitar o convite recebido por email, solicitar o código de verificação, introduzir o código recebido, aceitar as permissões solicitadas e aceder ao Portal Cliente através do site da Quilaban.

Se o acesso estiver bloqueado ou deixar de estar autorizado, o cliente deve contactar o respetivo gestor comercial.

**Como proceder**

### 1. Aceitar o convite de adesão ao Portal Cliente

1. Aceder à caixa de email associada ao cliente.
2. Localizar o email de convite enviado pelo Office365 da organização Quilaban.
3. Confirmar que o convite identifica a organização **Quilaban**.
4. Clicar em **Aceitar Convite**.
5. Será aberta uma página de autenticação associada ao Portal Cliente.

### 2. Solicitar o código de acesso

1. Na página de autenticação, confirmar o email apresentado.
2. Clicar em **Send code** / **Enviar código**.
3. Aguardar o envio do código para o email utilizado na autenticação.
4. Abrir novamente a caixa de email.
5. Localizar o email com o código de verificação da conta.

**Nota:**
O código de verificação tem validade de **30 minutos**.

### 3. Introduzir o código de verificação

1. Copiar o código recebido por email.
2. Voltar à página de autenticação.
3. Introduzir o código no campo indicado.
4. Clicar em **Sign in** / **Iniciar sessão**.
5. Aguardar a validação do acesso.

### 4. Aceitar as permissões solicitadas

1. Após a validação do código, será apresentada uma página com permissões solicitadas pela organização Quilaban.
2. Rever a informação apresentada.
3. Clicar em **Accept** / **Aceitar**.
4. Após aceitar as permissões, o utilizador será encaminhado para o Portal Cliente.

### 5. Aceder posteriormente ao Portal Cliente

1. Aceder ao site da Quilaban:

   * [www.quilaban.pt](http://www.quilaban.pt)
2. Clicar no menu **Portal Cliente**.
3. Será aberta a página do Portal Cliente.
4. Clicar em **Log in**, no canto superior direito.
5. Introduzir o email de acesso autorizado.
6. Clicar em **Seguinte**.
7. Consultar a caixa de email e copiar o código de verificação recebido.
8. Introduzir o código no portal.
9. Clicar em **Iniciar sessão**.

### 6. Validar acesso ao portal

Após login com sucesso, o cliente deverá conseguir visualizar a área principal do Portal Cliente, incluindo informação como:

* dashboard;
* encomendas;
* documentos;
* informação de cliente;
* indicadores ou áreas disponíveis no portal.

**Validação final**
O processo está correto quando:

1. O convite foi aceite com sucesso.
2. O código de verificação foi introduzido dentro do prazo de validade.
3. As permissões solicitadas foram aceites.
4. O cliente consegue iniciar sessão no Portal Cliente.
5. O portal apresenta a área principal com as opções disponíveis ao cliente.

**Casos de erro**

### Acesso deixou de estar autorizado

Se o acesso ao Portal Cliente deixar de estar autorizado, poderão surgir mensagens indicando que:

* o utilizador foi desabilitado;
* a conta está bloqueada;
* a sessão foi encerrada;
* é necessário contactar o suporte ou o responsável.

Nestes casos, o cliente não deverá tentar criar novo acesso sem validação prévia.

**Como proceder em caso de erro**

1. Confirmar se está a utilizar o email correto.
2. Validar se o código de verificação ainda está dentro do prazo de 30 minutos.
3. Se o código expirou, solicitar novo código.
4. Se a conta aparecer bloqueada, desativada ou sem autorização, contactar o gestor comercial.
5. Indicar ao gestor comercial:

   * email utilizado no acesso;
   * mensagem de erro apresentada;
   * momento em que o erro ocorre;
   * se já tinha conseguido aceder anteriormente;
   * captura de ecrã do erro, se possível.

**Notas**

* O código de verificação enviado por email tem validade de 30 minutos.
* O acesso deve ser feito com o email previamente autorizado.
* As permissões solicitadas devem ser aceites para concluir o acesso ao Portal Cliente.
* Se o cliente usar outro email, poderá não conseguir entrar.
* Em caso de conta bloqueada, desativada ou acesso removido, o cliente deve contactar o gestor comercial.
* O gestor comercial deverá validar internamente se o cliente continua autorizado a aceder ao Portal Cliente.

## BC-KB-258 — Como configurar o acesso de um cliente ao Portal Cliente no Business Central?

**Categoria:** Portal Cliente / Configuração
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário configurar o acesso de um cliente ao Portal Cliente Quilaban através do Business Central.

**Diagnóstico**
O cliente só receberá o email de configuração do Portal Cliente depois de a respetiva ficha de cliente estar corretamente configurada no Business Central.

Para isso, é necessário ativar o acesso no separador **ePortal de cliente** e indicar o email do cliente que deverá receber o convite/configuração de acesso.

**Causa provável**
O cliente ainda não recebeu o email de configuração ou não consegue aceder ao Portal Cliente porque:

* o campo **Acesso ao portal de cliente** ainda não foi ativado;
* o email do cliente não foi preenchido;
* o email preenchido está incorreto;
* a alteração ainda não foi processada pelo envio automático noturno;
* o utilizador que está a tratar o pedido não tem permissão para editar a ficha do cliente.

**Solução**
Editar a ficha do cliente no Business Central, aceder ao separador **ePortal de cliente**, ativar o campo **Acesso ao portal de cliente** e preencher o email do cliente que deverá receber o acesso.

**Como proceder**

### 1. Aceder à ficha do cliente

1. No Business Central, pesquisar por **Clientes**.
2. Abrir a lista de clientes.
3. Procurar o cliente que se pretende ativar para acesso ao Portal Cliente.
4. Abrir a respetiva **Ficha de Cliente**.

### 2. Editar a ficha do cliente

1. Na ficha do cliente, clicar em **Editar**.
2. Confirmar que tem permissões para alterar a ficha do cliente.
3. Caso não tenha permissões para editar a ficha, solicitar a alteração ao **Departamento Financeiro**.

### 3. Ativar o acesso ao Portal Cliente

1. Na ficha do cliente, aceder ao separador **ePortal de cliente**.
2. Ativar o botão/campo **Acesso ao portal de cliente**.
3. Confirmar que o campo ficou ativo.

### 4. Preencher o email do cliente

1. Ainda no separador **ePortal de cliente**, preencher o campo **Email**.
2. Indicar o email do cliente ao qual se pretende dar acesso ao Portal Cliente.
3. Confirmar cuidadosamente que o email está correto.
4. Gravar/fechar a ficha do cliente.

### 5. Aguardar o envio automático do email

1. Após a edição da ficha do cliente, o email de configuração não é enviado de imediato.
2. O envio do email de configuração é efetuado durante a noite seguinte à alteração da ficha.
3. O cliente só deverá receber o email na caixa de correio no dia seguinte à edição.

**Validação final**
A configuração está correta quando:

1. A ficha do cliente foi editada com sucesso.
2. O campo **Acesso ao portal de cliente** está ativo.
3. O campo **Email** está preenchido no separador **ePortal de cliente**.
4. O email preenchido corresponde ao email do cliente que deverá aceder ao portal.
5. A alteração foi gravada.
6. O cliente recebe o email de configuração no dia seguinte.
7. O cliente consegue seguir o processo de adesão/acesso ao Portal Cliente.

**Notas**

* Se o utilizador não tiver permissão para editar a ficha do cliente, deve solicitar a alteração ao **Departamento Financeiro**.
* O email de configuração não é enviado imediatamente após a alteração.
* O envio é feito durante a noite seguinte à edição da ficha do cliente.
* O cliente deverá verificar a caixa de correio no dia seguinte à alteração.
* O email configurado deve ser o email que o cliente irá utilizar para aceder ao Portal Cliente.
* Se o email estiver incorreto, o cliente poderá não receber o convite ou não conseguir concluir o acesso.
* Antes de indicar ao cliente que o acesso está disponível, confirmar se já passou o processamento noturno.

## BC-KB-259 — Como efetuar personalização de páginas no Business Central?
**Categoria:** Business Central / Personalização  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador pretende adaptar uma página do Business Central ao seu trabalho diário, mas não sabe como adicionar, mover ou ocultar campos.

**Diagnóstico**  
As páginas do Business Central podem apresentar informação que não é relevante para todos os utilizadores ou, em alternativa, podem ter campos úteis que estão disponíveis mas não visíveis por defeito.

**Causa provável**  
A página está a ser utilizada com a configuração standard ou com uma disposição que não está ajustada às necessidades do utilizador.

**Solução**  
Utilizar a funcionalidade de personalização do Business Central para ajustar a página, permitindo adicionar campos disponíveis, mudar campos de posição ou ocultar informação que não seja necessária. Esta personalização ajuda a tornar o trabalho mais simples, rápido e eficaz.

**Como proceder**

### 1. Abrir a página que pretende personalizar
1. Aceder ao Business Central.
2. Abrir a página onde pretende efetuar a personalização.
3. Confirmar que está na página correta antes de iniciar a alteração.

### 2. Ativar o modo de personalização
1. Clicar na roda dentada no canto superior direito do ecrã.
2. Selecionar a opção **Personalizar**.
3. O Business Central passa a apresentar a barra/opções de personalização da página.

### 3. Mostrar as opções adicionais, se necessário
1. Se apenas aparecerem as opções **Concluído** e **Mais**, clicar em **Mais**.
2. Validar se passa a estar disponível a opção **+ Campo**.
3. Se a opção **+ Campo** já estiver visível, avançar diretamente para o passo seguinte.

### 4. Adicionar campos à página
1. Clicar em **+ Campo** no canto superior esquerdo.
2. Será aberta a lista de campos disponíveis para essa página.
3. Localizar o campo que pretende adicionar.
4. Clicar no campo com o botão esquerdo do rato, manter pressionado e arrastar para a posição pretendida na página.
5. Soltar o botão do rato quando o campo estiver no local desejado.
6. Confirmar visualmente se o campo ficou na posição correta.
7. Repetir o processo para todos os campos que pretende adicionar.

### 5. Reorganizar campos existentes
1. Selecionar o campo que pretende mover.
2. Clicar com o botão esquerdo do rato, manter pressionado e arrastar para a nova posição.
3. Soltar o campo no local pretendido.
4. Confirmar se a nova posição facilita a leitura e utilização da página.

### 6. Ocultar campos que não são necessários
1. No modo de personalização, selecionar o campo que pretende ocultar.
2. Utilizar a opção disponível para ocultar/remover da vista.
3. Confirmar que o campo deixa de aparecer na página.
4. Repetir para outros campos que não sejam úteis para o trabalho diário.

### 7. Concluir a personalização
1. Depois de adicionar, mover ou ocultar os campos necessários, clicar em **Concluído**.
2. Confirmar que a página fica apresentada com a nova organização.
3. Atualizar ou voltar a abrir a página, se necessário, para validar que a personalização ficou gravada.

**Validação final**  
A personalização está correta quando:
1. Os campos adicionados ficam visíveis na página.
2. Os campos reorganizados aparecem na posição pretendida.
3. Os campos ocultados deixam de aparecer.
4. A página fica mais ajustada ao trabalho diário do utilizador.
5. A configuração permanece disponível após sair e voltar a entrar na página.

**Notas**  
- A personalização é feita ao nível do utilizador, ou seja, altera a forma como esse utilizador vê a página.
- A personalização não altera os dados existentes no Business Central.
- Nem todos os campos podem estar disponíveis para adicionar em todas as páginas.
- Se um campo necessário não aparecer na lista de campos disponíveis, poderá ser necessária validação com a equipa de suporte ou desenvolvimento.
- Evitar ocultar campos importantes para validação, controlo ou processos obrigatórios.
- Antes de personalizar páginas críticas, recomenda-se confirmar com a equipa responsável quais os campos essenciais para o processo.

## BC-KB-259 — Como aceder ao Portal de Aprovações do Continia?
**Categoria:** Continia / Portal de Aprovações  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de aceder ao Portal de Aprovações do Continia para consultar ou decidir pedidos de aprovação pendentes.

**Diagnóstico**  
O acesso pode ser feito através do link recebido por email quando existe um pedido pendente ou através do link direto disponibilizado internamente.

**Causa provável**  
O utilizador recebeu uma notificação de aprovação ou pretende consultar os pedidos em aberto diretamente no portal.

**Solução**  
Aceder ao Portal de Aprovações do Continia através do link recebido na notificação de email ou através do link direto do portal, usando as credenciais habituais.

**Como proceder**
1. Abrir o email de notificação recebido do Continia.
2. Confirmar que o email está relacionado com um pedido de aprovação pendente.
3. Clicar no link disponível na mensagem para abrir o Portal de Aprovações.
4. Em alternativa, abrir diretamente o link do portal disponibilizado internamente.
5. Iniciar sessão, se solicitado.
6. Aceder à área de aprovações em aberto.
7. Confirmar se existem pedidos pendentes para análise.

**Validação final**  
O utilizador consegue entrar no Portal de Aprovações do Continia e visualizar os pedidos que aguardam a sua decisão.

**Notas**
- O email de notificação apresenta um resumo da informação principal do pedido.
- O link do email permite aceder diretamente ao portal.
- Também é possível aceder ao portal sem email, usando o link direto disponibilizado internamente.
- O utilizador apenas deve decidir pedidos depois de validar a informação necessária.


## BC-KB-260 — Como consultar pedidos pendentes no Portal de Aprovações do Continia?
**Categoria:** Continia / Aprovações Pendentes  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador pretende saber que documentos aguardam a sua decisão no Portal de Aprovações do Continia.

**Diagnóstico**  
Os pedidos pendentes ficam disponíveis na área de aprovações em aberto do portal.

**Causa provável**  
Existem documentos enviados para aprovação que ainda não foram aprovados, rejeitados ou reencaminhados pelo validador.

**Solução**  
Aceder ao Portal de Aprovações e consultar a lista de pedidos em aberto, validando a informação essencial apresentada em cada linha.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Entrar na área de aprovações em aberto.
3. Consultar a lista de documentos pendentes.
4. Rever a informação apresentada em cada linha, como:
   - tipo de documento;
   - data;
   - fornecedor;
   - valor;
   - descrição;
   - comentários associados.
5. Selecionar o pedido pretendido para análise.
6. Caso a informação da lista seja suficiente, decidir diretamente a partir da lista, se aplicável.
7. Caso seja necessário mais detalhe, abrir o pedido antes de tomar decisão.

**Validação final**  
A lista apresenta os pedidos pendentes do utilizador e permite identificar quais necessitam de aprovação, rejeição ou reencaminhamento.

**Notas**
- A lista centraliza os pedidos em aberto do validador.
- Antes de aprovar ou rejeitar, deve ser validado se a informação apresentada é suficiente.
- Se existirem dúvidas, o pedido deve ser aberto para consulta detalhada.


## BC-KB-261 — Como abrir e analisar um pedido de aprovação no Continia?
**Categoria:** Continia / Análise de Pedidos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de analisar o detalhe de um pedido antes de tomar uma decisão no Portal de Aprovações do Continia.

**Diagnóstico**  
A lista de aprovações apresenta apenas a informação essencial. Para validar o pedido de forma completa, é necessário abrir o detalhe do documento.

**Causa provável**  
O pedido requer validação adicional antes de ser aprovado, rejeitado ou reencaminhado.

**Solução**  
Abrir o pedido de aprovação e analisar os dados principais, comentários, documento digitalizado e informação capturada automaticamente.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Abrir a área de aprovações em aberto.
3. Selecionar o pedido que pretende analisar.
4. Abrir o detalhe do pedido.
5. Validar a informação geral apresentada no portal.
6. Confirmar os dados principais do pedido, nomeadamente:
   - fornecedor;
   - descrição;
   - valor;
   - data;
   - comentários associados.
7. Consultar o detalhe do documento.
8. Analisar o documento digitalizado, se disponível.
9. Validar a informação capturada automaticamente.
10. Depois da análise, decidir se o pedido deve ser aprovado, rejeitado ou reencaminhado.

**Validação final**  
O pedido foi aberto e a informação necessária foi analisada antes da decisão.

**Notas**
- A abertura do pedido permite uma validação mais completa do que a análise pela lista.
- A decisão deve ser tomada apenas depois de confirmar que os dados do documento estão corretos.
- Os comentários existentes devem ser considerados antes da decisão final.


## BC-KB-262 — Como validar o documento digitalizado e a captura automática de dados no Continia?
**Categoria:** Continia / Validação Documental  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de confirmar se o documento digitalizado e os dados capturados automaticamente estão corretos antes de aprovar.

**Diagnóstico**  
O Continia apresenta o documento digitalizado e o resultado da captura automática de dados, permitindo comparar a informação reconhecida com o documento original.

**Causa provável**  
A aprovação deve garantir que os dados principais do documento estão corretos e coerentes com a informação capturada.

**Solução**  
Abrir o pedido de aprovação, consultar o documento digitalizado e validar se os dados capturados correspondem à informação do documento.

**Como proceder**
1. Abrir o pedido de aprovação no Portal de Aprovações do Continia.
2. Aceder à área de detalhe do documento.
3. Consultar o documento digitalizado.
4. Validar se os dados capturados automaticamente estão corretos.
5. Confirmar se os dados principais coincidem com o documento, incluindo:
   - fornecedor;
   - data;
   - valor;
   - descrição;
   - dados de aprovação;
   - informação relevante para decisão.
6. Se a informação estiver correta, prosseguir com a aprovação, se aplicável.
7. Se existirem erros, acrescentar comentário e rejeitar ou reencaminhar o pedido, conforme o caso.

**Validação final**  
O documento digitalizado foi consultado e os dados capturados automaticamente foram confirmados antes da decisão.

**Notas**
- A validação da captura automática reduz o risco de aprovar documentos com informação incorreta.
- Se a informação capturada não estiver correta, o pedido não deve ser aprovado sem correção.
- A decisão deve ficar suportada por comentário sempre que exista erro ou dúvida.


## BC-KB-263 — Como aprovar um pedido no Portal de Aprovações do Continia?
**Categoria:** Continia / Aprovação de Documentos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de aprovar um documento pendente no Portal de Aprovações do Continia.

**Diagnóstico**  
O pedido encontra-se pendente e aguarda decisão do validador.

**Causa provável**  
O documento foi encaminhado para aprovação no fluxo definido e reúne condições para avançar.

**Solução**  
Validar o pedido e selecionar a opção de aprovação no portal.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Abrir a área de aprovações em aberto.
3. Selecionar o pedido pendente.
4. Validar os dados principais do documento.
5. Abrir o pedido, se for necessário consultar mais detalhe.
6. Confirmar que a informação está correta.
7. Selecionar a opção de aprovação.
8. Confirmar a decisão, se solicitado.
9. Verificar que o pedido deixa de estar pendente para o utilizador.

**Validação final**  
O pedido fica aprovado no portal e segue automaticamente para a próxima etapa do fluxo ou fica concluído, conforme a configuração do processo.

**Notas**
- A aprovação fica registada no histórico do circuito de aprovação.
- O pedido só deve ser aprovado se a informação estiver correta e o documento reunir condições para avançar.
- Se for necessária validação adicional por outra pessoa, deve ser usada uma opção de reencaminhamento em vez da aprovação simples.


## BC-KB-264 — Como rejeitar um pedido no Portal de Aprovações do Continia?
**Categoria:** Continia / Rejeição de Documentos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador identificou que o pedido não está correto ou não reúne condições para aprovação.

**Diagnóstico**  
Durante a análise, foram detetados dados incorretos, informação em falta, documento incompleto ou outra situação que impede a aprovação.

**Causa provável**  
O documento pode ter sido capturado com erro, registado com informação incorreta ou estar incompleto para decisão.

**Solução**  
Rejeitar o pedido no Portal de Aprovações do Continia, indicando o motivo de forma clara e objetiva através de comentário.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Abrir a área de aprovações em aberto.
3. Selecionar o pedido que pretende rejeitar.
4. Abrir o detalhe do pedido, se necessário.
5. Confirmar qual é o erro ou motivo que impede a aprovação.
6. Adicionar um comentário com a justificação da rejeição.
7. Selecionar a opção de rejeição.
8. Confirmar a rejeição.
9. Verificar que o pedido deixa de estar pendente para o utilizador.

**Validação final**  
O pedido fica rejeitado e o processo não avança no fluxo de aprovação.

**Notas**
- O comentário de rejeição deve indicar o que deve ser corrigido.
- A área responsável pela gestão do documento fica com indicação do motivo da rejeição.
- A rejeição evita aprovações indevidas e facilita a correção do documento.


## BC-KB-265 — Que motivo devo indicar ao rejeitar um pedido no Continia?
**Categoria:** Continia / Rejeição de Documentos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de rejeitar um pedido, mas não sabe que informação deve colocar no comentário de rejeição.

**Diagnóstico**  
A rejeição deve ser acompanhada de um motivo claro para que a área responsável consiga corrigir o documento.

**Causa provável**  
Sem comentário objetivo, a correção do documento pode ficar atrasada ou ser feita de forma incompleta.

**Solução**  
Indicar no comentário o motivo concreto da rejeição, identificando o ponto a corrigir.

**Como proceder**
1. Antes de rejeitar, identificar o motivo exato da rejeição.
2. Aceder à área de comentários do pedido.
3. Escrever uma justificação clara, curta e objetiva.
4. Exemplos de motivos:
   - centro de custo incorreto;
   - valor incorreto;
   - documento incompleto;
   - informação em falta;
   - fornecedor incorreto;
   - dados capturados não coincidem com o documento;
   - falta de documentação de suporte.
5. Confirmar o comentário.
6. Rejeitar o pedido.

**Validação final**  
O pedido fica rejeitado com uma justificação suficiente para permitir a correção.

**Notas**
- Evitar comentários genéricos como “não está correto”.
- O comentário deve indicar o problema e, sempre que possível, o que deve ser corrigido.
- Um bom motivo de rejeição reduz trocas adicionais de email e acelera a correção.


## BC-KB-266 — Como reencaminhar um pedido de aprovação no Continia?
**Categoria:** Continia / Reencaminhamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O aprovador percebe que não é a pessoa indicada para decidir ou que é necessária validação de outra pessoa antes da decisão final.

**Diagnóstico**  
O pedido está pendente no portal, mas deve ser encaminhado para outro utilizador por motivo de validação, aprovação adicional ou correção de destinatário.

**Causa provável**  
A decisão depende de outra área, outro responsável ou validação prévia antes da decisão final.

**Solução**  
Usar as opções de reencaminhamento disponíveis no Portal de Aprovações do Continia.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Selecionar o pedido de aprovação.
3. Escolher a opção de reencaminhamento adequada ao caso.
4. Selecionar a pessoa para quem pretende encaminhar o pedido.
5. Adicionar um comentário a explicar o motivo do reencaminhamento.
6. Confirmar o reencaminhamento.
7. Validar que o pedido foi encaminhado e deixou de estar apenas dependente da ação inicial.

**Validação final**  
O pedido fica encaminhado para a pessoa selecionada e mantém-se dentro do circuito digital de aprovação.

**Notas**
- O reencaminhamento evita trocas paralelas por email.
- O comentário ajuda o destinatário a compreender o motivo do encaminhamento.
- O histórico do pedido fica registado no portal.
  

## BC-KB-267 — Qual a diferença entre Aprovar e enviar, Reencaminhar sem aprovação e Reencaminhar e devolver para mim?
**Categoria:** Continia / Reencaminhamento  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador não sabe qual opção de reencaminhamento deve escolher no Portal de Aprovações do Continia.

**Diagnóstico**  
Existem várias opções de encaminhamento, cada uma com impacto diferente no fluxo de aprovação.

**Causa provável**  
As opções disponíveis podem parecer semelhantes, mas representam decisões diferentes no processo.

**Solução**  
Selecionar a opção correta de acordo com o objetivo pretendido: aprovar e pedir validação adicional, reencaminhar sem decidir ou pedir validação e receber novamente o pedido.

**Como proceder**

### 1. Usar “Aprovar e enviar”
1. Selecionar esta opção quando concorda com o pedido.
2. Usar quando o documento também deve ser validado ou aprovado por outra pessoa.
3. O pedido segue para o destinatário indicado depois da sua aprovação.

### 2. Usar “Reencaminhar sem aprovação”
1. Selecionar esta opção quando não pretende aprovar o pedido.
2. Usar quando considera que não é o aprovador correto.
3. Usar quando outra área ou pessoa deve tomar a decisão.

### 3. Usar “Reencaminhar e devolver para mim”
1. Selecionar esta opção quando é necessária validação prévia por outra pessoa.
2. Usar quando a decisão final deve voltar ao aprovador inicial.
3. Indicar claramente no comentário que informação ou validação é necessária.

**Validação final**  
A opção escolhida corresponde ao objetivo pretendido e o pedido segue o fluxo correto.

**Notas**
- Antes de confirmar, validar sempre quem será o destinatário do reencaminhamento.
- Sempre que reencaminhar, adicionar comentário explicativo.
- A escolha incorreta pode atrasar o processo de aprovação.


## BC-KB-268 — Como adicionar comentários a um pedido de aprovação no Continia?
**Categoria:** Continia / Comentários  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador pretende deixar contexto, observações ou justificações num pedido de aprovação.

**Diagnóstico**  
O Portal de Aprovações permite adicionar comentários ao pedido antes de tomar uma decisão.

**Causa provável**  
Pode ser necessário justificar uma decisão, pedir contexto adicional ou sinalizar um ponto relevante para outros intervenientes.

**Solução**  
Adicionar o comentário diretamente na área de comentários do pedido.

**Como proceder**
1. Abrir o pedido de aprovação no Portal de Aprovações do Continia.
2. Aceder à área de comentários.
3. Escrever a observação ou justificação pretendida.
4. Confirmar/gravar o comentário.
5. Tomar a decisão aplicável:
   - aprovar;
   - rejeitar;
   - reencaminhar;
   - aguardar validação adicional, se necessário.

**Validação final**  
O comentário fica associado ao pedido e passa a fazer parte do histórico do processo.

**Notas**
- Os comentários devem ser claros, objetivos e úteis para quem consulta o pedido.
- Podem ser usados para justificar decisões, pedir contexto adicional ou sinalizar alertas.
- Em caso de rejeição, o comentário deve indicar claramente o motivo.


## BC-KB-269 — Como adicionar anexos a um pedido de aprovação no Continia?
**Categoria:** Continia / Anexos  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de complementar a análise de um pedido com documentação adicional.

**Diagnóstico**  
O Portal de Aprovações permite adicionar anexos ao pedido, associando documentação de suporte ao processo.

**Causa provável**  
A decisão pode depender de evidências, documentos complementares ou informação adicional que não está incluída no pedido original.

**Solução**  
Adicionar o ficheiro de suporte diretamente no pedido de aprovação.

**Como proceder**
1. Abrir o pedido de aprovação no Portal de Aprovações do Continia.
2. Aceder à área de anexos.
3. Adicionar o ficheiro relevante.
4. Confirmar que o anexo ficou associado ao pedido.
5. Se necessário, adicionar um comentário a explicar o motivo do anexo.
6. Prosseguir com a decisão aplicável.

**Validação final**  
O anexo fica associado ao pedido e passa a fazer parte do histórico do processo.

**Notas**
- Os anexos devem ser usados para documentação adicional, evidências ou informação de suporte.
- Sempre que o anexo seja essencial para a decisão, recomenda-se adicionar comentário explicativo.
- A documentação anexada ajuda a manter o processo completo e rastreável.


## BC-KB-270 — Como alterar o idioma no Portal de Aprovações do Continia?
**Categoria:** Continia / Preferências  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador pretende alterar o idioma do Portal de Aprovações do Continia para tornar a navegação mais clara.

**Diagnóstico**  
O portal permite ajustar preferências pessoais através da roldana disponível no canto superior direito.

**Causa provável**  
O idioma atual do portal não está adequado ao utilizador ou não facilita a análise dos pedidos.

**Solução**  
Alterar o idioma nas preferências pessoais do Portal de Aprovações e guardar as alterações.

**Como proceder**
1. Aceder ao Portal de Aprovações do Continia.
2. Clicar na roldana no canto superior direito.
3. Abrir a área de preferências.
4. Selecionar o idioma pretendido.
5. Guardar as alterações.
6. Confirmar que o portal passa a apresentar o idioma selecionado.

**Validação final**  
O idioma do portal fica alterado e a configuração permanece aplicada ao utilizador.

**Notas**
- É importante guardar as alterações no final.
- A configuração é pessoal e adapta a navegação ao validador.
- Se o idioma não alterar de imediato, atualizar a página ou voltar a entrar no portal.


## BC-KB-271 — Que informação devo validar antes de aprovar um documento no Continia?
**Categoria:** Continia / Boas Práticas de Aprovação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador quer garantir que valida a informação correta antes de aprovar um documento no Portal de Aprovações do Continia.

**Diagnóstico**  
A aprovação deve ser baseada na análise dos dados principais do pedido, documento digitalizado, captura automática de dados e comentários associados.

**Causa provável**  
A aprovação sem validação suficiente pode permitir que documentos incorretos avancem no processo.

**Solução**  
Antes de aprovar, validar os dados principais, o detalhe do documento e qualquer informação complementar existente.

**Como proceder**
1. Abrir o pedido de aprovação.
2. Validar os dados principais:
   - fornecedor;
   - descrição;
   - valor;
   - data;
   - dados de aprovação;
   - comentários associados.
3. Abrir o detalhe do documento.
4. Consultar o documento digitalizado.
5. Confirmar se a captura automática de dados está correta.
6. Verificar se existem comentários ou anexos relevantes.
7. Se a informação estiver correta, aprovar.
8. Se existir dúvida, erro ou informação em falta, comentar, rejeitar ou reencaminhar.

**Validação final**  
A decisão de aprovação é tomada com base na análise completa da informação disponível no pedido.

**Notas**
- A aprovação deve ser feita apenas quando o documento reunir condições para avançar.
- Em caso de dúvida, não aprovar sem validação adicional.
- Comentários e anexos ajudam a contextualizar a decisão.

## BC-KB-272 — Aceder à aplicação de Mobilidade e retomar uma atividade em curso
**Categoria:** Mobilidade / Acesso  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de aceder à aplicação de Mobilidade de armazém, mas não sabe qual a variante correta ou é redirecionado automaticamente para uma atividade.

**Diagnóstico**  
A aplicação de Mobilidade tem variantes diferentes por dispositivo e atividade. Ao entrar, se existir uma recolha ou conferência de expedição em curso, o sistema pode redirecionar automaticamente o utilizador para essa atividade.

**Causa provável**  
O utilizador está a iniciar sessão num dispositivo sem conhecer a finalidade da variante instalada, ou deixou uma atividade de recolha/conferência em aberto.

**Solução**  
Entrar com as credenciais próprias e confirmar se a aplicação abre a área principal de atividades ou se redireciona para uma atividade já iniciada.

**Como proceder**

### 1. Validar o dispositivo utilizado
1. Usar a variante PDA para atividades de entrada: receção, conferência e arrumação.
2. Usar a variante PDA também para faturação na saída.
3. Usar a variante tablet para recolha.
4. Usar a variante PC para conferência de expedição.

### 2. Entrar na aplicação
1. Abrir o ícone da aplicação no dispositivo.
2. Introduzir o utilizador e password próprios.
3. Confirmar a entrada na área principal de atividades.

### 3. Confirmar redirecionamento automático
1. Se surgir uma mensagem de atividade em progresso, confirmar a informação apresentada.
2. Prosseguir para a atividade apresentada pelo sistema.
3. Concluir ou regularizar a atividade antes de iniciar nova operação.

**Validação final**  
O utilizador entra na aplicação com as suas credenciais e fica posicionado na área correta: lista de atividades ou atividade em curso.

**Notas**  
Não é permitida a utilização de dados de acesso de outros colaboradores. Se o redirecionamento impedir o início de outra tarefa, deve ser validado se existe recolha ou conferência em curso associada ao utilizador.

---

## BC-KB-273 — Interpretar indicadores, selecionar armazém e consultar mensagens na Mobilidade
**Categoria:** Mobilidade / Área de Trabalho  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador vê números nas atividades da Mobilidade, mas não sabe o que representam ou porque variam consoante o armazém.

**Diagnóstico**  
Os indicadores da área principal mostram documentos pendentes por atividade, com base nos armazéns a que o utilizador tem acesso.

**Causa provável**  
O utilizador pode estar com o armazém errado selecionado, com acesso limitado a determinados armazéns ou a interpretar incorretamente os indicadores das recolhas.

**Solução**  
Confirmar o armazém selecionado, rever os indicadores apresentados e consultar a área de mensagens para validar alertas e notas da operação.

**Como proceder**

### 1. Confirmar o armazém
1. Entrar na aplicação de Mobilidade.
2. Na área principal, abrir a seleção de armazém.
3. Escolher um armazém específico ou a opção "Todos".
4. Confirmar se os indicadores das atividades foram atualizados.

### 2. Interpretar os indicadores
1. Em regra, o número apresentado representa documentos pendentes nessa atividade.
2. Nos envios, a leitura pode ser diferente, pois a atividade não segue exatamente o mesmo indicador das restantes.
3. Nas recolhas, validar os dois indicadores: recolhas pendentes e recolhas que o utilizador pode executar.

### 3. Consultar mensagens
1. Abrir a área de mensagens da aplicação.
2. Rever alertas, erros ou notas informativas.
3. Usar as mensagens como apoio ao diagnóstico antes de reportar uma anomalia.

**Validação final**  
O utilizador confirma que está no armazém correto, interpreta os indicadores apresentados e consegue consultar mensagens de apoio à operação.

**Notas**  
Os armazéns disponíveis dependem da configuração do utilizador como empregado de armazém no Business Central/NAV.

---

## BC-KB-274 — Receber mercadoria na Mobilidade através da atividade E1: Receber
**Categoria:** Mobilidade / Entrada / Receção  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Chegou mercadoria ao armazém e o utilizador precisa de iniciar a receção na aplicação de Mobilidade.

**Diagnóstico**  
A atividade E1: Receber deve ser usada quando chega mercadoria ao armazém por encomenda de compra, devolução ou transferência.

**Causa provável**  
A mercadoria chegou fisicamente, mas ainda não foi criada a receção operacional na Mobilidade.

**Solução**  
Criar a receção na atividade E1: Receber, selecionando o tipo de documento e a origem correta.

**Como proceder**

### 1. Iniciar a receção
1. Entrar na aplicação de Mobilidade.
2. Confirmar o armazém correto.
3. Selecionar a atividade "Receber".

### 2. Identificar o tipo de documento
1. Escolher o tipo de documento recebido:
   - Encomenda de Compra;
   - Devolução;
   - Transferência.
2. Selecionar o fornecedor, cliente ou armazém, conforme o tipo de documento.

### 3. Submeter a receção
1. Confirmar os dados introduzidos.
2. Submeter a receção.
3. Aguardar a criação dos processos de receção no Business Central/NAV.

**Validação final**  
A aplicação apresenta a mensagem com o número de receções criadas e os armazéns envolvidos.

**Notas**  
Só é possível receber documentos que tenham sido previamente criados no Business Central/NAV.

---

## BC-KB-275 — Selecionar documento, guia, paletes e volumes na receção de mercadoria
**Categoria:** Mobilidade / Entrada / Receção  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a receção, o utilizador não sabe se deve preencher o número do documento de origem nem como registar guia, paletes e volumes.

**Diagnóstico**  
Na receção, o documento de origem pode ser selecionado quando a guia/documentação do fornecedor identifica o nosso número de documento. Caso contrário, o documento pode ficar em branco.

**Causa provável**  
A mercadoria chegou com documentação incompleta ou sem referência clara ao nosso documento interno.

**Solução**  
Preencher sempre o tipo de documento e a origem. Selecionar o documento apenas quando existir correspondência clara com a documentação recebida.

**Como proceder**

### 1. Validar a documentação física
1. Confirmar se a guia do fornecedor acompanha a mercadoria.
2. Verificar se a guia menciona o nosso número de encomenda, devolução ou transferência.
3. Confirmar o número de paletes e volumes recebidos.

### 2. Preencher a receção na Mobilidade
1. Selecionar o tipo de documento.
2. Selecionar fornecedor, cliente ou armazém.
3. Se a documentação indicar o nosso número de documento, selecionar esse documento.
4. Se não for possível identificar o documento, deixar o campo de documento em branco.
5. Preencher o número da guia do fornecedor.
6. Preencher número de paletes e volumes.

### 3. Submeter
1. Rever os dados introduzidos.
2. Submeter a receção.
3. Confirmar a mensagem de receções geradas.

**Validação final**  
A receção é criada com a guia, paletes e volumes corretos, sem associação indevida a documento errado.

**Notas**  
Se existir dúvida sobre o documento de origem, é preferível deixar o documento em branco e permitir tratamento posterior, em vez de associar a receção a um documento incorreto.

---

## BC-KB-276 — Reimprimir etiqueta de receção ou identificar manualmente a palete
**Categoria:** Mobilidade / Entrada / Etiquetas  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A etiqueta de receção não imprimiu automaticamente ou ficou inutilizada.

**Diagnóstico**  
Após a criação da receção, a impressão da etiqueta deve ser automática. A etiqueta identifica o processo, origem, data/hora, utilizador, armazém, paletes e volumes.

**Causa provável**  
Falha temporária de impressão, impressora indisponível, erro de comunicação ou etiqueta danificada.

**Solução**  
Tentar a reimpressão através da opção "Imprimir". Se a impressão não for possível, identificar manualmente a palete com o número do processo.

**Como proceder**

### 1. Confirmar a falha de impressão
1. Validar se a etiqueta saiu na impressora correta.
2. Confirmar se a etiqueta corresponde ao processo correto.
3. Se não imprimiu, voltar ao ecrã da receção.

### 2. Reimprimir etiqueta
1. Selecionar a opção "Imprimir".
2. Aguardar nova impressão.
3. Confirmar se a etiqueta está legível.
4. Colar a etiqueta na palete ou volume correspondente.

### 3. Identificação manual, se necessário
1. Se não for possível imprimir, identificar a palete manualmente.
2. Escrever de forma legível o número do processo.
3. Garantir que a palete não avança para conferência sem identificação.

**Validação final**  
A palete fica identificada com etiqueta ou, em alternativa, com o número do processo escrito manualmente.

**Notas**  
A etiqueta é crítica para a leitura posterior na conferência. Sem identificação, a operação pode ficar bloqueada ou ser conferida no processo errado.

---

## BC-KB-277 — Receção já em aberto para o mesmo fornecedor e documento
**Categoria:** Mobilidade / Entrada / Receção  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar iniciar uma nova receção, a Mobilidade indica que já existe uma receção em curso para o mesmo documento ou conjunto de documentos.

**Diagnóstico**  
Quando existe uma receção aberta para o mesmo fornecedor e documento, a aplicação não permite iniciar uma nova receção separada.

**Causa provável**  
Chegou nova mercadoria associada a um processo de receção que ainda não foi concluído.

**Solução**  
Utilizar o processo já existente, reimprimir a etiqueta e juntar a nova mercadoria à mercadoria anteriormente rececionada.

**Como proceder**

### 1. Confirmar a mensagem
1. Ler a mensagem apresentada pela Mobilidade.
2. Identificar o número do processo em curso.
3. Confirmar que a mercadoria pertence ao mesmo documento ou conjunto de documentos.

### 2. Reimprimir a etiqueta
1. Selecionar a opção de impressão da etiqueta do processo existente.
2. Colar a etiqueta na nova palete ou volume recebido.
3. Juntar a mercadoria ao processo já em curso.

### 3. Prosseguir com o fluxo normal
1. Encaminhar a mercadoria para a zona E1.
2. Manter o mesmo número de processo para conferência posterior.

**Validação final**  
A nova mercadoria fica integrada no processo de receção já existente e não é criada uma receção duplicada.

**Notas**  
Não forçar nova receção quando a aplicação indica processo aberto. Isso evita duplicação de processos e divergências na conferência.

---

## BC-KB-278 — Iniciar conferência de mercadoria na entrada através da atividade E2: Conferir
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Existe mercadoria na zona de receção e é necessário iniciar a conferência na Mobilidade.

**Diagnóstico**  
A atividade E2: Conferir deve ser usada quando existem paletes ou volumes na zona E1 com etiqueta e número de processo.

**Causa provável**  
A receção foi criada, mas a mercadoria ainda não foi conferida fisicamente por produto, lote, validade e quantidade.

**Solução**  
Mover a mercadoria para a zona E2, ler a etiqueta do processo e iniciar a conferência dos produtos.

**Como proceder**

### 1. Preparar a mercadoria
1. Confirmar que a palete/volume tem etiqueta de receção.
2. Movimentar a mercadoria da zona E1 para a zona E2.
3. Confirmar que o número de processo está legível.

### 2. Iniciar conferência
1. Selecionar a atividade "Conferir".
2. Ler o código de barras da etiqueta da palete/volume.
3. Em alternativa, introduzir manualmente o número do processo.
4. Submeter a leitura.

### 3. Confirmar receções envolvidas
1. Ler a mensagem apresentada no dispositivo.
2. Validar quantas receções e armazéns estão envolvidos.
3. Prosseguir apenas se a informação estiver coerente com a mercadoria física.

**Validação final**  
A conferência fica iniciada e a aplicação apresenta os armazéns envolvidos no processo.

**Notas**  
Antes de conferir, a mercadoria deve estar fisicamente na zona E2. A etiqueta é o elo entre a mercadoria física e o processo criado no sistema.

---

## BC-KB-279 — Priorizar armazéns durante a conferência de entrada
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a conferência, a aplicação pede a priorização dos armazéns e o utilizador não sabe como decidir a ordem.

**Diagnóstico**  
Quando uma conferência envolve mais do que um armazém, é necessário indicar qual deve ser abastecido primeiro ou qual fica com o produto se a quantidade disponível for insuficiente.

**Causa provável**  
A mesma receção/processo pode envolver vários armazéns e o sistema precisa de uma regra operacional para distribuir quantidades.

**Solução**  
Definir a prioridade dos armazéns antes de iniciar a conferência dos produtos.

**Como proceder**

### 1. Preparar paletes por armazém
1. Identificar os armazéns envolvidos na conferência.
2. Preparar uma palete por armazém, quando aplicável.
3. Garantir que os operadores colocam os produtos conferidos nas paletes correspondentes.

### 2. Definir prioridade
1. No ecrã de priorização, ordenar os armazéns conforme a prioridade operacional.
2. Colocar em primeiro lugar o armazém que deve ser abastecido primeiro.
3. Confirmar a ordem antes de avançar para leitura de produtos.

### 3. Validar durante a conferência
1. Ler cada produto normalmente.
2. Confirmar a indicação da aplicação sobre onde colocar as quantidades.
3. Seguir a distribuição indicada pelo sistema.

**Validação final**  
A conferência avança com uma prioridade definida e a distribuição dos produtos fica coerente com a regra escolhida.

**Notas**  
A priorização é especialmente importante quando a quantidade recebida não chega para satisfazer todos os armazéns envolvidos.

---

## BC-KB-280 — Registar produto, lote, validade e quantidade na conferência de entrada
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de conferir produtos recebidos e não sabe como registar corretamente lote, validade e quantidade.

**Diagnóstico**  
Na conferência, cada produto deve ser identificado por leitura de código de barras, EAN, código 2D ou introdução manual. O lote, validade e quantidade devem ficar associados à conferência.

**Causa provável**  
A mercadoria está rececionada, mas ainda não foi validada ao detalhe físico necessário para entrada em stock.

**Solução**  
Ler o produto e preencher os dados de lote, validade e quantidade conforme a informação física do produto.

**Como proceder**

### 1. Ler o produto
1. Selecionar o campo de produto na Mobilidade.
2. Ler o código de barras, EAN ou 2D.
3. Se não for possível ler, introduzir o produto manualmente.

### 2. Confirmar lote e validade
1. Se a leitura 2D preencher lote e validade automaticamente, confirmar se os dados estão corretos.
2. Se não preencher automaticamente, introduzir lote e validade manualmente.
3. Validar a informação contra a embalagem física.

### 3. Indicar quantidade
1. Introduzir a quantidade conferida.
2. Submeter a linha.
3. Seguir a indicação da aplicação sobre onde colocar o produto.

**Validação final**  
O produto fica conferido com lote, validade e quantidade corretos, pronto para distribuição por armazém/palete.

**Notas**  
A leitura 2D reduz erros manuais, mas deve ser sempre validada quando a informação apresentada não parece coerente com o produto físico.

---

## BC-KB-281 — Interpretar a distribuição de quantidades por armazém na conferência
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Depois de submeter a quantidade conferida, a aplicação indica vários armazéns/paletes e o utilizador não sabe como distribuir fisicamente o produto.

**Diagnóstico**  
A aplicação distribui a quantidade conferida de acordo com as necessidades dos armazéns envolvidos e com as prioridades definidas no início da conferência.

**Causa provável**  
O produto existe em várias receções/armazéns e a quantidade recebida pode não cobrir todas as necessidades.

**Solução**  
Seguir a indicação apresentada pela Mobilidade para colocar as quantidades nas paletes/localizações corretas.

**Como proceder**

### 1. Confirmar a mensagem de distribuição
1. Após ler produto, lote, validade e quantidade, submeter a linha.
2. Ler a mensagem apresentada pela aplicação.
3. Identificar os armazéns/paletes indicados.

### 2. Separar fisicamente a quantidade
1. Colocar a quantidade indicada em cada palete/armazém.
2. Não alterar manualmente a distribuição física sem corrigir a informação no sistema.
3. Se a quantidade física não coincidir, validar antes de prosseguir.

### 3. Continuar conferência
1. Voltar à leitura do próximo produto.
2. Repetir o processo para todos os produtos recebidos.

**Validação final**  
As quantidades ficam fisicamente separadas conforme a distribuição indicada pela Mobilidade.

**Notas**  
A distribuição depende da prioridade dos armazéns. Se a prioridade foi definida incorretamente, a distribuição também poderá ficar operacionalmente incorreta.

---

## BC-KB-282 — Fechar palete na conferência e gerar documento de arrumação
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A palete já está completa ou não existe mais produto para conferir, mas o utilizador não sabe como avançar para a arrumação.

**Diagnóstico**  
Quando a palete está completa, é necessário fechar a palete. Ao fechar, são registadas as quantidades recebidas e é gerado o documento de arrumação para a localização selecionada.

**Causa provável**  
A conferência da palete terminou, mas ainda não foi criado o passo seguinte do fluxo de entrada.

**Solução**  
Fechar a palete na Mobilidade e imprimir/colar a etiqueta de arrumação.

**Como proceder**

### 1. Confirmar que a palete pode ser fechada
1. Validar se a palete está completa.
2. Confirmar que não existe mais produto a colocar nessa palete.
3. Rever se os produtos conferidos estão na palete correta.

### 2. Fechar a palete
1. Selecionar a opção "Fechar Palete".
2. Escolher a localização/palete a fechar.
3. Confirmar a ação.
4. Aguardar a geração do documento de arrumação.

### 3. Imprimir e colar etiqueta
1. Imprimir a etiqueta de arrumação.
2. Colar a etiqueta na palete conferida.
3. Se não for possível imprimir, colocar uma etiqueta manual com o número da arrumação.
4. Movimentar a mercadoria da zona E2 para a zona E3.

**Validação final**  
A palete fica fechada, o produto entra em stock na posição REC e é gerado o documento de arrumação quando aplicável.

**Notas**  
A etiqueta de arrumação deve acompanhar a palete até à zona E3. Sem esta identificação, a arrumação poderá falhar.

---

## BC-KB-283 — Terminar conferência de entrada e validar paletes fechadas
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador tenta terminar a conferência, mas o sistema não permite concluir o processo.

**Diagnóstico**  
A conferência só pode ser terminada quando todas as paletes estão fechadas, exceto situações específicas relacionadas com produtos sujeitos a verificação NMVS.

**Causa provável**  
Ainda existe pelo menos uma palete aberta ou produto pendente de verificação/tratamento.

**Solução**  
Validar todas as paletes da conferência, fechar as que estiverem abertas e só depois selecionar a opção de terminar.

**Como proceder**

### 1. Rever paletes abertas
1. Na conferência, verificar a lista de paletes/localizações.
2. Confirmar se todas as paletes necessárias foram fechadas.
3. Identificar eventuais paletes ainda em aberto.

### 2. Regularizar pendências
1. Fechar as paletes ainda abertas.
2. Confirmar se existem produtos sujeitos a NMVS.
3. Se existirem produtos NMVS, seguir o fluxo de verificação antes de concluir.

### 3. Terminar conferência
1. Selecionar a opção "Terminar Conferência".
2. Confirmar a conclusão.
3. Validar se a conferência desaparece das pendências.

**Validação final**  
A conferência fica terminada e não existem paletes abertas no processo.

**Notas**  
Quando todas as paletes são fechadas, o sistema pode fechar automaticamente a conferência, salvo exceções como produtos que necessitam de verificação NMVS.

---

## BC-KB-284 — Reservar produto por excesso de quantidade ou validade não comportada
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a conferência, a Mobilidade indica que o produto deve ser reservado devido a quantidade em excesso ou validade não comportada.

**Diagnóstico**  
O sistema valida se as quantidades recebidas e as validades são comportadas pelos armazéns envolvidos, nomeadamente PRAXIS e GROSS.LX.

**Causa provável**  
A quantidade recebida excede a necessária ou a validade do produto é inferior aos limites aceites pelo armazém.

**Solução**  
Seguir a indicação da aplicação e reservar o produto para tratamento no fluxo de excedentes.

**Como proceder**

### 1. Ler a mensagem da aplicação
1. Confirmar qual o produto indicado.
2. Confirmar quantidade, lote e validade.
3. Validar se a mensagem refere excesso ou validade não comportada.

### 2. Aplicar critério de validade
1. Para medicamento, validar se a validade é inferior a 7 meses.
2. Para outro produto, validar se a validade é inferior a 13 meses.
3. Se a aplicação indicar reserva, não colocar o produto nas paletes normais de arrumação.

### 3. Encaminhar produto
1. Reservar o produto fisicamente.
2. Seguir o fluxo interno de excedentes.
3. Registar/comunicar a situação conforme procedimento operacional.

**Validação final**  
O produto não segue para arrumação normal e fica reservado para tratamento adequado.

**Notas**  
Não ignorar mensagens de validade ou excesso. Estes alertas evitam entrada indevida de stock em armazéns que não comportam o produto.

---

## BC-KB-285 — Tratar produtos sujeitos a verificação NMVS na conferência de entrada
**Categoria:** Mobilidade / Entrada / NMVS  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a conferência, a aplicação alerta que o produto necessita de verificação NMVS.

**Diagnóstico**  
Alguns produtos exigem verificação NMVS antes de concluir a receção e gerar a etiqueta de arrumação.

**Causa provável**  
O produto está parametrizado como sujeito a verificação, pelo que não pode seguir o fluxo normal sem validação.

**Solução**  
Colocar o produto no armazém/zona indicada para produtos sujeitos a verificação e aguardar a validação no Checkmed.

**Como proceder**

### 1. Confirmar alerta NMVS
1. Ler a mensagem apresentada no dispositivo.
2. Confirmar o produto, lote e quantidade.
3. Confirmar se a aplicação indica colocação em armazém de produtos sujeitos a verificação.

### 2. Separar produto
1. Colocar o produto na zona indicada para verificação NMVS.
2. Não misturar com produtos já aprovados para arrumação.
3. Garantir que a identificação do processo se mantém visível.

### 3. Concluir após verificação
1. Aguardar a verificação no Checkmed.
2. Após verificação, o registo da receção e a impressão da etiqueta de arrumação são automáticos.
3. Voltar à Mobilidade apenas para terminar a conferência, quando aplicável.

**Validação final**  
O produto sujeito a NMVS fica verificado e a conferência pode ser terminada corretamente.

**Notas**  
Não forçar a conclusão do processo antes da verificação. A rastreabilidade e a conformidade dependem deste passo.

---

## BC-KB-286 — Tratar armazéns que não requerem arrumação na conferência de entrada
**Categoria:** Mobilidade / Entrada / Conferência  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Após a conferência, não foi gerado documento de arrumação para determinado armazém.

**Diagnóstico**  
Alguns armazéns, como EXPORTACAO e PRAXIS, não requerem documento de arrumação. Nestes casos, os produtos entram diretamente em inventário.

**Causa provável**  
O armazém do processo está configurado para não exigir arrumação posterior.

**Solução**  
Confirmar se o armazém está dentro dos casos sem arrumação e seguir o fluxo operacional específico.

**Como proceder**

### 1. Confirmar o armazém
1. Verificar o armazém associado à palete/produto conferido.
2. Confirmar se se trata de EXPORTACAO, PRAXIS ou outro armazém sem arrumação.
3. Validar se o produto entrou em inventário após conferência.

### 2. Tratar caso PRAXIS
1. Confirmar se a palete é PRAXIS.
2. Após verificação da fatura, colocar a marca necessária na palete.
3. Só após essa verificação a palete pode ser arrumada conforme fluxo PRAXIS.

### 3. Comunicar anomalia, se aplicável
1. Se o armazém deveria gerar arrumação e não gerou, contactar o apoio.
2. Indicar processo, armazém e produto.

**Validação final**  
O utilizador confirma se a ausência de arrumação é esperada para o armazém ou se existe anomalia a analisar.

**Notas**  
A ausência de documento de arrumação nem sempre é erro. Depende da configuração e do fluxo do armazém.

---

## BC-KB-287 — Arrumar mercadoria na entrada através da atividade E3: Arrumar
**Categoria:** Mobilidade / Entrada / Arrumação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Existe mercadoria conferida na zona de pré-arrumação e é necessário arrumá-la nas posições indicadas.

**Diagnóstico**  
A atividade E3: Arrumar deve ser usada quando existem paletes ou volumes na zona E3 com etiqueta de arrumação.

**Causa provável**  
A conferência foi concluída e a palete já tem documento/etiqueta de arrumação.

**Solução**  
Ler a etiqueta de arrumação, selecionar os produtos e colocá-los nas posições indicadas pela aplicação.

**Como proceder**

### 1. Iniciar arrumação
1. Selecionar a atividade "Arrumar".
2. Ler o código de barras da etiqueta de arrumação.
3. Em alternativa, introduzir o número manualmente.

### 2. Selecionar produtos
1. Selecionar o conjunto de produtos a arrumar.
2. Ler o código de barras, EAN ou 2D do produto.
3. Confirmar lote e validade apresentados pelo sistema.

### 3. Colocar na posição indicada
1. Deslocar-se para a posição indicada.
2. Ler o código de barras da posição.
3. Introduzir a quantidade a arrumar.
4. Arrumar fisicamente o produto.
5. Confirmar a operação.

**Validação final**  
O produto fica arrumado na posição indicada e a aplicação pede a leitura do próximo produto até terminar a arrumação.

**Notas**  
Um produto pode ser arrumado em mais do que uma posição, dependendo da capacidade da posição e do lote.

---

## BC-KB-288 — Validar fatura/marca antes de arrumar mercadoria PRAXIS
**Categoria:** Mobilidade / Entrada / Arrumação PRAXIS  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao arrumar uma palete PRAXIS, a Mobilidade pergunta se a arrumação já foi verificada.

**Diagnóstico**  
Para PRAXIS, é necessário confirmar que a fatura foi verificada e que a marca foi colocada na etiqueta antes de avançar com a arrumação.

**Causa provável**  
A arrumação pertence ao armazém PRAXIS, que tem uma validação operacional adicional.

**Solução**  
Só confirmar a arrumação se a fatura tiver sido verificada e a palete estiver marcada conforme o procedimento.

**Como proceder**

### 1. Validar antes de responder
1. Confirmar que a palete é PRAXIS.
2. Verificar se a fatura foi validada.
3. Confirmar se a marca foi colocada na etiqueta/palete.

### 2. Responder na Mobilidade
1. Se a verificação estiver concluída, confirmar na aplicação.
2. Se a verificação não estiver concluída, não avançar com a arrumação.
3. Encaminhar a palete para validação antes de retomar.

### 3. Arrumar após validação
1. Ler o produto.
2. Deslocar-se para a posição indicada.
3. Ler posição e confirmar quantidade.
4. Concluir a arrumação.

**Validação final**  
A palete PRAXIS só é arrumada após validação da fatura e marcação correta.

**Notas**  
Confirmar indevidamente este passo pode permitir a arrumação de mercadoria PRAXIS sem validação documental.

---

## BC-KB-289 — Resolver erro de arrumação inexistente ou falta de acesso ao armazém
**Categoria:** Mobilidade / Entrada / Arrumação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Ao tentar iniciar uma arrumação, a aplicação indica que a arrumação não existe ou que o utilizador não tem acesso ao armazém.

**Diagnóstico**  
A mensagem surge quando o documento de arrumação não existe no Business Central/NAV ou quando o utilizador não está configurado com acesso ao armazém da arrumação.

**Causa provável**  
A etiqueta pode estar incorreta, o documento pode ter sido eliminado/fechado ou o utilizador não tem permissões de empregado de armazém para aquele armazém.

**Solução**  
Validar o número de arrumação, confirmar se existe no sistema e rever acessos do utilizador ao armazém.

**Como proceder**

### 1. Validar a leitura
1. Confirmar se a etiqueta lida corresponde à arrumação correta.
2. Tentar nova leitura do código de barras.
3. Se necessário, introduzir o número manualmente.

### 2. Validar existência do documento
1. Pesquisar a arrumação no Business Central/NAV.
2. Confirmar se está aberta e pendente.
3. Validar se já foi concluída por outro operador.

### 3. Validar permissões
1. Confirmar o armazém associado à arrumação.
2. Verificar se o utilizador tem acesso a esse armazém como empregado de armazém.
3. Se não tiver acesso, solicitar correção ao agente de suporte.

**Validação final**  
A arrumação fica acessível para o utilizador correto ou é identificado o motivo pelo qual não pode ser executada.

**Notas**  
Este caso pode exigir intervenção de agente, sobretudo quando envolve configuração de acessos por armazém.

---

## BC-KB-290 — Preparar envios na Mobilidade através da atividade S1: Preparar Envios
**Categoria:** Mobilidade / Saída / Preparação de Envios  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário gerar envios para preparar a saída de mercadoria, mas o utilizador não sabe quando usar a atividade S1.

**Diagnóstico**  
A atividade S1: Preparar Envios é usada em armazéns que requerem envio e cria envios no Business Central/NAV para o armazém selecionado.

**Causa provável**  
Existem encomendas libertas, transferências ou devoluções a fornecedor que ainda não foram convertidas em envios operacionais.

**Solução**  
Selecionar o armazém correto e executar a atividade de preparação de envios.

**Como proceder**

### 1. Validar âmbito
1. Confirmar que o armazém requer envio.
2. Confirmar que existem documentos libertos a processar.
3. Confirmar que não se trata de encomendas de venda da série Consumo ou Ofertas, que estão excluídas dos envios.

### 2. Executar preparação
1. Entrar na aplicação de Mobilidade.
2. Selecionar o armazém obrigatório.
3. Escolher a atividade "Envios" ou "Preparar Envios".
4. Aguardar a geração automática dos envios no Business Central/NAV.

### 3. Confirmar conclusão
1. Validar a mensagem final "Concluído".
2. Confirmar se foram criados envios e recolhas para o armazém selecionado.

**Validação final**  
Os envios são criados no sistema e ficam disponíveis para as atividades seguintes, nomeadamente recolha.

**Notas**  
Esta atividade é essencial para desbloquear os passos seguintes do fluxo de saída.

---

## BC-KB-291 — Compreender os critérios de criação automática de envios e recolhas
**Categoria:** Mobilidade / Saída / Preparação de Envios  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Após preparar envios, o utilizador quer perceber porque foram criados um ou vários envios/recolhas.

**Diagnóstico**  
A Mobilidade/Business Central cria envios e recolhas automaticamente com critérios específicos por armazém, cliente, encomenda e número de posições.

**Causa provável**  
O processo agrupa ou separa documentos conforme regras automáticas, o que pode gerar resultados diferentes dos esperados pelo utilizador.

**Solução**  
Validar os critérios aplicados para perceber a criação dos envios e recolhas.

**Como proceder**

### 1. Validar critérios de envios
1. Para PRAXIS, é criado um único envio.
2. Para encomendas libertas com apenas um produto, pode ser criado um envio por cliente.
3. Para encomendas B2C, é criado um envio por encomenda.
4. Para restantes encomendas libertas com mais de um produto, transferências e devoluções a fornecedor, é criado um envio por encomenda/documento.

### 2. Validar critérios de recolhas
1. Para PRAXIS, é criada uma única recolha por envio.
2. Para restantes armazéns, cada recolha tem no máximo 20 posições.
3. Se o envio tiver até 23 posições, pode ser criada apenas uma recolha.
4. Se tiver mais de 23 posições, podem ser criadas várias recolhas.

### 3. Confirmar resultado
1. Abrir a lista de envios/recolhas no sistema.
2. Comparar os documentos criados com os critérios acima.
3. Reportar apenas se existir divergência face às regras.

**Validação final**  
O utilizador compreende o motivo pelo qual o sistema criou determinado número de envios e recolhas.

**Notas**  
Nem sempre uma encomenda corresponde a uma única recolha. A divisão por posições é uma regra operacional para facilitar a execução no armazém.

---

## BC-KB-292 — Iniciar uma recolha na Mobilidade e interpretar os indicadores
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador precisa de iniciar uma recolha, mas não sabe interpretar os dois indicadores apresentados na atividade.

**Diagnóstico**  
Na atividade S2: Recolha, o sistema apresenta o total de recolhas pendentes e o número de recolhas que o utilizador pode iniciar.

**Causa provável**  
Existem recolhas pendentes no armazém, mas nem todas estão disponíveis para aquele utilizador.

**Solução**  
Selecionar a atividade Recolha, validar os indicadores e escolher uma recolha disponível.

**Como proceder**

### 1. Ler indicadores
1. Confirmar o armazém selecionado.
2. Identificar o indicador de recolhas pendentes do armazém.
3. Identificar o indicador de recolhas que o utilizador pode iniciar.

### 2. Confirmar disponibilidade
1. Se o utilizador tiver recolha em curso, o indicador disponível pode mostrar apenas essa recolha.
2. Se tiver recolhas atribuídas, o indicador mostra as recolhas atribuídas.
3. Se não houver atribuição nem recolha em curso, são apresentadas recolhas pendentes por atribuir.

### 3. Iniciar recolha
1. Selecionar a atividade "Recolha".
2. Escolher uma recolha da lista.
3. Seguir para a posição indicada pela aplicação.

**Validação final**  
A recolha é iniciada e a aplicação apresenta a primeira posição, produto, lote e quantidade a recolher.

**Notas**  
A gestão das recolhas pode ser feita centralmente no Business Central/NAV, incluindo cancelamento, atribuição a operadores e alteração de posições ou lotes sugeridos.

---

## BC-KB-293 — Adicionar banheira a uma recolha
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O operador vai iniciar uma recolha ou precisa de associar uma nova banheira, mas não sabe como o fazer.

**Diagnóstico**  
Antes de recolher produtos, a recolha deve ter uma banheira associada. A banheira fica bloqueada para essa recolha até ser libertada na conferência.

**Causa provável**  
A recolha ainda não tem recipiente físico associado ou a banheira em uso ficou cheia.

**Solução**  
Usar a opção "Adicionar Banheira", ler uma banheira liberta e associá-la à recolha.

**Como proceder**

### 1. Obter banheira disponível
1. Ir à zona de banheiras libertas.
2. Selecionar uma banheira identificada.
3. Confirmar que a banheira não está em uso noutra atividade.

### 2. Associar à recolha
1. Na recolha, selecionar "Adicionar Banheira".
2. Ler a identificação da banheira.
3. Confirmar a associação.

### 3. Usar na recolha
1. Iniciar ou continuar a recolha dos produtos.
2. Colocar os produtos recolhidos na banheira associada.
3. Se a banheira encher, adicionar outra banheira ou depositar a atual na zona de conferência.

**Validação final**  
A banheira fica associada à recolha e não pode ser usada noutra atividade até ser libertada.

**Notas**  
Só podem ser usadas banheiras identificadas e libertas. Se a banheira não estiver liberta, a aplicação apresenta erro.

---

## BC-KB-294 — Recolher produto, lote e quantidade para a banheira indicada
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O utilizador iniciou uma recolha e precisa de executar corretamente a leitura da posição, produto, quantidade e banheira.

**Diagnóstico**  
A recolha exige confirmação física da posição, produto, quantidade recolhida e banheira onde o produto é colocado.

**Causa provável**  
O processo de recolha está em curso e a aplicação orienta o operador posição a posição.

**Solução**  
Seguir a sequência indicada pela Mobilidade para garantir que o produto certo é recolhido do local certo e colocado na banheira correta.

**Como proceder**

### 1. Ir à posição indicada
1. Ler a posição apresentada pela aplicação.
2. Confirmar que está fisicamente na posição correta.

### 2. Ler produto e quantidade
1. Ler o código do produto.
2. Confirmar lote indicado.
3. Introduzir a quantidade recolhida.
4. Se a quantidade for inferior à pedida, registar apenas a quantidade efetivamente recolhida.

### 3. Confirmar banheira
1. Ler a identificação da banheira.
2. Colocar fisicamente o produto na banheira lida.
3. Avançar para o próximo produto apresentado.

**Validação final**  
A quantidade recolhida fica associada à posição, produto, lote e banheira corretos.

**Notas**  
A lateral da aplicação apresenta indicadores de quantidade não encontrada, quantidade recolhida e quantidade total da recolha.

---

## BC-KB-295 — Registar produto não encontrado durante uma recolha
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A aplicação pede a recolha de um produto, mas o operador não encontra o produto na posição indicada.

**Diagnóstico**  
Durante a recolha, pode existir divergência entre o stock esperado e o stock físico disponível na posição.

**Causa provável**  
O produto pode ter sido movimentado, estar numa posição diferente, estar esgotado fisicamente ou existir divergência de stock/localização.

**Solução**  
Usar a opção "Não encontrei o produto" para registar a falha de recolha e permitir o tratamento correto do processo.

**Como proceder**

### 1. Validar fisicamente a posição
1. Confirmar se está na posição indicada.
2. Rever se o produto/lote indicado está presente.
3. Confirmar se a leitura da posição foi feita corretamente.

### 2. Registar não encontrado
1. Se o produto não existir fisicamente, selecionar "Não encontrei o produto".
2. Confirmar a quantidade não encontrada.
3. Avançar conforme indicação da aplicação.

### 3. Prosseguir a recolha
1. Continuar para o próximo produto ou posição.
2. No final, validar se existem quantidades não encontradas.
3. Comunicar divergências conforme procedimento interno.

**Validação final**  
A quantidade não encontrada fica registada na recolha e o processo pode prosseguir sem forçar recolha inexistente.

**Notas**  
Não substituir o produto por outro lote ou posição sem alteração validada no sistema.

---

## BC-KB-296 — Colocar banheira na zona de conferência e terminar recolha
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A recolha está concluída ou a banheira está cheia, mas o utilizador não sabe como depositar a banheira e terminar a recolha.

**Diagnóstico**  
Todas as banheiras usadas na recolha devem ser colocadas na zona de conferência antes de a recolha ser concluída.

**Causa provável**  
A recolha utilizou uma ou várias banheiras que ainda estão associadas ao operador/recolha.

**Solução**  
Usar a opção "Colocar Banheira", ler a banheira e a posição de depósito na zona de conferência.

**Como proceder**

### 1. Levar banheira para conferência
1. Deslocar-se para a zona de conferência.
2. Garantir que a banheira contém apenas produtos da recolha correta.
3. Selecionar a opção "Colocar Banheira".

### 2. Confirmar depósito
1. Ler o código de barras da banheira.
2. Ler o código de barras da posição de depósito.
3. Colocar fisicamente a banheira nessa posição.

### 3. Terminar recolha
1. Repetir o processo para todas as banheiras associadas à recolha.
2. Confirmar a mensagem "Não existem banheiras por colocar".
3. Concluir a recolha.

**Validação final**  
Todas as banheiras ficam colocadas na zona de conferência e a recolha fica pronta para conferência.

**Notas**  
A recolha não deve ser considerada concluída enquanto existirem banheiras por colocar.

---

## BC-KB-297 — Resolver casos particulares da recolha: reatribuição, banheira não liberta e recolha manual PRAXIS
**Categoria:** Mobilidade / Saída / Recolha  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A recolha não pode ser concluída pelo operador, a banheira não está liberta ou a recolha PRAXIS não é sugerida automaticamente.

**Diagnóstico**  
A recolha pode exigir intervenção de gestão no Business Central/NAV ou execução manual, conforme o caso.

**Causa provável**  
A recolha foi atribuída ao operador errado, a banheira está presa noutra atividade ou trata-se de uma recolha PRAXIS com funcionamento manual.

**Solução**  
Tratar conforme o cenário: reatribuir a recolha, usar uma banheira liberta ou ativar o modo manual na recolha PRAXIS.

**Como proceder**

### Cenário 1 — Recolha atribuída a operador que não a consegue concluir
1. Identificar a recolha.
2. Validar o operador atualmente atribuído.
3. No Business Central/NAV, reatribuir a recolha a outro operador.
4. Confirmar que o novo operador consegue iniciar ou continuar a recolha.

### Cenário 2 — Banheira não liberta
1. Ler a mensagem de erro apresentada.
2. Confirmar se a banheira está associada a outra atividade.
3. Selecionar outra banheira identificada e liberta.
4. Se necessário, pedir análise para libertação/correção da banheira.

### Cenário 3 — Recolha manual PRAXIS
1. Selecionar a recolha PRAXIS.
2. Ativar a opção "Manual".
3. Informar manualmente o produto que está a recolher.
4. Confirmar quantidades conforme a recolha física.

**Validação final**  
A recolha fica novamente executável, com operador, banheira e modo de recolha corretos.

**Notas**  
Na recolha PRAXIS, a aplicação não sugere automaticamente o produto; o operador informa o produto que está a recolher.

---

## BC-KB-298 — Conferir banheira na expedição através da atividade S2A: Conferência
**Categoria:** Mobilidade / Saída / Conferência de Expedição  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Existem banheiras recolhidas para conferência e o utilizador precisa de confirmar os produtos antes da faturação.

**Diagnóstico**  
A atividade S2A: Conferência é executada na variante PC da aplicação e inicia quando existem banheiras para conferir.

**Causa provável**  
A recolha foi concluída e as banheiras foram colocadas na zona de conferência.

**Solução**  
Selecionar uma banheira de depósito, escolher a banheira a conferir e validar produto a produto.

**Como proceder**

### 1. Iniciar conferência
1. Abrir a variante PC da Mobilidade.
2. Selecionar a atividade "Conferir Banheira".
3. Escolher uma banheira livre para depósito dos produtos conferidos.

### 2. Ler banheiras
1. Selecionar a banheira que pretende conferir.
2. Ler o código de barras da banheira de conferência.
3. Ler o código de barras da banheira de depósito/conferidos.

### 3. Conferir produtos
1. Para cada produto da banheira, ler o código de barras do produto.
2. Introduzir a quantidade conferida.
3. Colocar o produto na banheira dos conferidos.
4. Acompanhar o indicador de quantidade por conferir.

### 4. Colocar banheira conferida
1. Quando a banheira estiver cheia ou a conferência terminar, colocar a banheira na zona S4.
2. Ler a posição de depósito.
3. Confirmar a colocação.

**Validação final**  
A banheira fica conferida e colocada na zona de pré-faturação para embalamento e faturação.

**Notas**  
Após todas as banheiras de recolha serem conferidas e colocadas, o sistema regista automaticamente a recolha no Business Central/NAV com as quantidades conferidas.

---

## BC-KB-299 — Resolver diferenças ou produto extra na conferência da banheira
**Categoria:** Mobilidade / Saída / Conferência de Expedição  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
Durante a conferência da banheira existem diferenças entre a quantidade recolhida e a quantidade conferida, ou surge produto que não consta do pedido de recolha.

**Diagnóstico**  
A conferência pode identificar produto em falta, produto a mais ou produto trocado. A área de mensagens pode apoiar a análise.

**Causa provável**  
Erro na recolha, produto colocado na banheira errada, quantidade recolhida incorreta ou divergência física.

**Solução**  
Validar a diferença, confirmar qual quantidade está correta e reservar produto extra ou não previsto para análise.

**Como proceder**

### 1. Validar diferença de quantidade
1. Confirmar produto, lote e quantidade indicada como recolhida.
2. Confirmar quantidade efetivamente conferida.
3. Consultar a área de mensagens para apoio à análise.
4. Confirmar se a quantidade correta é a recolhida ou a conferida.

### 2. Quando não existe mais produto na banheira
1. Se a quantidade conferida estiver correta, selecionar "Não existe mais produto".
2. Confirmar o término da conferência quando solicitado.
3. Garantir que não fica produto por conferir fisicamente.

### 3. Produto não pedido ou a mais
1. Se for detetado produto que não consta da recolha, reservar o produto para análise.
2. Se existir produto a mais, não forçar quantidade superior à pedida.
3. Reservar o excedente para posterior reposição ou tratamento.

**Validação final**  
A conferência fica regularizada com quantidades corretas e produtos extra/reservados separados para análise.

**Notas**  
No caso particular PRAXIS não existe conferência; após recolha, a mercadoria passa diretamente para a zona S4 para faturação.

---

## BC-KB-300 — Faturar envio na Mobilidade através da atividade S3: Enviar e Faturar
**Categoria:** Mobilidade / Saída / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
O envio está pronto e o utilizador precisa de faturar e imprimir os documentos/etiquetas através da Mobilidade.

**Diagnóstico**  
A atividade S3: Faturação inicia quando existem envios prontos para faturar: com produtos recolhidos, todas as banheiras conferidas e sem recolhas pendentes.

**Causa provável**  
O processo de recolha e conferência terminou e o envio está na zona de pré-faturação.

**Solução**  
Selecionar o envio, confirmar banheiras/volumes, submeter para criar guias e fatura, e imprimir etiquetas/documentos.

**Como proceder**

### 1. Selecionar envio
1. Na Mobilidade, selecionar "Enviar e Faturar".
2. Validar a lista de envios disponíveis.
3. Confirmar posição S4, número do envio, banheiras conferidas, recolhas não conferidas, armazém e estado de satisfação.
4. Selecionar o envio pretendido.

### 2. Confirmar mercadoria
1. Ler o código de barras da posição onde se encontram as banheiras.
2. Ler todas as banheiras associadas ao envio.
3. Indicar o número de volumes.
4. Se as banheiras seguirem para o cliente, indicar o número de banheiras como volumes.
5. Se houver embalamento em caixas, indicar o número de volumes após embalamento.

### 3. Submeter faturação
1. Selecionar "Submeter".
2. Aguardar a criação automática das guias de remessa de venda.
3. Aguardar a emissão da fatura ao cliente.

### 4. Imprimir
1. Selecionar "Imprimir".
2. Confirmar impressão das etiquetas de volumes.
3. Confirmar geração/impressão da fatura.
4. Confirmar impressão de declaração de psicotrópicos ou carta de não satisfação, quando aplicável.

### 5. Colocar volumes na zona correta
1. Colar etiquetas nos volumes.
2. Fechar volumes.
3. Para rotas, colocar no móvel da respetiva rota, incluindo B2C.
4. Para transportadoras, colocar na palete/chão identificado com a transportadora.

**Validação final**  
O envio fica faturado, etiquetado e colocado na zona correta para expedição.

**Notas**  
As caixas mantêm-se abertas até ser confirmada eventual necessidade de desativação de produtos na NMVS.

---

## BC-KB-301 — Resolver bloqueios na faturação da Mobilidade: motivo de não satisfação, PRAXIS e fatura não emitida
**Categoria:** Mobilidade / Saída / Faturação  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
A faturação na Mobilidade não avança ou exige tratamento específico antes de emitir a fatura.

**Diagnóstico**  
Os casos particulares de faturação incluem faturação PRAXIS em zona específica, envios parciais sem motivo de não satisfação e situações em que a fatura não é emitida pela Mobilidade.

**Causa provável**  
O envio está parcial sem motivo de não satisfação atribuído, pertence a PRAXIS ou ocorreu falha de emissão automática da fatura.

**Solução**  
Tratar o bloqueio conforme o cenário apresentado pela aplicação.

**Como proceder**

### Cenário 1 — Faturação PRAXIS
1. Confirmar que o envio é PRAXIS.
2. Executar a faturação na zona S4 específica para PRAXIS.
3. Seguir o fluxo próprio de PRAXIS até à emissão/colocação para expedição.

### Cenário 2 — Motivo de não satisfação em envio parcial
1. Validar se o envio está parcialmente satisfeito.
2. Confirmar se o motivo de não envio foi atribuído automaticamente.
3. Se não existir motivo, atribuir o motivo de não satisfação antes de faturar.
4. Voltar à Mobilidade e repetir a faturação.

### Cenário 3 — Fatura não emitida pela Mobilidade
1. Ler a mensagem apresentada pela aplicação.
2. Confirmar quais as guias de remessa de venda indicadas.
3. Emitir a fatura no Business Central/NAV a partir das guias de remessa de venda indicadas.
4. Confirmar se o envio fica corretamente faturado.

**Validação final**  
O bloqueio fica resolvido, a fatura é emitida pela Mobilidade ou pelo Business Central/NAV, e o envio fica pronto para expedição.

**Notas**  
Nos envios parciais, a ausência de motivo de não satisfação impede a emissão da fatura. Não contornar este passo, porque o motivo documenta a razão da não satisfação total.
