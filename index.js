   function SetComboValue(param) {
      switch(param){
        case 1:
          var cb = document.getElementById('combo1');
          break;
        case 2:   
          var cb = document.getElementById('combo2');
          break;  
        case 3:
          var cb = document.getElementById('combo5');
          break;
        case 4:   
          var cb = document.getElementById('combo7');
          break;  
        case 5:   
          var cb = document.getElementById('combo6');
          break;  
        case 6:   
          var cb = document.getElementById('combo3');
          break;  
        case 7:   
          var cb = document.getElementById('combo4');
          break; 
      }
      for (var i =0; i<cb.options.length; i++) {
            var ind=cb.selectedIndex;
            var opt=cb.options[ind];
            var selectopt="l"+opt.value;
      }
      if (selectopt!="l"){
       return selectopt; 
      } else {
       alert('Select number of lists from combo!');
       var n= "";
       return n;
     }
    }

    function DeleteElem(param) {
      ClearColor("l1");
      ClearColor("l2");
      ClearColor("l3");

      var selopt=SetComboValue(param);
      if (selopt=="") {
       return;
      }
      var selnode = document.getElementById(selopt);  
      var elemli = document.getElementById(selopt).getElementsByTagName("li");  
        if (elemli.length>1) {
            selnode.removeChild(selnode.lastElementChild);     
        }
        else {
          alert("You should leave one element!");  
        }           
    }

   function InsertElem(param) {
    ClearColor("l1");
    ClearColor("l2");
    ClearColor("l3");

    var selopt=SetComboValue(param);
    if (selopt=="") {
      return;
    }
    var selnode = document.getElementById(selopt);   
    switch(param){
      case 4:
        var lifirst = document.createElement("li");                 
            lifirst.classList.add("list3");
            lifirst.innerHTML='100% this is a first element!';
            selnode.insertBefore(lifirst, selnode.getElementsByTagName("li")[0]);
      break;
      case 3:   
        var lilast = document.createElement("li");                
            lilast.classList.add("list3");              
            lilast.innerHTML='this is a last element!';
            selnode.append(lilast);                 
       break;  
    }
  }
  
    function FirstALastElem(param) {
      ClearColor("l1");
      ClearColor("l2");
      ClearColor("l3");

      var selopt=SetComboValue(param);
      if (selopt==="") {
       return;
      }
      switch(param){
        case 1:
          var selnode = document.getElementById(selopt).getElementsByTagName("li")[0];  
              if (selopt=="l1"||selopt=="l2") {
                 selnode.className = selnode.className.replace(/\blist1\b/g, "");
              }
              else { 
                 selnode.className =selnode.className.replace(/\blist2\b/g, "");
              }
              selnode.classList.add("list3");
        break;
        case 2:   
          var selnode = document.getElementById(selopt); 
              if (selopt=="l1"||selopt=="l2") {
                 selnode.lastElementChild.className =selnode.className.replace(/\blist1\b/g, "");
              }
              else { 
                 selnode.lastElementChild.className = selnode.className.replace(/\blist2\b/g, "");
              }
              selnode.lastElementChild.classList.add("list3");
          break;  
      }
    } 

   function ClearColor(id) {
      var elemli = document.getElementById(id).getElementsByTagName("li");  
      for (var i =0; i<elemli.length; i++) {
        if (elemli[i].className=="list3") {                                 
            if (id=="l1"||id=="l2") {
                elemli[i].className = elemli[i].className.replace(/\blist3\b/g, "");
                elemli[i].classList.add("list1");
            }
            else { 
                elemli[i].className = elemli[i].className.replace(/\blist3\b/g, "");
                elemli[i].classList.add("list2");
            }
        }
      }
    } 

   function NextAPrevElem(param) {
           
          var selopt=SetComboValue(param);
          if (selopt==="") {
           return;
          }
          var selnode = document.getElementById(selopt);  
          var elemli = document.getElementById(selopt).getElementsByTagName("li");
          switch(param){
            case 6:
              for (var i =0; i<elemli.length; i++) {
                  if (elemli[i].className != "list3") {
                    if (selopt=="l1"||selopt=="l2") {
                       elemli[i].className = elemli[i].className.replace(/\blist1\b/g, "");
                       elemli[i].classList.add("list3");
                    }
                    else { 
                       elemli[i].className = elemli[i].className.replace(/\blist2\b/g, "");
                       elemli[i].classList.add("list3");
                    }
                    return;
                  }
                  else {
                   if (i==2) {
                    switch (selopt){
                     case "l1":
                      ClearColor("l1");
                      selnode.firstElementChild.className = selnode.firstElementChild.className.replace(/\blist1\b/g, "");
                     break;
                     case "l2":
                      ClearColor("l2");
                     selnode.firstElementChild.className = selnode.firstElementChild.className.replace(/\blist1\b/g, "");
                     break;
                     case "l3":
                      ClearColor("l3");
                      selnode.firstElementChild.className = selnode.firstElementChild.className.replace(/\blist2\b/g, "");
                     break;
                    }
                     selnode.firstElementChild.classList.add("list3"); 
                    return;  
                   }
                  }                             
                }
            break;
            case 7:   
                for (var i=elemli.length-1; i>=0;i--) {
                   if (elemli[i].className != "list3") {
                    if (selopt=="l1"||selopt=="l2") {
                       elemli[i].className = elemli[i].className.replace(/\blist1\b/g, "");
                       elemli[i].classList.add("list3");
                    }
                    else { 
                       elemli[i].className = elemli[i].className.replace(/\blist2\b/g, "");
                       elemli[i].classList.add("list3");
                    }
                   return;
                  } 
                  else {
                   if (i==0) {
                    switch (selopt){
                     case "l1":
                      ClearColor("l1");
                      selnode.lastElementChild.className = selnode.lastElementChild.className.replace(/\blist1\b/g, "");
                     break;
                     case "l2":
                      ClearColor("l2");
                      selnode.lastElementChild.className = selnode.lastElementChild.className.replace(/\blist1\b/g, "");
                     break;
                     case "l3":
                      ClearColor("l3");
                      selnode.lastElementChild.className = selnode.lastElementChild.className.replace(/\blist2\b/g, "");
                     break;
                    }
                     selnode.lastElementChild.classList.add("list3"); 
                    return;  
                   } 
                  }                             
                }                                  
             break;
         } 
      } 
        