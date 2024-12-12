function StronaGlowna(){
    function godzinka(){
        const date = new Date();
        return date.getHours()+':'+date.getMinutes()+":"+date.getSeconds()
    }
    
    
    
    
    return <div>
        <div class='nag'>
            Strona główna
        </div>
        <div class='contener'>
            <div class='naw'>
        
            </div>
            <div class='godzina'>
                {godzinka()}
            </div>
            <div class='pogoda'>
                Pogoda
            </div>
        </div>
        
    </div>
}
export default StronaGlowna