
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
                <div class='nawelem'>
                    <Link to='/todolist'></Link>
                </div>
            </div>
            <div class='godzina'>
                {godzinka()}
            </div>
            <div class='gielda'>
                giełda-api
            </div>
        </div>
        
    </div>
}
export default StronaGlowna