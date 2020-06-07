// ================CHAPTER 1=====================
// Q1
alert("Welcome to my Website");

// Q2
alert("Error! Please enter a valid Password")

// Q3
alert("Welcome to JS Land.... \n Happy Coding!")

// Q4
alert("Welcome to JS Land..")
alert("Happy Coding! \n Prevent this page from creatong additional dialogs")

// Q5
alert("Hello....I can JS through my browser's console")

// =============CHAPTER 2========================

// Q1
var username
// Q2
var myname='Syed Ahsan Ali'
// Q3
var message
message='Hello World'
alert(message)

// Q4
var name='Syed Ahsan Ali'
var age=15
var degree='Professional Photographer'

alert(name)
alert(age)
alert(degree)

// Q5
alert("PIZZA \n PIZZ \n PIZ \n PI \n P")

// Q6 
var email='syedahsan2305@gmail.com'
alert('my e-mail address is '+email)

// Q7
var book='A smarter way to learn JavaScript'
alert('I am trying to learn from a book '+book)


// Q8
document.write('Yah! i can write in HTML content through JavaScript')

// Q9
var s='“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"'
alert(s)

// ==================CHAPTER 3===================
// Q1
var age1=20
alert('i am '+age1+" years old")

//Q2
var visit=14
alert('You have visited this webpage '+visit+ ' page')

Q3
var year=2000
document.write('My birth year is '+year+'<br>')
document.write('\n Data type of my declared variable is number')

// Q4
var str='<b>John Doe</b>';
var pt='<b>T-shirt(s)</b>';
var qu='<b>5</b>';
document.write('<br>'+str+' ordered '+qu+' '+pt+' on XYZ clothing store'+'<br>');

// ================CHAPTER 4=======================

var v1='numbers'; var v2='$' ; var v3='_'; var v4='letter'; var v5='sensitive'; var v6='keywords'
document.write('<br>'+'<b> Rules for naming JS variables</b>'+'<br>')
document.write('<br> '+' Variable names can only contain ,'+v1+" ,"+v2+' and '+v3+' For example $my_1stVariable')
document.write('<br>'+'Variables must begin with a '+v4+' or'+v3+'.'+'For example $name, _name or name')
document.write('<br>'+'Variable names are case '+v5)
document.write('<br>'+'Variable names should not be JS '+v6)

// ===================CHAPTER 5 ===================
// Q1
var n1=3;
var n2=5;
document.write('<br>'+'Sum of '+n1+' and '+n2+' is '+(n1+n2));

// Q2
var nn1=6;
var nn2=8;
document.write('<br>'+'Sub of '+nn1+' and '+nn2+' is '+(n1-n2));
document.write('<br>'+'Mul of '+nn1+' and '+nn2+' is '+(n1*n2));
nn1=2;
nn2=4;
document.write('<br>'+'Div of '+nn1+' and '+nn2+' is '+(n1/n2)+'<br>');

// Q3
var valz;
document.write('<br>'+'Value after variable declaration is '+valz);
valz=5;
document.write('<br>'+'Initial Value '+valz);
valz++;
document.write('<br>'+' Value After Increment '+valz);
valz=valz+7;
document.write('<br>'+'After adding 7 Value is '+valz);
valz--;
document.write('<br>'+'After Decrement Value is '+valz);
valz=valz%3;
document.write('<br>'+'Remainder after dividing by 3 Value by '+valz+'<br>');

// Q4
var price=600;
var tickets=5;
price =price*tickets;
document.write('<br>'+'Total cost of '+tickets+' tickets is '+price+'<br>');

// Q5
document.write('<br>'+'Table of 2');
for(var i=1; i<=10;i++){
    document.write('<br>'+'2 x '+i+' =  '+(2*i));
}
document.write('<br>')
// Q6
var c=25
var f=70;
var c1=(f-32)*5/9;
var f1=(c*9/5)+32;

document.write('<br>'+c+'C is '+c1+' F');
document.write('<br>'+ f+'F is '+f1+'C'+'<br>');

// Q7
var pi1=650;
var qi1=3;
var pi2=100;
var qi2=7;
var shp=100;
var totalcost=(pi1*qi1)+(pi2*qi2)+100;
document.write('<br>'+'<b>SHOPPING CART</b>');
document.write('<br>'+'Price of item 1 '+pi1);
document.write('<br>'+'Quantity of item 1 '+qi1);
document.write('<br>'+'Price of item 2 '+pi2);
document.write('<br>'+'Quantity of item 1 '+qi2);
document.write('<br>'+'Shipping Charges '+shp);
document.write('<br>'+'Total cost of your order '+totalcost+'<br>');

// Q8
var mo=804;
var mt=900;
var per=(804/900)*100;

document.write('<br>'+'<b>Marks sheet</b>');
document.write('<br>'+'Total Marks '+mt);
document.write('<br>'+'Marks Obtained '+mo);
document.write('<br>'+'Percentage '+per+'<br>');

// Q9
var tc=(10*104.80)+(25*28);
document.write('<br>'+'<b> Currency in PKR </b>');
document.write('<br>'+'Total Currency in PKR '+tc+'<br>');

// Q10
var a=2;
var re=(2+5)*10/2;
document.write('<br>'+'RESULT '+re+'<br>');

// Q11
var cy=2020;
var biy=2000;
var ag=cy-biy;
document.write('<br>'+'<b>Age Calculator</b>')
document.write('<br>'+'Current Year '+cy);
document.write('<br>'+'Birth Year '+biy);
document.write('<br>'+'Age '+ag+'<br>');

// Q12
var radius=20;
var cr=2*3.142*radius;
var ar=3.142*radius*radius;
document.write('<br>'+'<b>The Geometrizer</b>')
document.write('<br>'+'Radius '+radius);
document.write('<br>'+'The Circumference is  '+cr);
document.write('<br>'+'The Area is '+ar+'<br>');

// Q13
var fs='Tea'
var cage=20;
var estage=80;
var am=4;
var tt=60*4;
document.write('<br>'+'<b>The LifeTime Supply Calculator</b>')
document.write('<br>'+'You will need '+tt+' '+fs+' to last you ripe untill age of '+estage+'<br>');

// =====================CHAPTER 6-9=============
// Q1
var b=10;
document.write('<br>'+'<b>RESULT</b>');
document.write('<br>'+'The value of a is '+b);
document.write('<br>'+'_________________');
document.write('<br>'+'The value of ++a is '+(++b));
document.write('<br>'+'The value of a is '+(b));
document.write('<br>')
document.write('<br>'+'The value of a++ is '+(b++));
document.write('<br>'+'The value of a is '+(b));
document.write('<br>')
document.write('<br>'+'The value of --a is '+(--b));
document.write('<br>'+'The value of a is '+(b));
document.write('<br>')
document.write('<br>'+'The value of a-- is '+(b--));
document.write('<br>'+'The value of a is '+(b)+'<br>');

// Q2
var a2 = 2, b2 = 1;
var result1 = --a2 - --b2 + ++b2 + b2--;

document.write('<br>'+'--a is 1');
document.write('<br>'+'--b is 0');
document.write('<br>'+'++b is 2');
document.write('<br>'+'b-- is 1');
document.write('<br>'+'result is 3'+'<br>');

// Q3
var na=prompt("Enter your name");
document.write('<br>'+'Welcome to my WebPage '+na+'<br>');

// Q5
var nz=prompt("Enter a number");
for(var i=1; i<=10;i++){
    if(nz==''){
        document.write('<br>'+'5 x '+i+' =  '+(5*i));

    }
    else{
    document.write('<br>'+nz+' x '+i+' =  '+(nz*i));
}}
document.write('<br>')

// Q6
var s1=prompt("Enter name of First subject");
var s2=prompt("Enter name of second subject");
var s3=prompt("Enter name of third subject");

var ob1=prompt('Enter obtained marks in '+s1);
var ob2=prompt('Enter obtained marks in '+s2);
var ob3=prompt('Enter obtained marks in '+s3);
var ttt=100;
document.write('<br>'+'<b>Subject</b>');
document.write('    <b>Total Marks</b>');
document.write('    <b>Obatained Marks</b>');
document.write('    <b>Percentage</b>');
document.write('<br>'+'        '+s1);
document.write('        <t>                '+ttt);
document.write('                                   '+ob1);
document.write('                                               '+(ob1/ttt)*100);

document.write('<br>'+'            '+s2);
document.write('                             '+ttt);
document.write('                                         '+ob2);
document.write('                                                   '+(ob2/ttt)*100);


document.write('<br>'+'            '+s3);
document.write('                          '+ttt);
document.write('                                        '+ob3);
document.write('                                                        '+(ob3/ttt)*100);

document.write('<br>');
document.write('                       '+'<b>300</b>');
document.write('                                                '+'<b>'+(pb1+ob2+ob3));

document.write('                                                                           '+'<b>'+((ob1+ob2+ob3)/300)*100+'<br>');


// ================================9-11====================
// Q1
var city=prompt('Enter cty name');
if(city==='Karachi'){
    alert('Welcome To The City Of Lights');
}
else{
    alert(city);
}
// Q2
var gender=prompt('Enter your gender')
if(gender==='Male'){
    alert('Good Morining SIr')
}
else{
alert('Good Morining Ma"am')
}

// Q3
var color=prompt('Enter Color');
if(color==='Red'){
    document.write('<br>'+'Must Stop')
}
if(color==='Yellow'){
    document.write('<br>'+'Ready to Move')
}
if(color==='Green'){
    document.write('<br>'+'Move Now'+'<br>')
}

// Q4
var feul=prompt('Enter your feul');
if(feul<0.25){
    document.write('<br>'+'Please refil feiul in your Car!'+'<br>');
}
else{
    document.write('<br>'+'rEADY TO GO!!!')
}

