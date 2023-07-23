    s=0;
    str="";
    function add()
    {
        a=parseInt(document.getElementById("text1").value);
        s+=a;
        if(str.length==0)
            {
                str+=a;
            }    
        else
            {
                str+=("+"+a);
            }
        document.getElementById("para1").innerHTML=str;
        // document.getElementById("para2").innerHTML=s;
    }

    function sub()
    {
        a=parseInt(document.getElementById("text1").value);
        s-=a;
        if(str.length==0)
            {
                str+=a;
            }    
        else
            {
                str+=("-"+a);
            }
        document.getElementById("para1").innerHTML=str;
        // document.getElementById("para2").innerHTML=s;
    }
    function mul()
    {
        a=parseInt(document.getElementById("text1").value);
        s*=a;
        if(str.length==0)
            {
                str+=a;
            }    
        else
            {
                str+=("*"+a);
            }
        document.getElementById("para1").innerHTML=str;
        // document.getElementById("para2").innerHTML=s;
    }

    function div()
    {
        a=parseInt(document.getElementById("text1").value);
        s/=a;
        if(str.length==0)
            {
                str+=a;
            }    
        else
            {
                str+=("/"+a);
            }
        document.getElementById("para1").innerHTML=str;
        // document.getElementById("para2").innerHTML=s;
    }
    function ce()
    {
        str="";
        s=0;
        document.getElementById("para1").innerHTML=str;
    }
    function eq()
    {
        document.getElementById("para1").innerHTML=str+"="+s;
    }
    