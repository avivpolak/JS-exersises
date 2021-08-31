function guessCity(capital, coastal, famous, ancient) {
        if(capital && !coastal && famous && ancient)   return "Jerusalem"
        else if(!capital && coastal && famous && !ancient)  return "Tel Aviv"
        else if(!capital && coastal && !famous && ancient)  return "Acre"
        else if(!capital && !coastal && !famous && ancient) return "Katzrin"
        else if(!capital && coastal && !famous && !ancient) return "Zikim "
        else if(!capital && !coastal && !famous && !ancient) return "Musmus"
        return "Non of the above"
}
console.log(guessCity(true, false, true, true) )
console.log(guessCity(false, true, true, false) )
console.log(guessCity(false, true, false,true) )
console.log(guessCity(false, false,false, true) )
console.log(guessCity(false, true,false, false) )
console.log(guessCity(false, false, false, false) )
console.log(guessCity(true, true, true, true) )
console.log(guessCity(true, false, true, false) )
