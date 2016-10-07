*{padding:0;margin:0;}
html{box-sizing:border-box}
*,:before,:after{box-sizing:inherit}
body{background:#C42D2D;font:normal 16px "Proxima Nova", sans-serif;line-height: 1.4;color:#444;}
a,a:link,a:visited{color:#D82421;text-decoration:none;}
a:hover,a:active{outline:0;color:#D82421;}


#navigation {
	background-color: #0099FF;
}

#navigation ul {
	padding: 0;
  margin: 0;
	list-style: none;
	position: relative;
	}
	
#navigation ul li {
	display:inline-block;
	background-color: #0099FF;
	}

#navigation a {
	display:block;
	padding:0 10px;	
	color:#FFF;
	font-size:20px;
	line-height: 60px;
	text-decoration:none;
	background:#0279CB;
	border-top:5px solid #0099FF;
	border-bottom:5px solid #0099FF;
}

#navigation a:hover { 
	background-color: #000000; 
}

#navigation ul ul {
	display: none;
	position: absolute; 
	top: 70px; 
}
	

#navigation ul li:hover > ul {
	display:inherit;
}
	


#navigation ul ul li {
	width:170px;
	float:none;
	display:list-item;
	position: relative;
}


#navigation ul ul ul li {
	position: relative;
	top:-60px; 
	left:170px;
}

#navigation ul li ul li a{
	border:0;
	border-bottom:1px dashed black;
}

#navigation ul li ul li:last-child a{
	border-bottom:0;
}

	

li > a:after { content:  ' +'; }
li > a:only-child:after { content: ''; }
