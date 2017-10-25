var totalCost=0;
function myFunction(){
			var x = document.getElementById('myDIV');
			if (x.style.display === 'none') {
				x.style.display = 'block';
			} 
	
			else {
				x.style.display = 'none';
			}
			
		}

function add(a){
	
	var table = document.getElementById("bill");
	var row=table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
				
	switch(a)
	{
		case 1: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName1";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 2: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName2";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 3: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName3";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 4: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName4";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 5: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName5";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 6: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName6";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 7: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName7";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 8: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName8";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 9: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName9";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 10: totalCost = totalCost + 118;
				cell1.innerHTML="ItemName10";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 11:totalCost = totalCost + 118;
				cell1.innerHTML="ItemName11";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 12:totalCost = totalCost + 118;
				cell1.innerHTML="ItemName12";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 13:totalCost = totalCost + 118;
				cell1.innerHTML="ItemName13";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 14:totalCost = totalCost + 118;
				cell1.innerHTML="ItemName14";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		case 15:totalCost = totalCost + 118;
				cell1.innerHTML="ItemName15";
				cell2.innerHTML="118.00";
				document.getElementById("total").innerHTML = totalCost;
				break;
			
		default:document.getElementById("total").innerHTML = totalCost;
				break;
	}		 
}



