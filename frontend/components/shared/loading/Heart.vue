<template>
    <div class="beatingHeart relative">
        <div class="heart"></div>
        <div class="heart heart2"></div>
        <div class="heart heart3 pinkHeart"></div>
        <div class="heart heart4 fushiaHeart"></div>
        <div class="heart hear5 pinkHeart"></div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.beatingHeart {
    width: 50px;
    margin: 50px auto;
    height: 50px;
}

.beatingHeart .heart {
    position: absolute;
    width: 50px;
    height: 45px;
    opacity: 0.6;
    animation: beat 3.0s infinite ease-in-out;
}

.heart:before,
.heart:after {
    position: absolute;
    content: "";
    left: 25px;
    top: 0;
    width: 25px;
    height: 40px;
    background: #FF69B4;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.fushiaHeart:before,
.fushiaHeart:after {
    background: #ff1d8e;
}

.pinkHeart:before,
.pinkHeart:after {
    background: #FF0080;
}

.heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}

.beatingHeart .heart2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.beatingHeart .heart3 {
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
}

.beatingHeart .heart4 {
    -webkit-animation-delay: -2.0s;
    animation-delay: -2.0s;
}

.beatingHeart .heart5 {
    -webkit-animation-delay: -2.5s;
    animation-delay: -2.5s;
}

@keyframes beat {

    0%,
    100% {
        transform: scale(0.0)
    }

    50% {
        transform: scale(1.0)
    }
}
</style>