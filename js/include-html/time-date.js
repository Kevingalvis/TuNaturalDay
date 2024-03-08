const $timeClock = document.getElementById("time-date");
export default function dateNow(){
    
        let fecha = new moment();
        const d = document;
      
        const Map = {
            dn: fecha.format('d'),
            dd: fecha.format('dddd'),
            mm: fecha.format('MMM'),
            yy: fecha.format('YYYY')
        };
      
        $timeClock.innerHTML = `${Map.dd}/${Map.dn}/${Map.mm}/${Map.yy}`; 
    
}
