var step = 0

for (var i = 2; i < process.argv.length; i++)
  step += Number(process.argv[i])

console.log(step)