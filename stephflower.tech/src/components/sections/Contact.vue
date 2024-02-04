<script setup lang="ts">
  import '98.css';
  import Toolbar from '../Toolbar.vue';
  import Sep from '../Sep.vue';
  import ContactWebpage from './ContactWebpage.vue';

</script>

<template>

    <Toolbar />
    <fieldset>
            <div class="toolbar">
                <div class="btns">
                    <Sep />
                    <div> <img src="explorer/back.png" /> Back </div>
                    <div> <img src="explorer/forward.png" /> Forward </div>
                    <div> <img src="explorer/stop.png" /> Stop </div>
                    <div> <img src="explorer/refresh.png" /> Refresh </div>
                    <div> <img src="explorer/home.png" /> Home </div>
                    <Sep />
                    <div> <img src="explorer/search.png" /> Search </div>
                    <div> <img src="explorer/favourites.png" /> Favourites </div>
                    <div> <img src="explorer/history.png" /> History </div>
                    <div> <img src="explorer/channels.png" /> Channels </div>
                    <Sep />
                    <div> <img src="explorer/fullscreen.png" /> Fullscreen </div>
                    <div> <img src="explorer/mail.png" /> Mail </div>
                    <div> <img src="explorer/print.png" /> Print </div>
                    <div> <img src="explorer/edit.png" /> Edit </div>
                </div>
            </div>
        </fieldset>
    <fieldset>
        <div class="address-bar">
            <Sep />
            <div class="address-text">Address</div>
            <div class="address-input">
                <div class="address-start">
                    <img src="explorer/iepage.png" />
                    <div>https://www.stephflower.tech/contactme.html</div>
                </div>
                <div class="address-btn">▼</div>
            </div>
        </div>
    </fieldset>
    <ContactWebpage />
    <div class="status-bar">
            <p class="status-bar-field"><img src="explorer/iepage.png" /></p>
            <p class="status-bar-field"></p>
            <p class="status-bar-field"><img src="explorer/ie.png" /> Internet zone </p>
        </div>

</template>

<style scoped>

.status-bar-field {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.status-bar img {
    height: 14px;
    margin-right: 4px;
    padding: 0;
}

.btns {
    display: flex;
    flex-direction: row;
}

.btns div {
    display: flex;
    flex-direction: column;
    width: 50px;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
}

.btns div:hover {
    border: 1px solid rgb(128, 128, 128);
}

.btns img {
    height: 18px;
    margin: 4px;
    image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges;          /* Firefox                        */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated;                 /* Universal support since 2021   */
}

.btns .sep {
    width: 3px !important;
    margin: 0;
    height: 100%;
}

.toolbar {
    display: flex;
    flex-direction: row;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
}

.address-bar {
    display: flex;
    flex-direction: row;
    height: 18px;
}

.address-bar .address-text {
    margin: 0px 4px;
}

fieldset {
    padding: 2px;
}

.address-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    width: 364px;
    border: 2px solid;
    border-style: inset;
    height: 16px;
}

.address-input .address-start {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 234px;
}

.address-input img {
    padding-left: 2px;
    height: 14px;
}

.address-btn {
    width: 14px;
    height: 14px;
    background-color: var(--window-grey);
    align-self: flex-end;
    border: 2px solid;
    border-style: outset;
    text-align: center;
    line-height: 14px;
    font-size: 8px;
}

</style>