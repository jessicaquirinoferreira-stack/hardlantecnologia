export const COMPANY = {
  name: 'Hard-Lan Tecnologia',
  shortName: 'Hard-Lan',
  since: 2002,
  yearsExperience: 23,
  slogan:
    'Especialistas em Suporte T.I., Servidores, Virtualização, Cybersegurança e Wi-Fi Seguro',
  bio: 'Desde 2002 Especialista em suporte T.I., Servidores, Virtualização, Cybersegurança, Wi-fi Seguro',
  address: 'Rua Canadá, 312 – Jardim América, São José do Rio Preto – SP, CEP 15055-350',
  street: 'Rua Canadá, 312 – Jardim América',
  cityState: 'São José do Rio Preto – SP',
  cep: '15055-350',
  phoneDisplay: '(17) 99817-8198',
  phoneHref: 'tel:+5517998178198',
  whatsappNumber: '5517998178198',
  whatsappHref:
    'https://wa.me/5517998178198?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Hard-Lan%20Tecnologia.',
  instagramHandle: '@hardlantecnologia',
  instagramHref: 'https://www.instagram.com/hardlantecnologia/',
  cnpj: '05.300.478/0001-50',
  hours: 'Segunda a Sexta, das 08h00 às 18h00',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Rua+Canad%C3%A1,+312,+Jardim+Am%C3%A9rica,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15055-350&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsDirectUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Canad%C3%A1,+312,+Jardim+Am%C3%A9rica,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15055-350',
} as const;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName:
    | 'Headphones'
    | 'Server'
    | 'Layers'
    | 'ShieldCheck'
    | 'Wifi'
    | 'Cpu'
    | 'Network'
    | 'DatabaseBackup';
  deliverables: string[];
  idealFor: string;
  featured?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'suporte-tecnico',
    number: '01',
    title: 'Suporte Técnico Especializado',
    shortDesc:
      'Atendimento presencial e remoto ágil com equipe sênior para manter estações, sistemas e usuários produtivos sem interrupções.',
    fullDesc:
      'Operação contínua de help desk e suporte N1/N2/N3 para empresas em São José do Rio Preto e região. Atuamos de forma preventiva e corretiva para reduzir chamados recorrentes e garantir SLA rigoroso.',
    iconName: 'Headphones',
    deliverables: [
      'Atendimento remoto imediato e visitas presenciais programadas ou emergenciais',
      'Monitoramento proativo de saúde de estações, discos e serviços críticos',
      'Padronização de inventário de ativos, permissões e políticas de uso',
      'Contratos mensais sob medida conforme o porte da sua operação',
    ],
    idealFor: 'Escritórios, clínicas, indústrias e redes varejistas que precisam de T.I. confiável.',
    featured: true,
  },
  {
    id: 'servidores',
    number: '02',
    title: 'Servidores Corporativos',
    shortDesc:
      'Projeto, instalação, configuração e manutenção de servidores físicos Windows e Linux preparados para alta disponibilidade.',
    fullDesc:
      'Dimensionamento completo de servidores em torre ou rack (Dell PowerEdge, HPE ProLiant, Lenovo) com configuração de Active Directory, controladores de domínio, arquivos e aplicações ERP.',
    iconName: 'Server',
    deliverables: [
      'Instalação e hardening de Windows Server e distribuições Linux corporativas',
      'Configuração de RAID, fontes redundantes e gerenciamento fora de banda (iDRAC/iLO)',
      'Migração assistida de servidores legados sem perda de dados ou paradas longas',
      'Manutenção preventiva térmica, firmware e monitoramento de SMART/arrays',
    ],
    idealFor: 'Empresas que hospedam ERP, bancos de dados ou servidores de arquivos locais.',
    featured: true,
  },
  {
    id: 'virtualizacao',
    number: '03',
    title: 'Virtualização Avançada',
    shortDesc:
      'Consolidação de ambientes em VMware ESXi, Microsoft Hyper-V e Proxmox VE para otimizar hardware e acelerar recuperações.',
    fullDesc:
      'Arquitetura de clusters virtualizados que eliminam o desperdício de recursos físicos e permitem isolar cargas de trabalho críticas com snapshots instantâneos e alta disponibilidade.',
    iconName: 'Layers',
    deliverables: [
      'Implantação e tuning de VMware vSphere, Hyper-V e Proxmox VE',
      'Conversão P2V (físico para virtual) de servidores legados sem downtime crítico',
      'Configuração de storage compartilhado, VLANs dedicadas e réplicas entre hosts',
      'Planejamento de capacidade de CPU, memória ECC e IOPS em NVMe/SAS',
    ],
    idealFor: 'Ambientes com múltiplos serviços que exigem isolamento e agilidade de recuperação.',
  },
  {
    id: 'cyberseguranca',
    number: '04',
    title: 'Cybersegurança e Proteção de Dados',
    shortDesc:
      'Defesa em camadas contra ransomware, invasões e vazamentos com firewalls dedicados, EDR e políticas de acesso zero-trust.',
    fullDesc:
      'Proteção ativa do perímetro e dos endpoints corporativos. Implementamos firewalls de próxima geração, VPNs criptografadas, segmentação de rede e adequação técnica à LGPD.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Implantação de Firewalls NGFW (Fortinet, Sophos, pfSense/OPNsense)',
      'Antivírus corporativo gerenciado e proteção ativa contra ransomware (EDR)',
      'VPN IPSec/SSL segura para filiais e equipes em trabalho remoto',
      'Auditoria de vulnerabilidades, controle de acesso e segmentação VLAN',
    ],
    idealFor: 'Negócios que lidam com dados financeiros, prontuários ou propriedade intelectual.',
  },
  {
    id: 'wifi-seguro',
    number: '05',
    title: 'Wi-Fi Seguro e Redes Corporativas',
    shortDesc:
      'Cobertura sem fio de alta densidade com autenticação segmentada para diretoria, operação e visitantes sem quedas ou brechas.',
    fullDesc:
      'Projetos de rede Wi-Fi empresarial com estudo de cobertura, switches gerenciáveis PoE, balanceamento de múltiplos links de internet e isolamento total entre rede interna e visitantes.',
    iconName: 'Wifi',
    deliverables: [
      'Site survey e posicionamento estratégico de Access Points corporativos',
      'Segmentação por VLANs (Corporativo, Dispositivos IoT, Visitantes com portal)',
      'Switches gerenciáveis Layer 2/3, Link Aggregation e failover multi-WAN',
      'Organização completa de racks, patch panels e certificação de cabeamento',
    ],
    idealFor: 'Empresas com galpões, múltiplos andares, clínicas e alta concentração de usuários.',
  },
  {
    id: 'montagem-upgrade',
    number: '06',
    title: 'Montagem e Upgrade de PCs e Servidores',
    shortDesc:
      'Montagem técnica sob medida de estações de trabalho de alto desempenho, upgrades estratégicos e limpeza preventiva de hardware.',
    fullDesc:
      'Especificação e montagem de máquinas corporativas, estações CAD/engenharia e servidores personalizados com componentes homologados, cable management rigoroso e testes de estresse.',
    iconName: 'Cpu',
    deliverables: [
      'Montagem de Workstations profissionais para engenharia, arquitetura e vídeo',
      'Upgrades de armazenamento NVMe Enterprise, memória ECC e fontes certificadas',
      'Testes térmicos e de estabilidade em carga antes da entrega ao usuário',
      'Substituição preventiva de pasta térmica, coolers e componentes desgastados',
    ],
    idealFor: 'Equipes técnicas e empresas que buscam longevidade e máxima performance de hardware.',
  },
  {
    id: 'infraestrutura-ti',
    number: '07',
    title: 'Infraestrutura de TI Completa',
    shortDesc:
      'Do cabeamento estruturado à climatização de racks e energia estabilizada: projetos ponta a ponta para novas sedes e expansões.',
    fullDesc:
      'Assumimos a engenharia física e lógica da sua infraestrutura. Reorganizamos CPDs caóticos, implantamos nobreaks gerenciáveis, cabeamento Cat6a/fibra óptica e documentação completa da topologia.',
    iconName: 'Network',
    deliverables: [
      'Estruturação e revitalização de racks e salas de servidores (CPDs)',
      'Cabeamento estruturado Cat6/Cat6a, fusão e interligação em fibra óptica',
      'Dimensionamento de nobreaks senoidais com desligamento automático seguro',
      'Documentação técnica completa de portas, IPs, VLANs e ativos',
    ],
    idealFor: 'Empresas em mudança de sede, reforma ou modernização do parque tecnológico.',
  },
  {
    id: 'backup-continuidade',
    number: '08',
    title: 'Backup, Recuperação e Continuidade',
    shortDesc:
      'Estratégia 3-2-1 com cópias imutáveis locais e em nuvem para garantir retorno rápido da operação em qualquer incidente.',
    fullDesc:
      'Backup sem teste não é segurança. Implementamos rotinas automatizadas com verificação diária, retenção imutável contra sequestro de dados e simulações periódicas de restauração.',
    iconName: 'DatabaseBackup',
    deliverables: [
      'Implementação da regra 3-2-1 (local + nuvem criptografada + cópia imutável)',
      'Backup granular de máquinas virtuais, bancos SQL e pastas compartilhadas',
      'Monitoramento diário de integridade e alertas automáticos de conclusão',
      'Plano de Recuperação de Desastres (DRP) com RTO e RPO definidos',
    ],
    idealFor: 'Empresas que não podem correr o risco de perder históricos fiscais ou operacionais.',
  },
];

export type ProjectCategory =
  | 'Todos'
  | 'Redes & Wi-Fi'
  | 'Servidores & VM'
  | 'Cybersegurança'
  | 'Hardware';

export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  year: string;
  summary: string;
  outcomeMetric: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  featured?: boolean;
}

export const PROJECTS: ProjectCase[] = [
  {
    id: 'case-itau-rede',
    title: 'Adequação de Rack, Switches e Infraestrutura de Rede Corporativa',
    client: 'Itaú (Agências & Unidades Regionais)',
    category: 'Redes & Wi-Fi',
    year: '2025',
    summary:
      'Padronização física e lógica de racks de telecomunicações, organização simétrica de patch cords Cat6a, certificação de pontos e interligação óptica seguindo rigorosos padrões bancários de segurança e continuidade.',
    outcomeMetric: 'Zero paradas não planejadas na virada operacional',
    image: '/src/assets/images/project_itau_network_1795555501517.jpg',
    imageAlt:
      'Rack corporativo com switches gerenciáveis e cabeamento estruturado azul organizado pela Hard-Lan Tecnologia',
    highlights: [
      'Reorganização completa de patch panels e identificação ponto a ponto',
      'Interligação redundante em fibra óptica entre switches core e acesso',
      'Conformidade estrita com normas corporativas de segurança física e elétrica',
    ],
    featured: true,
  },
  {
    id: 'case-cluster-virtualizacao',
    title: 'Cluster de Virtualização de Alta Disponibilidade e Storage Redundante',
    client: 'Indústria & Distribuição Noroeste',
    category: 'Servidores & VM',
    year: '2025',
    summary:
      'Consolidação de 7 servidores físicos legados em cluster virtualizado redundante com armazenamento NVMe/SAS em RAID 10, reduzindo consumo energético e tempo de recuperação de falhas.',
    outcomeMetric: 'Redução de 68% no tempo de backup e 99,98% de disponibilidade',
    image: '/src/assets/images/project_virtualization_cluster_1795555501292.jpg',
    imageAlt:
      'Cluster de servidores rackmount e storage redundante instalado em gabinete climatizado',
    highlights: [
      'Migração P2V do ERP e banco de dados sem perda de histórico',
      'Failover automático entre nós físicos e snapshots agendados a cada hora',
      'Réplica criptografada offsite com verificação automática de integridade',
    ],
  },
  {
    id: 'case-firewall-wifi',
    title: 'Perímetro Next-Gen Firewall e Wi-Fi Corporativo Segmentado',
    client: 'Centro Médico & Diagnóstico Rio Preto',
    category: 'Cybersegurança',
    year: '2024',
    summary:
      'Implantação de appliance firewall com inspeção profunda de pacotes, failover entre dois links de fibra e cobertura Wi-Fi empresarial isolando equipamentos médicos, administração e pacientes.',
    outcomeMetric: '4 VLANs isoladas · Cobertura total em 3 pavimentos',
    image: '/src/assets/images/project_wifi_firewall_1795555501130.jpg',
    imageAlt:
      'Appliance firewall corporativo e Access Point Wi-Fi empresarial preparados para implantação',
    highlights: [
      'Bloqueio proativo de tráfego malicioso e proteção contra ransomware',
      'Roaming contínuo para tablets de atendimento médico sem queda de sessão',
      'VPN segura para acesso de médicos e diretoria externa',
    ],
  },
  {
    id: 'case-workstations-engenharia',
    title: 'Estações de Trabalho Customizadas para Engenharia e Projetos BIM',
    client: 'Construtora & Escritório de Projetos',
    category: 'Hardware',
    year: '2024',
    summary:
      'Especificação, montagem e calibração térmica de workstations de alta performance com GPUs profissionais, armazenamento NVMe PCIe 4.0 e cabeamento interno otimizado para fluxo de ar.',
    outcomeMetric: 'Ganho de 3,2x na velocidade de renderização e modelagem 3D',
    image: '/src/assets/images/project_workstation_build_1795555502220.jpg',
    imageAlt:
      'Interior de workstation profissional montada sob medida com cabeamento limpo e GPU dedicada',
    highlights: [
      'Testes contínuos de estresse térmico e estabilidade elétrica antes da entrega',
      'Integração direta ao domínio Active Directory e rotina automática de backup',
      'Fontes de alta eficiência com proteção elétrica dedicada',
    ],
  },
];

export interface ClientLogo {
  name: string;
  sector: string;
  featured?: boolean;
}

export const CLIENTS: ClientLogo[] = [
  { name: 'Itaú', sector: 'Instituição Financeira', featured: true },
  { name: 'Grupo América Saúde', sector: 'Clínicas & Diagnósticos' },
  { name: 'AgroRio Logística', sector: 'Agronegócio & Transporte' },
  { name: 'Construtora Paulista', sector: 'Engenharia Civil' },
  { name: 'Rede MedRio', sector: 'Saúde Corporativa' },
  { name: 'Noroeste Indústria', sector: 'Manufatura & ERP' },
  { name: 'Grupo Rio Preto Embalagens', sector: 'Indústria' },
  { name: 'Contábil Vanguarda', sector: 'Serviços Corporativos' },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  contextMetric: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Ricardo Alencar',
    role: 'Gerente Administrativo e Operações',
    company: 'Noroeste Indústria & Comércio',
    initials: 'RA',
    quote:
      'Antes da Hard-Lan, sofríamos com lentidão no ERP e quedas semanais na rede do galpão. Eles reestruturaram nosso rack, virtualizaram nossos servidores e implantaram backup imutável. Hoje operamos com estabilidade total.',
    contextMetric: 'Parceiro há 9 anos · Virtualização e Suporte',
  },
  {
    id: 'dep-2',
    name: 'Dra. Camila Fernandes',
    role: 'Diretora Clínica',
    company: 'Grupo América Saúde',
    initials: 'CF',
    quote:
      'Em clínica médica, perder acesso ao prontuário ou expor dados de pacientes não é opção. A equipe implantou firewall dedicado e separou o Wi-Fi dos visitantes com agilidade e documentação exemplar.',
    contextMetric: 'Infraestrutura Wi-Fi e LGPD · São José do Rio Preto',
  },
  {
    id: 'dep-3',
    name: 'Marcos Vinícius Prado',
    role: 'Coordenador de Projetos BIM',
    company: 'Construtora Paulista',
    initials: 'MP',
    quote:
      'Precisávamos de workstations confiáveis que aguentassem renderização pesada sem superaquecer, além de suporte rápido quando surge qualquer demanda em obra. A Hard-Lan entrega precisão técnica rara na região.',
    contextMetric: 'Workstations e Suporte Presencial · Desde 2019',
  },
];

export interface Differentiator {
  number: string;
  title: string;
  description: string;
  iconName:
    | 'Award'
    | 'Clock'
    | 'ShieldAlert'
    | 'Wrench'
    | 'FileText'
    | 'Building2';
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    title: 'Mais de 23 anos de atuação sólida',
    description:
      'No mercado desde 2002 em São José do Rio Preto, acumulando vivência prática em hardware, redes e arquiteturas críticas.',
    iconName: 'Award',
  },
  {
    number: '02',
    title: 'Atendimento ágil presencial e remoto',
    description:
      'Suporte técnico direto com especialistas que conhecem o seu ambiente, sem roteiros engessados ou filas intermináveis.',
    iconName: 'Clock',
  },
  {
    number: '03',
    title: 'Segurança e continuidade como prioridade',
    description:
      'Cada servidor, rede Wi-Fi e estação é configurado seguindo boas práticas de proteção contra ransomware e perda de dados.',
    iconName: 'ShieldAlert',
  },
  {
    number: '04',
    title: 'Domínio real de hardware e infraestrutura',
    description:
      'Atuamos da solda e montagem de alta precisão ao cabeamento óptico e clusters de virtualização — visão completa da camada física à lógica.',
    iconName: 'Wrench',
  },
  {
    number: '05',
    title: 'Ambientes documentados e transparentes',
    description:
      'Entregamos topologias mapeadas, inventário organizado e relatórios claros para que sua empresa nunca fique refém de caixa-preta.',
    iconName: 'FileText',
  },
  {
    number: '06',
    title: 'Confiança comprovada por grandes marcas',
    description:
      'Experiência em projetos exigentes para instituições como o Itaú e empresas líderes do Noroeste Paulista.',
    iconName: 'Building2',
  },
];
