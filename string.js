str1="Ankita"
str2="Kiran"
str3="Phalke"

str4= str1+ " " +str2+ " " +str3
console.log(str4)
str5=str1.concat(' ',str2,' ',str3)
console.log(str5)

name1= "Sanjana"
console.log(`Hello ${name1}`);  //template literal
console.log(str5.length);


// find out characters
console.log(str5[3])
console.log(str5.charAt(3))

// Upper Case and Lower case
strCapital=str5.toUpperCase()
strLower=str5.toLowerCase()

console.log("Upper Case:",strCapital, "Lower Case:" ,strLower )
console.log(`Upper Case:${strCapital}  Lower Case: ${strLower}` )

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith()
console.log(str5)
console.log(str5.indexOf("Ankita"))
console.log(str5.lastIndexOf("Phalke"))

str6="Every day is a new chance to do something new"
console.log(str6.indexOf("day"))

console.log(str6.indexOf("Phalke"))

console.log(str6.lastIndexOf("something"))

console.log(str6.includes("Chance"))

console.log(str6.startsWith("is"))
console.log(str6.endsWith("new"))

// slice(), substring()
console.log(str6.slice(0, 5))
console.log(str6.slice(10))
console.log(str6.substring(0, 4))
console.log(str6.substring(10))

// trim(), trimStart(), trimEnd()
str7="           hello World         "
console.log(str7.length)

console.log(str7.trim())

console.log(str7.trim().length)
console.log(str7.trimStart().length)
console.log(str7.trimEnd().length)

// Replace(), ReplaceAll()
console.log(str6.replace("chance","opportunity"))

console.log(str6.replaceAll("new","good"))

// Split

arr=str6.split()
console.log(arr)
arr=str6.split("")
console.log(arr)
arr=str6.split(" ")
console.log(arr)

str8="12:34:56:78:90"
numArray=str8.split()
console.log(numArray)
numArray=str8.split("")
console.log(numArray)
numArray=str8.split(" ")
console.log(numArray)
numArray=str8.split(":")
console.log(numArray)

joinStr=numArray.join(":")
console.log(joinStr)











