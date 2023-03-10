let str="this is divjot 2002"
n=str.length;
var count1=0;
var count2=0
var count3=0;
for (i=0;i<=n;i++) {
   if (str[i]==' '){
     count1+=1;
   }
   if (str[i]>="a" && str[i]<="z"){
     count2+=1;
    }
}

count3 = n-count2;
count3-=count1;
console.log("Spaces =",count1)
console.log("characters =", count2)
console.log("integers =", count3)