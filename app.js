// 1. Interactive PassportAI Semantic Router + Executive Prompt Lab
const missions = {
  closer: {
    model: 'Claude 4.6 Sonnet + Semantic Router',
    savings: '-72% Costo Operativo ($200 → $29/mes)',
    security: 'Prompt Firewall Activo · Cero Fuga de Datos',
    title: 'Misión: Cerrar Ventas High-Ticket y Agendar Citas en Automático',
    why: 'Para ventas consultivas en español e inglés, combinamos empatía conversacional con manejo estricto de objeciones. Este prompt transforma tu IA en un Closer Senior que filtra curiosos y solo agenda prospectos calificados.',
    prompt: `Actúa como un Closer Senior de Ventas Consultivas B2B entrenado bajo la metodología de Agencia Prosper IA.
Tu objetivo es atender en menos de 15 segundos a cada prospecto que llega por WhatsApp o Web, diagnosticar su dolor principal y agendar una sesión estratégica solo si cumple calificación.

REGLAS DE EJECUCIÓN:
1. Nunca hagas más de UNA pregunta por mensaje. Mantén mensajes cortos (máximo 3 líneas).
2. Aplica la secuencia de 4 pasos: (a) Apertura empática contextual, (b) Diagnóstico de volumen actual y cuello de botella, (c) Cuantificación del costo de no resolverlo hoy, (d) Cierre directo a calendario con 2 opciones de horario.
3. Si el prospecto pregunta precio antes del diagnóstico, responde con valor y devuelve una pregunta de calificación para personalizar la propuesta.

Mi negocio vende: [INSERTA TU SERVICIO/PRODUCTO]
Ticket promedio: [INSERTA PRECIO USD]
Objeción más común: [INSERTA OBJECIÓN]
Genera ahora el flujo exacto de 5 mensajes y las respuestas a las 3 objeciones principales.`
  },
  finanzas: {
    model: 'GPT-5.4 Reasoning + DeepSeek R1 Audit',
    savings: '-68% Tiempo de Análisis Financiero',
    security: 'Anonimización Automática de Estados Financieros',
    title: 'Misión: Auditoría de Margen Real y Fugas de Caja (1.ª Inteligencia)',
    why: 'Facturar no es ganar. Este modelo de razonamiento profundo analiza tus costos ocultos, detecta productos "vampiro" que drenan tu tiempo y rediseña tu estructura de precios para multiplicar utilidad neta.',
    prompt: `Actúa como un CFO Estratégico experto en el Pilar 1 (Inteligencia Financiera: "¿Qué vale?") del libro Las 4 Inteligencias de Edward Jiménez.
Analiza los siguientes datos de mi negocio y realiza un diagnóstico implacable de rentabilidad:

1. Calcula el margen de contribución real por línea de producto/servicio descontando horas operativas del dueño.
2. Identifica las 3 fugas silenciosas de flujo de caja (suscripciones redundantes, clientes de bajo margen que consumen el 80% del soporte, demora en cobranza).
3. Propón una escalera de valor con una oferta High-Ticket o recurrente que eleve el LTV/CAC por encima de 5x en los próximos 60 días.

Ingresos mensuales actuales: [INSERTA MONTO USD]
Costos fijos y variables: [INSERTA COSTOS]
Productos/Servicios actuales: [LISTA TUS OFERTAS]`
  },
  estrategia: {
    model: 'Gemini 3.1 Pro + Claude 4.6 Sonnet',
    savings: '+15 Horas Directivas Libres por Semana',
    security: 'Bóveda Estratégica Privada en PassportAI',
    title: 'Misión: Plan SVE90 para Salir de la Trampa del «Dueño-Pulpo»',
    why: 'El Sistema de Visión y Ejecución a 90 Días (SVE90) convierte objetivos dispersos en 3 rocas trimestrales medibles, definiendo qué tareas debes eliminar, cuáles delegar a tu equipo y cuáles automatizar con IA.',
    prompt: `Actúa como un Consultor Ejecutivo certificado en el método SVE90 (Sistema de Visión y Ejecución a 90 Días) del libro Las 4 Inteligencias de Edward Jiménez.
Hoy me siento atrapado como "Dueño-Pulpo" operando incendios diarios.

Diseña mi hoja de ruta de 90 días dividida en:
1. MATRIZ DE LIBERACIÓN DIRECTIVA: Clasifica mis actividades actuales en (a) Automatizar con Empleados Digitales IA esta semana, (b) Delegar con SOPs, (c) Eliminar de inmediato, (d) Conservar como Arquitecto (solo alto valor).
2. LAS 3 ROCAS DEL TRIMESTRE: Define 3 objetivos medibles con KPI semanal para duplicar margen sin aumentar mis horas de trabajo.
3. RITUAL DE GOBERNANZA SEMANAL: Estructura de revisión de 30 minutos cada lunes.

Mi rol actual y tareas que más tiempo me quitan: [DESCRIBE TU DÍA A DÍA]
Meta principal a 90 días: [INSERTA TU META]`
  },
  contenido: {
    model: 'Claude 4.6 Sonnet + Grok Trend Radar',
    savings: '10 Guiones Virales en 4 Minutos',
    security: 'Voz de Marca Personalizada',
    title: 'Misión: Ingeniería de Guiones Virales 9:16 para Reels y TikTok',
    why: 'Combina detección de tendencias en tiempo real con la estructura de retención de 7 beats que llevó a @edwardjimenezia a superar +109,000 reproducciones orgánicas por Reel y +643,000 en Facebook.',
    prompt: `Actúa como el Director de Contenido Viral de @edwardjimenezia.
Necesito 5 guiones verticales (formato 9:16 de 45 segundos) diseñados para retener la atención de dueños de negocio y ejecutivos y convertirlos en prospectos calificados por DM.

Para cada guion entrega:
1. GANCHO VISUAL Y VERBAL (0–3 seg): Una afirmación contraintuitiva o dolor directo que detenga el scroll.
2. AGITACIÓN DEL PROBLEMA (3–12 seg): El error silencioso que les está costando dinero o tiempo hoy.
3. REVELACIÓN DEL SISTEMA (12–35 seg): Explicación clara en 3 pasos accionables.
4. LLAMADO A LA ACCIÓN DE PALABRA CLAVE (35–45 seg): Invitación a comentar una palabra clave para recibir el recurso por automatización en DM.

Mi nicho o especialidad: [INSERTA TU INDUSTRIA]
Recurso gratuito o imán de leads: [INSERTA TU RECURSO]`
  },
  codigo: {
    model: 'Claude 4.6 Sonnet + GPT-5.4 Codex',
    savings: 'Despliegue 5x más Rápido sin Deuda Técnica',
    security: 'Auditoría OWASP & Sandbox Seguro',
    title: 'Misión: Arquitectura de Agentes de Voz, WhatsApp y CRM',
    why: 'Diseña la arquitectura técnica completa (webhooks, estados de conversación, manejo de errores y conexión a calendario/CRM) lista para poner en producción un Empleado Digital 24/7.',
    prompt: `Actúa como el Arquitecto Principal de Soluciones IA de Agencia Prosper IA.
Diseña la especificación técnica lista para producción de un Empleado Digital omnicanal (WhatsApp + Web + Voz) conectado a CRM y Calendario.

Incluye en tu respuesta:
1. Diagrama de flujo de estados de la conversación (Nuevo Lead -> Calificación -> Manejo de Objeciones -> Reserva de Cita -> Recordatorios WhatsApp).
2. Estructura del payload JSON para el webhook hacia el CRM y validación de disponibilidad de calendario.
3. Guardrails de seguridad (Prompt Firewall) para impedir alucinaciones de precios o descuentos no autorizados.

Stack actual o CRM de mi empresa: [EJ: GHL / HubSpot / Custom Python FastAPI]`
  }
};

const routerTabs = document.querySelectorAll('.router-tab');
const routerModelName = document.getElementById('routerModelName');
const routerSavings = document.getElementById('routerSavings');
const routerSecurity = document.getElementById('routerSecurity');
const routerTitle = document.getElementById('routerTitle');
const routerWhy = document.getElementById('routerWhy');
const routerPromptText = document.getElementById('routerPromptText');
const copyPromptBtn = document.getElementById('copyPromptBtn');

routerTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    routerTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const key = tab.getAttribute('data-mission');
    const data = missions[key];
    if (!data) return;
    routerModelName.textContent = data.model;
    routerSavings.textContent = data.savings;
    routerSecurity.textContent = data.security;
    routerTitle.textContent = data.title;
    routerWhy.textContent = data.why;
    routerPromptText.textContent = data.prompt;
    if (copyPromptBtn) copyPromptBtn.textContent = '📋 Copiar Prompt Maestro';
  });
});

if (copyPromptBtn && routerPromptText) {
  copyPromptBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(routerPromptText.textContent);
      copyPromptBtn.textContent = '✅ ¡Prompt Copiado!';
      setTimeout(() => {
        copyPromptBtn.textContent = '📋 Copiar Prompt Maestro';
      }, 2200);
    } catch {
      copyPromptBtn.textContent = 'Selecciona y copia (Cmd+C)';
    }
  });
}

// 2. Interactive Digital Employees ROI Calculator
const roiLeads = document.getElementById('roiLeads');
const roiTicket = document.getElementById('roiTicket');
const roiDelay = document.getElementById('roiDelay');

const updateRoiCalculator = () => {
  if (!roiLeads || !roiTicket || !roiDelay) return;
  const leads = Number(roiLeads.value);
  const ticket = Number(roiTicket.value);
  const delay = Number(roiDelay.value);

  document.getElementById('roiLeadsLabel').textContent = `${leads.toLocaleString('es-US')} leads / mes`;
  document.getElementById('roiTicketLabel').textContent = `$${ticket.toLocaleString('es-US')} USD`;
  document.getElementById('roiDelayLabel').textContent = `${delay} minutos`;

  // Conversion lift factor based on response time reduction to <15s
  const delayFactor = Math.min(0.09, 0.02 + (delay / 240) * 0.07);
  const extraDeals = Math.max(1, Math.round(leads * delayFactor));
  const recoveredMoney = extraDeals * ticket;
  const hoursSaved = Math.round((leads * 15) / 60);

  document.getElementById('roiMoneyOutput').textContent = `+$${recoveredMoney.toLocaleString('es-US')} USD`;
  document.getElementById('roiHoursSaved').textContent = `${hoursSaved} hrs / mes`;
};

[roiLeads, roiTicket, roiDelay].forEach((el) => {
  if (el) el.addEventListener('input', updateRoiCalculator);
});

// 3. Interactive 4 Intelligences Validator
const sliders = ['valFin', 'valEmo', 'valEst', 'valIa'];
const updateValidator = () => {
  const vals = sliders.map((id) => {
    const el = document.getElementById(id);
    const v = Number(el.value);
    document.getElementById(id + 'Label').textContent = `${v} / 25`;
    return v;
  });
  const total = vals.reduce((a, b) => a + b, 0);
  const circle = document.getElementById('totalScoreCircle');
  const verdict = document.getElementById('scoreVerdict');
  const desc = document.getElementById('scoreDesc');

  circle.textContent = String(total);
  if (total >= 80) {
    circle.style.borderColor = '#34d399';
    verdict.textContent = 'PROYECTO DE ALTO APALANCAMIENTO (80–100)';
    desc.textContent = 'Luz verde ejecutiva: combina retorno financiero, paz directiva, foco de 90 días y alta delegación en empleados digitales.';
  } else if (total >= 60) {
    circle.style.borderColor = '#d2ae77';
    verdict.textContent = 'OPORTUNIDAD VIABLE CON AJUSTES (60–79)';
    desc.textContent = 'Refuerza la inteligencia más baja o delega la carga operativa con sistemas de IA antes de escalar.';
  } else {
    circle.style.borderColor = '#f87171';
    verdict.textContent = 'ALERTA: TRAMPA DE DUEÑO-PULPO (< 60)';
    desc.textContent = 'Alto riesgo de desgaste personal o bajo margen. Rediseña el modelo antes de invertir tu tiempo.';
  }
};
sliders.forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', updateValidator);
});

// 4. Excerpt Dialog with mandatory light-dismiss fallback (per modern-web-guidance `light-dismiss-a-dialog`)
const excerptDialog = document.getElementById('excerptDialog');
const openExcerptBtn = document.getElementById('openExcerptBtn');
if (openExcerptBtn && excerptDialog) {
  openExcerptBtn.addEventListener('click', () => {
    excerptDialog.showModal();
  });
}

if (excerptDialog && !('closedBy' in HTMLDialogElement.prototype)) {
  excerptDialog.addEventListener('click', (event) => {
    if (event.target !== excerptDialog) return;
    const rect = excerptDialog.getBoundingClientRect();
    const isDialogContent = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (isDialogContent) return;
    excerptDialog.close();
  });
}
