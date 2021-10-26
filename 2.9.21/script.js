function pai(radius,parts){
    let sum=0;
    let x= radius/parts;
    let x2= radius/parts*2;
    let y=radius;
    let y2=(radius**2-x2**2)**0.5;
    for (let i =0;i<parts-2;i++)
    {
        sum+=((y-y2)**2+(x2-x)**2)**0.5
        x=x2;
        x2+=radius/parts;
        y=y2;
        y2=(radius**2-x2**2)**0.5;
    }
    return sum*2;
}
console.log(pai(1,100000000));
