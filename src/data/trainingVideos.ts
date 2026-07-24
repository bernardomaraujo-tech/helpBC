export interface TrainingVideo {
  id: string;
  title: string;
  category: 'Formação Inicial' | 'Temas Específicos';
  url: string;
}

export const trainingVideos: TrainingVideo[] = [
  {
    id: 'fi-instalacao-bc-com-voz',
    category: 'Formação Inicial',
    title: 'BC - Instalação BC - Com voz',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQDk4mdxXDL8So4ssojgnzV7AYGnJidu08a858_dJaTArss?e=rOZLKr&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-alteracao-ambiente-trabalho',
    category: 'Formação Inicial',
    title: 'BC - Alteração ambiente trabalho',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQDeY9BVRTovTIsKu0UxBJeBARyxgeom6iqIK-MGgNuHDFE?e=8CYTGr&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-alterar-minhas-definicoes',
    category: 'Formação Inicial',
    title: 'BC - Alterar as minhas definições',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQAsmPoAfCrnQJU81jhOZRKUAbhN6YLw3_gx8ahA8xutEIc?e=KlGZg3&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3DB'
  },
  {
    id: 'fi-centro-perfil-navegacao',
    category: 'Formação Inicial',
    title: 'BC - Centro Perfil e Navegação',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQATxbkWUmKmRIZiZndaYUHjAUhq01o_oQtUC3XQVlfktDo?e=ARinCl&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-pesquisa',
    category: 'Formação Inicial',
    title: 'BC - Pesquisa',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQAvSeQ4gGmCRZb6Ftpv0SenAQxnYzmmY4Pw1-IQklBLagc?e=GlVGfV&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-tour-assistido',
    category: 'Formação Inicial',
    title: 'BC - Tour Assistido',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQBKEKEqmwepSqVR4KnHBrp2AT1Q5Si2G_ZVOnwQeeFnyBE?e=pSLUDF&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-personalizacao',
    category: 'Formação Inicial',
    title: 'BC - Personalização',
    url: 'https://quilaban-my.sharepoint.com/:v:/r/personal/baraujo_quilaban_pt/Documents/Ambiente%20de%20Trabalho/Videos%20BC/Forma%C3%A7%C3%A3o%20Inicial/Com%20Fala/BC07%20-%20Personaliza%C3%A7%C3%A3o.mp4?csf=1&web=1&e=f1HsIs&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-filtros',
    category: 'Formação Inicial',
    title: 'BC - Filtros',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQD09yuJUIaITIEfncTH_LZmAeGgmv_DslNLa6EKYsLGdhM?e=iioBJa&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-edicao-dados',
    category: 'Formação Inicial',
    title: 'BC - Edição de dados',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQBHSSEoM0QmQ4yBDhYiYwPrAf82yz0euR1eaCYxoN_t7ow?e=Oo2bl2&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-atalhos-produtividade',
    category: 'Formação Inicial',
    title: 'BC - Atalhos de produtividade',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQAgedJnOg3YQZT27tHB93BvAU_ayfnOINXUZweTT7zKT0U?e=UFyIiX&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'fi-partilha-informacao',
    category: 'Formação Inicial',
    title: 'BC - Partilha de informação',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQBc6TTzrGMJT4dJZXlhuF9-AcI3KVVlN4--ONcvLDfZvSM?e=5CiaxH&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-alocacao-clientes',
    category: 'Temas Específicos',
    title: 'BC - Alocação de clientes',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQCKwIUllgJhSaeqNI02DjZvAcN2PCI-umQ9KcA1dPvf4_g?e=u8W1LF&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-criar-produto',
    category: 'Temas Específicos',
    title: 'BC - Criar um produto',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQCPXhmNNvwzQrc6Q41JdjfwASTCryaQ4Yed-uK33tUgZE0?e=tbqeAB&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-criar-cliente',
    category: 'Temas Específicos',
    title: 'BC - Criar um cliente',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQBvpaB_DJT4Tb3GcjQ8CVx2AT_5bI5VRyv7G-sGx5t6i50?e=aC1ZGb&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-criar-fornecedor',
    category: 'Temas Específicos',
    title: 'BC - Criar um fornecedor',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQBnE4CDugEMRbZbnP7dXWeEAUT-9Dz7jeOYOYKH-cEaUlE?e=I98euM&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-criar-encomenda-compra',
    category: 'Temas Específicos',
    title: 'BC - Criar uma Encomenda Compra',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQApg0TBdlUSSb2ZnuWxPWx6Acbj8BUs_gIFReXLDeUAMy8?e=Sagohs&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-envio-direto-cliente',
    category: 'Temas Específicos',
    title: 'BC - Como fazer um envio direto ao cliente',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQCkXLJz7dWzSYs9jKGEpJcRAaJb1sNL6GxWaOVejCSsPuQ?e=TX4l82&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-analise-concorrencial',
    category: 'Temas Específicos',
    title: 'BC - Análise concorrencial nas oportunidades',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQDLe4FCrNa0R6Wu_yPxqanCAZjQMHLe4L88tU0z3dW1rvA?e=yFpGlO&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-modo-analise',
    category: 'Temas Específicos',
    title: 'BC - Modo de Análise',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQCHv24v4bQ0Q5vT3V9LC8P4AYYMVXPuXWTz3PsNeFYF4yQ?e=tWCcof&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-alteracao-segmento-produto',
    category: 'Temas Específicos',
    title: 'BC - Alteração de segmento produto',
    url: 'https://quilaban-my.sharepoint.com/:v:/g/personal/baraujo_quilaban_pt/IQC7b9yoNo6cTLElSGTs_fOIASGCNBY_u19eztknIeKOtzo?e=y9dL51&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D'
  },
  {
    id: 'te-continia-portal-aprovacoes',
    category: 'Temas Específicos',
    title: 'Continia - Portal aprovações',
    url: 'https://quilaban-my.sharepoint.com/personal/baraujo_quilaban_pt/_layouts/15/stream.aspx?id=%2Fpersonal%2Fbaraujo%5Fquilaban%5Fpt%2FDocuments%2FV%C3%ADdeos%2FClipchamp%2FApresenta%C3%A7%C3%A3o%20Aprova%C3%A7%C3%B5es%20Continia%2FExports%2FApresenta%C3%A7%C3%A3o%20Aprova%C3%A7%C3%B5es%20Continia%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E99cd5c20%2D7dca%2D4611%2D96b4%2De146cc54330a&ct=1784900757950&or=Teams%2DHL&ga=1&LOF=1'
  }
];

export function getTrainingVideosByCategory(category: TrainingVideo['category']) {
  return trainingVideos.filter((video) => video.category === category);
}
