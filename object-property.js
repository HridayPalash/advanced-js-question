const student = [
    { id: 17, name: "Omar Sunny" },
    { id: 21, name: "Mannnnaaa" },
    { id: 25, name: "Moyouriii" },
    { id: 41, name: "Dipjol" }
];

const output = [];
// It's te general rules || "for method" 
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const result = element.name;
    output.push(result); 
}
console.log(output);

// Using "map Method"
const throughMap = student.map(s => s.name);
console.log(throughMap);
// When we use filter method
const filtering = student.filter(s => s.id > 21)
console.log(filtering);
// When we use find method
const finding = student.find(s => s.id > 21);
console.log(finding);
/** Here "s is parameter" */