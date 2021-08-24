let fundamentalData = [{
    id: 'fundamentalMarketingTheory',
    title: 'Fundamental Marketing Theory',
    annotation: 'Fundamental Marketing Theory',
    toolTip: 'Identify The Fundamanetal of Theory of Marketing',
}, {
    id: 'fundamentalExchangeSystemTheory',
    title: 'Fundamental Exchange System Theory',
    annotation: 'Fundamental Exchange System Theory',
    toolTip: 'Identify The Fundamental of Exchange System Theory',
}, {
    id: 'fundamentalGammingTheory',
    title: 'Fundamental Gamming Theory',
    annotation: 'Fundamental Gamming Theory',
    toolTip: 'Identify The Fundamental of The Gamming Theory'
}, {
    id: 'fundamentalWorkTheory',
    title: 'Fundamental Work Theory',
    annotation: 'Fundamental Work Theory',
    toolTip: 'Identify The Fundamental of Work Theory',
}, {
    id: 'fundamentalReproductionTheory',
    title: 'Fundamental Reproduction Theory',
    annotation: 'Fundamental Reproduction Theory',
    toolTip: 'Identify The Fundamental Reporoduction Theory',
}, {
    id: 'fundamentalUtilizationTheory',
    title: 'Fundamental Reproduction Theory',
    annotation: 'Fundamental Reproduction Theory',
    toolTip: 'Identify The Fundamental of The Reproduction Theory'
}, {
    id: 'fundamentalPresentedTheory',
    title: 'Fundamental Presented Theory',
    annotation: 'Fundamental Presented Theory',
    toolTip: 'Identify The Fundamental of a Presented Theory'
}, {
    id: 'fundamentalInterpretedTheory',
    title: 'Fundamental Interpreted Theory',
    annotation: 'Fundamental Interpreted Theory',
    toolTip: 'Identify The Fundamental of a Interpreted Theory'
}, {
    id: 'fundamentalTheory1',
    title: 'Fundamental Theory',
    annotation: 'fT',
    toolTip: 'Identify The Fundamental Theory'
}, {
    id: 'fundamentalCommunicationTheory1',
    title: 'Fundamental Communication Theory',
    annotation: 'fKT',
    toolTip: 'Identify The Fundamental of Communication Theory'
}, {
    id: 'fundamentalUtilizationTheory',
    title: 'Fundamental Utilization Theory',
    annotation: 'fUT',
    toolTip: 'Identify The Fundamental of Our Utilization Theory'
}, {
    id: 'group2',
    title: 'Group',
    annotation: 'Group',
    toolTip: 'Use to Group or Add Entities',
    type: 'Vertical'
}, {
    id: 'equation2',
    title: 'Equation',
    annotation: '√x',
    toolTip: 'Use to Add Equation',
}];

function getFundamental() {
    return fundamentalData.map(data => drawShape(data));
}