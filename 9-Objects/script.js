function rot13(str) {
    let regex ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let replacement="NOPQRSTUVWXYZABCDEFGHIJKLM"
    regex.split("");
    for(let i =0;i<str.length;i++){
      if (regex.includes(str[i])){
       str= str.replace(str[i],replacement[regex.indexOf(str[i])])
      }
    }
    console.log(str)
    return str;
  }
  
  rot13("SERR PBQR PNZC");