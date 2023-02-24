const nombre = 'Yosmarli'
console.log (nombre)

const apellido = "Parica"
console.log (apellido)

const estudiante = (nombre.concat(` `, apellido))
console.log (estudiante)

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

const estudianteLength = estudiante.length
console.log(estudianteLength)

const letraInicialNombre = nombre.charAt(0)
console.log(letraInicialNombre)

const ultimaLetraApellido = apellido.slice(-1)
console.log(ultimaLetraApellido)

const eliminarEspacios = estudiante.replace(/\s+/g, '')
console.log(eliminarEspacios)

const variableBooleana =  estudiante.includes ()
console.log(variableBooleana)