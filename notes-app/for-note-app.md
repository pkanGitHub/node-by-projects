## Introduced NPM packages

* **Validator** - used for validate email or url ...etc  
  eg.  console.log(validator.isEmail('example.com'))
* **Chalk** - used for changing text colors/ styles in the console  
eg. console.log(chalk.bold.green('Success'))
* **yargs** - used to turn "--title" into an object in the console  
eg. console.log(yargs.argv)  
`{ _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }`  
*if without `yargs`*  
eg. console.log(process.argv)  
`{... '--title=Things to buy'}`

