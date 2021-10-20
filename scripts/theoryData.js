// This fields contains all the data about the shapes

//#region Theory
let theoryData = [{
    id: 'theory',
    title: 'Theory',
    annotation: 'Theory',
    toolTip: 'Identify a Theory'
}, {
    id: 'theorem',
    title: 'Theorem',
    annotation: 'Theorem',
    toolTip: 'Identify a Theorem'
}, {
    id: 'communicationTheory',
    title: 'Communication Theory',
    annotation: 'Communication Theory',
    toolTip: 'Identify The Communication Theory'
}, {
    id: 'informationTheory',
    title: 'Information Theory',
    annotation: 'Information Theory',
    toolTip: 'Identify a Information Theory'
}, {
    id: 'instrumentationTheory',
    title: 'Instrumentation Theory',
    annotation: 'Instrumentation Theory',
    toolTip: 'Identify the Instrumentation Theory'
}, {
    id: 'educationTheory',
    title: 'Education Theory',
    annotation: 'Education Theory',
    toolTip: 'Identify The Education Theory'
}, {
    id: 'powerTheorem',
    title: 'Power Theorem',
    annotation: 'Power Theorem',
    toolTip: 'Identify The Power Theorem'
}, {
    id: 'marketingTheory',
    title: 'Marketing Theory',
    annotation: 'Marketing Theory',
    toolTip: 'Identify The Marketing Theory',
}, {
    id: 'exchangeSystemTheory',
    title: 'Exchange System Theory',
    annotation: 'Exchange System Theory',
    toolTip: 'Identify The Exchange System Theory'
}, {
    id: 'gammingTheory',
    title: 'Gamming Theory',
    annotation: 'Gamming Theory',
    toolTip: 'Identify Gamming Theory'
}, {
    id: 'workTheorem',
    title: 'Work Theorem',
    annotation: 'Work Theorem',
    toolTip: 'Identify The Work Theorem'
}, {
    id: 'reproductionTheory',
    title: 'Reproduction Theory',
    annotation: 'Reproduction Theory',
    toolTip: 'Identify The Reproduction Theory'
}, {
    id: 'utilizationTheory',
    title: 'Utilization Theory',
    annotation: 'Utilizatin Theory',
    toolTip: 'Identify Our Utilization Theory'
}, {
    id: 't',
    title: 'T',
    annotation: 'T',
    toolTip: 'Identify a Theory'
}, {
    id: 'theorem#',
    title: 'Theorem #',
    annotation: 'Theorem #',
    toolTip: 'Identify a Theorem'
}, {
    id: 'th[n]',
    title: 'Th[n]',
    annotation: 'Thn',
    toolTip: 'Identify a Theorem'
}, {
    id: 'communicationTheory1',
    title: 'Communication Theory',
    annotation: 'Kt',
    toolTip: 'Identify The Communication Theory'
}, {
    id: 'uT',
    title: 'UT',
    annotation: 'UT',
    toolTip: 'Identify Our Utilization Theory'
}, {
    id: 'interpretationFunction',
    title: 'Interpretation Function',
    annotation: 'Interpret',
    toolTip: 'Identify The Interpretation Function'
}, {
    id: 'interpretationFunction1',
    title: 'Interpretation Funciton',
    annotation: 'Int{ }',
    toolTip: 'Identify The Interpretation Function' 
}, {
    id: 'applyTheory',
    title: 'Apply Theory',
    annotation: 'Apply',
    toolTip: 'Theory Application Function'
}, {
    id: 'applyTheory1',
    title: 'Apply Theory',
    annotation: 'Tr{ }',
    toolTip: 'Theory Application Function'
}, {
    id: 'presentedTheory',
    title: 'Presented Theory',
    annotation: 'Presented Theory',
    toolTip: 'Identify a Presented Theory'
}, {
    id: 'interpretedTheory',
    title: 'Interpreted Theory',
    annotation: 'Interpreted Theory',
    toolTip: 'Identify an Interpreted Thoery'
}, {
    id: 'presentedTheory1',
    title: 'Presented Theory',
    annotation: "A'",
    toolTip: 'Identify a Presented Theory'
}, {
    id: 'interpretedTheory1',
    title: 'Interpreted Theory',
    annotation: 'A',
    toolTip: 'Identify an Intepreted Thoery'
}, {
    id: 'reference',
    title: 'Reference',
    annotation: 'Need new Shape',
    toolTip: 'Identify The Given Reference',
    type: 'Reference'
}, {
    id: 'reference1',
    title: 'Reference',
    annotation: 'Need new Shape',
    toolTip: 'Identify The Given Reference',
    type: 'Reference1'
}, {
    id: 'characteristicsTh',
    title: 'Characteristics',
    annotation: 'Theory Characteristics',
    toolTip: 'Characteristic of Theory'
}, {
    id: 'groupTheoryVertical',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    toolTip: 'Use to Group or Add Entities',
}, {
    id: 'continuity1',
    title: 'Continuity',
    annotation: {
        strokeWidth: '0',
        fill: 'transparent',
        ports: []
    },
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}, {
    id: 'linkednodeTH',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheory() {
    return theoryData.map(data => drawShape(data));
}
//#region system
let systemData = [{
    id: 'physicalSystem',
    title: 'Physical System',
    annotation: ['System'],
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 'physicalSystem1',
    title: 'Physical System',
    annotation: ['System'],
    toolTip :'Identify a Person',
    type: 'PersonNoFrame'
}, {
    id: 's[n]',
    title: 'S[n]',
    annotation: ['Sn'],
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 's[n]1',
    title: 'S[n]',
    annotation: ['Sn'],
    toolTip: 'Identify a Person',
    type: 'PersonNoFrame'
}, {
    id: 'x[n]',
    title: 'x[n]',
    annotation: ['Xn'],
    toolTip: 'Identify a Person',
    type: 'Person'
}, {
    id: 'x[n]1',
    title: 'x[n]',
    annotation: ['Xn'],
    toolTip: 'Identify a Person',
    type: 'PersonNoFrame'
}, {
    id: 'physicalSystem2',
    title: 'Physical System',
    annotation: 'System',
    toolTip: 'Identify a Person'
}, {
    id: 's',
    title: 'S',
    annotation: 'S',
    toolTip: 'Identify a Person',
    type: 'StrokeRect'
}, {
    id: 'S',
    title: 'S',
    annotation: 'S',
    toolTip: 'Identify a Person',
    type: 'DottedOverlap'
}, {
    id: 'groupPhysicalSystem',
    title: 'Group Physical System',
    annotation: 'Change Shape',
    toolTip: 'Identify Group of Person',
    type: 'PersonGroup' 
}, {
    id: 'groupPhysicalSystem1',
    title: 'Group Physical System',
    annotation: 'Systems',
    toolTip: 'Identify Group of Person',
    type: 'Overlap'
}, {
    id: 'groupPhysicalSyste2',
    title: 'Group Physical System',
    annotation: 'Change shape',
    toolTip: 'Identify Group of Person',
    type: 'DottedGroup'
}, {
    id: 's[n]2',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Represents The Physical System',
}, {
    id: 's[n]3',
    title: 'S[n]',
    annotation: 'Sn',
    toolTip: 'Represents The Physical System',
    type: 'Text'
}, {
    id: 'constantCharacteristics',
    title: 'Constant Characteristics',
    annotation: 'Constant Characteristics',
    toolTip: 'Physical System Constant Characteristics'
}, {
    id: 'mobilitySystem',
    title: 'Mobility',
    toolTip: 'Identify Our Mobility',
    type: 'mobility'
}, {
    id: 'groupSystem',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    toolTip: 'Use to Group or Add Entities'
}, {
    id: 'continuity',
    title: 'Continuity',
    annotation: {
        strokeWidth: 0,
        strokeDashArray: '',
        fill: 'transparent',
        ports: []
    },
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity'
}, {
    id: 'linkedNodeSystem',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getThoerySystem() {
    return systemData.map(data => drawShape(data));
}
//#region Fundamentals
let fundamentalData = [{
    id: 'fundamentalTheory',
    title: 'Fundamental Theory',
    annotation: 'Fundamental Theory',
    toolTip: 'Identify The Fundamental of Theory'
}, {
    id: 'fundamentalCommunication',
    title: 'Fundamental Commmunication',
    annotation: 'Fundamental Communication',
    toolTip: 'Identify The Fundamental of Communication Theory'
}, {
    id: 'fundamentalInformationTheory',
    title: 'Fundamental Information Theory',
    annotation: 'Fundamental Information Theory',
    toolTip: 'Identify The Fundamental of Information Theory'
}, {
    id: 'fundamentalInstrumentationTheory',
    title: 'Fundamental Instrumentation Theory',
    annotation: 'Fundamental Instrumentation Theory',
    toolTip: 'Identify The Fundamental of Instrumentation Theory'
}, {
    id: 'fundamentalEducation',
    title: 'Fundamental Education Theory',
    annotation: 'Fundamental Education Theory',
    toolTip: 'Identify The Fundamental of Education Theory'
}, {
    id: 'fundamentalPower',
    title: 'Fundamental Power Theorem',
    annotation: 'Fundamental Power Theorem',
    toolTip: 'Identify The Fundamental of The Power Theorem'
}, {
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
    id: 'fundamentalUtilizationTheoryFirst',
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
    id: 'fundamentalUtilizationTheory1',
    title: 'Fundamental Utilization Theory',
    annotation: 'fUT',
    toolTip: 'Identify The Fundamental of Our Utilization Theory'
}, {
    id: 'groupFundamental',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    toolTip: 'Use to Group or Add Entities'
}, {
    id: 'linkednodefundamental',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getThoeryFundamental() {
    return fundamentalData.map(data => drawShape(data));
}
//#region Interface
let theoryInterface = [{
    id: 'rightInterface',
    title: 'Right Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Right',
    type: 'Arrow'
}, {
    id: 'leftInterface',
    title: 'Left Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],
        shape: {
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Left',
    type: 'Arrow'
}, {
    id: 'upInterface',
    title: 'Up Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],

        shape: {
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface To The Top',
    type: 'Arrow'
}, {
    id: 'downInterface',
    title: 'Down Interface',
    annotation: {
        content: [{
            content: 'Interface',
            alignment: 'Before'
        }],

        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Interface Down',
    type: 'Arrow'
}, {
    id: 'dependencyInterface',
    title: 'Dependency Interface',
    annotation: {
        content: [{
            content: 'Depend',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Dependency Interface',
    type: 'Arrow'
}, {
    id: 'giveRiseInterface',
    title: 'Give Rise Interface',
    annotation: {
        content: [{
            content: 'Give Rise To',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Give Rise Interface',
    type: 'Arrow'
}, {
    id: 'pointToInterface',
    title: 'Point to Interface',
    annotation: {
        content: [{
            content: 'Point To',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Point to Interface',
    type: 'Arrow'
}, {
    id: 'apply',
    title: 'Apply',
    annotation: {
        content: [{
            content: 'Apply',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Apply Interface',
    type: 'Arrow'
}, {
    id: 'execute',
    title: 'Execute',
    annotation: {
        content: [{
            content: 'Execute',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Execute Interface',
    type: 'Arrow'
}, {
    id: 'contributeTo',
    title: 'Contribute To',
    annotation: {
        content: [{
            content: 'contribute to',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use to Show Contribution Interface',
    type: 'Arrow'
}, {
    id: 'associate',
    title: 'Associate',
    annotation: {
        content: [{
            content: 'associate',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'System Associates with Theory',
    type: 'Arrow'
}, {
    id: 'enable',
    title: 'Enable',
    annotation: {
        content: [{
            content: 'Enable',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For Enable Relationship',
    type: 'Arrow'
}, {
    id: 'related',
    title: 'Related',
    annotation: {
        content: [{
            content: 'Related',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'System Related To Theory',
    type: 'Arrow'
}, {
    id: 'derrive',
    title: 'Derrive',
    annotation: {
        content: [{
            content: 'Derrive',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Instrument Derive From Theory',
    type: 'Arrow'
}, {
    id: 'leftRightInteraction',
    title: 'Left-Right Interaction',
    annotation: {
        content: [{
            content: 'Interact',
            alignment: 'Before'
        }],
        type: 'Bezier',
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For System Interaction',
    type: 'Arrow'
}, {
    id: 'rightLeftInteraction',
    title: 'Right-Left Interaction',
    annotation: {
        content: [{
            content: 'Interact',
            alignment: 'Before'
        }],
        type: 'Bezier',
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Use For System Interaction',
    type: 'Arrow'
}, {
    id: 'related',
    title: 'Related',
    annotation: {
        content: [{
            content: 'Related'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Use For Related Entities',
    type: 'Circle'
}, {
    id: 'similarity',
    title: 'Similarity',
    annotation: {
        content: [{
            content: 'Similarity'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Use For Similariry Entities',
    type: 'Circle'
}, {
    id: 'relationship',
    title: 'Relationship',
    annotation: {
        content: [{
            content: 'Alpha' 
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Use For Related Entities',
    type: 'Circle'
}, {
    id: 'realtionshipBiArrow',
    title: 'Relationship',
    annotation: '',
    toolTip: 'Left And Right Relationship',
    type: 'BiWideArrow'
}, {
    id: 'realtionshipRightArrow',
    title: 'Relationship',
    annotation: {
        direction: 'Right',
        content: ''
    },
    toolTip: 'Left to Right Relationship',
    type: 'WideArrow'
}, {
    id: 'realtionshipLeftArrow',
    title: 'Relationship',
    annotation: {
        direction: 'left',
        content: ''
    },
    toolTip: 'Right to Left Relationship',
    type: 'WideArrow'
}, {
    id: 'linkednodeinterface',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheoryInterface() {
    return theoryInterface.map(data => drawShape(data));
}
//#region Signal
let theorySignals = [{
    id: 'greenSignal',
    title: 'Green Signal',
    annotation: {
        radius: 10,
        fill: 'LimeGreen',
        isPoint: true
    },
    toolTip: 'Denote Positive Flow',
    type: 'Circle'
}, {
    id: 'redSignal',
    title: 'Red Signal',
    annotation: {
        radius: 10,
        fill: 'Red',
        isPoint: true
    },
    toolTip: 'Denote Negative Flow',
    type: 'Circle'
}, {
    id: 'greenSignalPath',
    title: 'Green Signal Path',
    annotation: {
        style: {
            fill: 'LimeGreen',
            strokeColor: 'LimeGreen'
        },
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Denote Positive Flow Direction',
    type: 'Arrow'
}, {
    id: 'redSignalPath',
    title: 'Red Signal Path',
    annotation: {
        style: {
            fill: 'Red',
            strokeColor: 'Red'
        },
        shape: {
            target: 'Arrow'
        }
    },
    toolTip: 'Denote Negative Flow Direction',
    type: 'Arrow'
}, {
    id: 'linkednodesignal',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheorySignal() {
    return theorySignals.map(data => drawShape(data));
}
//#region instrument
let instrumentData = [{
    id: 'instrument',
    title: 'Instrument',
    annotation: 'Instrument',
    toolTip: 'Identify an Instrument'
}, {
    id: 'method',
    title: 'Method',
    annotation: 'Method',
    toolTip: 'Identify a Method'
}, {
    id: 'instrumentDerivative',
    title: 'Instrument Derivative',
    annotation: 'Instrument Derrivative',
    toolTip: 'Identify Derrivative of Method'
}, {
    id: 'methodDerivative',
    title: 'Method Derivative',
    annotation: 'Method Derivative',
    toolTip: 'Identify Derivative of Method'
}, {
    id: 'derrivative',
    title: 'Derrivative',
    annotation: 'Derrivative',
    toolTip: 'Identify a Derivative'
}, {
    id: 'naturalElement',
    title: 'Natural Element',
    annotation: 'Natural Element',
    toolTip: 'Identify a Natural Element'
}, {
    id: 'inputElement',
    title: 'Input Element',
    annotation: 'Input Element',
    toolTip: 'Identify an Input Element'
}, {
    id: 'exchangeableElement',
    title: 'Exchangeable Element',
    annotation: 'Exchangeable Element',
    toolTip: 'Identify an Exchangeable Element'
}, {
    id: 'instrumentDerivativeFunction',
    title: 'Instrument Derivative Function',
    annotation: 'Instrument Derivative Function',
    toolTip: 'Identify Derivative Function of Instrument'
}, {
    id: 'methodDerivativeFunction',
    title: 'Method Derivative Function',
    annotation: 'Method Derivative Function',
    toolTip: 'Identify Derivative Funciton of Method'
}, {
    id: 'methodFunction',
    title: 'Method Function',
    annotation: 'Method Function',
    toolTip: 'Identify Function of Method'
}, {
    id: 'instrumentFunction',
    title: 'Instrument Function',
    annotation: 'Instrument Function',
    toolTip: 'Identify Instrument Function'
}, {
    id: 'instrumentServiceFunction',
    title: 'Instrument Service Function',
    annotation: 'Instrument Service Function',
    toolTip: 'Identify Instrument Service Function'
}, {
    id: 'serviceFunciton',
    title: 'Service Function',
    annotation: 'Service Function',
    toolTip: 'Identify Service Function'
}, {
    id: 'methodExecutedFunction',
    title: 'Method Executed Funciton',
    annotation: 'Method Executed Function',
    toolTip: 'Identify Method Executed Function'
}, {
    id: 'functionToInstrument',
    title: 'Function To Instrument',
    annotation: 'Function To Instrument',
    toolTip: 'Identify Function to Instrument'
}, {
    id: 'functionToMethod',
    title: 'Function To Method',
    annotation: 'Function To Method',
    toolTip: 'Identify Function to Method'
}, {
    id: 'ne',
    title: 'NE',
    annotation: 'NE',
    toolTip: 'Identify Natural Element'
}, {
    id: 'ie',
    title: 'IE',
    annotation: 'IE',
    toolTip: 'Identify Input Element'
}, {
    id: 'dl/dT',
    title: 'dI/dT',
    annotation: 'dI/dT',
    toolTip: 'Identify Instrument Derivative'
}, {
    id: 'naturalElement1',
    title: 'Natural Element',
    annotation: 'New Shape please',
    toolTip: 'Identify an Input Element',
    type: 'Natural'
}, {
    id: 'inputElements',
    title: 'Input Elements',
    annotation: 'Input Elements',
    toolTip: 'Identify Group Exchange Elements',
    type: 'Overlap'
}, {
    id: 'exchangeElements',
    title: 'Exchange Elements',
    annotation: 'Exchange Elements',
    toolTip: 'Identify Group Exchange Elements',
    type: 'Overlap'
}, {
    id: 'emptycontainerinsturment',
    title: 'Empty Container',
    annotation: 'Empty Container',
    toolTip: 'A Container to Add Part To',
    type: 'squareemptycontainer'
}, {
    id: 'linkednodeinstrument',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheoryInstrument() {
    return instrumentData.map(data => drawShape(data));
}
//#region Function
let theoryFunctions = [{
    id: 'functionSystem',
    title: 'Functional System',
    annotation: {
        radius: 150,
        fill: 'White',
        content: [{
            content: 'Functional System',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }]
    },
    toolTip: 'Represents Life',
    type: 'Circle'
}, {
    id: 'life',
    title: 'Life',
    annotation: ['Existing Function Area', 'Added Function Area', 'Life'],
    toolTip: 'Represent The Functional System',
    type: 'LifeCircle'
}, {
    id: 'functionalSystem1',
    title: 'Functional System',
    annotation: {
        content: [{
            content: 'Functional System'
        }],
        style: {
            strokeWidth: 2
        },
        height: 400,
        width: 200
    },
    toolTip: 'Represents Life'
}, {
    id: 'lifeBox',
    title: 'Life',
    annotation: ['Existing Functions', 'Added Functions', 'Life'],
    toolTip: 'Represent The Functional System',
    type: 'LifeBox'
}, {
    id: 'existingFunction',
    title: 'Existing Function',
    annotation: 'Existing Function',
    toolTip: 'Identify An Existing Funciton',
}, {
    id: 'addedFunction',
    title: 'Added Function',
    annotation: 'Added Function',
    toolTip: 'Identify An Added Function',
}, {
    id: 'h(t)Function',
    title: 'h(t)',
    annotation: 'h(t)',
    toolTip: 'Identidy an Existing Function',
}, {
    id: 'u(t)function',
    title: 'u(t)',
    annotation: 'u(t)',
    toolTip: 'Identify an Added Function',
}, {
    id: 'existingFunction1',
    title: 'Existing Function',
    annotation: 'Existing Function',
    toolTip: 'Identify An Existing Function',
    type: 'Ellipse'
}, {
    id: 'addedFunction1',
    title: 'Added Function',
    annotation: 'Added Function',
    toolTip: 'Identify An Added Function',
    type: 'Ellipse'
}, {
    id: 'existingFunction2',
    title: 'Existing Function',
    annotation: {
        fill: 'white',
        radius: 35,
        content: [{
            content: 'Existing Function'
        }]
    },
    toolTip: 'Identify An Existing Function',
    type: 'Circle'
}, {
    id: 'addedFunction2',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'Added Function'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Identify an Added Function',
    type: 'Circle'
}, {
    id: 'existingFunction3',
    title: 'Existing Function',
    annotation: {
        content: [{
            content: 'h(x)'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Identify An Existing Function',
    type: 'Circle'
}, {
    id: 'addedFunction3',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'u(x)'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Identify An Added Function',
    type: 'Circle'
}, {
    id: 'addedFunction4',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'function'
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Multi Inputs Added Function',
    type: 'Circle'
}, {
    id: 'addedFunction5',
    title: 'Added Function',
    annotation: {
        content: [{
            content: 'u(x)',
        }],
        radius: 35,
        fill: 'White'
    },
    toolTip: 'Multi Input Added Function',
    type: 'Circle'
}, {
    id: 'externalFunction',
    title: 'External Function',
    annotation: 'External Function',
    toolTip: 'Identify An External Function'
}, {
    id: 'stopFunction',
    title: 'Stop Function',
    annotation: 'Stop Function',
    toolTip: 'Identify a Stop Function'
}, {
    id: 'functionContainer',
    title: 'Function Container',
    annotation: {
        height: 200,
        width: 100,
        content: [{content: ''}],
        style: {
            strokeWidth: 3
        },
        ports: []
    },
    toolTip: 'Identify A Function Container'
}, {
    id: 'eFunction',
    title: 'eFunction',
    annotation: 'eFunction',
    toolTip: 'Identify An Existing Function',
    type: 'Text'
}, {
    id: 'aFunction',
    title: 'aFunction',
    annotation: 'aFunction',
    toolTip: 'Identify An Added Function',
    type: 'Text'
}, {
    id: 'h(t)',
    title: 'h(t)',
    annotation: 'h(t)',
    toolTip: 'Identify an Existing Function',
    type: 'text'
}, {
    id: 'u(t)',
    title: 'u(t)',
    annotation: 'u(t)',
    toolTip: 'Identify an Added Function',
    type: 'text'
}, {
    id: 'life1',
    title: 'Life',
    annotation: {
        radius: 70,
        content: [{
            content: 'Life'
        }],
        fill: 'White'
    },
    toolTip: 'Life as a Function of Time',
    type: 'Circle'
}, {
    id: 'life2',
    title: 'Life',
    annotation: 'Life',
    toolTip: 'Life as a Function',
    type: 'Text'
}, {
    id: 'L(t)',
    title: 'L(t)',
    annotation: {
        content: [{
            content: 'L(t)'
        }],
        radius: 70,
        fill: 'White'
    },
    toolTip: 'Life as a Function of Time',
    type: 'Circle'
}, {
    id: 'L(t)1',
    title: 'L(t)',
    annotation: 'L(t)',
    toolTip: 'Life as a Function of Time',
    type: 'Text'
}, {
    id: 'groupFunctionTheory',
    title: 'Group',
    annotation: {
        content: [{
            content: 'Group'
        }],
        ports: [{
            id: 'left-1',
            offset: {x: 0, y: 0.25},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'left-2',
            offset: {x: 0, y: 0.75},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }, {
            id: 'right',
            offset: {x: 1, y: 0.5},
            visibility: ej.diagrams.PortVisibility.Visible,
            shape: 'X',
            width: 4,
            height: 4
        }],
        height: 75,
        width: 50
    },
    toolTip: 'Use to Group or Add Entities',
}, {
    id: 'continuityFunction',
    title: 'Continuity',
    annotation: {
        strokeWidth: 0,
        fill: 'transparent',
        ports: []
    },
    toolTip: 'Show Continuity of Entity',
    type: 'Continuity',
}, {
    id: 'linkednodefunciton',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheoryFunction() {
    return theoryFunctions.map(data => drawShape(data));
}
//#region Stability
let theoryStability = [{
    id: 'basis',
    title: 'Basis',
    annotation: {
        content: [{
            content: 'k',
            offset: {x: 0, y: 0.5},
            margin: {right: 10}
        }],
        length: 400,
        style: {strokeDashArray: '10 5'},
    },
    toolTip: 'Identify Our Basis',
    type: 'HorizontalLine'
}, {
    id: 'basis1',
    title: 'Basis',
    annotation: 'k',
    toolTip: 'Identify Out Basis',
    type: 'Basis'
}, {
    id: 'stabilityLine',
    title: 'Stability Line',
    annotation: {
        style: {strokeDashArray: '10 5'},
        length: 400
    },
    toolTip: 'Identify Our Stablility Line',
    type: 'HorizontalLine'
}, {
    id: 'stabilityLine1',
    title: 'Stability Line',
    annotation: {
        length: 600,
        style: {}
    },
    toolTip: 'Stability Line With Connector',
    type: 'HorizontalLine'
}, {
    id: 'k',
    title: 'k',
    annotation: {
        length: 50,
        width: 50,
        content : [{
            content: 'k'
        }],
    },
    toolTip: 'Identify Our Basis',
}, {
    id: 'k1',
    title: 'k',
    annotation: 'k',
    toolTip: 'Identify Out Stability',
    type: 'Text'
}, {
    id: 'destination',
    title: 'Destination',
    annotation: 'k',
    toolTip: 'Identify Our Destination',
    type: 'House1'
}, {
    id: 'direction',
    title: 'Direction',
    toolTip: 'Identify Our Direction',
    type: 'Direction'
}, {
    id: 'mobilitystability',
    title: 'Mobility',
    toolTip: 'Identify Our Mobility',
    type: 'mobility'
} ,{
    id: 'roadMark',
    title: 'Road Mark',
    annotation: {
        content: [{
            content:'Mark #',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 150,
        style: {}
    },
    toolTip: 'Identify Specific Location',
    type: 'VerticalLine'
}, {
    id: 'distance',
    title: 'Distance',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'distance',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Specific Distance',
    type: 'Arrow'
}, {
    id: 'route',
    title: 'Route',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Route',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Specific Route',
    type: 'Arrow'
}, {
    id: 'interroute',
    title: 'Inter-Route',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Inter-Route',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Specific Route',
    type: 'Arrow'
} ,{
    id: 'theoryScale',
    title: 'Theory Scale',
    annotation: 'Hello',
    toolTip: 'Identify The Theory Scale Distance',
    type: 'TheoryScale'
}, {
    id: 'scaleMark',
    title: 'Scale Mark',
    annotation: {
        content: [{
            content: '#',
            offset: {x: 0.5, y: 1},
            margin: {top: 10}
        }],
        length: 50,
        style: {}
    },
    toolTip: 'Use to Put Mark On Scale',
    type: 'VerticalLine'
}, {
    id: 'upHill',
    title: 'Uphill',
    annotation: {
        type: 'Bezier',
        style: {},
        shape: {}
    },
    toolTip: 'Identify The Uphill Path',
    type: 'Arrow'
}, {
    id: 'downHill',
    title: 'Downhill',
    annotation: {
        type: 'Bezier',
        style: {},
        shape: {}
    },
    toolTip: 'Identify The Downhill Path',
    type: 'Arrow'
}, {
    id: 'timeMark',
    title: 'Time Mark',
    annotation: {
        length: 150,
        content: [{
            content: 'time #',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        style: {}
    },
    toolTip: 'Identify a Time Mark',
    type: 'VerticalLine'
}, {
    id: 'progressTime',
    title: 'Progress Time',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'progress Time',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Progress Time',
    type: 'Arrow'
}, {
    id: 'declineTime',
    title: 'Decline Time',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'decline time',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Identify Decline Time',
    type: 'Arrow'
}, {
    id: 'lostLine',
    title: 'Lost Line',
    annotation: {
        length: 400,
        style: {strokeDashArray: '10 5'},
        content: [{
            content: 'Lost #',
            offset: {x: 1, y: 0.5},
            margin: {left: 20}
        }]
    },
    toolTip: 'Identify Point of Lost',
    type: 'HorizontalLine'
}, {
    id: 'gainLine',
    title: 'Gain Line',
    annotation: {
        length: 400,
        style: {strokeDashArray: '10 5'},
        content: [{
            content: 'Gain #',
            offset: {x: 1, y: 0.5},
            margin: {left: 20}
        }]
    },
    toolTip: 'Identify Point of Gain',
    type: 'HorizontalLine'
}, {
    id: 'lost',
    title: 'Lost',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow',
        },
        content: [{
            content: 'Lost',
            alignment: 'After'
        }]
    },
    toolTip: 'Identify Specific Lost',
    type: 'Arrow'
}, {
    id: 'Gain',
    title: 'Gain',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Gain',
            alignment: 'After'
        }]
    },
    toolTip: 'Identify Specific Gain',
    type: 'Arrow'
}, {
    id: 'stabilityPoint',
    title: 'Stability Point',
    annotation: {
        radius: 10,
        fill: 'black',
        isPoint: true
    },
    toolTip: 'Identify a Point Of Stability',
    type: 'Circle'
}, {
    id: 'functionExecution',
    title: 'Function Execution',
    annotation: {
        type: 'Straight',
        shape: {
            source: 'Circle'
        },
        style: {}
    },
    toolTip: 'Function Execute At Specific Time',
    type: 'Arrow'
}, {
    id: 'domainLeft',
    title: 'Domain Left',
    annotation: {
        orientation: 'Left',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain To The Left',
    type: 'DomainLeft'
}, {
    id: 'domainRight',
    title: 'Domain Right',
    annotation: {
        orientation: 'Right',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain To The Right',
    type: 'DomainRight'
}, {
    id: 'domainTop',
    title: 'Domain Top',
    annotation: {
        orientation: 'Top',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain Above',
    type: 'DomainTop'
}, {
    id: 'domainBottom',
    title: 'Domain Bottom',
    annotation: {
        orientation: 'Bottom',
        content: [{
            content: 'Domain Name'
        }]
    },
    toolTip: 'Identify Domain Bottom',
    type: 'DomainBottom'
}, {
    id: 'inline',
    title: 'Inline',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: {
            content: 'Inline',
            alignment: 'Before'
        }
    },
    toolTip: 'Inline to Each Other',
    type: 'Arrow'
}, {
    id: 'ontop',
    title: 'On Top',
    annotation: 'On Top',
    toolTip: 'Identify an Entity On Top',
    type: 'Text'
}, {
    id: 'below',
    title: 'Below',
    annotation: 'Below',
    toolTip: 'Identify an Entity On Below',
    type: 'Text'
} ,{
    id: 'graphAxis',
    title: 'Graph Axis',
    annotation: ['Label Name', 'Label Name'],
    toolTip: 'Use for Data Representation',
    type: 'Graph'
}, {
    id: 'philosophy',
    title: 'Philosophy',
    annotation: 'Philosophy',
    toolTip: 'Identify Philosophy',
    type: 'Ellipse'
}, {
    id: 'changeOfPhilosophy',
    title: 'Change Of Philosophy',
    annotation: {
        content: [{content: 'Δx'}],
        radius: 35,
        fill: 'White',
        ports: rectPorts
    },
    toolTip: 'Represent Change Of Philosophy',
    type: 'Circle'
}, {
    id: 'changeOfPhilosophy1',
    title: 'Change Of Philosophy',
    annotation: {
        content: [{content: 'ΔPh'}],
        radius: 35,
        fill: 'White',
        ports: rectPorts
    },
    toolTip: 'Represent Change Of Philosophy',
    type: 'Circle'
}, {
    id: 'philosophy1',
    title: 'Philosophy',
    annotation: {
        content: [{content: 'yn'}],
        radius: 15,
        fill: 'White',
        ports: rectPorts
    },
    toolTip: 'Identify Philosophy',
    type: 'Circle'
}, {
    id: 'philosophy2',
    title: 'Philosophy',
    annotation: {
        content: [{content: 'Phn'}],
        radius: 15,
        fill: 'White',
        ports: rectPorts
    },
    toolTip: 'Identify Philosophy',
    type: 'Circle'
}, {
    id: 'deltaPhilosophy',
    title: 'Delta Philosophy',
    annotation: {
        content: [{content: 'Delta Philosophy'}],
        radius: 35,
        fill: 'White',
        ports: rectPorts
    },
    toolTip: 'Identify Change of Philosophy',
    type: 'Circle'
}, {
    id: 'inheritArrow',
    title: 'Inherit Arrow',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'Inherited',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Show Inherited Philosophy',
    type: 'Arrow'
}, {
    id: 'passThroughArrow',
    title: 'Pass Through Arrow',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'Pass Through',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Show Pass Through Philosophy',
    type: 'Arrow'
}, {
    id: 'directionArrow',
    title: 'Direction Arrow',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Show A Direction',
    type: 'Arrow'
}, {
    id: 'deltaT',
    title: 'Delta T',
    annotation: {
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        content: [{
            content: 'Δt'
        }],
        style: {}
    },
    toolTip: 'Change Of Time',
    type: 'Arrow'
}, {
    id: 'deltaL',
    title: 'Delta L',
    annotation: {
        shape: { target: 'Arrow', source: 'Arrow'},
        content: [{
            content: 'ΔL'
        }],
        style: {}
    },
    toolTip: 'Change of Loss',
    type: 'Arrow'
}, {
    id: 'deltaG',
    title: 'Delta G',
    annotation: {
        shape: {target: 'Arrow', source: 'Arrow'},
        content: [{
            content: 'ΔG',
        }],
        style: {}
    },
    toolTip: 'Change of Gain',
    type: 'Arrow'
}, {
    id: 'initialTime',
    title: 'Time 0',
    annotation: {
        content: [{
            content: 't0',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Initial Time',
    type: 'VerticalLine'
}, {
    id: 'initialTimeplus',
    title: 'Time 0 plus',
    annotation: {
        content: [{
            content: 't0+',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Time After Initial Time',
    type: 'VerticalLine' 
}, {
    id: 'initialTimeplusplus',
    title: 'Time 0 plus plus',
    annotation: {
        content: [{
            content: 't0++',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'More time after initial time',
    type: 'VerticalLine'
}, {
    id: 'firstTime',
    title: 'Time 1',
    annotation: {
        content: [{
            content: 't1',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'First Time',
    type: 'VerticalLine'
}, {
    id: 'firstTimePlus',
    title: 'Time 1 plus number',
    annotation: {
        content: [{
            content: 't1 + n',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Time After Time 1',
    type: 'VerticalLine' 
}, {
    id: 'secondTime',
    title: 'Time 2',
    annotation: {
        content: [{
            content: 't2',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }], 
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Second Time',
    type: 'VerticalLine'
}, {
    id: 'secondTimePlus',
    title: 'Time 2 plus number',
    annotation: {
        content: [{
            content: 't2 + n',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }], 
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Time After Second Time',
    type: 'VerticalLine'
}, {
    id: 'thirdTime',
    title: 'Time 3',
    annotation: {
        content: [{
            content: 't3',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Third Time',
    type: 'VerticalLine'
}, {
    id: 'thirdTimePlus',
    title: 'Time 3 plus number',
    annotation: {
        content: [{
            content: 't3 + n',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Time After Third Time',
    type: 'VerticalLine'
}, {
    id: 'fourthTime',
    title: 'Fourth Time',
    annotation: {
        content: [{
            content: 't4',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Identify The Fourth Time',
    type: 'VerticalLine'
}, {
    id: 'fourthTimePlus',
    title: 'Time 4 plus number',
    annotation: {
        content: [{
            content: 't4 + n',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Time After Fourth Time',
    type: 'VerticalLine'
}, {
    id: 'timePrime',
    title: 'Time Prime',
    annotation: {
        content: [{
            content: 'time prime',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Time Prime',
    type: 'VerticalLine'
}, {
    id: 't[0]',
    title: 't[0]',
    annotation: {
        content: [{
            content: 't0',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote An Initial Time',
    type: 'VerticalLine'
}, {
    id: 't[1]',
    title: 't[1]',
    annotation: {
        content: [{
            content: 't1',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The First Time',
    type: 'VerticalLine'
}, {
    id: 't[2]',
    title: 't[2]',
    annotation: {
        content: [{
            content: 't2',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Second Time',
    type: 'VerticalLine'
}, {
    id: 't[3]',
    title: 't[3]',
    annotation: {
        content: [{
            content: 't3',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Third Time',
    type: 'VerticalLine'
}, {
    id: 't[4]',
    title: 't[4]',
    annotation: {
        content: [{
            content: 't4',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Fourth Time',
    type: 'VerticalLine'
}, {
    id: "t'",
    title: "t'",
    annotation: {
        content: [{
            content: 't4',
            offset: {x: 0.5, y: 1},
            margin: {top: 20}
        }],
        length: 250,
        style: {strokeDashArray: '10 5'}
    },
    toolTip: 'Denote The Time Prime',
    type: 'VerticalLine'
}, {
    id: 'generationTime',
    title: 'Generation Time',
    annotation: {
        content: [{
            content: 'generation time',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'qTime',
    title: 'Q Time',
    annotation: {
        content: [{
            content: 'Q time',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow'
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'Q',
    title: 'Q',
    annotation: {
        content: [{
            content: 'Q',
            alignment: 'Before'
        }],
        shape: {
            target: 'Arrow',
            source: 'Arrow',
        },
        style: {}
    },
    toolTip: 'Identify Our Generation Time',
    type: 'Arrow'
}, {
    id: 'continuityStability',
    title: 'Continuity',
    annotation: {
        strokeWidth: '0',
        fill: 'transparent',
        ports: []
    },
    toolTip: 'Show Continuity Of Entity',
    type: 'Continuity'
}, {
    id: 'linkednodestablility',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheoryStability() {
    return theoryStability.map(data => drawShape(data));
}
//#region Label
let theoryLabel = [{
    id: 'label',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'
}, {
    id: 'label1',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label2',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label3',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label4',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'label5',
    title: 'Label',
    annotation: {
        type: 'Bezier',
        shape: {
            source: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'expandTo',
    title: 'Expand To',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'Before'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'expandTo1',
    title: 'Expand To',
    annotation: {
        type: 'Bezier',
        shape: {
            target: 'Arrow',
        },
        content: [{
            content: 'label',
            alignment: 'After'
        }],
        style: {}
    },
    toolTip: 'Information Label',
    type: 'Arrow'  
}, {
    id: 'allocate',
    title: 'Allocate',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Allocate Theorem in Theory',
    type: 'Arrow'
}, {
    id: 'allocate1',
    title: 'Allocate',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Allocate Theorem in Theory',
    type: 'Arrow'
}, {
    id: 'label123',
    title: 'Label',
    toolTip: 'Symbol Identification Label',
    type: 'LeftLabel'
}, {
    id: 'label',
    title: 'Label',
    toolTip: 'Symbol Identification Label',
    type: 'RightLabel'
}, {
    id: 'directionLeft',
    title: 'DirectionLeft',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Identify Left Direction',
    type: 'Arrow'
}, {
    id: 'directionRight',
    title: 'Direction Right',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [],
        style: {}
    },
    toolTip: 'Identify Right Direction',
    type: 'Arrow'
}, {
    id: 'crossoutlabel',
    title: 'Cross Out',
    toolTip: 'To Cross Out an Entity',
    type: 'redcross'
}, {
    id: 'leftCurlBrace',
    title: 'Left Curl Brace',
    annotation: {
        content: [{
            content: 'Text',
            offset: {
                x: 0, y: 0.5
            },
            margin: {
                right: 15
            }
        }],
        orientation: 'left'
    },
    toolTip: 'Use to Group Theorem',
    type: 'Curly'
}, {
    id: 'rightCurlBraces',
    title: 'Right Curl Braces',
    annotation: {
        content: [{
            content: 'Text',
            offset: {
                x: 1, y: 0.5
            },
            margin: {
                left: 15
            }
        }],
        orientation: 'right'
    },
    type: 'CurlyClose',
    toolTip: 'Use to Group Theorem',
}, {
    id: '#',
    title: '#',
    annotation: '#1',
    toolTip: 'Use for Identification',
    type: 'Text'
}, {
    id: 'node',
    title: 'Node',
    annotation: {
        content: [{
            content: '1'
        }],
        radius: 15,
        fill: 'White'
    },
    toolTip: 'Using for Identification',
    type: 'Circle'
}, {
    id: 'nodeTable',
    title: 'Node Table',
    annotation: {
        content: ['Node Number', 'Information', ''],
        columnNo: 2
    },
    toolTip: 'Represents a Table of Node',
    type: 'Table'
}, {
    id: 'separationLine',
    title: 'Separation Line',
    annotation: {
        length: 400,
        style: {
            strokeDashArray: '10 5'
        }
    },
    toolTip: 'Use to Show Separation',
    type: 'VerticalLine'
}, {
    id: 'pushUp',
    title: 'Push Up',
    toolTip: 'Selected to Apply',
    type: 'PushUpRight'
}, {
    id: 'pushUp1',
    title: 'Push Up',
    toolTip: 'Selected to Apply',
    type: 'PushUpLeft'
}, {
    id: 'up',
    title: 'Up',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'up',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Up',
    type: 'Arrow'
}, {
    id: 'down',
    title: 'Down',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'down',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Down',
    type: 'Arrow'
}, {
    id: 'up1',
    title: 'Up',
    annotation: {
        shape: {
            source: 'Arrow'
        },
        content: [{
            content: 'up',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Up',
    type: 'Arrow'
}, {
    id: 'down1',
    title: 'Down',
    annotation: {
        shape: {
            target: 'Arrow'
        },
        content: [{
            content: 'down',
            alignment: 'before'
        }],
        style: {}
    },
    toolTip: 'Position Down',
    type: 'Arrow'
}, {
    id: 'continuityLabel',
    title: 'Continuity',
    annotation: {
        strokeWidth: '0'
    },
    toolTip: 'Denote a Continuity',
    type: 'VerticalContinuity'
}, {
    id: 'linkednodeLabel',
    title: 'Linked Node',
    toolTip: 'Linked Node',
    type: 'linkednode'
}];
//#endregion
function getTheoryLabel() {
    return theoryLabel.map(data => drawShape(data));
}