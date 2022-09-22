<template>
    <div class="sm:w-1/4 2xl:w-full bg-gradient-to-r from-blue-500">
        <div class="flex justify-center items-center m-5">
            <video class="w-full max-w-full h-auto " controls>
                <source type="video/mp4" src="../assets/video/videoplayback.mp4">
            </video>
        </div>
    </div>
    <div class="m-5 grid grid-cols-2 gap-x-5">
        <div class="w-full">
            <h1> Introducción a las telecomunicaciones</h1>
            <img class="w-full  h-72" src="../assets/teleco.jpg" alt="">
            <div class="flex justify-center items-center m-2">
                <a href="/streaming2"><input class="border border-black rounded rounded-xl px-4 py-1 bg-rose-600 text-white font-bold"
                    type="button" value="IR"></a>
            </div>
        </div>
        <div class="w-full">
            <h1> Introducción a las telecomunicaciones</h1>
            <img class="w-full  h-72" src="../assets/teleco1.jpg" alt="">
            <div class="flex justify-center items-center m-2">
                <a href="/streaming3"><input class="border border-black rounded rounded-xl px-4 py-1 bg-rose-600 text-white font-bold"
                    type="button" value="IR"></a>
            </div>
        </div>
    </div>
</template>