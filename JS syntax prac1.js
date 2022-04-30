
function fx(x,y) {
    if (x==y) {
        return (x+y)*3
    }
    else if (x > y) {
        return (x**y)
    }
    else {
        return (x+y)
    }
}
console.log(fx(4,2))

////////////////////////////////////////////////////

let dd = {
    a : 1,
    b : 2,
    3 : 'c'
}

function fx(x){
if (x in dd) {
    console.log('key is present')
}
else {
    console.log('key Not present')
}
}

fx('a')
fx(9)

////////////////////////////////////////////////////

let d2 = {
    a : 1,
    b : 2,
    3 : 'c'
}

if ('a' in dd) {
    delete dd['a']  //remove key-value
}
console.log(dd)
 

////////////////////////////////////////////////////

function fx(n) {
    for (i=0; i < n.length; i++) {
        let y = n[i].toUpperCase() 
        console.log(y)
    }
}

fx('apple')

////////////////////////////////////////////////////
 
function fx(words) {
    let ctr = 0
    for (let x of words) {
        if (x.length > 1 && x[0] == x.slice(-1)) {
            ctr += 1 
        }
        console.log(ctr)
    }
    
    for (i=0; i<words.length; i++) {
        console.log(words[i])
    }
}

console.log(fx(['abc','aba', '121']))

/* why this produce undefined at end?
because double console.log in fx & print statement again */
////////////////////////////////////////////////////

function fx(n,str) {
    word_len = []
    txt = str.split(" ")
    for (let x of txt) {
        if (x.length > n) {
            word_len.push(x)
        }
    }
    return word_len
}

console.log(fx(4, "jump over lazy buffalo"))



////////////////////////////////////////////////////

function fx(n) {
    x = n.split(" ")
    x.pop()
    x.push("hi")
    y = " "
    y = x.join(" # ")

    return y
}

console.log(fx("the quick brown fox"))
//returns 
//  the # quick # brown # hi


////////////////////////////////////////////////////

function fx() {
    for (let i=0; i < 8; i++) {
        if (i<5) {
            let w = "str" + ` hi ${i} `
            console.log(w)
        }
    }
}

fx()

////////////////////////////////////////////////////


function fx(str) {
    let char = str[0]
    str = str.replace(char,"RR")
    str= str + " " + str.substring(0,2)
    return str
}

console.log(fx('restart'))


////////////////////////////////////////////////////

let d = {
    x: 10,
    y: 11,
    12: "z"
}

for (const [key,value] of Object.entries(d)) {
    console.log(key,value)
}


////////////////////////////////////////////////////
