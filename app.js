// Interactive 4 Intelligences Validator
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

// Excerpt Dialog with mandatory light-dismiss fallback (per modern-web-guidance `light-dismiss-a-dialog`)
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
