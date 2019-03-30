function Star(){
  var ss = SpreadsheetApp.getActive().getActiveSheet();
  //otherLogger('start star');
  var prompt = "Enter a concept.  Preferably only one word.  If it is a verb, use the infinite/basic conjugation.  Use the singular form.";
  var center = Browser.inputBox(prompt, Browser.Buttons.OK_CANCEL);
  center = center.toUpperCase().trim();                                        //get main idea
  //otherLogger("Center:" + center);
  
  var nexR = findSoma(center);
  nexR = "A" + nexR + ":" + nexR;
  ss.setActiveSelection(nexR).activate();
  //otherLogger("test2");
  var Orow = ss.getActiveRange();
  //otherLogger(Orow.getA1Notation());
  Orow.getCell(1, 1).setValue(center);
  Orow.getCell(1,2).setValue(/*Orow.getCell(1,2).getValue() + */1);
  Orow.getCell(1,3).setValue(nexR);
  //var OIdex = 4;
  //ss.sort(1);
  SpreadsheetApp.flush();
  
  var back = Browser.inputBox(center, Browser.Buttons.OK_CANCEL).toUpperCase().trim();  //would return "cancel"      
  //otherLogger(back);
  while (back != "CANCEL"){
    nexR = findSoma(back);
    //otherLogger("test1 nexR:" + nexR);
    var TCol = findNeurPointer(Orow.getRow(), back);
    //otherLogger("test1:" + TCol);
    nexR = "A" + nexR + ":" + nexR;
    ss.setActiveSelection(nexR).activate();

    var row = ss.getActiveRange();
    //otherLogger(row.getA1Notation());
    //var trace = new Array();
    //trace[0] = back; trace[1]=1;trace[2] = nexR;
    //otherLogger("toHere");
    row.getCell(1, 1).setValue(back);
    //TCol ++;
    Orow.getCell(1,TCol).setValue(back);
    row.getCell(1,2).setValue(/*row.getCell(1,2).getValue() +*/ 1);
    TCol ++;
    Orow.getCell(1,TCol).setValue(Orow.getCell(1,TCol).getValue() + 1);
    row.getCell(1,3).setValue(nexR);
    TCol ++;
    Orow.getCell(1,TCol).setValue(nexR);
    //ss.sort(1); 
    
    SpreadsheetApp.flush();
    
    back = Browser.inputBox(center, Browser.Buttons.OK_CANCEL).toUpperCase().trim();  //would return "cancel"    
  }
  otherLogger("ended star");
    
 
  
}