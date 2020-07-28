export const Trasfondos = [
    'El Pobre y Fracasado...',
    'El Emprendedor de Clase Media...',
    'El Rico y Poderoso...'];

export const Motivaciones = [
    'Una Oportunidad Irresistible...',
    'Un Destino Superior...',
    'Enemigos y Antagonistas...',
    'Un Problema Personal...',
    'Lugar Equivocado en Momento Inoportuno...'];

export const Especies = [
    'Bothan',
    'Droide',
    'Gandiano',
    'Humano',
    'Rodiano',
    'Trandoshano',
    'Twi\'lek',
    'Wookie'];

export const Oficios = [
    {name: 'Cazarrecompensas',
    habilidades: ['alerta', 'armas.dist.pes','atletismo', 'callejeo', 'pelea', 'percepción', 'pilota.v.esp', 'pilota.v.pla'],
    espec: [ {
      key: 'asesino',
      value: 'Asesino-Herramienta Política',
      habilidades: ['act.criminal', 'armas.dist.pes', 'armas.cuerpo', 'sigilo']
    },
    {
      key: 'tecnificado',
      value: 'Tecnificado-Experto en Tecnología',
      habilidades: ['armas.dist.lig', 'coaccion', 'mecanica', 'pelea']
    },
    {
      key: 'superviviente',
      value: 'Especialista en Supervivencia-Depredador Salvaje',
      habilidades: ['aguante', 'percepcion', 'supervivencia', 'xenologia']
    }]
    },
    {name: 'Colono',
    habilidades: ['callejeo', 'carisma', 'engano', 'liderazgo', 'mundos.nucleo', 'negociacion', 'saber.arcaico'],
    espec: [{
      key: 'medico',
      value: 'Médico-El Don de la Curación',
      habilidades: ['aguante', 'educacion', 'frialdad', 'medicina']
    }, {
      key: 'politico',
      value: 'Político-El Don del Liderazgo',
      habilidades: ['carisma', 'coaccion', 'engaño', 'mundos.nucleo'],
    }, {
      key: 'erudito',
      value: 'Erudito-El Don del Conocimiento',
      habilidades: ['bajos.fondos','borde.ext', 'percepcion', 'xenologia']
    }]
    },
    {name: 'Pionero',
    habilidades: ['astronavegacion', 'borde.ext', 'frialdad', 'percepcion', 'pilota.v.esp', 'saber.arcaico', 'supervivencia', 'xenologia'],
    espec: [ {
      key: 'fronterizo',
      value: 'Fronterizo-Descubridor de Posiblidades',
      habilidades: ['astronavegacion', 'callejeo', 'coordinacion', 'negociacion']
    },
    {
      key: 'explorador',
      value: 'Explorador-Descubridor de Planetas',
      habilidades: ['atletismo', 'medicina', 'pilota.v.planetario', 'supervivencia']
    },
    {
      key: 'comerciante',
      value: 'Comerciante-Descubridor de Mercados',
      habilidades: ['bajos.fondos', 'engano', 'mundos.nucleo', 'negociacion']
    }]
    },
    {name: 'Pistolero a Sueldo',
    habilidades: ['aguante', 'armas.dist.lig', 'armas.cuerpo', 'atletismo', 'disciplina', 'pelea', 'pilota.v.planetario'],
    espec: [ {
      key: 'guardaespaldas',
      value: 'Guardaespaldas-Defensor Particular',
      habilidades: ['armas.dist.pes', 'artilleria', 'percepcion', 'pilota.v.planetario']
    },
    {
      key: 'incursor',
      value: 'Incursor-Cercano y Personal',
      habilidades: ['aguante', 'armas.cuerpo', 'coaccion', 'supervivencia']
    },
    {
      key: 'mercenario',
      value: 'Mercenario-Señor de la Guerra',
      habilidades: ['armas.dist.pes', 'artilleria', 'disciplina', 'liderazgo']
    }]
    },
    {name: 'Contrabandista',
    habilidades: ['act.criminal', 'alerta', 'bajos.fondos', 'callejeo', 'coordinacion', 'engano', 'percepcion', 'pilota.v.espacial'],
    espec: [ {
      key: 'piloto',
      value: 'Piloto-Una Galaxia de Destinos',
      habilidades: ['artilleria', 'astronavegacion', 'pilota.v.espacial', 'pilota.v.planetario']
    }, {
      key: 'granuja',
      value: 'Granuja-Una Galaxia de Incautos',
      habilidades: ['armas.dist.lig', 'carisma', 'engaño', 'frialdad']
    }, {
      key: 'ladron',
      value: 'Ladrón-Una Galaxia de Tesoros',
      habilidades: ['act.criminal', 'alerta', 'computadoras', 'sigilo']
    }]
    },
    {name: 'Técnico',
    habilidades: ['astronavegacion', 'borde.ext', 'computadoras', 'coordinacion', 'disciplina', 'mecanica', 'percepcion', 'pilota.v.planetario'],
    espec: [{
      key: 'mecanico',
      value: 'Mecánico-El que Repara Averías',
      habilidades: ['act.criminal', 'mecanica', 'pelea', 'pilota.v.espacial']
    },
    {
      key: 'tecnico',
      value: 'Técnico Clandestino-El que Mejora el Equipo',
      habilidades: ['bajos.fondos','callejeo', 'educacion', 'mecanica']
    },
    {
      key: 'pirata',
      value: 'Pirata Informático-El que Facilita Información',
      habilidades: ['bajos.fondos', 'computadoras', 'educacion', 'sigilo']
    }
    ]}
];

export const obligaciones = [
    'Adicción',
    'Traición',
    'Chantaje',
    'Recompensa',
    'Criminal',
    'Deuda',
    'Deber',
    'Familia',
    'Favor',
    'Juramento',
    'Obsesión',
    'Responsabilidad'];

  export const habilidades = [
    {
      key: 'act.criminal',
      name: 'Actividad criminal',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'aguante',
      name: 'Aguante',
      characteristic: 'FOR',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'alerta',
      name: 'Alerta',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'armas.dist.lig',
      name: 'Armas a distancia ligeras',
      characteristic: 'AGI',
      type: 'combate',
      value: '',
      professional: false,
    },
    {
      key: 'armas.dist.pes',
      name: 'Armas a distancia pesadas',
      characteristic: 'AGI',
      type: 'combate',
      value: '',
      professional: false,
    },
    {
      key: 'armas.cuerpo',
      name: 'Armas cuerpo a cuerpo',
      characteristic: 'FOR',
      type: 'combate',
      value: '',
      professional: false,
    },
    {
      key: 'artilleria',
      name: 'Artillería',
      characteristic: 'AGI',
      type: 'combate',
      value: '',
      professional: false,
    },
    {
      key: 'astronavegacion',
      name: 'Astronavegación',
      characteristic: 'INT',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'atletsimo',
      name: 'Atletismo',
      characteristic: 'FOR',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'bajos.fondos',
      name: 'Bajos fondos',
      characteristic: 'INT',
      type: 'conocimientos',
      value: '',
      professional: false,
    },
    {
      key: 'borde.ext',
      name: 'Borde exterior',
      characteristic: 'INT',
      type: 'conocimientos',
      value: '',
      professional: false,
    },
    {
      key: 'callejeo',
      name: 'Callejeo',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'carisma',
      name: 'Carisma',
      characteristic: 'PRE',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'coaccion',
      name: 'Coacción',
      characteristic: 'VOL',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'computadoras',
      name: 'Computadoras',
      characteristic: 'INT',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'coordinacion',
      name: 'Coordinación',
      characteristic: 'AGI',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'disciplina',
      name: 'Disciplina',
      characteristic: 'VOL',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'educacion',
      name: 'Educación',
      characteristic: 'INT',
      type: 'conocimientos',
      value: '',
      professional: false,
    },
    {
      key: 'engano',
      name: 'Engaño',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'frialdad',
      name: 'Frialdad',
      characteristic: 'PRE',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'liderazgo',
      name: 'Liderazgo',
      characteristic: 'PRE',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'mecanica',
      name: 'Mecánica',
      characteristic: 'INT',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'medicina',
      name: 'Medicina',
      characteristic: 'INT',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'mundos.nucleo',
      name: 'Mundos del núcleo',
      characteristic: 'INT',
      type: 'conocimientos',
      value: '',
      professional: false,
    },
    {
      key: 'negociacion',
      name: 'Negociación',
      characteristic: 'PRE',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'pelea',
      name: 'Pelea',
      characteristic: 'FOR',
      type: 'combate',
      value: '',
      professional: false,
    },
    {
      key: 'percepcion',
      name: 'Percepción',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'pilota.v.esp',
      name: 'Pilotar vehículo espacial',
      characteristic: 'AGI',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'pilota.v.planetario',
      name: 'Pilotar vehículo planetario',
      characteristic: 'AGI',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'saber.arcaico',
      name: 'Saber arcaico',
      characteristic: 'INT',
      type: 'conocimiento',
      value: '',
      professional: false,
    },
    {
      key: 'sigilo',
      name: 'Sigilo',
      characteristic: 'AGI',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'supervivencia',
      name: 'Supervivencia',
      characteristic: 'AST',
      type: 'general',
      value: '',
      professional: false,
    },
    {
      key: 'xenologia',
      name: 'Xenología',
      characteristic: 'INT',
      type: 'conocimiento',
      value: '',
      professional: false,
    }
  ]
