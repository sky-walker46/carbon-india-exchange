const steps = {
  screen: ['Screen eligible activities', 'Evaluate methodology fit, additionality, ownership, baseline availability and monitoring feasibility before promising carbon revenue.'],
  aggregate: ['Aggregate into Carbon Cohorts', 'Group compatible producers by geography, intervention, baseline and methodology so certification infrastructure becomes reusable.'],
  baseline: ['Establish the baseline', 'Capture historic land use, operating activity and other methodology-specific evidence before crediting begins.'],
  monitor: ['Monitor with appropriate evidence', 'Combine satellite, field, sensor, sampling and operational records depending on the project category.'],
  verify: ['Prepare for independent verification', 'Create VVB-ready data rooms with versioned methodology documents, QA/QC and audit trails.'],
  issue: ['Track issuance', 'After successful verification and registry review, map issued credits to serial numbers, vintages and project evidence.'],
  retire: ['Sell and retire transparently', 'Support enterprise diligence, purchase, allocation and registry retirement records.'],
  pay: ['Distribute producer revenue', 'Calculate project costs, platform share and producer/FPO payment waterfalls with transparent ledgers.']
};
const card = document.getElementById('step-card');
document.querySelectorAll('.timeline button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.timeline button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const [title, text] = steps[btn.dataset.step];
    card.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
  });
});
