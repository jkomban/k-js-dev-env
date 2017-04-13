import webpack from 'webpack';
import webpackConfig  from '../webpack.config.prod';
import chalk from 'chalk';
/* eslint-disable no-console*/

process.env.NODE_ENV = 'production';
console.log(chalk.yellow("Generating minified bundle for prodution, this will take some time.."));

webpack(webpackConfig).run((err,status)=>{

    if(err){
      console.log(chalk.red(err));
      return 1;
    }



const jsonStats = status.toJson();

if(jsonStats.hasErrors){
  return jsonStats.errors.map(error=> console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings){
  jsonStats.errors.map(error=> console.log(chalk.yellow(error)));
}


console.log(`Webpack stats:${status}`);
console.log(chalk.green("Your app has been built for prodcution and written to/ dist"));


    return 0;

});

