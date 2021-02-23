const now = new Date();
const valM = now.getMinutes(), valS = now.getSeconds(), valH = now.getHours();
const degS = valS * 6;  //360/60=> 6度/秒
const degM = valM * 6 + valS * 0.1; //分針在一個刻度間，會隨著秒數增加有些微偏移，因此算完整點的角度還要加上偏移量
const degH = valH * 30 + valM * 0.5;


let kf=document.createElement('style');
kf.innerHTML=`
    @keyframes js{
      from{
        transform: rotate(${degS}deg);
        transform-origin: center bottom;
      }
      to{
        transform: rotate(${degS+360}deg);
        transform-origin: center bottom;
        
      }
    }
    @keyframes jm{
      from{
        transform: rotate(${degM}deg);
        transform-origin: center bottom;
      }
      to{
        transform: rotate(${degM+360}deg);
        transform-origin: center bottom;
        
      }
    }
    @keyframes jh{
      from{
        transform: rotate(${degH}deg);
        transform-origin: center bottom;
      }
      to{
        transform: rotate(${degH+360}deg);
        transform-origin: center bottom;
      }
    }`;
document.querySelector("head").append(kf);

