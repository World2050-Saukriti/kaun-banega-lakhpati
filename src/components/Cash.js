
export default function Cash(){
    return(
        <>
            <div className="bg-blue-800 pt-5" style={{
                position:"absolute",
                top:"0",
                right:"0",
                height:"100vh",
                width:"25%",
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-end",
                opacity:"0.9",

            }}>
                <div style={{
                position:"absolute",
                top:"20px",
                right:"35%",

            }}>
                <img src="/logo.svg" alt="logo" style={{
                    height:"150px",
                    width:"150px"
                }} />
                </div>
                <div    
                style={{
                    position:"absolute",
                    top:"200px",
                    left:"140px",
                    height:"100vh",
                    width:"25%",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-end",
                    opacity:"0.9",
    
                }}>
        <div class="chevron-container mainpara id9">
        ₹1,00,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id8">
        ₹70,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container para id7">
        ₹50,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id6">
        ₹30,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container para id5">
        ₹20,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id4">
        ₹15,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container para id3">
        ₹10,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id2">
        ₹5,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id1">
        ₹2,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <div class="chevron-container id0">
        ₹1,000/-
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        </div>
            </div>
        </>
    )
}