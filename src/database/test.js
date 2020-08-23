const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '31992479620',
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 já passaram por uma das minhas explosões.",
    } 

    classValue = {
      subject: 1,
      cost: "20"
      // o proffy id virá pelo banco de dados
    }
    
    classScheduleValues = [
      //class_id virá pelo banco de dados, após cadastrarmos a class
      {
        weekday: 1,
        time_from: 720,
        time_to: 1220
      },
      {
        weekday: 0,
        time_from: 520,
        time_to: 1220
      }
    ]

    createProffy(db, {proffyValue, classValue, classScheduleValues}).then

    // Consultar os dados inseridos
})