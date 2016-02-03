# paralaxElements
 paralaxElements v0.1 jQuery Plugin for the elemets witch are paralax with position if absolute ;

 
 HTML <br>
 &lt;div id="paralaxElements"&gt; <br>
  &lt;img src="image1" style="left:10px; top:10px"/&gt; <br>
  &lt;img src="image2" style="left:100px; top:100px"/&gt; <br>
  &lt;img src="image3" style="left:200px; top:200px"/&gt; <br>
 &lt;/div&gt; <br>
 
 
 JS: <br>
$("#paralaxElements").paralaxElemets({ <br>
                    distance: 300, // distance coefficient <br>
                    maxHor: 200, // max horisontal <br>
                    maxVert: 100 // max vertical <br>
}); <br>
