<template>
    <div class=" styleMain ">
        <div class="styleLogo">
            <h1 class="styleLogoH1">zap.</h1>
            <h2 class="styleLogoH2">fretes</h2>
        </div>
        <button class="styleProfile ">
            <div>
                <img class="styleProfileImege" src="../../public/OIP.jpg" alt="">
            </div>
            <div class="styleProfileText">
                <h1 class="styleProfileTextH1">
                    Arthur Correa
                </h1>
                <h2 class="styleProfileTextH2">
                    (65) 9 993305314
                </h2>
            </div>
        </button>
        <div class="styleMenu">
            <div>
                <p class="styleMenuTitle">
                    Main
                </p>
                <div class="styleMenuList">
                    <RouterLink to="/transmissions" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'tower-cell']" />
                        Transmissions
                    </RouterLink>
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'city']" />
                        Cities
                    </RouterLink>
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'qrcode']" />
                        QRcode
                    </RouterLink>


                </div>
            </div>
            <div>
                <p class="styleMenuTitle">
                    Currency
                </p>
                <div class="styleMenuList">
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'wallet']" />
                        Plans
                    </RouterLink>
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'book']" />
                        Term
                    </RouterLink>

                </div>
            </div>
            <div class="styleMenuList">
                <p class="styleMenuTitle">
                    More options
                </p>
                <div class="styleMenuList">
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'headset']" />
                        Support
                    </RouterLink>
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'gear']" />
                        Settings
                    </RouterLink>
                    <RouterLink to="/" class="styleMenuOption">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                        Go out
                    </RouterLink>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.styleMain {
    @apply flex-col justify-start items-start p-2 top-0 bottom-0
}

.styleLogo {
    @apply flex uppercase justify-center items-center font-abrilFatfaceRegular text-xl mb-4
}

.styleLogoH1 {
    @apply text-emerald-600
}

.styleLogoH2 {
    @apply text-black
}

.styleProfile {
    @apply p-2 flex justify-start items-center bg-gray-50 rounded-lg gap-2 w-48 mb-2 hover:bg-gray-300
}

/* .styleButton {
    @apply hover:bg-gray-950 hover:text-gray-50
} */

.styleProfileImege {
    @apply w-10 h-10 rounded-full object-cover
}

.styleProfileText {
    @apply flex-col text-left
}

.styleProfileTextH1 {
    @apply font-semibold text-base text-gray-600
}

.styleProfileTextH2 {
    @apply text-xs text-gray-400
}

.styleMenu {
    @apply flex-col justify-between items-center h-full
}

.styleMenuTitle {
    @apply text-gray-400 text-xs mt-4 mb-2
}

.styleMenuList {
    @apply flex-col gap-2
}

.styleMenuOption {
    @apply flex justify-start items-center gap-2 text-xs py-2 w-48 uppercase font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg p-2
}
</style>