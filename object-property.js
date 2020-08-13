const student =[
    {id:21, name:'omor sani'},
    {id:32, name:'mannaa'},
    {id:41, name:'moyuri'},
    {id:71, name:'dipjol'},
    
];

// const names = student.map(s => s.name);
// const ids = student.map(s => s.id);
// const bigger = student.filter(s =>s.id>40);
const bigger1 = student.find(s =>s.id>40);
console.log(bigger1);