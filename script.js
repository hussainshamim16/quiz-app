
var q = [
    {
    id:1,
    quiestion: "how Mani programing languages",
    jawwab:{
        a: 3,
        b: 4 
    },
    answer: 3
},
{
    id:2,
    quiestion: "how Mani lead languages in programing",
    jawwab:{
        a: 1,
        b: 3, 
    },
    answer: 3
},
]


for (var key in q) {
    if (q.hasOwnProperty.call(q, key)) {
        console.log(q[key].quiestion);
        
    }
}

// console.log(q)

var stdName = document.getElementById("stdName")
var stdEmail = document.getElementById("stdEmail")
var quizTime = document.getElementById("quizTime")
var sawaal = document.getElementById("sawaal")

// stdName.innerHTML = prompt("your  Name")
// stdEmail.innerHTML = prompt("your  roll Number")
quizTime.innerHTML = "01:00"





