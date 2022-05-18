<template>
    <div class="container">
        <div class="block">
            <div class="first">
                <img src="../assets/Rectangle 250.png" alt="">
                <div class="opacity1"></div>
                <div class="time">
                    <img src="../assets/carbon_time.svg" alt="">
                    <p>7 м 21 с</p>
                </div>
                <div class="btn">
                    <input type="number">
                    <button><img src="../assets/noun_Hammer_3850659 12.svg" alt=""></button>
                </div>
            </div>
            <div class="second">
                <h1>Toyota 2014 г.</h1>
                <p>Автомат, 2.0</p>
            </div>
        </div>
        <div class="block">
            <div class="first">
                <img src="../assets/Rectangle 250.png" alt="">
                <div class="opacity2"></div>
                <div class="time">
                    <img src="../assets/carbon_time.svg" alt="">
                    <p>7 м 21 с</p>
                </div>
                <div class="btn">
                    <input type="number">
                    <button><img src="../assets/noun_Hammer_3850659 12.svg" alt=""></button>
                </div>
            </div>
            <div class="second">
                <h1>Toyota 2014 г.</h1>
                <p>Автомат, 2.0</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    padding-top:37px;
    padding-left: 16px;
}
.block{
    width: 315px;
    height: 240px;
    background: #F3F7FF;
    border-radius: 0px 0px 8px 8px;
    margin-top: 15px;
}
.first img, .opacity1, .opacity2, .time, .btn{
    position: relative;
}
.first img {
    z-index: 1;
    opacity: 1;
}
.opacity1{
    width: 315px;
    height: 162px;
    z-index: 2;
    background: rgba(107, 194, 98, 0.5);
    bottom: 166px;
}
.opacity2{
    width: 315px;
    height: 162px;
    z-index: 2;
    background: rgba(197, 40, 40, 0.5);
    bottom: 166px;
}
.time{
    display: flex;
    z-index: 2;
    bottom: 320px;
    left: 13px;
}
.time p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    margin-left: 7.5px;
}
.btn input{
    position: relative;
    background: #FFFFFF;
    border: 1px solid #B7B7B7;
    box-sizing: border-box;
    border-radius: 4px 0px 0px 4px;
    width: 216px;
    height: 33px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    padding-left: 32px;
}
.btn button{
    position: relative;
    background: #004DBE;
    border-radius: 0px 4px 4px 0px;
    width: 53px;
    height: 33px;
    border: none;
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;
    align-items: center;
    text-transform: uppercase;
    color: #F3F7FF;
    opacity: 2;
}
.btn button:hover{
    background: #0d5ed8;
}
.btn{
    display: flex;
    z-index: 2;
    bottom: 264px;
    left: 12px;
}
.second h1{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-left: 11px;
}
.second p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #565656;
    margin-left: 11px;
}
.second{
    margin-top: -240px;
}
</style>
