const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching = (a,b) => a.filter(a => a.toLowerCase() === b.toLowerCase())

const fuzzyMatch = (a,b) => a.filter(a => a.charAt(0) === b.charAt(0))


const matchName = (a,b) => a.filter(a => a.name === b)