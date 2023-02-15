import chalk from 'chalk'
import express from 'express'
import fetch from 'node-fetch'
import bodyParser from 'body-parser'
import readLineSync from 'readline-sync'

const valores = []
let input = ""

while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(chalk.red("Digite uma propiedade CSS:").toLocaleLowerCase())
}

console.log(valores.sort().join("\n"))