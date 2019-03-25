window.onload=function() {
    var quiz = {
        title: 'Your Quiz',
        questions:[
            {
                text: "1.Who created the first plane?",
                repsonses: [
                    {text:'Scott Brothers'},
                    {text:'Wright Brothers', correct: true},
                    {text:'Steven Brothers'},
                    {text:'Salvator Brothers'},
                ]
            }, {
                text: "2.Who was the first major character to die to Vampire Diaries?",
                repsonses:[
                    {text:'Rose', correct: true},
                    {text:'Alaric Saltzman'},
                    {text:'Stefan Salvatore'},
                    {text:'Liz Forbes'},
                ]
            }, {
                text: "3.Who Crested Apex Legends?",
                repsonses:[
                    {text:'EA', correct: true},
                    {text:'Epic Games'},
                    {text:'Activision'},
                    {text:'Ubisoft'},
                ]
            }, {
                text: "4.Who holds the record of consectutive ball'on dor wins in a row?",
                repsonses:[
                    {text:'Messi', correct: true},
                    {text:'Ronaldo'},
                    {text:'Kaka'},
                    {text:'Zidane'},
                ]
            }, {
                text: "5.How long was WWII",
                repsonses:[
                    {text:'5 years'},
                    {text:'32 years'},
                    {text:'6 years', correct: true},
                    {text:'7 years'},
                ]
            }, {
                text: "6.Who discovered America first?",
                repsonses:[
                    {text:'Leif Erksson', correct:true},
                    {text:'Christopher Columbus'},
                    {text:'Van Riebeeck'},
                    {text:'Donald Trump'},
                ]
            }, {
                text: "7.Who wrote Harry Potter?",
                repsonses:[
                    {text:'J.K Rowling', correct: true},
                    {text:'J.R.R. Tolkien'},
                    {text:'Stephen King'},
                    {text:'Alan Rickman'},
                ]
            }, {
                text: "8.Who made the first car?",
                repsonses:[
                    {text:'Wilhem Maybach'},
                    {text:'Henry Ford'},
                    {text:'Rudolf Diesel'},
                    {text:'Karl Benz', correct: true},
                ]
            }, {
                text:"9.Who made the first gun?",
                repsonses:[
                    {text:'China', correct: true},
                    {text:'Middle East'},
                    {text:'Europe'},
                    {text:'Texas'},
                ]
            }, {
                text:"10.What is Bill Gates net worth?",
                repsonses:[
                    {text:'$95.6 billion'},
                    {text:'$97.4 billion', correct:true},
                    {text:'$98.9 billion'},
                    {text:'$99.9 billion'},
                ]
            }, {
                text:"11.Who is the richest person in the world?",
                repsonses:[
                    {text:'Warren Buffet'},
                    {text:'Bill Gates'},
                    {text:'Donald Trump'},
                    {text:'Jeff Bezos', correct:true},
                ]
            }, {
                text:"12.Which is the fastest car?",
                repsonses:[
                    {text:'Hennessy Vemon F5', correct:true},
                    {text:'SSC Tuatara'},
                    {text:'Koenigsegg Agera RS'},
                    {text:'Hennessey Vemon GT'},
                ]
            }, {
                text: "13.What is the slowest car in the world?",
                repsonses:[
                    {text:'Aixam Coupe'},
                    {text:'Peel P50', correct:true},
                    {text:'Renault Twizy'},
                    {text:'Hindustan Ambassador 1.5 DSZ'},
                ]
            }, {
                text: "14.Who is England's Prime Minister?",
                repsonses:[
                    {text:'David Cameron'},
                    {text:'Gordon Brown'},
                    {text:'Theresa May', correct:true},
                    {text:'John Major'},
                ]
            }, {
                text: "15.What is the Middle East known for?",
                repsonses:[
                    {text:'War'},
                    {text:'Wealth'},
                    {text:'Religion'},
                    {text:'Oil', correct:true},
                ]
            }, {
                text: "16.Who took down Osama bin laden?",
                repsonses:[
                    {text:'Russia'},
                    {text:'China'},
                    {text:'England'},
                    {text:'USA', correct:true},
                ]
            }, {
                text: "17.Who creaed DC comics?",
                repsonses:[
                    {text:'Malcolm Wheeler-Nicholson', correct:true},
                    {text:'Stan Lee'},
                    {text:'Steve Ditko'},
                    {text:'Joe Shuster'},
                ]
            }, {
                text:"18.Who plays Jack Sparrow?",
                repsonses:[
                    {text:'Brad Pitt'},
                    {text:'Johnny Depp', correct:true},
                    {text:'Leanardo DiCaprio'},
                    {text:'Orlando Bloom'},
                ]
            }, {
                text:"19.Who created the theme song Star Wars?",
                repsonses:[
                    {text:'Harrison Ford'},
                    {text:'Steven Spielberg'},
                    {text:'George Lucas'},
                    {text:'John Williams', correct:true},
                ]
            }, {
                text:"20.How many milisconds are there in a year?",
                repsonses:[
                    {text:'31556952000', correct:true},
                    {text:'31556952001'},
                    {text:'31556952010'},
                    {text:'31556952020'},
                ]
            }
        ]
    };

    new Vue({
        el: '#app',
        data: {
          quiz: quiz,
          questionIndex: 0,
          userResponses: Array(quiz.questions.length).fill(false)
        },
        methods: {
          next: function() {
            this.questionIndex++;
          },
          prev: function() {
            this.questionIndex--;
          },
          score: function() {
            return this.userResponses.filter(function(value) { return value }).length;
          }
        }
      });
}