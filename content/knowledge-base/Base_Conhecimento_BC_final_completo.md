## PRD-NEW-001 — Criar novo produto
**Categoria:** Produtos
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
O utilizador precisa criar um novo produto mas não conhece os passos no Business Central.

**Diagnóstico**
Utilizador não tem experiência com a criação de produtos e não iniciou o processo.

**Causa provável**
Falta de conhecimento do processo de criação de produtos.

**Solução**
Criar um produto através da ficha de produto preenchendo todos os campos obrigatórios.

**Como proceder**
1. Ir a "Produtos".
2. Clicar em "Novo" para abrir uma ficha de produto.
3. Preencher o campo "Nº" (número do produto), à direita nas informações são indicados os campos obrigatórios listados em eInfo Obrigatória tanto para o pedido de aprovação como para o aprovador.
4. Guardar a ficha.

**Validação final**
O produto aparece na lista de produtos e a ficha está acessível e editável.

**Notas**
Pode usar "Aplicar Modelo" para acelerar o preenchimento dos campos obrigatórios.


## PRD-STA-001 — Verificar estado de criação de produtos
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



## PRD-APR-001 — Aprovação de novos produtos
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
O estado do produto muda para aprovado e já é possível utilizá‑lo em documentos.

**Notas**
Confirme sempre que todos os campos obrigatórios estão preenchidos antes de enviar o pedido. Atenção, só quem solicita o pedido de aprovação e ou os elementos aprovadores é que conseguem ver o estado da aprovação.



## PRD-CAT-001 — Criar produto a partir do catálogo
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


## PRD-ATR-001 — Adicionar atributos ao produto
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
4. Repetir para todos os atributos necessários e guardar.

**Validação final**
Os atributos são visíveis na ficha e podem ser usados em pesquisas e análises.

**Notas**
Os atributos permitem filtrar produtos e apresentar informação adicional em propostas ou relatórios.


## PRD-ATR-002 — Filtrar produtos por atributos
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



## PRD-DIC-001 — Importar Dicionário ANF
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
Certifique‑se de que o ficheiro a importar está no formato correto fornecido pela ANF.




## PRD-PVA-001 — Importar dados PVA, PIC, PMA, PVFD, PVAD
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



## CUS-NEW-001 — Criar novo cliente
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



## CUS-STA-001 — Verificar estado de criação de clientes
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



## CUS-APR-001 — Aprovação de novos clientes
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
O cliente torna‑se ativo após a aprovação e pode ser utilizado nas operações.

**Notas**
Verifique que os campos obrigatórios estão preenchidos no grupo de fluxo de aprovação correspondente.



## CUS-ADR-001 — Configurar diferentes endereços de envio
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
4. Preencher os dados de envio (morada, código postal, localidade, etc.) e guardar.

**Validação final**
Os novos endereços ficam disponíveis para seleção em documentos de venda e logística.

**Notas**
É possível definir um endereço predefinido ou selecionar diferentes moradas conforme o tipo de documento.



## CUS-CON-001 — Criar novos contactos para o cliente
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
Criar contactos através do add‑in de Outlook ou diretamente na ficha de cliente.

**Como proceder**
1. Método 1 – Outlook: selecione o email do contacto pretendido e utilize o suplemento do Business Central no Outlook para adicionar o contacto. Confirme o nome e guarde.
2. Método 2 – Ficha de Cliente: aceder a "Clientes", selecionar a ficha do cliente, ir a "Base" → "Contacto".
3. Se não existir nenhum contacto associado, responder "Sim" quando questionado e preencher a ficha do novo contacto.
4. Guardar as informações e repetir para outros contactos se necessário.

**Validação final**
Os contactos ficam associados ao cliente e são visíveis na lista de contactos.

**Notas**
Os contactos podem ser editados ou eliminados através da opção de menu (três pontos) na lista de contactos.


## SUP-NEW-001 — Criar novo fornecedor
**Categoria:** Fornecedores
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
É necessário registar um novo fornecedor no sistema.

**Diagnóstico**
O utilizador não iniciou o processo ou não sabe como fazê‑lo.

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
Assegure‑se de que todas as informações estão corretas antes de enviar para aprovação.


## SUP-STA-001 — Verificar estado de criação de fornecedores
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



## SUP-APR-001 — Aprovação de novos fornecedores
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
Após a aprovação, o fornecedor torna‑se ativo e pode ser utilizado.

**Notas**
Considere configurar um alerta para identificar fornecedores que requerem aprovação pré‑encomenda.



## OPP-NEW-001 — Criar nova oportunidade
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



## OPP-CHAR-001 — Caracterizar a oportunidade
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



## OPP-REQ-001 — Identificar requisitos de concurso
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



## OPP-CYCLE-001 — Gerir o ciclo de vendas da oportunidade
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
A oportunidade deve seguir um ciclo de vendas com etapas e ações pré‑definidas.

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



## OPP-ACT-001 — Aceder à lista de ações a efetuar
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



## OPP-ASSOC-001 — Associar proposta de venda à oportunidade
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



## OPP-UNASSOC-001 — Retirar associação da proposta de venda
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
Se preferir, pode eliminar completamente a proposta de venda e recriá‑la do zero.



## OPP-DEL-001 — Eliminar uma proposta de venda
**Categoria:** Oportunidades
**Disponível para Utilizador:** Sim
**Disponível para Agente:** Sim

**Problema**
Uma proposta de venda já não é necessária ou contém erros irreversíveis.

**Diagnóstico**
Decidiu‑se eliminar a proposta em vez de alterar.

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



## OPP-COMM-001 — Adicionar comentários de produto à proposta de venda
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



## OPP-PRT-001 — Imprimir uma proposta de venda para concurso
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
4. Imprimir ou guardar o ficheiro conforme necessário.

**Validação final**
É gerado um documento formatado para concursos, pronto a ser entregue ao cliente.

**Notas**
Verifique se os anexos e requisitos do concurso estão completos antes de imprimir.



## OPP-SAMPLES-001 — Solicitar envio de amostras
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
2. Será criado um novo pedido de amostras; verificar o ID do utilizador e o endereço de envio no separador "Transferir‑para".
3. Se a morada não estiver correta, aceder à ficha do cliente através de "Nº Entidade Externa" e criar um código de envio específico ou preencher manualmente a morada no pedido.
4. Atualizar a data de envio nas linhas do pedido.
5. Para libertar o pedido para a logística, alterar o estado de "Aberto" para "Liberto" através de "Base" → "Libertar" → "Libertar".

**Validação final**
O pedido de amostras está liberto e pronto para expedição pela logística.

**Notas**
Certifique‑se de que as quantidades e os códigos de produto estão corretos no pedido.



## OPP-COMP-001 — Associar informação da concorrência
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
4. Guardar a informação para referência futura.

**Validação final**
A ficha da oportunidade contém as linhas de concorrência preenchidas.

**Notas**
Pode colar dados a partir de uma folha Excel para facilitar a inserção massiva.



## OPP-CLOSE-001 — Fechar uma oportunidade
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



## PUR-REQ-001 — Aceder à folha de requisição
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



## PUR-REQ-002 — Sugerir requisição de produtos
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



## PUR-REQ-003 — Definir parâmetros da sugestão na folha de requisição
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



## PUR-REQ-004 — Aplicar filtros na sugestão da folha de requisição
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



## PUR-REQ-005 — Editar linhas de sugestão na folha de requisição
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



## PUR-REQ-006 — Verificar origem da sugestão
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



## PUR-REQ-007 — Selecionar fornecedores alternativos
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



## PUR-REQ-008 — Executar mensagens de ação
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
Certifique‑se de que todas as linhas estão corretas antes de executar, pois o processamento é automático.



## PUR-VAL-001 — Valor mínimo de compra por encomenda
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
Rever o valor total da encomenda e ajustá‑la para cumprir o mínimo.

**Como proceder**
1. Configurar o valor mínimo de compra na ficha do fornecedor.
2. No momento de libertar a encomenda de compra, o sistema verifica se o valor total cumpre o mínimo.
3. Se o alerta surgir, adicionar mais linhas ou quantidades até atingir o valor mínimo.
4. Guardar e libertar novamente a encomenda.

**Validação final**
A encomenda cumpre o valor mínimo e é libertada sem alertas.

**Notas**
Esta configuração ajuda a cumprir acordos comerciais e a minimizar custos logísticos.

## FIN-REC-001 — Erro ao registar recibo em diário de cobranças
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
5. Guardar as alterações.
6. Regressar ao diário de cobranças.
7. Voltar a tentar registar o recibo.

**Validação final**
O recibo é registado sem apresentar erro relacionado com a numeração de recibos.

**Notas**
Sempre que este erro surgir no registo de recibos, validar primeiro a configuração do cliente antes de analisar a configuração geral de numeração.



## EXC-ADDIN-001 — Suplemento do Excel do Business Central deixou de funcionar
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



## USR-NEW-001 — Criação e configuração de novos utilizadores no Business Central
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
4. Guardar as alterações.

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



## LOG-DEL-001 — Erro nas etiquetas de envio por código postal não reconhecido na delegação
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
10. Guardar as alterações.
11. Voltar ao documento/envio.
12. Gerar novamente a etiqueta.

**Validação final**
A etiqueta é gerada corretamente e a delegação é associada sem erro.

**Notas**
Em caso de dúvida sobre a delegação correta, validar o código postal junto das Operações ou com o responsável de Logística Externa.



## SAL-APP-001 — Erro na aprovação de encomenda por cliente sem gestor comercial para produtos de Diagnóstico
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
8. Guardar as alterações.
9. Voltar à encomenda de venda.
10. Reenviar a encomenda para aprovação.

**Validação final**
A encomenda é reenviada para aprovação sem erro de gestor indefinido.

**Notas**
Quando o erro ocorrer noutros clientes, validar se também têm apenas o filtro Farma-Amb ativo na alocação de gestores comerciais.



## USR-GRP-001 — Eliminação de e-mails automáticos enviados para utilizadores inativos
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
10. Guardar as alterações.

**Validação final**
Os utilizadores inativos deixam de constar nos Grupos de Tarefas de Utilizador e os e-mails automáticos deixam de ser enviados para esses endereços.

**Notas**
Sempre que um colaborador sai da empresa, deve ser validado se continua associado a grupos de tarefas, aprovações ou notificações automáticas.



## OPP-SAMPLES-002 — Erro ao enviar pedido de amostras por Código Departamento em falta
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
5. Guardar as alterações.
6. Repetir o envio do pedido de amostras.

**Validação final**
O pedido de amostras é enviado sem apresentar erro de Código Departamento.

**Notas**
Se existirem várias linhas, validar todas antes de repetir o envio. Basta uma linha sem Código Departamento para o erro persistir.



## TRA-GC-001 — Erro ao criar Ordem de Transferência por falta de associação de Gestor Comercial no cliente
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
6. Guardar as alterações.
7. Voltar à Ordem de Transferência.
8. Atualizar a página/documento.
9. Confirmar se os campos de dimensão passaram a ser preenchidos corretamente.

**Validação final**
A Ordem de Transferência deixa de apresentar erro de valor dimensão "INDEFINIDO" e as dimensões comerciais ficam preenchidas.

**Notas**
Este erro é recorrente em clientes configurados com gestor comercial genérico. Sempre que um cliente passa a ter gestor atribuído, deve ser atualizada a ficha para evitar erros em documentos futuros.



## TRA-DIM-001 — Configurar dimensões numa Ordem de Transferência
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
8. Guardar e fechar.
9. Rever as linhas da Ordem de Transferência.
10. Confirmar se as dimensões foram aplicadas corretamente.

**Validação final**
A Ordem de Transferência fica com as dimensões corretas no cabeçalho e nas linhas, permitindo prosseguir sem erro de dimensão.

**Notas**
Sempre que possível, configurar dimensões no cabeçalho para garantir consistência em todas as linhas. Se existirem dimensões manuais nas linhas, validar se não entram em conflito com o cabeçalho.



## PRD-PVA-002 — Atualização mensal de preços e margens com ficheiro da Glintt
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

### 2. Guardar o ficheiro
1. Copiar o ficheiro recebido para a pasta local:
   - C:\Users\baraujo\Quilaban\TIC - TIC\Preços ANF (periodicidade mensal)

### 3. Preparar o ficheiro para importação
1. Abrir o ficheiro original no Excel.
2. Selecionar apenas as primeiras 11 colunas:
   - A até K
3. Remover todas as linhas de cabeçalho.
4. Guardar o ficheiro em formato:
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



## SAL-PREPAY-001 — Erro ao registar Fatura Antecipada por percentagem de pré-pagamento em falta
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
6. Guardar a encomenda.
7. Libertar ou aprovar novamente a encomenda, se aplicável.
8. Registar a Fatura Antecipada.

**Validação final**
A fatura antecipada é registada sem erro de quantidades para faturar.

**Notas**
Quando surgir erro de quantidades em faturas antecipadas, confirmar primeiro se o campo "% Pré-pagamento" está preenchido no documento.



## LOG-STATUS-001 — Erro na atualização automática do estado das encomendas Parcel / Order Status
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



## AGT-001 — Comunicação de documentos à AGT
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

Recomenda-se criar vistas guardadas para os filtros usados com maior frequência.



## EXC-AUTH-001 — Erro no plugin Business Central no Excel com msal.js timed_out
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



## MOB-LOG-001 — Erro na Logística Externa após faturação via Mobilidade com guia refletida em vez da fatura
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

## APR-DEL-001 — Delegar aprovação temporária de encomenda urgente
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



## SAL-PRICE-001 — Erro ao criar lista de preços para instituições com tipo Preços e Descontos
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



## SAL-POST-001 — Erro ao faturar encomenda de venda por Data de Registo desatualizada
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
5. Guardar a alteração.
6. Voltar à encomenda de venda.
7. Repetir a tentativa de faturação.

**Validação final**
A encomenda de venda é faturada sem bloqueio relacionado com a Data de Registo.

**Notas**
Este erro pode surgir quando o utilizador ficou com uma data de trabalho anterior configurada. Validar sempre a Data de Registo antes de investigar outros bloqueios de faturação.



## SAL-DROPSHIP-001 — Erro ao faturar encomenda de venda por envio direto sem associação à encomenda de compra
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
5. Guardar as alterações.
6. Pedir ao utilizador para voltar a tentar faturar.

**Validação final**
A encomenda de venda é faturada sem erro de envio direto por falta de associação à encomenda de compra.

**Notas**
Este erro deve ser tratado linha a linha. Confirmar sempre se a encomenda de compra indicada corresponde ao produto e à linha correta.



## APR-TEAM-001 — Configurar Team Approval em aprovações de venda
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



## APR-SUB-001 — Configurar substituto para delegações de aprovação em caso de ausência
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
5. Guardar a alteração.
6. Aceder ao pedido/documento pendente de aprovação.
7. Ir ao separador "Aprovações".
8. Delegar a aprovação para o substituto, se necessário.
9. Confirmar que a nova linha de aprovação foi criada corretamente.

**Validação final**
A aprovação passa a estar disponível para o substituto e o processo deixa de ficar bloqueado pela ausência do aprovador titular.

**Notas**
A delegação pode ser efetuada pelo utilizador que submete o pedido, pelo aprovador ou pelo gestor de aprovações, conforme permissões existentes.



## SAL-ANL-001 — Consultar vendas por cliente e produto
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



## MOB-EMAIL-001 — Erro ao puxar envio na Mobilidade por e-mail em falta no Vendedor/Comprador
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
5. Guardar a ficha.
6. Voltar ao processo da mobilidade.
7. Puxar novamente os dados/envios.

**Validação final**
Os dados dos envios são carregados sem erro de e-mail em falta no Vendedor/Comprador.

**Notas**
Sempre que o erro indicar um código de vendedor específico, validar primeiro a respetiva ficha em Vendedores/Compradores.



## OPP-SAMPLES-003 — Erro ao criar pedido de amostra por dimensão AREA.GEST.PRODUTO em falta
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
5. Guardar a ficha do produto.
6. Repetir a tentativa de criação ou envio do pedido de amostra.

**Validação final**
O pedido de amostra avança sem erro de dimensão padrão em falta.

**Notas**
Este erro está relacionado com configuração base do produto. Deve ser corrigido na ficha do produto e não apenas no documento.



## LOG-PICK-001 — Produto não incluído na recolha por lotes bloqueados
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



## PUR-QUAL-001 — Erro de dimensões por qualificação de fornecedor e produto em encomenda de compra
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



## SAL-MULT-001 — Erro de múltiplos de venda por produto com restrição de quantidade
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



## PRT-PRINTNODE-001 — Configurar impressora no Business Central com PrintNode
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



## SUP-BLOCK-001 — Fornecedor bloqueado por aprovação rejeitada
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



## PRD-LEAD-001 — Erro na ficha de produto ao preencher Prazo de Entrega
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
5. Guardar a ficha do produto.

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



## SAL-APP-002 — Erro na aprovação de proposta de venda por falta de gestor comercial FARMA-AMB
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



## TRA-BOM-001 — Expandir Kit Expositor numa Ordem de Transferência
**Categoria:** Transferências / Kits  
**Disponível para Utilizador:** Sim  
**Disponível para Agente:** Sim

**Problema**  
É necessário expandir ou explodir um Kit Expositor dentro de uma Ordem de Transferência, para visualizar e movimentar os artigos que compõem o kit.

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



## SAL-INV-001 — Corrigir Nº Documento Externo em fatura de venda já emitida
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
4. Guardar a alteração.
5. Confirmar que o número atualizado aparece na vista da fatura.

**Validação final**
A fatura registada passa a apresentar o Nº Documento Externo correto.

**Notas**
A atualização será comunicada apenas no envio eletrónico diário, normalmente ao fim da tarde.



## WHS-PUT-001 — Erro ao criar arrumação de produto em folha de armazém
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
7. Guardar a alteração.
8. Voltar à Folha de Arrumação.
9. Ir a "Base" → "Criar Doc. Arrumação".
10. Clicar em "OK" para gerar o documento de arrumação atualizado.

**Validação final**
O documento de arrumação é criado corretamente e o produto deixa de desaparecer do processo.

**Notas**
Validar sempre a posição correta antes de marcar como Fixo e Padrão, para evitar impacto em processos de armazém futuros.
