document.addEventListener('DOMContentLoaded', function () {
    
    let table:HTMLTableElement= documentcreateElement("tabele");
    let row:HTMLTableRowElement= documentcreateElement("tr");    
    let column:HTMLTableCellElement= documentcreateElement("td");    
    
    table.body.appendChild(row);
    row.body.appendChild(column);
    
    document.body.appendChild(table);
});  
  
function placeDivs(): void {
        for(let i=0; i<64; i++){
        let element: HTMLElement=document.createElement("div");
        
            if (i%2 ==0) {
                element.className= "board white";
                } 
            else {
                element.className= "board black";
                 }
    document.body.appendChild(element);
    }
}
